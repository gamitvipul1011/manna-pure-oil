# 🌿 Maana Pure Oil - Production-Ready E-Commerce Platform

A complete, secure, and production-ready e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js).

## ✨ Features

### 🔐 Authentication & Authorization
- **User Authentication**: Secure JWT-based login and registration
- **Admin Panel**: Separate admin authentication with role-based access
- **Protected Routes**: Cart and checkout require authentication
- **Secure Password Hashing**: Using bcrypt for password security
- **Auto-login**: Automatic login after successful registration

### 🛒 Shopping Cart (Production-Ready)
- **Backend-Persisted Cart**: Cart stored in MongoDB, not localStorage
- **Login Required**: Users must login before adding items to cart
- **Smart Redirect**: After login, users are redirected back to the product they were viewing
- **Cart Sync**: Cart persists across sessions and devices
- **Real-time Updates**: Add, update, remove items with instant feedback
- **Cart Management**: Update quantities, remove items, clear cart

### 🎨 User Experience
- **Responsive Design**: Works on all devices (mobile, tablet, desktop)
- **Modern UI**: Built with TailwindCSS and custom gradients
- **Toast Notifications**: Real-time feedback for all actions
- **Multi-language Support**: English and Hindi (i18n)
- **Product Gallery**: Multiple images per product
- **Product Search & Filter**: Easy product discovery

### 👨‍💼 Admin Dashboard
- **Secure Access**: Admin-only routes with authentication
- **Product Management**: Create, edit, delete products with image upload
- **Category Management**: Organize products by categories
- **User Management**: View and manage users
- **Dashboard Analytics**: Overview of store statistics

### 🔒 Security Features
- JWT token authentication with expiration
- Password encryption with bcrypt
- CORS protection
- XSS protection
- Input validation and sanitization
- Secure environment variables
- Protected API endpoints

## 📁 Project Structure

```
maana-production-ready/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Business logic
│   │   │   ├── adminAuthController.js
│   │   │   ├── userAuthController.js
│   │   │   ├── productController.js
│   │   │   ├── categoryController.js
│   │   │   └── cartController.js    # NEW: Cart management
│   │   ├── models/           # Database schemas
│   │   │   ├── User.js
│   │   │   ├── Product.js
│   │   │   ├── Category.js
│   │   │   └── Cart.js              # NEW: Cart model
│   │   ├── routes/           # API routes
│   │   │   ├── adminAuth.js
│   │   │   ├── userAuth.js
│   │   │   ├── products.js
│   │   │   ├── categories.js
│   │   │   └── cart.js              # NEW: Cart routes
│   │   ├── middleware/       # Auth middleware
│   │   │   ├── auth.js
│   │   │   └── upload.js
│   │   └── server.js         # Express server
│   ├── uploads/              # Product images
│   ├── .env                  # Environment variables
│   ├── .env.example
│   ├── package.json
│   ├── seed.js               # Database seeding
│   └── seedAdmin.js          # Admin user creation
│
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProtectedRoute.jsx   # NEW: Route protection
│   │   │   └── ...
│   │   ├── context/          # React Context
│   │   │   ├── AuthContext.jsx
│   │   │   ├── CartContext.jsx      # UPDATED: Backend integration
│   │   │   ├── AdminAuthContext.jsx
│   │   │   └── LanguageContext.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductDetail.jsx    # UPDATED: Login redirect
│   │   │   ├── Cart.jsx             # UPDATED: Protected
│   │   │   ├── Login.jsx            # UPDATED: Smart redirect
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── admin/
│   │   │       ├── Dashboard.jsx
│   │   │       ├── ProductManagement.jsx
│   │   │       └── CategoryManagement.jsx
│   │   ├── utils/
│   │   │   ├── api.js               # UPDATED: Cart APIs added
│   │   │   └── i18n.js
│   │   ├── App.jsx                  # UPDATED: Protected routes
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── README.md (this file)
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone or Extract the Project**
```bash
cd maana-production-ready
```

2. **Backend Setup**
```bash
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Edit .env and set your MongoDB URI and JWT secret
# MONGODB_URI=mongodb://localhost:27017/maana-pure-oil
# JWT_SECRET=your-super-secret-key-change-this

# Seed the database with sample data
npm run seed

# Create admin user
npm run seed:admin

