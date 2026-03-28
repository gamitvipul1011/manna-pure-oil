import Product from '../models/Product.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const addHost = (req, url) => url ? `${req.protocol}://${req.get('host')}${url}` : '';

const formatProduct = (req, productObj) => {
  if (productObj.image) productObj.image = addHost(req, productObj.image);
  if (productObj.images?.length) productObj.images = productObj.images.map(img => addHost(req, img));
  if (productObj.sizes?.length) {
    productObj.sizes = productObj.sizes.map(sv => ({
      ...sv,
      images: (sv.images || []).map(img => addHost(req, img))
    }));
  }
  return productObj;
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category', 'name').sort({ createdAt: -1 });
    res.json(products.map(p => formatProduct(req, p.toObject())));
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'name description');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(formatProduct(req, product.toObject()));
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ✅ CREATE: parse sizeImages_{index} for per-size images, unlimited files
export const createProduct = async (req, res) => {
  try {
    const { name, nameGu='', description, descriptionGu='', benefits='', benefitsGu='', uses='', usesGu='', category } = req.body;
    let parsedSizes = req.body.sizes ? JSON.parse(req.body.sizes) : [];

    const files = req.files || [];

    // Assign images to sizes based on fieldname sizeImage_{sizeIdx}_{imgIdx}
    parsedSizes = parsedSizes.map((sv, idx) => {
      const sizeFiles = files.filter(f => f.fieldname === `sizeImage_${idx}`);
      return { ...sv, images: sizeFiles.map(f => `/uploads/${f.filename}`) };
    });

    // Fallback: files with fieldname 'images' go to global images
    const globalFiles = files.filter(f => f.fieldname === 'images');
    const images = globalFiles.map(f => `/uploads/${f.filename}`);
    const mainImage = parsedSizes[0]?.images?.[0] || images[0] || '';

    const product = new Product({ name, nameGu, description, descriptionGu, benefits, benefitsGu, uses, usesGu, category, sizes: parsedSizes, image: mainImage, images });
    await product.save();

    res.status(201).json({ message: 'Product created successfully', product: formatProduct(req, product.toObject()) });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ✅ UPDATE: same per-size logic
export const updateProduct = async (req, res) => {
  try {
    const { name, nameGu='', description, descriptionGu='', benefits='', benefitsGu='', uses='', usesGu='', category } = req.body;
    let parsedSizes = req.body.sizes ? JSON.parse(req.body.sizes) : [];

    const files = req.files || [];

    // Existing images per size from formData
    parsedSizes = parsedSizes.map((sv, idx) => {
      const existingKey = `existingSizeImages_${idx}`;
      let existingImages = [];
      try { existingImages = req.body[existingKey] ? JSON.parse(req.body[existingKey]) : []; } catch {}
      const sizeFiles = files.filter(f => f.fieldname === `sizeImage_${idx}`);
      const newImages = sizeFiles.map(f => `/uploads/${f.filename}`);
      return { ...sv, images: [...existingImages, ...newImages] };
    });

    const globalFiles = files.filter(f => f.fieldname === 'images');
    const newGlobalImages = globalFiles.map(f => `/uploads/${f.filename}`);
    let existingGlobal = [];
    try { existingGlobal = req.body.existingImages ? JSON.parse(req.body.existingImages) : []; } catch {}
    const allImages = [...existingGlobal, ...newGlobalImages];
    const mainImage = parsedSizes[0]?.images?.[0] || allImages[0] || '';

    const updateData = { name, nameGu, description, descriptionGu, benefits, benefitsGu, uses, usesGu, category, sizes: parsedSizes };
    if (allImages.length || mainImage) { updateData.images = allImages; updateData.image = mainImage; }

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true }).populate('category', 'name');
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json({ message: 'Product updated successfully', product: formatProduct(req, product.toObject()) });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const allImages = [
      ...(product.images || []),
      ...(product.sizes || []).flatMap(sv => sv.images || [])
    ];
    allImages.forEach(imgPath => {
      const fullPath = path.join(__dirname, '../..', imgPath);
      if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
    });

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
