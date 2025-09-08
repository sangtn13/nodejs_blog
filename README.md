# 📚 Blog Education - Node.js Blog Platform

Một nền tảng blog giáo dục được xây dựng bằng Node.js, Express, MongoDB và Handlebars. Dự án cung cấp hệ thống quản lý khóa học với tính năng soft delete và khôi phục.

[![Node.js](https://img.shields.io/badge/Node.js-v18+-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.1.0-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v8.18.0-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## 🚀 Tính năng chính

- ✅ **Quản lý khóa học**: Tạo, chỉnh sửa, xóa và khôi phục khóa học
- ✅ **Soft Delete**: Hệ thống xóa mềm với thùng rác
- ✅ **Bulk Actions**: Thao tác hàng loạt (xóa/khôi phục nhiều mục)
- ✅ **Template Engine**: Sử dụng Handlebars để render views
- ✅ **Responsive Design**: Giao diện thân thiện với Bootstrap
- ✅ **Database Integration**: Tích hợp MongoDB với Mongoose
- ✅ **Logging**: HTTP request logging với Morgan

## 🛠️ Công nghệ sử dụng

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **mongoose-delete** - Soft delete plugin

### Frontend
- **Handlebars** - Template engine
- **Bootstrap** - CSS framework
- **Sass** - CSS preprocessor

### Development Tools
- **Nodemon** - Auto-restart server
- **Morgan** - HTTP request logger
- **Method Override** - HTTP verb support

## 📋 Yêu cầu hệ thống

- Node.js >= 16.0.0
- MongoDB >= 4.0
- npm hoặc yarn

## ⚡ Cài đặt và chạy

### 1. Clone repository
```bash
git clone https://github.com/SangTran13/nodejs_blog.git
cd nodejs_blog
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Khởi động MongoDB
Đảm bảo MongoDB đang chạy tại `mongodb://127.0.0.1:27017`

### 4. Chạy ứng dụng
```bash
# Development mode với auto-restart
npm start

# Compile Sass (terminal riêng)
npm run watch
```

Ứng dụng sẽ chạy tại: `http://localhost:3000`

## 📁 Cấu trúc dự án

```
src/
├── app/
│   ├── controllers/          # Logic xử lý request
│   │   ├── CourseController.js
│   │   ├── MeController.js
│   │   ├── SiteController.js
│   │   ├── AboutController.js
│   │   └── ContactController.js
│   └── models/               # Database schemas
│       └── Course.js
├── config/
│   └── db/                   # Database configuration
│       └── index.js
├── routes/                   # Route definitions
│   ├── index.js
│   ├── courses.js
│   ├── me.js
│   ├── site.js
│   ├── about.js
│   └── contact.js
├── resources/
│   ├── views/                # Handlebars templates
│   │   ├── layouts/
│   │   ├── partials/
│   │   ├── courses/
│   │   └── me/
│   └── scss/                 # Sass styles
├── public/                   # Static assets
│   ├── css/
│   └── img/
├── until/                    # Utility functions
│   └── mongoose.js
└── index.js                  # Entry point
```

## 🔧 API Endpoints

### Courses
- `GET /` - Trang chủ, danh sách khóa học
- `GET /courses/create` - Form tạo khóa học mới
- `POST /courses/store` - Lưu khóa học mới
- `GET /courses/:id/edit` - Form chỉnh sửa khóa học
- `PUT /courses/:id` - Cập nhật khóa học
- `DELETE /courses/:id` - Xóa mềm khóa học
- `PATCH /courses/:id/restore` - Khôi phục khóa học
- `DELETE /courses/:id/force` - Xóa vĩnh viễn khóa học

### Management
- `GET /me/stored/courses` - Danh sách khóa học đã lưu
- `GET /me/trash/courses` - Thùng rác
- `POST /courses/bulk-action` - Thao tác hàng loạt

### Other Pages
- `GET /about` - Trang giới thiệu
- `GET /contact` - Trang liên hệ
- `POST /search` - Tìm kiếm

## 💾 Database Schema

### Course Model
```javascript
{
  name: String,           // Tên khóa học (required, max: 255)
  description: String,    // Mô tả (required, max: 1000)
  image: String,          // URL ảnh đại diện (required, max: 255)
  deleted: Boolean,       // Soft delete flag
  deletedAt: Date,        // Thời gian xóa
  createdAt: Date,        // Thời gian tạo
  updatedAt: Date         // Thời gian cập nhật
}
```

## 🎨 Handlebars Helpers

- `inc(value)` - Tăng giá trị lên 1
- `formatDate(date)` - Format ngày tháng (dd/mm/yyyy hh:mm:ss)

## 📝 Scripts

```bash
# Khởi động server với nodemon
npm start

# Compile Sass với watch mode
npm run watch

# Run tests (chưa được implement)
npm test
```

## 🔧 Cấu hình

### Database
Cấu hình database tại `src/config/db/index.js`:
```javascript
mongoose.connect("mongodb://127.0.0.1:27017/blog_education_dev")
```

### Port
Server chạy trên port 3000 (có thể thay đổi trong `src/index.js`)

## 🚨 Lưu ý quan trọng

1. **Soft Delete**: Dự án sử dụng `mongoose-delete` plugin cho soft delete
2. **Method Override**: Sử dụng `?_method=DELETE` hoặc `?_method=PUT` cho form HTML
3. **Static Files**: CSS, images được serve từ thư mục `public`
4. **ES Modules**: Dự án sử dụng ES6 modules (`"type": "module"`)

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới license ISC. Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 👨‍💻 Tác giả

**SangTran13**
- GitHub: [@SangTran13](https://github.com/SangTran13)
- Repository: [nodejs_blog](https://github.com/SangTran13/nodejs_blog)

## 🔗 Links

- [Demo Live](https://github.com/SangTran13/nodejs_blog) 
- [Issues](https://github.com/SangTran13/nodejs_blog/issues)
- [Pull Requests](https://github.com/SangTran13/nodejs_blog/pulls)

---

⭐ Nếu dự án hữu ích, hãy cho một star nhé! ⭐
