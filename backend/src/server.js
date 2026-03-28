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

// Environment
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Middleware
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/admin/auth', adminAuthRoutes);
app.use('/api/user/auth', userAuthRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cart', cartRoutes);

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is running',
    time: new Date()
  });
});

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// MongoDB Connect
mongoose.connect(MONGODB_URI)
.then(() => {

  console.log('✅ MongoDB Connected');

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  });

})
.catch((error) => {
  console.error('❌ MongoDB connection failed:', error);
  process.exit(1);
});

// Graceful Shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await mongoose.connection.close();
  process.exit(0);
});

export default app;
