// ===== Kiddy TV — Truyện Kể Cho Bé: app logic =====
const LS = {
  pin: 'es_pin', deleted: 'es_deleted', added: 'es_added', timer: 'es_timer_min'
};
const $ = id => document.getElementById(id);
const TAB_COLORS = ['', 'c-pink', 'c-mint', 'c-purple', 'c-teal', 'c-yellow'];
const ICON_PLAY = '<path d="M8 5.5v13l11-6.5z"/>';
const ICON_PAUSE = '<path d="M7 5h4v14H7zM13 5h4v14h-4z"/>';
const ICON_VOL = '<path d="M11 5L6 9H3v6h3l5 4z" fill="currentColor" stroke="none"/><path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13"/>';
const ICON_MUTE = '<path d="M11 5L6 9H3v6h3l5 4z" fill="currentColor" stroke="none"/><path d="M16 9.5l5 5M21 9.5l-5 5"/>';

let deletedIds = new Set(JSON.parse(localStorage.getItem(LS.deleted) || '[]'));
let addedVideos = JSON.parse(localStorage.getItem(LS.added) || '[]');
let pin = localStorage.getItem(LS.pin) || '';
let timerMin = parseInt(localStorage.getItem(LS.timer) || '0', 10);

let currentSeries = 'Tất cả';
let searchQuery = '';
let queue = [];
let currentIdx = -1;
let player = null;
let playerReady = false;
let progressTimer = null;
let timeLeftSec = -1;  // -1 = không hẹn giờ
let errorStreak = 0;
let muted = false;

function allVideos() {
  return [...addedVideos, ...VIDEOS].filter(v => !deletedIds.has(v.id));
}

// ---------- Tabs series ----------
function seriesList() {
  const counts = {};
  allVideos().forEach(v => { counts[v.s] = (counts[v.s] || 0) + 1; });
  const order = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  return ['Tất cả', ...order];
}

function renderTabs() {
  [['tabsHome'], ['tabsPlayer']].forEach(([id]) => {
    const bar = $(id);
    if (!bar) return;
    bar.innerHTML = '';
    seriesList().forEach((s, i) => {
      const b = document.createElement('button');
      b.className = 'tab ' + TAB_COLORS[i % TAB_COLORS.length] + (s === currentSeries ? ' active' : '');
      b.textContent = s;
      b.onclick = () => {
        currentSeries = s; renderTabs(); renderGrid();
        if (!$('playerView').classList.contains('hidden')) playNextInSeries();
      };
      bar.appendChild(b);
    });
  });
}

function visibleVideos() {
  let list = allVideos();
  if (currentSeries !== 'Tất cả') list = list.filter(v => v.s === currentSeries);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(v => v.t.toLowerCase().includes(q));
  }
  return list;
}

// Khi đang xem mà đổi tab series: nhảy sang video đầu của series mới
function playNextInSeries() {
  const list = visibleVideos();
  if (list.length) { queue = list; openPlayer(0); }
  else closePlayer();
}

function renderGrid() {
  queue = visibleVideos();
  const grid = $('grid');
  grid.innerHTML = '';
  $('emptyMsg').classList.toggle('hidden', queue.length > 0);
  const frag = document.createDocumentFragment();
  queue.forEach((v, i) => {
    const card = document.createElement('button');
    card.className = 'card';
    const thumb = document.createElement('div'); thumb.className = 'thumb';
    const img = document.createElement('img');
    img.src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
    img.alt = v.t; img.loading = 'lazy';
    const pm = document.createElement('span'); pm.className = 'play-mini';
    pm.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>';
    thumb.appendChild(img); thumb.appendChild(pm);
    const title = document.createElement('div');
    title.className = 'card-title'; title.textContent = v.t;
    card.appendChild(thumb); card.appendChild(title);
    card.onclick = () => openPlayer(i);
    frag.appendChild(card);
  });
  grid.appendChild(frag);
}

