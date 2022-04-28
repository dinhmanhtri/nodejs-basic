### NodeJS cơ bản
#### REPL Terminal
- REPL: Viết tắt của Read Eval Print Loop.
  - Read: Đọc các thông tin input của người dùng, chuyển đổi thành các dữ liệu Javascript và lưu trữ trong bộ nhớ.
  - Eval: Đánh giá các cấu trúc dữ liệu này.
  - Print: In các kết quả.
  - Loop: Lặp các dòng lệnh đến khi người dùng gõ ctrl-c hai lần.
- Sử dụng lệnh `node` để truy cập REPL Terminal.
- Sử dụng dấu `_` để lấy kết quả cuối cùng.
- Sử dụng `.save fileName.js` để lưu các dòng lệnh trong phiên làm việc hiện tại vào file "fileName.js".
- Sử dụng `.exit` để thoát khỏi REPL Terminal.
- Sử dụng `.load fileName.js` để load các câu lệnh trong một file để thực thi.
#### Node Module System
- Module là những đoạn mã được đóng gói lại và giữ **private**. Mỗi module thực hiện một nhiệm vụ riêng.
- Nếu muốn sử dụng module từ bên ngoài thì phải exports các biến hàm ra bằng cách sử dụng **exports** hoặc **module.exports**.
- Trong Node.js có 3 loại module:
  - Core module (built-in module): 
    - Loại module được tích hợp sẵn trong Node.js.
  - Local module:
    - Loại module người dùng tự định nghĩa.
  - Third party module (external module):
    - Do bên thứ 3 phát triển và có thể cài đặt thêm bất cứ lúc nào.
    - Có thể dễ dàng cài đặt thông qua npm.
- Những core module quan trọng của Node.js:
  - http: bao gồm các classes, methods and events để tạo ra Node.js HTTP Server.
  - url: bao gồm các methods để phân tích cú pháp URL.
  - querystring: bao gồm các methods để xử lý với query string.
  - path: bao gồm các methods để làm việc với file paths.
  - fs: bao gồm các classes, methods and events để làm việc với file I/O.
  - util: bao gồm các function hữu ích cho các lập trình viên trong quá trình phát triển ứng dụng.
  - ...
#### NPM
- Cập nhật NPM lên phiên bản mới nhất: `npm i -g npm@latest`.
- File package.json lưu trữ thông tin (tên package, phiên bản, các dependencies, ...) mà project đang sử dụng.
  - **Test command**: Là dòng lệnh sẽ chạy khi chúng ta gọi **npm test**.
  - **Keywords**: Các từ khóa tương ứng với project (mặc định để trống).
- Package **underscore** là thư viện cung cấp các _function_ và _method_ để hỗ trợ quá trình code dễ dàng hơn.
- Cài đặt package với version chỉ định: `npm i package_name@version`.
- Gỡ cài đặt package: `npm un package_name`
- Kiểm tra package có bị lỗi thời không: `npm outdated`.
- Update từng package lên phiên bản Wanted: `npm update package_name`.
- Update tất cả package lên phiên bản Wanted: `npm update`.
- **devDenpendencies** là những module sẽ chỉ được dùng vào mục đích phát triển sản phẩm.
- **dependencies** là những module được sử dụng trong quá trình chạy sản phẩm thực tế.
- Sử dụng --save-dev sau câu lệnh cài đặt package để lưu package vào **devDenpendencies**.
- Cài đặt package dưới dạng global: `npm i -g package_name`.
- Kiểm tra có global package nào bị lỗi thời hay không: `npm -g outdated`.
- Cập nhật global package: 
  ```
  npm -g update package_name  // cập nhật từng package.
  npm -g update  // cập nhật tất cả package.
  ```
- Đẩy package lên npm registry:
  - Tạo dự án `npm init -y`.
  - Tạo một file các bao gồm các function, sau đó export các fucntion đó.
  - Chạy lệnh: `npm login`.
  - Sau nhập thành công chạy lệnh `npm publish`.