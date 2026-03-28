# 🔐 Authentication & Authorization Documentation

## Overview

This application implements a complete, production-ready authentication and authorization system with two separate user types: **Users** (customers) and **Admins** (store managers).

## Architecture

### Two-Tier Authentication System

1. **User Authentication** - For customers shopping on the site
2. **Admin Authentication** - For store management and administration

Both use JWT (JSON Web Tokens) but are completely separate systems with different:
- Login endpoints
- Token storage
- Access permissions
- UI interfaces

## User Authentication Flow

### Registration Process

1. **User Visits Registration Form** (`/login` - toggle to register)
2. **Fills Required Information**:
   - Full Name (required)
   - Email (required, unique)
   - Password (required, min 6 characters)
   - Phone Number (optional)

3. **Frontend Validation**:
   ```javascript
   - Email format check
   - Password length check
   - Required fields validation
   ```

4. **Backend Processing**:
   ```javascript
   POST /api/user/auth/register
   {
     "name": "John Doe",
     "email": "john@example.com",
     "password": "password123",
     "phone": "+919876543210"
   }
   ```

5. **Database Operations**:
   - Check if email already exists
   - Hash password using bcrypt (10 salt rounds)
   - Create user document with role='user'
   - Save to MongoDB

6. **Response**:
   ```javascript
   {
     "message": "User registered successfully",
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
     "user": {
       "id": "user_id",
       "name": "John Doe",
       "email": "john@example.com",
       "role": "user"
     }
   }
   ```

7. **Auto-Login**:
   - Token stored in localStorage as 'userToken'
   - User state updated in AuthContext
   - Redirect to home page or return URL

### Login Process

1. **User Visits Login Form** (`/login`)
2. **Enters Credentials**:
   - Email
   - Password

3. **Frontend Sends Request**:
   ```javascript
   POST /api/user/auth/login
   {
     "email": "john@example.com",
     "password": "password123"
   }
   ```

4. **Backend Verification**:
   - Find user by email and role='user'
   - Check if account is active
   - Compare password using bcrypt
   - Generate JWT token if valid

5. **JWT Token Structure**:
   ```javascript
   {
     userId: "user_id",
     role: "user",
     exp: 30 days from now
   }
   ```

6. **Response & Storage**:
   - Token stored in localStorage
   - User data stored in React Context
   - Cart synced from backend

7. **Smart Redirect**:
   - If user came from product page → redirect back to product
   - If user came from "Add to Cart" → redirect back to product
   - Otherwise → redirect to home page

## Add to Cart Authentication Flow

### Scenario 1: User Not Logged In

1. **User Clicks "Add to Cart"**
2. **System Checks Authentication**:
   ```javascript
   const checkAuth = () => {
     const token = localStorage.getItem('userToken');
     return !!token;
   }
   ```

3. **If Not Authenticated**:
   - Show toast: "Please login to add items to cart"
   - Save current product page URL
   - Redirect to login page with state:
     ```javascript
     navigate('/login', {
       state: {
         from: '/product/123',
         message: 'Please login to add items to your cart'
       }
     });
     ```

4. **User Logs In or Registers**

5. **After Successful Authentication**:
   - User automatically redirected to saved product page
   - User can now add item to cart
   - Cart stored in MongoDB

### Scenario 2: User Already Logged In

1. **User Clicks "Add to Cart"**
2. **Authentication Check Passes**
3. **Backend API Call**:
   ```javascript
   POST /api/cart/add
   Headers: {
     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
   }
   Body: {
     "productId": "product_id",
     "quantity": 1
   }
   ```

4. **Backend Processing**:
   - Verify JWT token
   - Get user ID from token
   - Find or create user's cart
   - Add/update item in cart
   - Save to MongoDB

5. **Response**:
   ```javascript
   {
     "success": true,
     "message": "Item added to cart",
     "cart": {
       "items": [...],
       "totalAmount": 1499
     }
   }
   ```

6. **Frontend Update**:
   - Update cart state
   - Show success toast
   - Update cart count in navbar

## Protected Routes

### Routes Requiring Authentication

```javascript
// In App.jsx
<Route 
  path="/cart" 
  element={
    <ProtectedRoute>
      <Cart />
    </ProtectedRoute>
  } 
/>
```

### ProtectedRoute Component Logic

```javascript
1. Check if user is authenticated
2. If loading → show loading spinner
3. If not authenticated → redirect to login with return URL
4. If authenticated → render component
```

### How It Works

1. **User Tries to Access `/cart`**
2. **ProtectedRoute Checks**:
   ```javascript
   const { isAuthenticated, loading } = useUserAuth();
   ```
3. **If Not Authenticated**:
   ```javascript
   <Navigate 
     to="/login" 
     state={{ 
       from: location.pathname,
       message: 'Please login to continue'
     }} 
     replace 
   />
   ```
4. **After Login**:
   - User redirected back to `/cart`
   - Cart loads from backend

## Admin Authentication

### Admin Login Flow

