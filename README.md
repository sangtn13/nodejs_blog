# 📚 NodeJS Blog - Course Management System

An educational blog platform built with Node.js, Express, MongoDB and Handlebars. The project provides a course management system with soft delete and recovery features.

[![Node.js](https://img.shields.io/badge/Node.js-v18+-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.1.0-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v8.18.0-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## 🚀 Key Features

### 📖 Course Management
- ✅ **Complete CRUD**: Create, read, update, delete courses
- 🗑️ **Soft Delete**: Soft deletion with trash and recovery functionality
- 📊 **Bulk Actions**: Mass operations (delete/restore multiple courses)
- 🔄 **Sorting**: Sort by course name (ASC/DESC)
- 🔍 **Validation**: Input data validation and verification

### 🎨 User Interface
- 📱 **Responsive Design**: Compatible with all devices
- 🎯 **Interactive UI**: Select all checkbox with indeterminate state
- 🔔 **Toast Notifications**: Real-time notifications with SweetAlert2
- 🎨 **Bootstrap Icons**: Sorting icons with consistent colors

### 🔧 Technical Features
- 🛡️ **Session Management**: Session management and control
- 🔒 **Input Validation**: ObjectId and input data validation
- 🚫 **Error Handling**: Comprehensive error handling with 404 pages
- 🎭 **Custom Helpers**: Custom Handlebars helpers
- 🔄 **Middleware System**: Sorting and session middleware

## 🛠️ Technology Stack

### Backend
- **Node.js** (ES6 Modules)
- **Express.js** 5.1.0 - Web framework
- **MongoDB** with **Mongoose** 8.18.0 - Database
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

### Main Packages
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

## 📁 Project Structure

```
blog/
├── src/
│   ├── app/
│   │   ├── controllers/          # Controllers handling logic
│   │   │   ├── CourseController.js
│   │   │   ├── MeController.js
│   │   │   ├── SiteController.js
│   │   │   ├── AboutController.js
│   │   │   ├── ContactController.js
│   │   │   └── BlogController.js
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
│   │       ├── me/
│   │       └── blog.hbs
│   ├── routes/                   # Route definitions
│   │   ├── index.js
│   │   ├── courses.js
│   │   ├── me.js
│   │   ├── site.js
│   │   ├── about.js
│   │   ├── contact.js
│   │   └── blog.js
│   ├── until/                    # Utility functions
│   │   └── mongoose.js
│   └── index.js                  # Entry point
├── package.json
├── nodemon.json
└── README.md
```

## 🚦 API Routes

### 📚 Courses
| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/courses/create` | Show course creation form |
| `POST` | `/courses/store` | Save new course |
| `GET` | `/courses/:_id` | Show course details |
| `GET` | `/courses/:id/edit` | Show edit form |
| `PUT` | `/courses/:id` | Update course |
| `DELETE` | `/courses/:id` | Soft delete course |
| `PATCH` | `/courses/:id/restore` | Restore course |
| `DELETE` | `/courses/:id/force` | Permanently delete course |
| `POST` | `/courses/bulk-action` | Bulk operations |

### 👤 Personal Management (Me)
| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/me/stored/courses` | List of stored courses |
| `GET` | `/me/trash/courses` | Course trash bin |

### 📝 Blog
| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/blog` | Educational blog page |

### 🌐 Static Pages
| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Homepage |
| `GET` | `/about` | About page |
| `GET` | `/contact` | Contact page |
| `GET` | `/search` | Search page |
| `POST` | `/search` | Process search |

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
- `inc(value)` - Increment value by 1 (for ordering)
- `formatDate(date)` - Format date: `dd/mm/yyyy hh:mm:ss`
- `sortable(field, sort)` - Generate sorting links and icons with validation

### Sortable Helper Features
- ✅ **Auto-validation**: Automatic sorting type validation
- 🎨 **Dynamic Icons**: Icons change based on state (default/asc/desc)
- 🔗 **Smart URLs**: Automatically generate sorting URLs with next type
- 🎯 **Color Consistency**: Icons match text color

## 🔧 Installation and Setup

### System Requirements
- Node.js >= 16.0.0
- MongoDB >= 4.0
- NPM or Yarn

### Installation
```bash
# Clone repository
git clone https://github.com/sangtn13/nodejs_blog.git
cd nodejs_blog

# Install dependencies
npm install

# Start MongoDB (if not running)
mongod

# Run application
npm start
```

### Available Scripts
```bash
# Start server with nodemon (hot reload)
npm start

# Compile Sass with watch mode
npm run watch

# Run tests (placeholder)
npm test
```

## ⚙️ Configuration

### Database
```javascript
// src/config/db/index.js
mongoose.connect("mongodb://127.0.0.1:27017/blog_education_dev")
```

### Server
- **Port**: 3000 (configurable in `src/index.js`)
- **Session Secret**: "secret" (should be changed in production)

### Environment
- **Type**: ES6 Modules (`"type": "module"` in package.json)
- **Template Engine**: Handlebars (.hbs)
- **Static Files**: Served from `src/public/`

## 🔒 Security Features

### Input Validation
- ✅ ObjectId validation for all database operations
- ✅ Array validation for bulk actions
- ✅ Type validation for sorting parameters
- ✅ Required field validation for form data

### Error Handling
- 🚫 404 page for invalid routes and resources
- 🚫 400 Bad Request for invalid input
- 🚫 Graceful error handling with try-catch
- 🚫 Database error handling with proper status codes

## 🎯 Notable Features

### 1. Smart Sorting System
- **Middleware validation**: Only accepts `asc`/`desc`
- **Helper validation**: Fallback to `default` if invalid
- **URL safety**: Automatically clean invalid parameters
- **Visual feedback**: Icons change based on state

### 2. Advanced Bulk Actions
- **Multi-select**: Checkbox with indeterminate state
- **Batch operations**: Delete/restore multiple records
- **Transaction safety**: All-or-nothing operations
- **User feedback**: Toast notifications for all actions

### 3. Soft Delete System
- **Trash management**: Trash bin with count display
- **Restore functionality**: Restore from trash
- **Force delete**: Permanent deletion with confirmation
- **Clean separation**: Stored vs Trash views

### 4. Educational Blog Layout
- **3-column responsive design**: Categories, content, promotions
- **Interactive elements**: Tag clouds, course cards
- **Mobile-first approach**: Responsive across all devices
- **Bootstrap integration**: Modern UI components

## 🚨 Important Notes

1. **ES6 Modules**: Project uses `"type": "module"` - import/export syntax
2. **Soft Delete**: Uses `mongoose-delete` plugin for soft delete
3. **Method Override**: HTML forms use `?_method=DELETE/PUT`
4. **Session Storage**: Toast messages stored in session
5. **Static Files**: CSS, JS, images served from `public` directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a Pull Request

## 📝 License

This project is distributed under the ISC License. See the `LICENSE` file for more details.

## 👨‍💻 Author

**sangtn13**
- GitHub: [@sangtn13](https://github.com/sangtn13)
- Repository: [nodejs_blog](https://github.com/sangtn13/nodejs_blog)

---

## 🔄 Changelog

### v1.0.0
- ✅ Complete course CRUD system
- ✅ Implement soft delete with trash bin
- ✅ Add bulk actions and sorting
- ✅ Integrate toast notifications
- ✅ Responsive design with Bootstrap
- ✅ Custom Handlebars helpers
- ✅ Complete middleware system
- ✅ Educational blog layout

---

*Built with ❤️ using Node.js and Express.js with fullstack.edu.vn*