// ---------- Trình phát ----------
function loadYouTubeAPI(cb) {
  if (window.YT && YT.Player) return cb();
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
  const prev = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = () => { if (prev) prev(); cb(); };
}

function openPlayer(i) {
  currentIdx = i;
  const v = queue[i];
  if (!v) return;
  $('homeView').classList.add('hidden');
  $('playerView').classList.remove('hidden');
  $('nowTitle').textContent = v.t;
  errorStreak = 0;
  startTimerIfSet();
  loadYouTubeAPI(() => {
    if (!player) {
      player = new YT.Player('ytPlayer', {
        videoId: v.id,
        playerVars: {
          autoplay: 1, controls: 0, rel: 0, modestbranding: 1,
          iv_load_policy: 3, disablekb: 1, playsinline: 1, fs: 0,
          cc_load_policy: 0  // ẩn phụ đề (CC) mặc định
        },
        events: {
          onReady: e => {
            playerReady = true;
            try { e.target.unloadModule('captions'); } catch (err) {}  // tắt hẳn module caption
            e.target.playVideo();
            syncPlayUI();
          },
          onStateChange: e => {
            if (e.data === YT.PlayerState.ENDED) playNext();
            if (e.data === YT.PlayerState.PLAYING) errorStreak = 0;
            syncPlayUI();
          },
          onError: () => { errorStreak++; if (errorStreak <= 3) playNext(); else closePlayer(); }
        }
      });
    } else {
      player.loadVideoById(v.id);
      try { player.unloadModule('captions'); } catch (err) {}
    }
  });
  startProgress();
}

function closePlayer() {
  if (player && playerReady) { try { player.pauseVideo(); } catch (e) {} }
  stopProgress();
  $('playerView').classList.add('hidden');
  $('homeView').classList.remove('hidden');
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
}

function playNext() {
  if (currentIdx + 1 < queue.length) openPlayer(currentIdx + 1);
  else closePlayer();
}

function syncPlayUI() {
  if (!player || !playerReady) return;
  const playing = player.getPlayerState() === YT.PlayerState.PLAYING;
  $('playIcon').innerHTML = playing ? ICON_PAUSE : ICON_PLAY;
  $('bigPlay').classList.toggle('hidden', playing);
}

function togglePlay() {
  if (!player || !playerReady) return;
  if (player.getPlayerState() === YT.PlayerState.PLAYING) player.pauseVideo();
  else player.playVideo();
  setTimeout(syncPlayUI, 200);
}

function startProgress() {
  stopProgress();
  progressTimer = setInterval(() => {
    if (player && playerReady) {
      const d = player.getDuration() || 0, c = player.getCurrentTime() || 0;
      if (d > 0) {
        const pct = (c / d * 100);
        $('progressBar').style.width = pct + '%';
        $('progressKnob').style.left = pct + '%';
      }
      tickTimer();
    }
  }, 500);
}
function stopProgress() { if (progressTimer) clearInterval(progressTimer); progressTimer = null; }

// ---------- Hẹn giờ ----------
function startTimerIfSet() {
  if (timerMin > 0 && timeLeftSec <= 0) timeLeftSec = timerMin * 60;
  updateTimerUI();
}
function fmtTime(sec) {
  const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}
function tickTimer() {
  if (timeLeftSec < 0) return;
  if (timeLeftSec > 0) {
    timeLeftSec = Math.max(0, timeLeftSec - 0.5);
    updateTimerUI();
    if (timeLeftSec <= 0) {
      if (player && playerReady) { try { player.pauseVideo(); } catch (e) {} }
      $('playerView').classList.add('hidden');
      $('timeUpView').classList.remove('hidden');
      timeLeftSec = -1;
    }
  }
}
function updateTimerUI() {
  const badge = $('timerBadge'), line = $('timerLine');
  if (timeLeftSec > 0) {
    badge.textContent = `⏰ ${fmtTime(timeLeftSec)}`;
    badge.classList.remove('hidden');
    $('timerText').textContent = fmtTime(timeLeftSec);
    line.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
    line.classList.add('hidden');
  }
}

