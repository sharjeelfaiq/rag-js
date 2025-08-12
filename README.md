<div id="top">

<!-- HEADER STYLE: COMPACT -->
<img src="readmeai/assets/logos/ice.svg" width="30%" align="left" style="margin-right: 15px">

# <code>MERN Backend Starter Kit</code>

<em>A complete, production-ready Express.js backend template with JWT authentication, email workflows, file uploads, and comprehensive API documentation - perfect for rapid development and commercial projects.</em>

<!-- BADGES -->
<img src="https://img.shields.io/badge/CodeCanyon-Ready-brightgreen?style=flat-square" alt="CodeCanyon Ready">
<img src="https://img.shields.io/badge/Commercial-License-blue?style=flat-square" alt="Commercial License">
<img src="https://img.shields.io/badge/Version-1.0.0-orange?style=flat-square" alt="Version">

<em>Built with industry-standard tools and technologies:</em>

<img src="https://img.shields.io/badge/Express-000000.svg?style=flat-square&logo=Express&logoColor=white" alt="Express">
<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=flat-square&logo=MongoDB&logoColor=white" alt="MongoDB">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat-square&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=flat-square&logo=Mongoose&logoColor=white" alt="Mongoose">
<img src="https://img.shields.io/badge/JWT-000000.svg?style=flat-square&logo=JSON%20web%20tokens&logoColor=white" alt="JWT">
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat-square&logo=dotenv&logoColor=black" alt=".ENV">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
<br>
<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat-square&logo=Nodemon&logoColor=white" alt="Nodemon">
<img src="https://img.shields.io/badge/Swagger-85EA2D.svg?style=flat-square&logo=Swagger&logoColor=black" alt="Swagger">
<img src="https://img.shields.io/badge/Cloudinary-3448C5.svg?style=flat-square&logo=Cloudinary&logoColor=white" alt="Cloudinary">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/Postman-FF6C37.svg?style=flat-square&logo=Postman&logoColor=white" alt="Postman">

<br clear="left"/>

---

## 📋 Table of Contents

<details>
<summary>Click to expand navigation</summary>

