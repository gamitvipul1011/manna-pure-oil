import express from 'express';
import upload from '../middleware/upload.js';
import { authenticate, authorizeAdmin } from '../middleware/auth.js';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
// ✅ upload.any() accepts any fieldname, unlimited files
router.post('/', authenticate, authorizeAdmin, upload.any(), createProduct);
router.put('/:id', authenticate, authorizeAdmin, upload.any(), updateProduct);
router.delete('/:id', authenticate, authorizeAdmin, deleteProduct);

export default router;
