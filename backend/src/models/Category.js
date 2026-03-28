import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, unique: true },
  nameGu: { type: String, trim: true, default: '' },
  description: { type: String, required: false, trim: true, default: '' },  // ✅ NOT required anymore
  descriptionGu: { type: String, trim: true, default: '' },
  image: { type: String, default: '' },
  slug: { type: String, unique: true, sparse: true, lowercase: true }
}, { timestamps: true });

categorySchema.pre('save', function(next) {
  if (this.isModified('name') || !this.slug) {
    this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  next();
});

export default mongoose.model('Category', categorySchema);
