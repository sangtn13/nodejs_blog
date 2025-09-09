# 📚 NodeJS Blog - Hệ thống quản lý khóa học

Một nền tảng blog giáo dục được xây dựng bằng Node.js, Express, MongoDB và Handlebars. Dự án cung cấp hệ thống quản lý khóa học với tính năng soft delete và khôi phục.

[![Node.js](https://img.shields.io/badge/Node.js-v18+-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.1.0-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v8.18.0-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## 🚀 Tính năng chính

### 📖 Quản lý khóa học
- ✅ **CRUD hoàn chỉnh**: Tạo, đọc, cập nhật, xóa khóa học
- 🗑️ **Soft Delete**: Xóa mềm với thùng rác và khôi phục
- 📊 **Bulk Actions**: Thao tác hàng loạt (xóa/khôi phục nhiều khóa học)
- 🔄 **Sorting**: Sắp xếp theo tên khóa học (ASC/DESC)
- 🔍 **Validation**: Kiểm tra tính hợp lệ của dữ liệu đầu vào

### 🎨 Giao diện người dùng
- 📱 **Responsive Design**: Tương thích mọi thiết bị
- 🎯 **Interactive UI**: Checkbox chọn tất cả với trạng thái indeterminate
- 🔔 **Toast Notifications**: Thông báo realtime với SweetAlert2
- 🎨 **Bootstrap Icons**: Icon sorting với màu sắc nhất quán

### 🔧 Tính năng kỹ thuật
- 🛡️ **Session Management**: Quản lý phiên làm việc
- 🔒 **Input Validation**: Kiểm tra ObjectId và dữ liệu đầu vào
- 🚫 **Error Handling**: Xử lý lỗi toàn diện với trang 404
- 🎭 **Custom Helpers**: Handlebars helpers tùy chỉnh
- 🔄 **Middleware System**: Middleware sorting và session

## 🛠️ Công nghệ sử dụng

### Backend
- **Node.js** (ES6 Modules)
- **Express.js** 5.1.0 - Web framework
- **MongoDB** với **Mongoose** 8.18.0 - Database
- **Express-Handlebars** 8.0.1 - Template engine

### Frontend
- **Bootstrap** - CSS framework
- **Bootstrap Icons** - Icon library
- **SweetAlert2** - Toast notifications
- **Sass** - CSS preprocessor

### Development Tools
- **Nodemon** - Auto restart server
- **Morgan** - HTTP request logger
- **Method Override** - HTTP method override

### Packages chính
```json
{
  "express": "^5.1.0",
  "mongoose": "^8.18.0",
  "mongoose-delete": "^1.0.2",
  "express-handlebars": "^8.0.1",
  "express-session": "^1.18.2",
  "method-override": "^3.0.0"
}
```

## 📁 Cấu trúc dự án

```
blog/
├── src/
│   ├── app/
│   │   ├── controllers/          # Controllers xử lý logic
│   │   │   ├── CourseController.js
│   │   │   ├── MeController.js
│   │   │   ├── SiteController.js
│   │   │   ├── AboutController.js
│   │   │   └── ContactController.js
│   │   ├── middlewares/          # Custom middlewares
│   │   │   └── sortMiddleware.js
│   │   └── models/               # Mongoose models
│   │       └── Course.js
│   ├── config/
│   │   └── db/                   # Database configuration
│   │       └── index.js
│   ├── helpers/                  # Handlebars helpers
│   │   └── handlebars.js
│   ├── public/                   # Static files
│   │   ├── css/
│   │   ├── js/
│   │   └── img/
│   ├── resources/
│   │   ├── scss/                 # Sass source files
│   │   └── views/                # Handlebars templates
│   │       ├── layouts/
│   │       ├── partials/
│   │       ├── courses/
│   │       └── me/
│   ├── routes/                   # Route definitions
│   │   ├── index.js
│   │   ├── courses.js
│   │   ├── me.js
│   │   ├── site.js
│   │   ├── about.js
│   │   └── contact.js
│   ├── until/                    # Utility functions
│   │   └── mongoose.js
│   └── index.js                  # Entry point
├── package.json
├── nodemon.json
└── README.md
```

## 🚦 API Routes

### 📚 Khóa học (Courses)
| Method | Route | Mô tả |
|--------|-------|-------|
| `GET` | `/courses/create` | Hiển thị form tạo khóa học |
| `POST` | `/courses/store` | Lưu khóa học mới |
| `GET` | `/courses/:_id` | Hiển thị chi tiết khóa học |
| `GET` | `/courses/:id/edit` | Hiển thị form chỉnh sửa |
| `PUT` | `/courses/:id` | Cập nhật khóa học |
| `DELETE` | `/courses/:id` | Xóa mềm khóa học |
| `PATCH` | `/courses/:id/restore` | Khôi phục khóa học |
| `DELETE` | `/courses/:id/force` | Xóa vĩnh viễn khóa học |
| `POST` | `/courses/bulk-action` | Thao tác hàng loạt |

### 👤 Quản lý cá nhân (Me)
| Method | Route | Mô tả |
|--------|-------|-------|
| `GET` | `/me/stored/courses` | Danh sách khóa học đã lưu |
| `GET` | `/me/trash/courses` | Thùng rác khóa học |

### 🌐 Trang tĩnh
| Method | Route | Mô tả |
|--------|-------|-------|
| `GET` | `/` | Trang chủ |
| `GET` | `/about` | Trang giới thiệu |
| `GET` | `/contact` | Trang liên hệ |
| `GET` | `/search` | Trang tìm kiếm |
| `POST` | `/search` | Xử lý tìm kiếm |

## 💾 Database Schema

### Course Model
```javascript
{
  name: {
    type: String,
    maxLength: 255,
    required: true
  },
  description: {
    type: String,
    maxLength: 1000,
    required: true
  },
  image: {
    type: String,
    maxLength: 255,
    required: true
  },
  deleted: Boolean,        // Soft delete flag
  deletedAt: Date,         // Deletion timestamp
  createdAt: Date,         // Auto-generated
  updatedAt: Date          // Auto-generated
}
```

## 🎭 Handlebars Helpers

### Built-in Helpers
- `inc(value)` - Tăng giá trị lên 1 (cho số thứ tự)
- `formatDate(date)` - Format ngày tháng: `dd/mm/yyyy hh:mm:ss`
- `sortable(field, sort)` - Tạo link và icon sorting với validation

### Sortable Helper Features
- ✅ **Auto-validation**: Tự động validate type sorting
- 🎨 **Dynamic Icons**: Icon thay đổi theo trạng thái (default/asc/desc)
- 🔗 **Smart URLs**: Tự động tạo URL sorting với type tiếp theo
- 🎯 **Color Consistency**: Icon cùng màu với text

## 🔧 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js >= 16.0.0
- MongoDB >= 4.0
- NPM hoặc Yarn

### Cài đặt
```bash
# Clone repository
git clone https://github.com/SangTran13/nodejs_blog.git
cd nodejs_blog

# Cài đặt dependencies
npm install

# Khởi động MongoDB (nếu chưa chạy)
mongod

# Chạy ứng dụng
npm start
```

### Scripts khả dụng
```bash
# Khởi động server với nodemon (hot reload)
npm start

# Compile Sass với watch mode
npm run watch

# Run tests (placeholder)
npm test
```

## ⚙️ Cấu hình

### Database
```javascript
// src/config/db/index.js
mongoose.connect("mongodb://127.0.0.1:27017/blog_education_dev")
```

### Server
- **Port**: 3000 (có thể thay đổi trong `src/index.js`)
- **Session Secret**: "secret" (nên thay đổi trong production)

### Environment
- **Type**: ES6 Modules (`"type": "module"` in package.json)
- **Template Engine**: Handlebars (.hbs)
- **Static Files**: Served từ `src/public/`

## 🔒 Tính năng bảo mật

### Input Validation
- ✅ ObjectId validation cho tất cả database operations
- ✅ Array validation cho bulk actions
- ✅ Type validation cho sorting parameters
- ✅ Required field validation cho form data

### Error Handling
- 🚫 404 page cho invalid routes và resources
- 🚫 400 Bad Request cho invalid input
- 🚫 Graceful error handling với try-catch
- 🚫 Database error handling với proper status codes

## 🎯 Tính năng nổi bật

### 1. Smart Sorting System
- **Middleware validation**: Chỉ chấp nhận `asc`/`desc`
- **Helper validation**: Fallback về `default` nếu invalid
- **URL safety**: Tự động clean invalid parameters
- **Visual feedback**: Icon thay đổi theo trạng thái

### 2. Advanced Bulk Actions
- **Multi-select**: Checkbox với indeterminate state
- **Batch operations**: Delete/restore nhiều records
- **Transaction safety**: All-or-nothing operations
- **User feedback**: Toast notifications cho mọi action

### 3. Soft Delete System
- **Trash management**: Thùng rác với count display
- **Restore functionality**: Khôi phục từ thùng rác
- **Force delete**: Xóa vĩnh viễn với confirmation
- **Clean separation**: Stored vs Trash views

## 🚨 Lưu ý quan trọng

1. **ES6 Modules**: Project sử dụng `"type": "module"` - import/export syntax
2. **Soft Delete**: Sử dụng `mongoose-delete` plugin cho soft delete
3. **Method Override**: Form HTML sử dụng `?_method=DELETE/PUT`
4. **Session Storage**: Toast messages được lưu trong session
5. **Static Files**: CSS, JS, images serve từ `public` directory

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📝 License

Dự án này được phân phối dưới giấy phép ISC. Xem file `LICENSE` để biết thêm chi tiết.

## 👨‍💻 Tác giả

**SangTran13**
- GitHub: [@SangTran13](https://github.com/SangTran13)
- Repository: [nodejs_blog](https://github.com/SangTran13/nodejs_blog)

---

## 🔄 Changelog

### v1.0.0
- ✅ Hoàn thành hệ thống CRUD khóa học
- ✅ Implement soft delete với thùng rác
- ✅ Thêm bulk actions và sorting
- ✅ Tích hợp toast notifications
- ✅ Responsive design với Bootstrap
- ✅ Custom Handlebars helpers
- ✅ Middleware system hoàn chỉnh

---

*Được xây dựng với ❤️ bằng Node.js và Express.js với fullstack.edu.vn*