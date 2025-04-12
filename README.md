# Portfolio Website

Website giới thiệu cá nhân phát triển bằng React, TypeScript và Tailwind CSS.

## Tính năng

- Thiết kế đáp ứng cho các thiết bị khác nhau (responsive design)
- Các phần giới thiệu, kỹ năng, dự án và liên hệ
- Hiệu ứng chuyển động mượt mà với Framer Motion
- Tự động cuộn đến các phần với Scroll Spy
- Form liên hệ với xác thực

## Công nghệ sử dụng

- React với TypeScript
- Tailwind CSS cho styling
- Framer Motion cho animations
- Wouter cho routing
- ShadCN UI components

## Hướng dẫn triển khai trên GitHub Pages

### Chuẩn bị

1. Đảm bảo bạn đã đặt tên repository là "portfolio" (hoặc thay đổi tên base trong file `vite.github-pages.config.js`).
2. Clone repository này về máy của bạn:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

3. Cài đặt các dependencies:

```bash
npm install
```

### Build và triển khai

1. Build dự án cho GitHub Pages:

```bash
node deploy-to-github-pages.js
```

2. Đẩy code lên GitHub:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. Bật GitHub Pages trong repository settings:
   - Vào repository > Settings > Pages
   - Source: Deploy from a branch
   - Branch: main (hoặc master) và chọn thư mục "/docs"
   - Lưu lại

Website của bạn sẽ có địa chỉ: `https://yourusername.github.io/portfolio/`

### Tùy chỉnh dữ liệu

Bạn có thể tùy chỉnh thông tin cá nhân trong file `client/src/data/portfolio-data.ts`.

## Phát triển cục bộ

Để chạy ứng dụng trong môi trường phát triển cục bộ:

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5000`.