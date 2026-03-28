import express from 'express';
import { 
  userRegister, 
  userLogin, 
  verifyUserToken,
  getUserProfile,
  updateUserProfile,
  changePassword
} from '../controllers/userAuthController.js';
import { authenticate } from '../middleware/auth.js';


const router = express.Router();

// Public routes
router.post('/register', userRegister);
router.post('/login', userLogin);

// Protected routes (User only)
router.get('/verify', authenticate, verifyUserToken);
router.get('/profile', authenticate, getUserProfile);
router.put('/profile', authenticate, updateUserProfile);
router.post('/change-password', authenticate, changePassword);

export default router;