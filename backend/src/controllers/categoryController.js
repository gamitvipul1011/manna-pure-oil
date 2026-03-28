import Category from '../models/Category.js';
import Product from '../models/Product.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    // Add full image URL
    const result = categories.map(cat => {
      const obj = cat.toObject();
      if (obj.image) obj.image = `${req.protocol}://${req.get('host')}${obj.image}`;
      return obj;
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, nameGu, description, descriptionGu } = req.body;
    let image = '';
    if (req.file) image = `/uploads/${req.file.filename}`;

    const category = new Category({ name, nameGu, description, descriptionGu, image });
    await category.save();

    const obj = category.toObject();
    if (obj.image) obj.image = `${req.protocol}://${req.get('host')}${obj.image}`;
    res.status(201).json({ message: 'Category created successfully', category: obj });
  } catch (error) {
    if (error.code === 11000) return res.status(400).json({ message: 'Category already exists' });
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { name, nameGu, description, descriptionGu } = req.body;
    const updateData = { name, nameGu, description, descriptionGu };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
      // Delete old image
      const old = await Category.findById(req.params.id);
      if (old?.image) {
        const oldPath = path.join(__dirname, '../..', old.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
    }

    const category = await Category.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
    if (!category) return res.status(404).json({ message: 'Category not found' });

    const obj = category.toObject();
    if (obj.image) obj.image = `${req.protocol}://${req.get('host')}${obj.image}`;
    res.json({ message: 'Category updated successfully', category: obj });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const productCount = await Product.countDocuments({ category: req.params.id });
    if (productCount > 0) {
      return res.status(400).json({
        message: `Cannot delete: ${productCount} product(s) use this category. Please reassign or delete those products first.`
      });
    }
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    // Delete image file
    if (category.image) {
      const imgPath = path.join(__dirname, '../..', category.image);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
