import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
import adminAuthRoutes from './routes/adminAuth.js';
import userAuthRoutes from './routes/userAuth.js';
import productRoutes from './routes/products.js';
import categoryRoutes from './routes/categories.js';
import cartRoutes from './routes/cart.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*', // production ma tame specific domain muki sako
  credentials: true
}));

app.use(express.json());
// 🔥 TEMPORARY ADMIN CREATE ROUTE
// 🔥 TEMP ADMIN CREATE ROUTE (DEBUG VERSION)
app.get('/create-admin', async (req, res) => {
  try {
    const bcrypt = (await import('bcryptjs')).default;

    // ⚠️ Check correct path (IMPORTANT)
    const Admin = (await import('./models/user.js')).default;
    // 👆 change this if your file name is different

    console.log("Step 1: Model loaded");

    const existingAdmin = await Admin.findOne({ email: "admin@maanapureoil.com" });

    if (existingAdmin) {
      return res.send("⚠️ Admin already exists");
    }

    console.log("Step 2: Creating new admin");

    const hashedPassword = await bcrypt.hash("V90ipul99@", 10);

    const admin = new Admin({
      email: "admin@maanapureoil.com",
      password: hashedPassword
    });

    await admin.save();

    console.log("Step 3: Admin saved");

    res.send("✅ Admin created successfully");
  } catch (error) {
    console.error("❌ FULL ERROR:", error);
    res.status(500).send(error.message);
  }
});
app.use(express.urlencoded({ extended: true }));

// ✅ Static folder
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// ✅ Routes
app.use('/api/admin/auth', adminAuthRoutes);
app.use('/api/user/auth', userAuthRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cart', cartRoutes);

// ✅ Root route (IMPORTANT for Render)
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// ✅ Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is running',
    time: new Date()
  });
});

// ❌ 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// ❌ Error handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// ✅ PORT
const PORT = process.env.PORT || 5000;

// ✅ MongoDB connection (ONLY ENV)
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not defined in environment variables');
  process.exit(1);
}

// ✅ Connect DB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  });

// ✅ Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  mongoose.connection.close(() => {
    console.log('MongoDB disconnected');
    process.exit(0);
  });
});
