import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign(
    { userId, role: 'admin' },
    process.env.JWT_SECRET || 'maana-pure-oil-secret-key-2024-very-secure',
    { expiresIn: '7d' }
  );
};

// Admin Login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Admin login attempt:', { email });

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Find admin user
    const admin = await User.findOne({ email, role: 'admin' });
    
    if (!admin) {
      console.log('Admin not found:', email);
      return res.status(401).json({ message: 'Invalid admin credentials' });
    }

    console.log('Admin found:', admin.email);

    // Check if admin is active
    // if (!admin.isActive) {
//   return res.status(401).json({ message: 'Admin account is deactivated' });
// }

    // Check password
    const isMatch = await admin.comparePassword(password);
    
    if (!isMatch) {
      console.log('Password mismatch for admin');
      return res.status(401).json({ message: 'Invalid admin credentials' });
    }

    console.log('Admin password matched, generating token');

    // Generate token
    const token = generateToken(admin._id);

    res.json({
      message: 'Admin login successful',
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create New Admin (Only existing admin can create)
export const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }

    // Check if admin exists
    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Create admin
    const admin = new User({
      name,
      email,
      password,
      role: 'admin',
      isActive: true
    });

    await admin.save();

    res.status(201).json({
      message: 'Admin created successfully',
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    console.error('Create admin error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Verify Admin Token
export const verifyAdminToken = async (req, res) => {
  try {
    // req.user is set by authenticate middleware
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin only.' });
    }

    res.json({
      message: 'Admin token is valid',
      admin: req.user
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get All Admins (Admin only)
export const getAllAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' }).select('-password');
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete Admin (Admin only)
export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    // Prevent self-deletion
    if (id === req.user.id) {
      return res.status(400).json({ message: 'Cannot delete your own account' });
    }

    const admin = await User.findOneAndDelete({ _id: id, role: 'admin' });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
// Change Admin Password
export const changeAdminPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Please provide current and new password' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ message: 'New password must be at least 6 characters' });
    }

    // Get admin with password
    const admin = await User.findById(req.user._id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Verify current password
    const isMatch = await admin.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    // Update password
    admin.password = newPassword;
    await admin.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
