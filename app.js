// ===== Truyện Kể Cho Bé — app logic =====
const LS = {
  pin: 'es_pin', deleted: 'es_deleted', added: 'es_added', timer: 'es_timer_min'
};
const $ = id => document.getElementById(id);

let deletedIds = new Set(JSON.parse(localStorage.getItem(LS.deleted) || '[]'));
let addedVideos = JSON.parse(localStorage.getItem(LS.added) || '[]');
let pin = localStorage.getItem(LS.pin) || '';
let timerMin = parseInt(localStorage.getItem(LS.timer) || '0', 10);

let currentSeries = 'Tất cả';
let searchQuery = '';
let queue = [];       // danh sách video đang hiển thị (để phát tiếp)
let currentIdx = -1;
let player = null;
let playerReady = false;
let progressTimer = null;
let hideControlsTimer = null;
let timeLeftSec = 0;  // thời gian xem còn lại (giây), -1 = không hẹn giờ
let errorStreak = 0;

function allVideos() {
  return [...addedVideos, ...VIDEOS].filter(v => !deletedIds.has(v.id));
}

// ---------- Trang chủ ----------
function seriesList() {
  const counts = {};
  allVideos().forEach(v => { counts[v.s] = (counts[v.s] || 0) + 1; });
  const order = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  return ['Tất cả', ...order];
}

function renderSeriesBar() {
  const bar = $('seriesBar');
  bar.innerHTML = '';
  seriesList().forEach(s => {
    const b = document.createElement('button');
    b.className = 'chip' + (s === currentSeries ? ' active' : '');
    b.textContent = s === 'Tất cả' ? '🌈 Tất cả' : s;
    b.onclick = () => { currentSeries = s; renderSeriesBar(); renderGrid(); };
    bar.appendChild(b);
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

function renderGrid() {
  queue = visibleVideos();
  const grid = $('grid');
  grid.innerHTML = '';
  $('emptyMsg').classList.toggle('hidden', queue.length > 0);
  const frag = document.createDocumentFragment();
  queue.forEach((v, i) => {
    const card = document.createElement('button');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
    img.alt = v.t; img.loading = 'lazy';
    const title = document.createElement('div');
    title.className = 'title'; title.textContent = v.t;
    card.appendChild(img); card.appendChild(title);
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
          iv_load_policy: 3, disablekb: 1, playsinline: 1, fs: 0
        },
        events: {
          onReady: e => { playerReady = true; e.target.playVideo(); updatePlayBtn(); },
          onStateChange: e => {
            if (e.data === YT.PlayerState.ENDED) playNext();
            if (e.data === YT.PlayerState.PLAYING) { errorStreak = 0; updatePlayBtn(); }
            if (e.data === YT.PlayerState.PAUSED) updatePlayBtn();
          },
          onError: () => { errorStreak++; if (errorStreak <= 3) playNext(); else closePlayer(); }
        }
      });
    } else {
      player.loadVideoById(v.id);
    }
  });
  startProgress();
  pokeControls();
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

function updatePlayBtn() {
  if (!player || !playerReady) return;
  const st = player.getPlayerState();
  $('playBtn').textContent = (st === YT.PlayerState.PLAYING) ? '⏸' : '▶️';
}

function startProgress() {
  stopProgress();
  progressTimer = setInterval(() => {
    if (player && playerReady) {
      const d = player.getDuration() || 0, c = player.getCurrentTime() || 0;
      if (d > 0) $('progressBar').style.width = (c / d * 100) + '%';
      tickTimer();
    }
  }, 500);
}
function stopProgress() { if (progressTimer) clearInterval(progressTimer); progressTimer = null; }

function pokeControls() {
  $('controls').classList.remove('fade');
  clearTimeout(hideControlsTimer);
  hideControlsTimer = setTimeout(() => $('controls').classList.add('fade'), 3500);
}

// ---------- Hẹn giờ ----------
function startTimerIfSet() {
  if (timerMin > 0 && timeLeftSec <= 0) timeLeftSec = timerMin * 60;
  updateTimerBadge();
}
function tickTimer() {
  if (timeLeftSec < 0) return;
  if (timeLeftSec > 0) {
    // giảm ~0.5s mỗi tick (interval 500ms)
    timeLeftSec = Math.max(0, timeLeftSec - 0.5);
    updateTimerBadge();
    if (timeLeftSec <= 0) {
      if (player && playerReady) { try { player.pauseVideo(); } catch (e) {} }
      $('playerView').classList.add('hidden');
      $('timeUpView').classList.remove('hidden');
      timeLeftSec = -1;
    }
  }
}
function updateTimerBadge() {
  const badge = $('timerBadge');
  if (timeLeftSec > 0) {
    const m = Math.floor(timeLeftSec / 60), s = Math.floor(timeLeftSec % 60);
    badge.textContent = `⏰ ${m}:${String(s).padStart(2, '0')}`;
    badge.classList.remove('hidden');
  } else badge.classList.add('hidden');
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
  renderTimerOptions(); renderManageList();
  $('videoCount').textContent = allVideos().length;
}
function closeParent() {
  $('parentView').classList.add('hidden');
  $('homeView').classList.remove('hidden');
  currentSeries = 'Tất cả'; renderSeriesBar(); renderGrid();
}

function renderTimerOptions() {
  document.querySelectorAll('#timerOptions button').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.min, 10) === timerMin);
    b.onclick = () => {
      timerMin = parseInt(b.dataset.min, 10);
      localStorage.setItem(LS.timer, String(timerMin));
      timeLeftSec = timerMin > 0 ? timerMin * 60 : -1;
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
$('parentCloseBtn').onclick = closeParent;
$('backBtn').onclick = closePlayer;
$('nextBtn').onclick = playNext;
$('restartBtn').onclick = () => { if (player && playerReady) { player.seekTo(0); player.playVideo(); } pokeControls(); };
$('playBtn').onclick = () => {
  if (!player || !playerReady) return;
  if (player.getPlayerState() === YT.PlayerState.PLAYING) player.pauseVideo();
  else player.playVideo();
  setTimeout(updatePlayBtn, 200); pokeControls();
};
$('fsBtn').onclick = () => {
  const wrap = $('playerWrap');
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  else if (wrap.requestFullscreen) wrap.requestFullscreen().catch(() => {});
  pokeControls();
};
$('tapZone').onclick = () => {
  if ($('controls').classList.contains('fade')) pokeControls();
  else $('controls').classList.add('fade');
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
renderSeriesBar();
renderGrid();
