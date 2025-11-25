# Hệ thống Phát hiện Bình luận Thù ghét (UI Demo)

Hệ thống UI demo này minh họa cách **phân tích và đánh giá bình luận thù ghét trên mạng xã hội** bằng cách làm nổi bật các từ khóa tiêu cực, tích cực và trung tính.  
Phiên bản này **chỉ là giao diện (front-end)** và không bao gồm xử lý thực tế phía server hay AI.

---

## 📌 Tính năng chính

- **Giao diện trực quan, dễ sử dụng**: chia làm 3 tab chính:
  1. Nhập bình luận thủ công
  2. Lấy bình luận từ YouTube
  3. Thông tin nhóm
- **Demo kết quả phân tích bình luận**:
  - Từ khóa **tiêu cực**: highlight nền vàng chữ đỏ
  - Từ khóa **tích cực**: highlight nền xanh lá chữ trắng
  - Từ khóa **trung tính**: highlight nền xám chữ đen
- **Responsive**: giao diện hiển thị tốt trên cả desktop và thiết bị di động
- **Hiệu ứng hover và chuyển tab mượt mà**

---

## 🖥️ Demo trực tuyến

Bạn có thể chạy demo UI trên máy của mình theo các bước sau:

1. **Clone repository về máy:**
```bash
git clone https://github.com/tracycute/hate-speech-ui.git
```

2. **Thêm file dữ liệu từ khóa:**
   
Đặt file hate_keywords.json vào thư mục:

```bash
src/data/hate_keywords.json
```

3. **Cài đặt các gói phụ thuộc:**

```bash
cd hate-speech-ui
npm install
```

4. **Chạy ứng dụng:**

```bash
npm run dev
```

5. **Truy cập giao diện demo:**
Mở trình duyệt và vào: http://localhost:5173/


---

## 🎨 Công nghệ sử dụng

- HTML5
- CSS3 (Flexbox, Grid, Gradient, Hover Effect)
- JavaScript (Tab navigation)

---

## 👨‍💻 Thành viên nhóm

| Họ và tên               | MSSV       | Khoa          |
|-------------------------|------------|---------------|
| Nguyễn Công Phát        | 23521143   | KHMT          |
| Nguyễn Xuân An          | 23520023   | KHMT          |
| Mai Thái Bình           | 23520158   | KHMT          |
| Trương Hoàng Thành An   | 23520032   | KHMT          |
| Nguyễn Lê Quỳnh Hương   | 21520255   | KH&KTTT       |

---

## 📧 Liên hệ

Nếu có câu hỏi hoặc góp ý, bạn có thể liên hệ qua email: 23521143@gm.uit.edu.vn

---

## 📖 Lưu ý

- Phiên bản hiện tại **chỉ là giao diện demo**, chưa tích hợp logic AI/ML thực tế.
- Từ khóa highlight và kết quả phân tích chỉ mang tính minh họa.

---

Cảm ơn bạn đã sử dụng demo UI của nhóm chúng tôi! 💙
