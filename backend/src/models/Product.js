import mongoose from 'mongoose';

const sizeVariantSchema = new mongoose.Schema({
  size: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], default: [] }
}, { _id: false });

const productSchema = new mongoose.Schema({
  name:           { type: String, required: true, trim: true },
  nameGu:         { type: String, trim: true, default: '' },
  description:    { type: String, required: true, trim: true },
  descriptionGu:  { type: String, trim: true, default: '' },
  benefits:       { type: String, trim: true, default: '' },   // EN benefits
  benefitsGu:     { type: String, trim: true, default: '' },   // GU benefits
  uses:           { type: String, trim: true, default: '' },   // EN uses
  usesGu:         { type: String, trim: true, default: '' },   // GU uses
  sizes: [sizeVariantSchema],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  images: { type: [String], default: [] },
  image:    { type: String, default: '' },
  featured: { type: Boolean, default: false },
  inStock:  { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
