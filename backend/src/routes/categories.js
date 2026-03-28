import express from 'express';
import upload from '../middleware/upload.js';
import { getAllCategories, createCategory, updateCategory, deleteCategory } from '../controllers/categoryController.js';
import { authenticate, authorizeAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllCategories);
// ✅ single('image') - one image per category
router.post('/', authenticate, authorizeAdmin, upload.single('image'), createCategory);
router.put('/:id', authenticate, authorizeAdmin, upload.single('image'), updateCategory);
router.delete('/:id', authenticate, authorizeAdmin, deleteCategory);

export default router;
