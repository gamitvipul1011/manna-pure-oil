import express from 'express';
import { 
  adminLogin, 
  createAdmin, 
  verifyAdminToken,
  getAllAdmins,
  deleteAdmin,
  changeAdminPassword
} from '../controllers/adminAuthController.js';
import { authenticate, authorizeAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/login', adminLogin);

// Protected routes (Admin only)
router.get('/verify', authenticate, authorizeAdmin, verifyAdminToken);
router.post('/create', authenticate, authorizeAdmin, createAdmin);
router.get('/all', authenticate, authorizeAdmin, getAllAdmins);
router.delete('/:id', authenticate, authorizeAdmin, deleteAdmin);
router.post('/change-password', authenticate, authorizeAdmin, changeAdminPassword);

export default router;
