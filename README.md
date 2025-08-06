# MERN Backend Starter Kit

A complete, production-ready Express.js backend template with JWT authentication, email workflows, file uploads, and comprehensive API documentation - perfect for rapid development and commercial projects.

![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Node](https://img.shields.io/badge/Node.js-16%2B-green?style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4%2B-green?style=flat-square)

## 🎯 Project Overview

This MERN Backend Starter Kit is a comprehensive Express.js server template that provides everything you need to build modern web applications. Built with industry-standard tools and best practices, it saves you weeks of development time by providing a solid, scalable foundation.

**Perfect for:**
- 🚀 SaaS applications
- 🛒 E-commerce backends
- 📱 Mobile app APIs
- 🌐 Web application servers
- ⚡ MVP development
- 👥 Client projects

## ⭐ Key Features

### 🔒 Complete Authentication System
- User registration and login with JWT tokens
- Password reset via email with secure tokens
- Email verification with OTP codes
- Token blacklisting for secure logout
- Input validation and sanitization

### 📧 Professional Email System
- Beautiful HTML email templates (4 different templates included)
- Transactional email sending with Nodemailer
- Password reset emails
- Email verification workflows with OTP
- Customizable email templates

### 🔔 Notification Management
- In-app notification system
- Store and retrieve notifications
- Mark notifications as read/unread
- Notification history tracking

### 📁 File Upload & Management
- Cloudinary integration for image uploads
- Multer middleware for file processing
- File validation and processing
- Secure file handling
- Multiple file format support

### 🛡️ Production-Ready Security
- Helmet security headers protection
- XSS protection with xss-clean
- NoSQL injection prevention
- Rate limiting (100 requests/15min per IP)
- CORS configuration
- Request compression and logging

### 🏗️ Enterprise-Grade Architecture
- **8-Layer Modular Architecture** with clear separation of concerns
- ES6 Module support with clean import paths
- Separation of concerns for easy testing and maintenance
- Scalable design patterns for enterprise applications
- Clean code practices with ESLint and Prettier

### 📚 Comprehensive Documentation
- Complete Swagger API documentation
- Ready-to-use Postman collection
- Modular Swagger files per feature
- Detailed setup instructions

## 🛠️ Technologies Used

- **Backend Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **File Upload:** Cloudinary + Multer
- **Email Service:** Nodemailer
- **Validation:** Joi
- **Documentation:** Swagger UI
- **Security:** Helmet, XSS-Clean, Express-Mongo-Sanitize
- **Development:** Nodemon, ESLint, Prettier

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16.x or higher)
- MongoDB (version 4.4 or higher)
- NPM (version 8.x or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mern-backend-starter.git
cd mern-backend-starter
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your `.env` file with your settings (see [Environment Variables](#-environment-variables))

5. Start the development server:
```bash
npm run dev
```

The server will be available at `http://localhost:5000`

## 📋 Available Scripts

```bash
# Development mode with hot reload
npm run dev

# Production mode
npm start

# Format code with Prettier
npm run format

# Lint JavaScript files
npm run lint:js

# Check for circular dependencies
npm run "check circularDeps"

# Seed database with sample data
npm run seed
```

## 🌐 Environment Variables

Create a `.env` file in the root directory with the following variables:

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

## 📖 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/api/v1/auth/register` | Register new user | No |
| POST | `/api/v1/auth/login` | User login | No |
| POST | `/api/v1/auth/logout` | User logout | Yes |
| POST | `/api/v1/auth/refresh` | Refresh JWT token | No |
| POST | `/api/v1/auth/forgot-password` | Request password reset | No |
| POST | `/api/v1/auth/reset-password` | Reset password with token | No |
| POST | `/api/v1/auth/verify-email` | Verify email with OTP | No |
| POST | `/api/v1/auth/resend-verification` | Resend verification email | No |

### User Management

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| GET | `/api/v1/users` | Get all users | Yes |
| GET | `/api/v1/users/:id` | Get user by ID | Yes |
| PATCH | `/api/v1/users/:id` | Update user | Yes |
| DELETE | `/api/v1/users/:id` | Delete user | Yes |

### Email System

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| GET | `/api/v1/email/send-verification-token` | Send verification email | Yes |
| POST | `/api/v1/email/check-verification-token` | Verify verification email | No |

### Notifications

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| GET | `/api/v1/notifications/:userId` | Get user notifications | Yes |
| PATCH | `/api/v1/notifications/:notiId` | Mark as read | Yes |

### OTP Management

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/api/v1/otp/send` | Generate and send OTP | No |
| POST | `/api/v1/otp/verify` | Verify OTP | No |

### Health Check

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| GET | `/health/public` | Public health check | No |
| GET | `/health/private` | Detailed health check | Yes |

**Interactive API Documentation:** Visit `http://localhost:5000/api-docs` when the server is running.

## 📁 Project Structure

```
mern-backend-starter/
├── docs/
│   └── swagger/             # API documentation
├── src/
│   ├── config/              # Configuration files
│   ├── constants/           # App constants
│   ├── data-access/         # Database access layer
│   ├── dtos/               # Data Transfer Objects
│   ├── middleware/         # Express middleware
│   ├── models/            # Mongoose models
│   ├── modules/           # Feature modules
│   │   ├── auth/          # Authentication module
│   │   ├── email/         # Email module
│   │   ├── notification/  # Notification module
│   │   ├── user/         # User module
│   │   └── health/       # Health check module
│   ├── routes/           # Route definitions
│   ├── server/           # Server setup
│   ├── utils/            # Utility functions
│   ├── views/            # Email templates
│   └── index.js          # Application entry point
├── .env.example          # Environment template
├── package.json         # Dependencies & scripts
└── README.md           # This documentation
```

## 🧪 Testing

### Using Postman

1. Import the included Postman collection: `MERN Backend Starter.postman_collection.json`
2. Set up environment variables:
   - `baseUrl`: `http://localhost:5000`
   - `token`: (automatically set after login)
3. Test the endpoints starting with registration/login

### Testing Flow

1. Register a new user → Get verification email
2. Verify email with OTP → Account activated
3. Login → Get JWT token (auto-saved)
4. Test protected routes → Upload files, manage profile
5. Test password reset → Receive reset email
6. Test notifications → Create and manage notifications

## 🚀 Deployment

### Environment Setup

For production deployment, ensure you have:

- MongoDB Atlas or hosted MongoDB instance
- Cloudinary account for file uploads
- SMTP email service (Gmail, SendGrid, etc.)
- Environment variables properly configured

### Deployment Platforms

**Heroku:**
```bash
heroku create your-app-name
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-uri
# Set other environment variables...
git push heroku main
```

**Vercel:**
```bash
npm i -g vercel
vercel
# Configure environment variables in Vercel dashboard
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style (ESLint + Prettier configured)
- Write meaningful commit messages
- Update documentation when adding new features
- Ensure all tests pass before submitting PR
- Follow the established architecture patterns

## 🐛 Troubleshooting

### Common Issues

**MongoDB connection failed:**
- Verify `MONGODB_URI` in `.env` file
- Ensure MongoDB service is running
- Check database user permissions

**JWT token invalid:**
- Check `JWT_SECRET` is set in `.env`
- Verify token format: `Bearer {token}`
- Check token expiration

**Email sending failed:**
- Verify email credentials in `.env`
- Use App Password for Gmail
- Check SMTP server settings

**File upload not working:**
- Verify Cloudinary credentials
- Check file size limits (5MB default)
- Ensure proper Content-Type headers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- 📧 Email: sharjeelfaiq816@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/sharjeelfaiq/mern-backend-starter-javascript/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/sharjeelfaiq/mern-backend-starter-javascript/discussions)

## 🙏 Acknowledgments

- Express.js team for the awesome framework
- MongoDB team for the database solution
- All contributors and users of this starter kit

---

**Built with ❤️ by Sharjeel Faiq**

If this project helped you, please consider giving it a ⭐ on GitHub!