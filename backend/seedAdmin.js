import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './src/models/User.js';
import Category from './src/models/Category.js';
import Product from './src/models/Product.js';

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/maana-pure-oil');
    console.log('✅ Connected to MongoDB\n');

    // Get database instance
    const db = mongoose.connection.db;

    // Drop problematic indexes
    try {
      const categoriesCollection = db.collection('categories');
      const indexes = await categoriesCollection.indexes();
      
      for (const index of indexes) {
        if (index.name === 'slug_1') {
          await categoriesCollection.dropIndex('slug_1');
          console.log('🗑️  Dropped slug index');
        }
      }
    } catch (error) {
      console.log('ℹ️  No slug index to drop');
    }

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await User.deleteMany({});
    await Category.deleteMany({});
    await Product.deleteMany({});
    console.log('✅ Data cleared\n');

    // Create admin user
    console.log('👤 Creating admin user...');
    const admin = new User({
      name: 'Admin',
      email: 'admin@maanapureoil.com',
      password: 'V@ipul90',
      role: 'admin'
    });

    await admin.save();
    console.log('✅ Admin user created');
    console.log('   📧 Email: admin@maanapureoil.com');
    console.log('   🔑 Password: V@ipul90\n');

    // Create categories ONE BY ONE (to trigger slug generation)
    console.log('📁 Creating categories...');
    
    const oilCategory = new Category({
      name: 'Oils',
      description: 'Pure cold-pressed cooking oils'
    });
    await oilCategory.save();
    console.log('   ✅ Created: Oils');

    const gheeCategory = new Category({
      name: 'Ghee',
      description: 'Traditional A2 cow ghee'
    });
    await gheeCategory.save();
    console.log('   ✅ Created: Ghee\n');

    // Create products
    console.log('🛍️  Creating products...');
    const products = [
      {
        name: 'Groundnut Oil',
        description: '100% pure cold-pressed groundnut oil with authentic taste and aroma. Rich in vitamins and healthy fats.',
        price: 299,
        unit: 'per liter',
        category: oilCategory._id,
        featured: true,
        inStock: true,
        image: ''
      },
      {
        name: 'Mustard Oil',
        description: 'Traditional cold-pressed mustard oil. Perfect for cooking and pickle making.',
        price: 249,
        unit: 'per liter',
        category: oilCategory._id,
        featured: true,
        inStock: true,
        image: ''
      },
      {
        name: 'Sesame Oil',
        description: 'Premium quality sesame oil extracted using traditional methods. Great for cooking and massage.',
        price: 349,
        unit: 'per liter',
        category: oilCategory._id,
        featured: true,
        inStock: true,
        image: ''
      },
      {
        name: 'Coconut Oil',
        description: 'Pure virgin coconut oil with natural aroma. Perfect for cooking, hair care, and skin care.',
        price: 399,
        unit: 'per liter',
        category: oilCategory._id,
        inStock: true,
        image: ''
      },
      {
        name: 'Pure Gir Cow Ghee',
        description: 'Authentic A2 ghee from Gir cows. Made using traditional bilona method for maximum nutrition.',
        price: 899,
        unit: 'per kg',
        category: gheeCategory._id,
        featured: true,
        inStock: true,
        image: ''
      }
    ];

    for (const productData of products) {
      const product = new Product(productData);
      await product.save();
      console.log(`   ✅ Created: ${productData.name}`);
    }

    console.log('\n' + '━'.repeat(60));
    console.log('🎉 DATABASE SEEDED SUCCESSFULLY!');
    console.log('━'.repeat(60));
    console.log('\n📝 Admin Login Credentials:');
    console.log('   Email:    admin@maanapureoil.com');
    console.log('   Password: V@ipul90');
    console.log('\n🌐 Access Points:');
    console.log('   Frontend: http://localhost:3000');
    console.log('   Backend:  http://localhost:5000');
    console.log('   Admin:    http://localhost:3000/admin/login');
    console.log('\n' + '━'.repeat(60) + '\n');

    process.exit(0);
  } catch (error) {
    console.error('\n❌ Seed error:', error.message);
    console.error('\nFull error:', error);
    process.exit(1);
  }
};

seedAdmin();