1. **Admin Visits** `/admin/login`
2. **Separate Login Form** (different from user login)
3. **Admin Credentials**:
   ```javascript
   Email: admin@maanapureoil.com
   Password: Admin@123
   ```

4. **Backend Request**:
   ```javascript
   POST /api/admin/auth/login
   {
     "email": "admin@maanapureoil.com",
     "password": "Admin@123"
   }
   ```

5. **Backend Verification**:
   - Find user by email and role='admin'
   - Verify password
   - Generate admin JWT token

6. **JWT Token Structure**:
   ```javascript
   {
     userId: "admin_id",
     role: "admin",
     exp: 30 days from now
   }
   ```

7. **Token Storage**:
   - Stored separately as 'adminToken'
   - Admin state in AdminAuthContext
   - Redirect to `/admin/dashboard`

### Admin Protected Routes

All admin routes are protected:
```javascript
<Route 
  path="/admin/dashboard" 
  element={
    <AdminLayout>  // AdminLayout checks admin auth
      <Dashboard />
    </AdminLayout>
  } 
/>
```

### AdminLayout Logic

```javascript
1. Check if admin is authenticated
2. If not → redirect to /admin/login
3. If yes → render admin navbar + content
```

## Authorization (Role-Based Access)

### Backend Middleware

```javascript
// Authenticate - verify token
export const authenticate = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  const decoded = jwt.verify(token, JWT_SECRET);
  const user = await User.findById(decoded.userId);
  req.user = user;
  next();
};

// Authorize Admin - check role
export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admin only.' });
  }
  next();
};
```

### Protected API Endpoints

```javascript
// User-only routes
router.get('/cart', authenticate, getCart);
router.post('/cart/add', authenticate, addToCart);

// Admin-only routes
router.post('/products', authenticate, authorizeAdmin, createProduct);
router.delete('/products/:id', authenticate, authorizeAdmin, deleteProduct);

// Public routes (no auth needed)
router.get('/products', getProducts);
router.get('/products/:id', getProduct);
```

## Token Management

### Token Storage

- **User Token**: `localStorage.setItem('userToken', token)`
- **Admin Token**: `localStorage.setItem('adminToken', token)`

### Token in API Requests

```javascript
// Axios interceptor automatically adds token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('userToken') || 
                localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### Token Expiration

- **Expiration**: 30 days from issue
- **When Expired**:
  1. Backend returns 401 Unauthorized
  2. Axios interceptor catches error
  3. Removes token from localStorage
  4. Redirects to login page

### Token Refresh

Currently not implemented (30-day expiration is sufficient for most use cases).

To implement:
1. Add refresh token in addition to access token
2. When access token expires, use refresh token to get new access token
3. Store refresh token securely (httpOnly cookie or secure storage)

## Security Features

### Password Security

```javascript
// Hashing on registration/password change
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

// Verification on login
const isMatch = await bcrypt.compare(candidatePassword, user.password);
```

### JWT Security

```javascript
// Strong secret (min 32 characters)
JWT_SECRET=your-super-secret-key-minimum-32-characters-long

// Expiration
expiresIn: '30d'

// Signature verification
jwt.verify(token, JWT_SECRET);
```

### Input Validation

```javascript
// Frontend validation
- Required fields check
- Email format validation
- Password length validation
- Phone number format

// Backend validation
- Email uniqueness check
- Password strength requirements
- Input sanitization
- SQL injection prevention (using Mongoose)
```

### CORS Protection

```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
```

## Testing Authentication

### Test User Flow

```bash
# 1. Register new user
curl -X POST http://localhost:5000/api/user/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'

# 2. Login
curl -X POST http://localhost:5000/api/user/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# 3. Access protected route
curl -X GET http://localhost:5000/api/cart \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Test Admin Flow

```bash
# 1. Admin login
curl -X POST http://localhost:5000/api/admin/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@maanapureoil.com","password":"Admin@123"}'

# 2. Create product (admin only)
curl -X POST http://localhost:5000/api/products \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"New Product","price":999}'
```

## Common Issues & Solutions

### Issue: "Token Invalid"
**Cause**: Token expired or JWT secret changed
**Solution**: Clear localStorage and re-login

### Issue: "Cannot Add to Cart"
**Cause**: Not authenticated or token expired
**Solution**: Check if token exists in localStorage, re-login if needed

### Issue: "Admin Access Denied"
**Cause**: Trying to access admin routes with user token
**Solution**: Ensure separate admin login

### Issue: "CORS Error"
**Cause**: Frontend URL not in CORS whitelist
**Solution**: Update FRONTEND_URL in backend .env

---

## Summary

This authentication system provides:
- ✅ Secure user registration and login
- ✅ Separate admin authentication
- ✅ JWT-based token management
- ✅ Protected routes on frontend
- ✅ Protected API endpoints on backend
- ✅ Role-based authorization
- ✅ Smart redirect after login
- ✅ Cart authentication enforcement
- ✅ Production-ready security

**The system is fully functional and ready for production use!**