# Start the backend server
npm run dev
```

Backend will run on http://localhost:5000

3. **Frontend Setup** (Open new terminal)
```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start the frontend
npm run dev
```

Frontend will run on http://localhost:5173



## 📋 API Endpoints

### User Authentication
- `POST /api/user/auth/register` - Register new user
- `POST /api/user/auth/login` - User login
- `GET /api/user/auth/verify` - Verify JWT token
- `GET /api/user/auth/profile` - Get user profile (protected)
- `PUT /api/user/auth/profile` - Update profile (protected)

### Admin Authentication
- `POST /api/admin/auth/login` - Admin login
- `GET /api/admin/auth/verify` - Verify admin token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (admin only)
- `PUT /api/categories/:id` - Update category (admin only)
- `DELETE /api/categories/:id` - Delete category (admin only)

### Cart (NEW - All require authentication)
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update item quantity
- `DELETE /api/cart/remove/:productId` - Remove item from cart
- `DELETE /api/cart/clear` - Clear entire cart
- `POST /api/cart/sync` - Sync cart from frontend

## 🔐 Authentication Flow

### User Registration & Login
1. User fills registration form
2. Backend validates and creates user with hashed password
3. JWT token is generated and returned
4. Token is stored in localStorage
5. User is auto-logged in and redirected

### Add to Cart Flow
1. User tries to add product to cart
2. **If not logged in**:
   - Toast notification: "Please login to add items to cart"
   - User is redirected to login page
   - Current product URL is saved in location state
3. **After successful login**:
   - User is redirected back to the product page
   - User can now add items to cart
4. **Cart operations**:
   - All cart actions go through backend API
   - Cart is stored in MongoDB
   - Cart persists across sessions

### Protected Routes
- `/cart` - Requires authentication
- `/checkout` - Requires authentication (if implemented)
- `/admin/*` - Requires admin authentication

## 🎯 Key Features Implemented

### ✅ Login Required Before Add to Cart
- Users must be authenticated to add items
- Proper redirect flow: Product → Login → Product
- Clear error messages and feedback

### ✅ Backend Cart Persistence
- Cart stored in MongoDB, not localStorage
- Survives browser refresh and device changes
- Secure cart operations through authenticated APIs

### ✅ Smart Authentication
- Auto-login after registration
- Token expiration handling
- Automatic redirect to login when token expires

### ✅ Role-Based Access Control
- Separate user and admin authentication
- Admin-only routes and API endpoints
- Proper authorization checks

### ✅ Production-Ready Security
- JWT tokens with expiration
- Password hashing with bcrypt
- CORS configuration
- Input validation
- Protected API endpoints

## 🌐 Deployment Guide

### Backend Deployment (Render/Railway/Heroku)

1. **Environment Variables to Set**:
```
NODE_ENV=production
PORT=5000
MONGODB_URI=your-mongodb-atlas-uri
JWT_SECRET=your-production-secret-key-min-32-chars
FRONTEND_URL=https://your-frontend-domain.com
```

2. **Build Command**: Not needed (Node.js runs directly)

3. **Start Command**: `npm start`

### Frontend Deployment (Vercel/Netlify)

1. **Environment Variables to Set**:
```
VITE_API_URL=https://your-backend-domain.com/api
```

2. **Build Command**: `npm run build`

3. **Output Directory**: `dist`

### MongoDB Atlas Setup
1. Create account at mongodb.com/cloud/atlas
2. Create a cluster
3. Add database user
4. Whitelist IP addresses (0.0.0.0/0 for production)
5. Get connection string
6. Replace in MONGODB_URI

## 🧪 Testing the Application

### Test Cart Functionality
1. Visit http://localhost:5173
2. Browse products
3. Click "Add to Cart" without logging in
4. You'll be redirected to login
5. Login or register
6. You'll be redirected back to the product
7. Add item to cart
8. Cart persists across page refreshes

### Test Admin Panel
1. Visit http://localhost:5173/admin/login
2. Login with admin credentials
3. Add/Edit/Delete products
4. Manage categories
5. View dashboard

## 🛠️ Technologies Used

### Backend
- Node.js & Express.js
- MongoDB & Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Multer for file uploads
- Express Validator

### Frontend
- React 18
- React Router v6
- Axios for API calls
- TailwindCSS for styling
- React Toastify for notifications
- React Icons
- i18next for internationalization
- Vite for build tooling

## 📝 Notes

- This is a production-ready template with all essential e-commerce features
- Cart system is fully functional and backend-persisted
- Authentication and authorization are properly implemented
- All routes are protected appropriately
- Code is well-organized and follows best practices
- Ready for deployment to production

## 🤝 Support

For issues or questions:
1. Check the console for errors
2. Verify MongoDB connection
3. Ensure both frontend and backend are running
4. Check environment variables are set correctly

## 📜 License

This project is licensed for use by Maana Pure Oil.

---

**Built with ❤️ for Maana Pure Oil**

🌿 Natural. Pure. Trusted.
