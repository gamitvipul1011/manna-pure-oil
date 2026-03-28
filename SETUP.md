# 🚀 Quick Setup Guide

## Prerequisites

Before you begin, make sure you have:
- ✅ Node.js (v18 or higher) - [Download](https://nodejs.org/)
- ✅ MongoDB installed locally OR MongoDB Atlas account - [Download](https://www.mongodb.com/try/download/community) or [Atlas](https://www.mongodb.com/cloud/atlas)
- ✅ Git (optional) - [Download](https://git-scm.com/)

## Installation Steps

### Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 2: Configure Backend Environment

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env file with your settings
# For local development, the defaults work fine
# For production, update with your MongoDB Atlas URI
```

### Step 3: Seed the Database

```bash
# Seed products and categories
npm run seed

# Create admin user
npm run seed:admin
```

### Step 4: Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### Step 5: Configure Frontend Environment

```bash
# Copy the example environment file
cp .env.example .env

# Edit if needed (default is http://localhost:5000/api)
```

## Running the Application

### Option 1: Use Start Scripts (Easiest)

#### Windows:
Double-click `START.bat` or run:
```bash
START.bat
```

#### Mac/Linux:
```bash
chmod +x START.sh
./START.sh
```

### Option 2: Manual Start

#### Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

#### Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

## Access the Application

Once both servers are running:

- 🌐 **Website**: http://localhost:5173
- 🛒 **Shop Products**: http://localhost:5173/products
- 👤 **User Login**: http://localhost:5173/login
- 👨‍💼 **Admin Panel**: http://localhost:5173/admin/login

## Default Credentials

### Admin Login
- **Email**: admin@maanapureoil.com
- **Password**: Admin@123

### User Account
Register a new account at http://localhost:5173/login

## Testing the Application

### 1. Test User Registration
1. Go to http://localhost:5173/login
2. Click "Don't have an account? Register"
3. Fill in the form and submit
4. You'll be automatically logged in

### 2. Test Shopping Flow
1. Browse products at http://localhost:5173/products
2. Click on a product
3. Try to add to cart (will prompt for login if not logged in)
4. Login/Register
5. You'll be redirected back to the product
6. Add to cart
7. View cart at http://localhost:5173/cart

### 3. Test Admin Panel
1. Go to http://localhost:5173/admin/login
2. Login with admin credentials
3. Try creating a product
4. Manage categories
5. View dashboard

## Troubleshooting

### MongoDB Connection Error
**Error**: "Failed to connect to MongoDB"

**Solutions**:
1. Make sure MongoDB is running:
   ```bash
   # On Mac/Linux
   sudo systemctl start mongodb
   
   # On Windows
   net start MongoDB
   ```
2. Or use MongoDB Atlas (cloud):
   - Create free account at https://mongodb.com/cloud/atlas
   - Get connection string
   - Update MONGODB_URI in backend/.env

### Port Already in Use
**Error**: "Port 5000 already in use"

**Solution**:
1. Change PORT in backend/.env to another port (e.g., 5001)
2. Update VITE_API_URL in frontend/.env to match new port

### Cannot Add to Cart
**Issue**: "Please login to add items to cart"

**Solution**: This is expected behavior! Users must login before adding items to cart. This is a security feature.

### Admin Cannot Login
**Issue**: "Invalid credentials"

**Solution**: 
1. Make sure you ran `npm run seed:admin`
2. Use exact credentials: admin@maanapureoil.com / Admin@123
3. Check backend console for errors

### Frontend Not Loading
**Issue**: Blank white screen

**Solutions**:
1. Check if backend is running on port 5000
2. Check browser console for errors
3. Verify VITE_API_URL in frontend/.env
4. Clear browser cache

## Next Steps

### For Development
1. Explore the code structure in README.md
2. Read AUTHENTICATION.md to understand the auth system
3. Start customizing the UI and features

### For Production
1. Follow DEPLOYMENT.md for detailed deployment guide
2. Set up MongoDB Atlas for production database
3. Deploy backend to Render/Railway/Heroku
4. Deploy frontend to Vercel/Netlify

## Need Help?

Check these files:
- 📖 **README.md** - Complete project documentation
- 🔐 **AUTHENTICATION.md** - Authentication system details
- 🚀 **DEPLOYMENT.md** - Production deployment guide

## Database Schema

### Users Collection
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  role: 'user' | 'admin',
  cart: [{ product: ObjectId, quantity: Number }]
}
```

### Products Collection
```javascript
{
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: ObjectId,
  image: String,
  images: [String],
  benefits: [String]
}
```

### Cart Collection
```javascript
{
  user: ObjectId (ref: User),
  items: [{
    product: ObjectId (ref: Product),
    quantity: Number,
    price: Number
  }],
  totalAmount: Number
}
```

## Quick Reference

### Backend Scripts
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run seed       # Seed database with sample products
npm run seed:admin # Create admin user
```

### Frontend Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

### Useful Commands
```bash
# Check if MongoDB is running
mongosh

# View backend logs
cd backend && npm run dev

# Clear cart for a user (in MongoDB shell)
db.carts.deleteMany({})

# Reset database
cd backend && node resetDatabase.js
```

---

**You're all set! Start building your e-commerce empire! 🎉**

If you encounter any issues, check the troubleshooting section or refer to the detailed documentation files.