// ---------- PIN & phụ huynh ----------
let pinBuffer = '', pinMode = 'unlock', pinFirst = '';

function openPin(mode) {
  pinMode = mode; pinBuffer = ''; pinFirst = '';
  $('pinTitle').textContent =
    mode === 'setup' ? 'Tạo mã PIN 4 số cho bố mẹ' :
    mode === 'setup2' ? 'Nhập lại mã PIN một lần nữa' :
    mode === 'change' ? 'Tạo mã PIN mới (4 số)' : 'Nhập mã PIN của bố mẹ';
  $('pinError').classList.add('hidden');
  drawPinDots();
  $('pinView').classList.remove('hidden');
}
function drawPinDots() {
  $('pinDots').textContent = [0,1,2,3].map(i => i < pinBuffer.length ? '●' : '○').join(' ');
}
function handlePinKey(k) {
  if (k === 'cancel') { $('pinView').classList.add('hidden'); return; }
  if (k === 'del') { pinBuffer = pinBuffer.slice(0, -1); drawPinDots(); return; }
  if (pinBuffer.length >= 4) return;
  pinBuffer += k; drawPinDots();
  if (pinBuffer.length < 4) return;
  setTimeout(() => {
    if (pinMode === 'unlock') {
      if (pinBuffer === pin) { $('pinView').classList.add('hidden'); openParent(); }
      else { $('pinError').classList.remove('hidden'); pinBuffer = ''; drawPinDots(); }
    } else if (pinMode === 'setup' || pinMode === 'change') {
      pinFirst = pinBuffer; pinBuffer = ''; pinMode = 'setup2';
      $('pinTitle').textContent = 'Nhập lại mã PIN một lần nữa'; drawPinDots();
    } else if (pinMode === 'setup2') {
      if (pinBuffer === pinFirst) {
        pin = pinBuffer; localStorage.setItem(LS.pin, pin);
        $('pinView').classList.add('hidden'); openParent();
      } else {
        $('pinError').classList.remove('hidden');
        pinBuffer = ''; pinMode = pin ? 'change' : 'setup'; drawPinDots();
        $('pinTitle').textContent = 'Hai lần nhập không khớp — tạo lại mã PIN';
      }
    }
  }, 150);
}

function openParent() {
  $('parentView').classList.remove('hidden');
  $('homeView').classList.add('hidden');
  $('playerView').classList.add('hidden');
  if (player && playerReady) { try { player.pauseVideo(); } catch (e) {} }
  renderTimerOptions(); renderManageList();
  $('videoCount').textContent = allVideos().length;
}
function closeParent() {
  $('parentView').classList.add('hidden');
  $('homeView').classList.remove('hidden');
  currentSeries = 'Tất cả'; renderTabs(); renderGrid();
}

function renderTimerOptions() {
  document.querySelectorAll('#timerOptions button').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.min, 10) === timerMin);
    b.onclick = () => {
      timerMin = parseInt(b.dataset.min, 10);
      localStorage.setItem(LS.timer, String(timerMin));
      timeLeftSec = timerMin > 0 ? timerMin * 60 : -1;
      updateTimerUI();
      renderTimerOptions();
    };
  });
}

function renderManageList() {
  const q = ($('manageSearch').value || '').toLowerCase();
  const list = allVideos().filter(v => !q || v.t.toLowerCase().includes(q)).slice(0, 100);
  const box = $('manageList'); box.innerHTML = '';
  list.forEach(v => {
    const row = document.createElement('div'); row.className = 'manage-row';
    const img = document.createElement('img');
    img.src = `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`; img.loading = 'lazy';
    const t = document.createElement('div'); t.className = 'm-title'; t.textContent = v.t;
    const del = document.createElement('button'); del.className = 'del'; del.textContent = '🗑️';
    del.onclick = () => {
      deletedIds.add(v.id);
      addedVideos = addedVideos.filter(a => a.id !== v.id);
      localStorage.setItem(LS.deleted, JSON.stringify([...deletedIds]));
      localStorage.setItem(LS.added, JSON.stringify(addedVideos));
      renderManageList(); $('videoCount').textContent = allVideos().length;
    };
    row.appendChild(img); row.appendChild(t); row.appendChild(del);
    box.appendChild(row);
  });
}

