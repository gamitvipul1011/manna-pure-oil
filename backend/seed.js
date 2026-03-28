import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

import User from './src/models/User.js';
import Category from './src/models/Category.js';
import Product from './src/models/Product.js';

dotenv.config();

const seedAdmin = async () => {
  try {
    // ✅ Connect DB
    await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/maana-pure-oil'
    );
    console.log('✅ Connected to MongoDB\n');

    const db = mongoose.connection.db;

    // ✅ Remove slug index (if exists)
    try {
      const indexes = await db.collection('categories').indexes();
      for (const index of indexes) {
        if (index.name === 'slug_1') {
          await db.collection('categories').dropIndex('slug_1');
          console.log('🗑️ Dropped slug index');
        }
      }
    } catch {
      console.log('ℹ️ No slug index found');
    }

    // ✅ Clear old data
    console.log('🗑️ Clearing old data...');
    await User.deleteMany({});
    await Category.deleteMany({});
    await Product.deleteMany({});
    console.log('✅ Data cleared\n');

    // ✅ Create Admin (with hashed password)
    console.log('👤 Creating admin...');

    const hashedPassword = await bcrypt.hash('V@ipul90', 10);

    const admin = await User.create({
      name: 'Admin',
      email: 'admin@maanapureoil.com',
      password: hashedPassword,
      role: 'admin'
    });

    console.log('✅ Admin created');
    console.log('📧 Email: admin@maanapureoil.com');
    console.log('🔑 Password: V@ipul90\n');

    // ✅ Create Categories
    console.log('📁 Creating categories...');

    let oilCategory = await Category.create({
      name: 'Oils',
      description: 'Pure cold-pressed cooking oils'
    });

    console.log('   ✅ Oils created');

    let gheeCategory = await Category.create({
      name: 'Ghee',
      description: 'Traditional A2 cow ghee'
    });

    console.log('   ✅ Ghee created\n');

    // ✅ Create Products
    console.log('🛍️ Creating products...');

    const products = [
      {
        name: 'Groundnut Oil',
        description: '100% pure cold-pressed groundnut oil with authentic taste and aroma.',
        price: 299,
        unit: 'per liter',
        category: oilCategory._id,
        featured: true,
        inStock: true,
        image: ''
      },
      {
        name: 'Mustard Oil',
        description: 'Traditional cold-pressed mustard oil.',
        price: 249,
        unit: 'per liter',
        category: oilCategory._id,
        featured: true,
        inStock: true,
        image: ''
      },
      {
        name: 'Sesame Oil',
        description: 'Premium quality sesame oil.',
        price: 349,
        unit: 'per liter',
        category: oilCategory._id,
        featured: true,
        inStock: true,
        image: ''
      },
      {
        name: 'Coconut Oil',
        description: 'Pure coconut oil for cooking & care.',
        price: 399,
        unit: 'per liter',
        category: oilCategory._id,
        inStock: true,
        image: ''
      },
      {
        name: 'Pure Gir Cow Ghee',
        description: 'Authentic A2 ghee.',
        price: 899,
        unit: 'per kg',
        category: gheeCategory._id,
        featured: true,
        inStock: true,
        image: ''
      }
    ];

    for (let item of products) {
      await Product.create(item);
      console.log(`   ✅ ${item.name}`);
    }

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🎉 DATABASE SEEDED SUCCESSFULLY!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log('📝 Admin Login:');
    console.log('Email: admin@maanapureoil.com');
    console.log('Password: V@ipul90\n');

    process.exit();
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    process.exit(1);
  }
};

seedAdmin();