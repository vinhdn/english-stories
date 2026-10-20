# 📚 Kiddy TV — Truyện Kể Cho Bé (English Stories for Kids)

Website xem video đọc truyện tiếng Anh an toàn cho bé khoảng 3 tuổi.
Danh sách gồm **692 video** đọc truyện từ kênh YouTube [KidTimeStoryTime](https://www.youtube.com/@KidTimeStoryTime)
(Fly Guy, Disney, Curious George, Pinkalicious...), đã được kiểm chứng link (95% qua YouTube oEmbed).

## Cách dùng

Mở `index.html` (hoặc bật GitHub Pages cho repo này) — bé chạm vào ảnh truyện là xem ngay.

### Tính năng cho bé
- Ô video to, chạm là phát; hết truyện tự chuyển sang truyện tiếp theo.
- Nút điều khiển thật to: tạm dừng/phát, xem lại, truyện tiếp theo, về trang chủ, toàn màn hình.
- **Không quảng cáo, không comment, không video gợi ý lạ** — chỉ phát đúng danh sách đã chọn.
- Video nào lỗi sẽ tự bỏ qua sang truyện kế tiếp.

### Tính năng cho phụ huynh (nút 🔒, có mã PIN)
- **Hẹn giờ xem**: 15/30/45/60 phút — hết giờ tự dừng và hiện màn hình nghỉ.
- **Thêm video mới**: dán link YouTube bất kỳ.
- **Xóa video** khỏi danh sách, hoặc khôi phục danh sách gốc.
- **Đổi mã PIN** (mặc định: tự tạo khi mở lần đầu).

Các cài đặt của phụ huynh được lưu ngay trên trình duyệt (localStorage) của thiết bị đang dùng.

## Cấu trúc file
- `index.html` — giao diện
- `styles.css` — kiểu dáng
- `app.js` — logic phát video, hẹn giờ, mã PIN
- `data.js` — danh sách video (tiêu đề, mã YouTube, series)

## Bật GitHub Pages
Vào **Settings → Pages → Branch: `master` / root** để lấy link web công khai cho cả nhà cùng mở.