function extractVideoId(s) {
  s = (s || '').trim();
  const m = s.match(/(?:youtube\.com\/(?:watch\?[^#]*v=|embed\/|shorts\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (m) return m[1];
  if (/^[A-Za-z0-9_-]{11}$/.test(s)) return s;
  return null;
}

// ---------- Gắn sự kiện ----------
$('searchBtn').onclick = () => {
  $('searchBar').classList.toggle('hidden');
  if (!$('searchBar').classList.contains('hidden')) $('searchInput').focus();
};
$('searchInput').oninput = e => { searchQuery = e.target.value.trim(); renderGrid(); };
$('parentBtn').onclick = () => openPin(pin ? 'unlock' : 'setup');
$('parentBtn2').onclick = () => openPin(pin ? 'unlock' : 'setup');
$('parentCloseBtn').onclick = closeParent;
$('backBtn').onclick = closePlayer;
$('playBtn').onclick = togglePlay;
$('bigPlay').onclick = togglePlay;
$('volBtn').onclick = () => {
  if (!player || !playerReady) return;
  muted = !muted;
  if (muted) player.mute(); else player.unMute();
  $('volIcon').innerHTML = muted ? ICON_MUTE : ICON_VOL;
};
$('fsBtn').onclick = () => {
  const box = document.querySelector('.video-box');
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  else if (box.requestFullscreen) box.requestFullscreen().catch(() => {});
};
$('progressWrap').onclick = e => {
  if (!player || !playerReady) return;
  const r = $('progressWrap').getBoundingClientRect();
  const pct = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
  const d = player.getDuration() || 0;
  if (d > 0) player.seekTo(d * pct, true);
};
$('timeUpHomeBtn').onclick = () => { $('timeUpView').classList.add('hidden'); closePlayer(); };
document.querySelectorAll('#pinPad button').forEach(b => b.onclick = () => handlePinKey(b.dataset.key));
$('manageSearch').oninput = renderManageList;
$('addBtn').onclick = () => {
  const id = extractVideoId($('addUrl').value);
  if (!id) { $('addMsg').textContent = '⚠️ Link không hợp lệ — hãy dán link YouTube hoặc mã video 11 ký tự.'; return; }
  if (allVideos().some(v => v.id === id)) { $('addMsg').textContent = 'Video này đã có trong danh sách rồi.'; return; }
  const title = $('addTitle').value.trim() || 'Truyện mới';
  addedVideos.unshift({ t: title, id, s: 'Khác' });
  deletedIds.delete(id);
  localStorage.setItem(LS.added, JSON.stringify(addedVideos));
  localStorage.setItem(LS.deleted, JSON.stringify([...deletedIds]));
  $('addUrl').value = ''; $('addTitle').value = '';
  $('addMsg').textContent = '✅ Đã thêm video!';
  renderManageList(); $('videoCount').textContent = allVideos().length;
};
$('changePinBtn').onclick = () => openPin('change');
$('resetBtn').onclick = () => {
  if (!confirm('Khôi phục danh sách video gốc? Các video đã thêm/xóa sẽ trở về mặc định.')) return;
  localStorage.removeItem(LS.deleted); localStorage.removeItem(LS.added);
  location.reload();
};

// ---------- Khởi tạo ----------
timeLeftSec = timerMin > 0 ? timerMin * 60 : -1;
renderTabs();
renderGrid();
updateTimerUI();