- [🎯 What You Get](#-what-you-get)
- [⭐ Key Features](#-key-features)
- [🏗️ System Requirements](#️-system-requirements)
- [⚡ Quick Start Guide](#-quick-start-guide)
- [🗂️ Project Structure](#️-project-structure)
- [📖 API Documentation](#-api-documentation)
- [🔧 Configuration Guide](#-configuration-guide)
- [📁 File Upload Setup](#-file-upload-setup)
- [📧 Email Configuration](#-email-configuration)
- [🔍 Testing with Postman](#-testing-with-postman)
- [🌐 Deployment Guide](#-deployment-guide)
- [🛠️ Customization](#️-customization)
- [🐛 Troubleshooting](#-troubleshooting)
- [💰 Commercial License](#-commercial-license)
- [📞 Support](#-support)
- [🔄 Changelog](#-changelog)

</details>

---

## 🎯 What You Get

This **MERN Backend Starter Kit** is a complete, production-ready Express.js server that saves you weeks of development time. Built with modern JavaScript and MongoDB, it provides everything you need to launch your backend API quickly and professionally.

**Perfect for:**

- 🚀 SaaS applications
- 🛒 E-commerce backends
- 📱 Mobile app APIs
- 🌐 Web application servers
- ⚡ MVP development
- 👥 Client projects

**Value Proposition:**
✅ **Save 40+ hours** of initial development time  
✅ **Production-ready** code with best practices  
✅ **Fully documented** with Swagger and Postman collections  
✅ **Modular architecture** for easy customization  
✅ **Commercial license** included for unlimited projects

---

## ⭐ Key Features

### 🔒 **Complete Authentication System**

- User registration and login with JWT tokens
- Password reset via email with secure tokens
- Email verification with OTP codes
- Token blacklisting for secure logout
- Input validation and sanitization

### 📧 **Professional Email System**

- Beautiful HTML email templates (4 different templates included)
- Transactional email sending with Nodemailer
- Password reset emails
- Email verification workflows with OTP
- Verification notification templates
- Customizable email templates

### 🔔 **Notification Management**

- In-app notification system
- Store and retrieve notifications
- Mark notifications as read/unread
- Notification history tracking

### 📁 **File Upload & Management**

- Cloudinary integration for image uploads
- Multer middleware for file processing
- `multer-storage-cloudinary` for direct cloud upload
- File validation and processing
- Secure file handling
- Multiple file format support

### 🏗️ **Enterprise-Grade Architecture**

- **8-Layer Modular Architecture** with clear separation of concerns:
  - **Routes Layer** → API endpoint definitions and routing logic
  - **Middleware Layer** → Request/response processing and authentication
  - **Controllers Layer** → Request handling and response formatting
  - **Services Layer** → Business logic and data processing
  - **Data Transfer Objects (DTOs)** → Input validation and data schemas with Joi
  - **Utilities Layer** → Reusable helper functions and tools
  - **Data Access Layer** → Database operations and query logic
  - **Models Layer** → Database schemas and data validation
- ES6 Module support with clean import paths (`#config/*`, `#utils/*`, etc.)
- Separation of concerns for easy testing and maintenance
- Scalable design patterns for enterprise applications
- Clean code practices with ESLint and Prettier

### 🛡️ **Production-Ready Security & Middleware Stack**

**Global Security Middleware Chain:**

- **Helmet** → Security headers protection (XSS, clickjacking, MIME sniffing)
- **XSS-Clean** → Sanitizes user input to prevent Cross-Site Scripting attacks
- **Express-Mongo-Sanitize** → Prevents NoSQL injection attacks
- **Express-Rate-Limit** → API rate limiting (100 requests/15min per IP)
- **CORS** → Configurable cross-origin resource sharing
- **Morgan** → HTTP request logging for debugging and monitoring

**Performance & Processing:**

- **Compression** → Gzip compression for faster response times
- **Express JSON/URL-encoded** → Request body parsing with 10MB limits
- **Global Error Handler** → Centralized error processing with environment-aware responses
- **Invalid Route Handler** → Graceful 404 handling for undefined endpoints

### 📚 **Comprehensive Documentation**

- Complete Swagger API documentation with `swagger-jsdoc` and `swagger-ui-express`
- Ready-to-use Postman collection
- Modular Swagger files per feature
- Detailed setup instructions
- Code examples and usage guides

### 🧰 **Comprehensive Utility Library**

**Password Security & Management:**

- **Advanced Bcrypt Utils** → Secure password hashing with configurable salt rounds (default: 12)
- **Password Validation** → Enterprise-grade password strength checking
- **UTF-8 Safety** → Handles international characters and prevents bcrypt truncation
- **Hash Information** → Extract salt rounds and metadata from existing hashes
- **Sync & Async Operations** → Support for both synchronous and asynchronous hashing
- **Error Handling** → Detailed error messages for debugging and security

**JWT Token Management:**

- **Multi-Type Token Generation** → Access, refresh, verification, and password reset tokens
- **Configurable Expiration** → Different lifespans for different token types:
  - Access tokens: 30 hours
  - Refresh tokens: 7 days
  - Verification tokens: 10 minutes
  - Password reset tokens: 15 minutes
- **Secure Verification** → Token validation with proper error handling
- **Token Decoding** → Safe token payload extraction

**Email System & Templates:**

- **Template Caching** → In-memory template caching for performance
- **Dynamic Template Processing** → Variable substitution with `${variable}` syntax
- **Multiple Email Types** → Support for 4 different email workflows:
  - OTP verification emails
  - Account verification emails
  - Password reset emails
  - Notification emails
- **Error-Resistant Email Sending** → Comprehensive error handling with Nodemailer
- **Template Management** → File-based HTML templates with dynamic content

**Security & Authentication Utils:**

- **Cryptographically Secure OTP** → 6-digit OTP generation with crypto.randomInt
- **Hashed OTP Storage** → OTPs are bcrypt-hashed before database storage
- **Time-Based Expiration** → 5-minute OTP validity with automatic cleanup
- **Unique Username Generation** → Automatic username creation with collision prevention

---

## 🏗️ System Requirements

- **Node.js**: Version 16.x or higher
- **MongoDB**: Version 4.4 or higher (local or cloud)
- **NPM**: Version 8.x or higher
- **Memory**: Minimum 512MB RAM
- **Storage**: 100MB free space

**Supported Platforms:**

- Windows 10/11
- macOS 10.15+
- Ubuntu 18.04+
- CentOS 7+

---

## ⚡ Quick Start Guide

### 📦 Installation

1. **Extract the downloaded files** to your desired directory
2. **Open terminal/command prompt** in the project folder
3. **Install dependencies:**
   ```bash
   npm install
   ```

### ⚙️ Configuration

1. **Create environment file:**

   ```bash
   cp .env.example .env
   ```

2. **Configure your `.env` file:**

   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Database
   MONGODB_URI=mongodb://localhost:27017/mern-starter

   # JWT Secrets
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_REFRESH_SECRET=your-refresh-secret-here
   JWT_EXPIRES_IN=7d
   JWT_REFRESH_EXPIRES_IN=30d

   # Email Configuration (Gmail example)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=your-email@gmail.com

   # Cloudinary (for file uploads)
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret

   # App URLs
   FRONTEND_URL=http://localhost:3000
   BACKEND_URL=http://localhost:5000
   ```

### 🚀 Running the Server

**Development Mode:**

```bash
npm run dev
```

**Production Mode:**

```bash
npm start
```

**Additional Commands:**

```bash
# Format code with Prettier
npm run format

# Lint JavaScript files
npm run lint:js

# Check for circular dependencies
npm run "check circularDeps"

# Seed database with sample data
npm run seed
```

**Server will be available at:** `http://localhost:5000`
**API Documentation:** `http://localhost:5000/api-docs`

---

## 🗂️ Project Structure

```
🗂️ mern-backend-starter-js
├── 🗂️ src
│   ├── 🗂️ config
│   │   ├── 📄 cloudinary.config.js
│   │   ├── 📄 database.config.js
│   │   ├── 📄 env.config.js
│   │   ├── 📄 index.js
│   │   ├── 📄 logger.config.js
│   │   ├── 📄 mail.config.js
│   │   └── 📄 swagger.config.js
│   ├── 🗂️ constants
│   │   └── 📄 index.js
│   ├── 🗂️ data-access
│   │   ├── 📄 blacklisted-token.data-access.js
│   │   ├── 📄 index.js
│   │   ├── 📄 notification.data-access.js
│   │   ├── 📄 otp.data-access.js
│   │   └── 📄 user.data-access.js
│   ├── 🗂️ docs
│   │   └── 🗂️ swagger
│   │       ├── 📄 auth.yaml
│   │       ├── 📄 common.yaml
│   │       ├── 📄 email.yaml
│   │       ├── 📄 health.yaml
│   │       └── 📄 notifications.yaml
│   ├── 🗂️ middleware
│   │   ├── 🗂️ global-middleware
│   │   │   ├── 📄 error-handler.js
│   │   │   ├── 📄 index.js
│   │   │   └── 📄 invalid-route-handler.js
│   │   ├── 📄 index.js
│   │   ├── 📄 upload.middleware.js
│   │   └── 📄 validate.middleware.js
│   ├── 🗂️ models
│   │   ├── 📄 blacklisted-token.model.js
│   │   ├── 📄 index.js
│   │   ├── 📄 notification.model.js
│   │   ├── 📄 otp.model.js
│   │   └── 📄 user.model.js
│   ├── 🗂️ modules
│   │   ├── 🗂️ auth
│   │   │   ├── 📄 auth.controllers.js
│   │   │   ├── 📄 auth.dto.js
│   │   │   ├── 📄 auth.routes.js
│   │   │   └── 📄 auth.services.js
│   │   ├── 🗂️ email
│   │   │   ├── 📄 email.controllers.js
│   │   │   ├── 📄 email.routes.js
│   │   │   └── 📄 email.services.js
│   │   ├── 🗂️ health
│   │   │   ├── 📄 health.controllers.js
│   │   │   ├── 📄 health.routes.js
│   │   │   └── 📄 health.services.js
│   │   ├── 🗂️ notification
│   │   │   ├── 📄 notification.controllers.js
│   │   │   ├── 📄 notification.routes.js
│   │   │   └── 📄 notification.services.js
│   │   ├── 🗂️ otp
│   │   │   ├── 📄 otp.controllers.js
│   │   │   ├── 📄 otp.routes.js
│   │   │   └── 📄 otp.services.js
│   │   ├── 🗂️ user
│   │   │   ├── 📄 user.controllers.js
│   │   │   ├── 📄 user.routes.js
│   │   │   └── 📄 user.services.js
│   │   └── 📄 index.js
│   ├── 🗂️ routes
│   │   └── 📄 index.js
│   ├── 🗂️ scripts
│   │   └── 📄 seed.js
│   ├── 🗂️ server
│   │   └── 📄 index.js
│   ├── 🗂️ utils
│   │   ├── 📄 global.utils.js
│   │   ├── 📄 index.js
│   │   ├── 📄 mail.utils.js
│   │   ├── 📄 otp.utils.js
│   │   ├── 📄 password.utils.js
│   │   ├── 📄 token.utils.js
│   │   └── 📄 username.utils.js
│   ├── 🗂️ validations
│   │   └── 📄 index.js
│   ├── 🗂️ views
│   │   ├── 🗂️ otp-email
│   │   │   └── 📄 index.html
│   │   ├── 🗂️ reset-password
│   │   │   └── 📄 index.html
│   │   ├── 🗂️ verification-email
│   │   │   └── 📄 index.html
│   │   └── 🗂️ verification-notification
│   │       └── 📄 index.html
│   └── 📄 index.js
├── 📄 documentation.md
├── 📄 eslint.config.js
├── 📄 generate-tree.ps1
├── 📄 LICENSE
├── 📄 MERN Backend Starter.postman_collection.json
├── 📄 nodemon.json
├── 📄 package-lock.json
├── 📄 package.json
└── 📄 README.md
```

---

## 📖 API Documentation

**Access your interactive API documentation at:** `http://localhost:5000/api-docs`

### 🔐 Authentication Endpoints

| Method | Endpoint                           | Description               | Protected |
| ------ | ---------------------------------- | ------------------------- | --------- |
| POST   | `/api/v1/auth/register`            | Register new user         | No        |
| POST   | `/api/v1/auth/login`               | User login                | No        |
| POST   | `/api/v1/auth/logout`              | User logout               | Yes       |
| POST   | `/api/v1/auth/refresh`             | Refresh JWT token         | No        |
| POST   | `/api/v1/auth/forgot-password`     | Request password reset    | No        |
| POST   | `/api/v1/auth/reset-password`      | Reset password with token | No        |
| POST   | `/api/v1/auth/verify-email`        | Verify email with OTP     | No        |
| POST   | `/api/v1/auth/resend-verification` | Resend verification email | No        |

**Example Registration Request:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePassword123"
}
```

**Example Login Response:**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "tokens": {
      "accessToken": "jwt_access_token",
      "refreshToken": "jwt_refresh_token"
    }
  }
}
```

### 📧 Email System

| Method | Endpoint                                 | Description               | Protected |
| ------ | ---------------------------------------- | ------------------------- | --------- |
| GET    | `/api/v1/email/send-verification-token`  | Send verification email   | Yes       |
| POST   | `/api/v1/email/check-verification-token` | Verify verification email | No        |

### 🔔 Notifications

| Method | Endpoint                        | Description            | Protected |
| ------ | ------------------------------- | ---------------------- | --------- |
| GET    | `/api/v1/notifications/:userId` | Get user notifications | Yes       |
| PATCH  | `/api/v1/notifications/:notiId` | Mark as read           | Yes       |

### 🔑 OTP Management

| Method | Endpoint             | Description                   | Protected |
| ------ | -------------------- | ----------------------------- | --------- |
| POST   | `/api/v1/otp/send`   | Generate and send 6 digit OTP | No        |
| POST   | `/api/v1/otp/verify` | Verify received OTP           | No        |

**Example OTP Send Request:**

```json
{
  "email": "user@example.com",
  "method": "email"
}
```

### 👤 User Management

| Method | Endpoint            | Description         | Protected |
| ------ | ------------------- | ------------------- | --------- |
| GET    | `/api/v1/users`     | Get all users       | Yes       |
| GET    | `/api/v1/users/:id` | Get a user by id    | Yes       |
| PATCH  | `/api/v1/users/:id` | Update a user by id | Yes       |
| DELETE | `/api/v1/users/:id` | Delete a user by id | Yes       |

### ❤️ Health Check

| Method | Endpoint          | Description                               | Protected |
| ------ | ----------------- | ----------------------------------------- | --------- |
| GET    | `/health/public`  | Check general health (publicly available) | No        |
| GET    | `/health/private` | Check detailed health with diagnostics    | Yes       |

**Example Response of Public Health Route:**

```json
{
  "success": true,
  "message": "System operational",
  "data": {
    "status": "healthy",
    "timestamp": "2025-08-06T12:11:39.062Z"
  }
}
```

---

## 🔧 Configuration Guide

### Path Mapping Configuration

The project uses ES6 modules with custom import paths for cleaner code:

```javascript
// Instead of relative imports like:
// import userModel from '../../../models/user.model.js'

// Use clean imports:
import userModel from "#models/user.model.js";
import { tokenUtils } from "#utils/index.js";
import { dbConfig } from "#config/index.js";
```

**Available import paths:**

- `#config/*` → `./src/config/*`
- `#constants/*` → `./src/constants/*`
- `#data-access/*` → `./src/data-access/*`
- `#dtos/*` → `./src/dtos/*`
- `#middleware/*` → `./src/middleware/*`
- `#models/*` → `./src/models/*`
- `#modules/*` → `./src/modules/*`
- `#routes/*` → `./src/routes/*`
- `#server/*` → `./src/server/*`
- `#utils/*` → `./src/utils/*`

### JWT Configuration

```javascript
// Customize token expiration times
JWT_EXPIRES_IN=7d           # Access token (7 days)
JWT_REFRESH_EXPIRES_IN=30d  # Refresh token (30 days)
```

### Database Seeding

```bash
# Populate database with sample data
npm run seed
```

This command runs the seeding script to populate your database with initial data for testing.

### Email Templates

Located in `src/views/`, includes 4 professionally designed templates:

- `otp-email/index.html` - OTP verification email
- `verification-email/index.html` - Account verification email
- `reset-password/index.html` - Password reset email
- `verification-notification/index.html` - Notification email template

---

## 📁 File Upload Setup

### Cloudinary Configuration

1. **Sign up at [Cloudinary](https://cloudinary.com/)**
2. **Get your credentials** from the dashboard
3. **Update your `.env` file:**
   ```env
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

### File Upload Example

```javascript
// Upload avatar image with proper validation
const formData = new FormData();
formData.append("avatar", fileInput.files[0]);

const response = await fetch("/api/v1/users/upload-avatar", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  body: formData,
});

// The multer-storage-cloudinary middleware handles:
// - File validation (5MB limit)
// - Direct upload to Cloudinary
// - Image optimization
// - Secure URL generation
```

---

## 📧 Email Configuration

### Gmail Setup (Recommended)

1. **Enable 2-Step Verification** in your Google account
2. **Generate App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Update `.env` file:**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-digit-app-password
   EMAIL_FROM=your-email@gmail.com
   ```

### Other Email Providers

**Outlook/Hotmail:**

```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

**SendGrid:**

```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
```

---

## 🔍 Testing with Postman

1. **Import the collection:** `MERN Backend Starter.postman_collection.json`
2. **Set up environment variables:**
   - `baseUrl`: `http://localhost:5000`
   - `token`: (will be set automatically after login)
3. **Test the endpoints** starting with registration/login

### Automated Testing Flow:

1. **Register a new user** → Get verification email
2. **Verify email with OTP** → Account activated
3. **Login** → Get JWT token (auto-saved to environment)
4. **Test protected routes** → Upload files, manage profile
5. **Test password reset** → Receive reset email
6. **Test notifications** → Create and manage notifications

### Key Testing Notes:

- JWT tokens are automatically saved after login
- All protected routes require the `Authorization: Bearer {token}` header
- File uploads should use `multipart/form-data` content type
- OTP codes expire after 5 minutes

---

## 🌐 Deployment Guide

### Heroku Deployment

```bash
# Install Heroku CLI and login
heroku login

# Create new app
heroku create your-app-name

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-atlas-uri
heroku config:set JWT_SECRET=your-super-secure-jwt-secret
heroku config:set JWT_REFRESH_SECRET=your-refresh-secret
heroku config:set EMAIL_HOST=smtp.gmail.com
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set CLOUDINARY_CLOUD_NAME=your-cloud-name
heroku config:set CLOUDINARY_API_KEY=your-api-key
heroku config:set CLOUDINARY_API_SECRET=your-api-secret
heroku config:set FRONTEND_URL=https://your-frontend-domain.com

# Deploy
git push heroku main
```

### MongoDB Atlas Setup

1. **Create account** at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. **Create cluster** and database
3. **Create database user** with read/write permissions
4. **Get connection string** and update `MONGODB_URI`
5. **Whitelist IP addresses** (or use 0.0.0.0/0 for all IPs)

**Example Atlas Connection String:**

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.abc123.mongodb.net/your-database-name?retryWrites=true&w=majority
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables via Vercel dashboard
# or use: vercel env add
```

### Environment Variables for Production

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
JWT_SECRET=your-256-bit-secret-key-for-production
JWT_REFRESH_SECRET=another-256-bit-secret-for-refresh-tokens
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-app-specific-password
CLOUDINARY_CLOUD_NAME=your-production-cloud-name
CLOUDINARY_API_KEY=your-production-api-key
CLOUDINARY_API_SECRET=your-production-api-secret
FRONTEND_URL=https://your-production-frontend.com
BACKEND_URL=https://your-production-backend.com
```

---

## 🛠️ Customization

### Adding New Routes

```javascript
// 1. Create controller in src/modules/feature/feature.controller.js
export const newFeature = async (req, res) => {
  try {
    // Your logic here
    res.status(200).json({
      success: true,
      message: "Feature executed successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// 2. Add route in src/modules/feature/feature.routes.js
import { Router } from "express";
import { newFeature } from "./feature.controller.js";
import { authMiddleware } from "#middleware/global.middleware.js";

const router = Router();
router.get("/new-feature", authMiddleware, newFeature);

export default router;

// 3. Register route in src/routes/index.js
import featureRoutes from "#modules/feature/feature.routes.js";
app.use("/api/v1/feature", featureRoutes);

// 4. Update Swagger docs in docs/swagger/feature/
```

### Adding New Models

```javascript
// src/models/newModel.js
import mongoose from "mongoose";

const newSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export default mongoose.model("NewModel", newSchema);
```

### Custom Middleware

```javascript
// src/middleware/custom.middleware.js
export const customMiddleware = (req, res, next) => {
  try {
    // Your custom logic here
    console.log("Custom middleware executed");

    // Modify request or response
    req.customData = "some data";

    next();
  } catch (error) {
    next(error);
  }
};

// Usage in routes
import { customMiddleware } from "#middleware/custom.middleware.js";
router.get("/protected-route", authMiddleware, customMiddleware, controller);
```

### Adding New Validation Schemas

```javascript
// src/dtos/feature.dto.js
import Joi from "joi";

export const createFeatureDTO = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.min": "Name must be at least 3 characters long",
    "string.max": "Name cannot exceed 50 characters",
    "any.required": "Name is required",
  }),

  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),
});

// Usage in controller
import { validateDTO } from "#middleware/validate.middleware.js";
import { createFeatureDTO } from "#dtos/feature.dto.js";

router.post("/create", validateDTO(createFeatureDTO), createFeatureController);
```

---

## 🐛 Troubleshooting

### Common Issues & Solutions

**🔴 "MongoDB connection failed"**

```bash
# Check MongoDB status
systemctl status mongod  # Linux
brew services list | grep mongodb  # macOS

# Solutions:
✅ Verify MONGODB_URI in .env file
✅ Ensure MongoDB service is running
✅ Check database user permissions
✅ Verify network connectivity (for Atlas)
✅ Check IP whitelist settings (for Atlas)
```

**🔴 "JWT token invalid"**

```bash
# Common causes and solutions:
✅ Check JWT_SECRET is set in .env
✅ Verify token format: "Bearer {token}"
✅ Check token expiration
✅ Ensure consistent secret across restarts
✅ Clear browser localStorage if using frontend
```

**🔴 "Email sending failed"**

```bash
# Common causes and solutions:
✅ Verify email credentials in .env file
✅ Use App Password for Gmail (not regular password)
✅ Enable "Less secure app access" or use OAuth2
✅ Check SMTP server settings
✅ Verify firewall/antivirus isn't blocking SMTP
✅ Test with a different email provider
```

**🔴 "File upload not working"**

```bash
# Debugging steps:
✅ Verify Cloudinary credentials in .env
✅ Check file size (max 5MB by default)
✅ Ensure proper Content-Type headers
✅ Verify multer middleware is applied
✅ Check network connectivity to Cloudinary
```

**🔴 "Port already in use"**

```bash
# Find and kill process using the port
lsof -ti:5000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5000   # Windows

# Or change PORT in .env file
PORT=3001
```

**🔴 "Module not found" errors**

```bash
# Solutions:
✅ Run npm install to ensure all dependencies
✅ Check import paths match project structure
✅ Verify ES6 modules configuration in package.json
✅ Clear node_modules and reinstall:
   rm -rf node_modules package-lock.json
   npm install
```

### Debug Mode & Logging

```bash
# Enable detailed logging
DEBUG=app:* npm run dev

# Check application logs
tail -f logs/app.log  # if logging to file

# MongoDB connection debugging
DEBUG=mongoose:* npm run dev
```

### Code Quality Tools

```bash
# Format all code with Prettier
npm run format

# Lint JavaScript files and fix issues
npm run lint:js

# Check for circular dependencies
npm run "check circularDeps"

# Run all quality checks
npm run format && npm run lint:js
```

### Performance Monitoring

```bash
# Monitor application performance
npm install -g clinic
clinic doctor -- node src/index.js

# Memory usage monitoring
node --inspect src/index.js
# Then open Chrome DevTools
```

### Getting Help

- Check the console logs for detailed error messages
- Verify all environment variables are set correctly
- Test with Postman collection to isolate issues
- Check database connection and collections
- Review the Swagger documentation at `/api-docs`
- Enable debug mode for more verbose logging

---

## 💰 Commercial License

**✅ What's Included:**

- ✅ Use in unlimited personal projects
- ✅ Use in unlimited commercial projects
- ✅ Use for client work and freelancing
- ✅ Modify and customize the code
- ✅ No attribution required
- ✅ Lifetime updates included
- ✅ White-label ready

**❌ What's Not Allowed:**

- ❌ Reselling this code as-is
- ❌ Creating competing starter kits
- ❌ Redistributing the source code
- ❌ Sharing with unauthorized users

**Perfect for:**

- 🚀 SaaS applications
- 🛒 E-commerce projects
- 📱 Mobile app backends
- 👥 Client deliverables
- ⚡ MVP development
- 🏗️ Product prototypes
- 🎯 Startup backends
- 💼 Enterprise applications

**License Benefits:**

- **Save 40+ development hours** with production-ready code
- **Commercial-grade security** with industry best practices
- **Scalable architecture** that grows with your business
- **Professional documentation** for team collaboration
- **Ongoing support** through CodeCanyon

---

## 📞 Support

**📧 Primary Support:** Available through CodeCanyon messaging system

**📖 Self-Help Resources:**

- This comprehensive README documentation
- Interactive Swagger API documentation at `/api-docs`
- Complete Postman collection with examples
- Detailed code comments throughout the project

**🐛 Bug Reports:** Report issues through CodeCanyon comments with:

- Node.js version (`node --version`)
- NPM version (`npm --version`)
- Operating system and version
- Complete error messages (with stack traces)
- Steps to reproduce the issue
- Your `.env` configuration (excluding sensitive data)

**💡 Feature Requests:** Suggest new features through CodeCanyon comments

**📚 Documentation Updates:** Request documentation improvements or clarifications

**⚡ Response Time:** Within 24-48 hours on business days (Monday-Friday, UTC)

**🔧 Premium Support Available:**

- Priority response (within 12 hours)
- Custom feature development
- One-on-one deployment assistance
- Code review services
- Architecture consulting

**Community Resources:**

- CodeCanyon comment section for community discussions
- Share your projects and implementations
- Help other users with their questions

---

## 🔄 Changelog

### Version 1.0.0 (Current - January 2025)

#### ✨ Initial Release Features

- ✅ Complete JWT-based authentication system with refresh tokens
- ✅ Professional email workflows with 4 HTML templates
- ✅ File upload system with Cloudinary integration
- ✅ In-app notification management system
- ✅ Health check endpoints for monitoring
- ✅ Interactive Swagger API documentation
- ✅ Complete Postman collection with automated tests
- ✅ Production-ready security middleware stack
- ✅ 8-layer enterprise architecture
- ✅ Comprehensive utility library
- ✅ ES6 modules with clean import paths
- ✅ Professional logging with Winston
- ✅ Development tools: ESLint, Prettier, Nodemon
- ✅ Database seeding scripts
- ✅ Joi validation with DTOs
- ✅ Rate limiting and security headers
- ✅ CORS configuration
- ✅ Error handling middleware
- ✅ MongoDB integration with Mongoose
- ✅ OTP system with email delivery
- ✅ Password reset functionality
- ✅ Token blacklisting for secure logout
- ✅ Commercial license included

#### 🏗️ Architecture Highlights

- **Routes Layer** - Clean API endpoint definitions
- **Middleware Layer** - Authentication and validation
- **Controllers Layer** - Request/response handling
- **Services Layer** - Business logic processing
- **DTOs Layer** - Input validation with Joi
- **Utils Layer** - Reusable helper functions
- **Data Access Layer** - Database operations
- **Models Layer** - Mongoose schemas

#### 🛡️ Security Features

- Helmet security headers
- XSS protection
- NoSQL injection prevention
- Rate limiting (100 requests/15min)
- JWT token management
- Password hashing with bcrypt
- Input sanitization
- CORS protection

### Planned Updates (Roadmap 2025)

#### Version 1.1.0 (Q2 2025)

- 🔄 Real-time features with Socket.io integration
- 🔄 Redis caching for improved performance
- 🔄 Advanced rate limiting with Redis store
- 🔄 API versioning improvements
- 🔄 Enhanced monitoring and metrics
- 🔄 Docker containerization
- 🔄 CI/CD pipeline templates

#### Version 1.2.0 (Q3 2025)

- 🔄 Social authentication (Google, Facebook, GitHub)
- 🔄 Two-factor authentication (2FA)
- 🔄 Advanced role-based permissions
- 🔄 Audit logging system
- 🔄 Advanced email templates with themes
- 🔄 File processing and image optimization
- 🔄 Webhook system for integrations

#### Version 1.3.0 (Q4 2025)

- 🔄 GraphQL API alongside REST
- 🔄 Microservices architecture option
- 🔄 Advanced caching strategies
- 🔄 Real-time analytics dashboard
- 🔄 Multi-tenant support
- 🔄 Advanced search functionality
- 🔄 API gateway integration

**Update Policy:**

- All existing customers receive free updates
- Backward compatibility maintained
- Migration guides provided for breaking changes
- Feature requests from customers prioritized

**Stay Updated:**

- Follow CodeCanyon item page for update notifications
- Check changelog regularly for new features
- Participate in community discussions for feature voting

---

<div align="center">

## 🌟 **Thank You for Choosing MERN Backend Starter Kit!** 🌟

**⭐ Rate this item on CodeCanyon if it helped you save development time!**

**💬 Questions? Comments? Feature requests?**  
**Use the CodeCanyon comments section - I read and respond to everything!**

**🚀 Built something amazing with this starter kit?**  
**Share your success story in the comments - I love seeing what you create!**

---

_This starter kit will save you weeks of development time and provide a solid, scalable foundation for your next project. From MVPs to enterprise applications, you're now equipped with production-ready code that follows industry best practices._

**Happy coding! 🎯**

</div>

<div align="right">

[![Back to Top](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#top)

</div>
