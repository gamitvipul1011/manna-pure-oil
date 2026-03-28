import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';

// Models
import User from './models/User.js';
import Category from './models/Category.js';
import Product from './models/Product.js';

// Routes
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
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Static
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// ✅ Routes
app.use('/api/admin/auth', adminAuthRoutes);
app.use('/api/user/auth', userAuthRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cart', cartRoutes);

// ✅ Root
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// ✅ Health
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// ❌ 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ❌ Error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: err.message });
});

// 🔥 AUTO SEED FUNCTION (SAFE)
const seedData = async () => {
  try {
    console.log("🌱 Checking seed data...");

    // ✅ Admin check
    const existingAdmin = await User.findOne({ email: "admin@maanapureoil.com" });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("V@ipul90", 10);

      await User.create({
        name: "Admin",
        email: "admin@maanapureoil.com",
        password: hashedPassword,
        role: "admin"
      });

      console.log("✅ Admin created");
    } else {
      console.log("⚠️ Admin already exists");
    }

    // ✅ Categories
    let oilCategory = await Category.findOne({ name: "Oils" });

    if (!oilCategory) {
      oilCategory = await Category.create({
        name: "Oils",
        description: "Pure oils"
      });
      console.log("✅ Oils category created");
    }

    let gheeCategory = await Category.findOne({ name: "Ghee" });

    if (!gheeCategory) {
      gheeCategory = await Category.create({
        name: "Ghee",
        description: "Pure ghee"
      });
      console.log("✅ Ghee category created");
    }

    // ✅ Products
    const count = await Product.countDocuments();

    if (count === 0) {
      await Product.create([
        {
          name: 'Groundnut Oil',
          price: 299,
          unit: 'liter',
          category: oilCategory._id,
          inStock: true
        },
        {
          name: 'Mustard Oil',
          price: 249,
          unit: 'liter',
          category: oilCategory._id,
          inStock: true
        }
      ]);

      console.log("✅ Products added");
    } else {
      console.log("⚠️ Products already exist");
    }

  } catch (err) {
    console.error("❌ Seed error:", err.message);
  }
};

// ✅ PORT
const PORT = process.env.PORT || 5000;

// ✅ MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI missing");
  process.exit(1);
}

// ✅ CONNECT + START
mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected");

    // 🔥 AUTO SEED RUN
    await seedData();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ DB Error:", err.message);
    process.exit(1);
  });

// ✅ Graceful shutdown
process.on('SIGTERM', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB disconnected');
    process.exit(0);
  });
});
