import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaImage, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { categoryAPI } from '../../utils/api';
import { toast } from 'react-toastify';

// ✅ No description fields
const empty = { name: '', nameGu: '' };

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState(empty);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [existingImage, setExistingImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  useEffect(() => { fetchCategories(); }, []);

  const fetchCategories = async () => {
    try { const res = await categoryAPI.getAll(); setCategories(res.data); }
    catch { toast.error('Failed to load categories'); }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      // ✅ Only send name and nameGu — no description
      data.append('name', formData.name);
      data.append('nameGu', formData.nameGu);
      data.append('description', ''); // keep model happy
      data.append('descriptionGu', '');
      if (imageFile) data.append('image', imageFile);

      if (editingCategory) {
        await categoryAPI.update(editingCategory._id, data);
        toast.success('Category updated!');
      } else {
        await categoryAPI.create(data);
        toast.success('Category created!');
      }
      fetchCategories();
      closeModal();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (cat) => {
    setEditingCategory(cat);
    setFormData({ name: cat.name || '', nameGu: cat.nameGu || '' });
    setExistingImage(cat.image || '');
    setImageFile(null);
    setImagePreview('');
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this category?')) {
      try {
        await categoryAPI.delete(id);
        toast.success('Category deleted!');
        fetchCategories();
      } catch (err) {
        toast.error(err.response?.data?.message || 'Delete failed');
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingCategory(null);
    setFormData(empty);
    setImageFile(null);
    setImagePreview('');
    setExistingImage('');
  };

  const displayImage = imagePreview || existingImage;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-brand-purple-800">Categories</h1>
          <p className="text-gray-400 text-sm mt-1">Category par click karo to te category na products dikhashe</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="btn-premium flex items-center gap-2 shadow-lg"
        >
          <FaPlus /> Add Category
        </button>
      </div>

      {/* CATEGORY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="group relative bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
            onMouseEnter={() => setHovered(cat._id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image Section */}
            <div
              className="relative h-52 overflow-hidden"
              onClick={() => navigate(`/admin/products?category=${cat._id}`)}
            >
              {cat.image ? (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${hovered === cat._id ? 'scale-110 brightness-90' : 'scale-100'}`}
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br from-brand-purple-100 to-brand-purple-200 flex items-center justify-center transition-all duration-500 ${hovered === cat._id ? 'from-brand-purple-200 to-brand-purple-300' : ''}`}>
                  <span className={`text-7xl transition-all duration-500 ${hovered === cat._id ? 'scale-125' : 'scale-100'}`}>🫙</span>
                </div>
              )}

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-brand-purple-900/50 flex items-center justify-center transition-all duration-400 ${hovered === cat._id ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-2 bg-white text-brand-purple-700 px-5 py-2.5 rounded-full font-bold shadow-xl scale-110">
                  <span>View Products</span>
                  <FaArrowRight className="animate-pulse" />
                </div>
              </div>
            </div>

            {/* Info Section — ✅ Only names, no description */}
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div className="flex-1 min-w-0">
                  {/* English name */}
                  <h3 className="text-xl font-bold text-brand-purple-800 truncate">{cat.name}</h3>
                  {/* Gujarati name below */}
                  {cat.nameGu && (
                    <p className="text-brand-purple-400 text-sm mt-1 font-medium">{cat.nameGu}</p>
                  )}
                </div>
                <div className="flex gap-2 ml-3 shrink-0">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleEdit(cat); }}
                    className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(cat._id); }}
                    className="p-2 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className={`h-1 bg-gradient-to-r from-brand-purple-500 to-brand-orange-400 transition-all duration-400 ${hovered === cat._id ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>
        ))}

        {/* Empty state */}
        {categories.length === 0 && (
          <div className="col-span-3 py-20 text-center text-gray-400">
            <span className="text-7xl block mb-4">🫙</span>
            <p className="text-xl font-medium">No categories yet</p>
            <p className="text-sm mt-2">Click "Add Category" to get started</p>
          </div>
        )}
      </div>

      {/* MODAL — ✅ Only name fields, no description */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">

            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 bg-gradient-to-r from-brand-purple-700 to-brand-purple-600">
              <h2 className="text-xl font-bold text-white">
                {editingCategory ? '✏️ Edit Category' : '➕ Add Category'}
              </h2>
              <button onClick={closeModal} className="text-white/80 hover:text-white bg-white/10 rounded-xl p-2 transition">
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">

              {/* Image Upload */}
              <div>
                <label className="text-xs font-bold text-gray-500 mb-2 block uppercase tracking-wide">Category Image</label>
                <div className="flex items-center gap-4">
                  <div className="w-28 h-28 rounded-2xl border-2 border-dashed border-brand-purple-300 overflow-hidden flex items-center justify-center bg-purple-50 relative group cursor-pointer">
                    {displayImage ? (
                      <>
                        <img src={displayImage} alt="preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                          <FaImage className="text-white text-xl" />
                        </div>
                      </>
                    ) : (
                      <div className="text-center text-brand-purple-300">
                        <FaImage className="text-3xl mx-auto mb-1" />
                        <p className="text-xs">No image</p>
                      </div>
                    )}
                    <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleImageChange} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Upload category image</p>
                    <p className="text-xs text-gray-400 mt-1">JPG, PNG — max 10MB</p>
                    {displayImage && (
                      <button type="button"
                        onClick={() => { setImageFile(null); setImagePreview(''); setExistingImage(''); }}
                        className="text-xs text-red-500 hover:text-red-700 mt-2">
                        ✕ Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* ✅ Only Name fields — English + Gujarati */}
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">
                  English Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  required
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Groundnut Oil"
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-brand-purple-500 focus:outline-none text-sm transition"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">
                  ગુજરાતી નામ (Gujarati Name)
                </label>
                <input
                  type="text"
                  value={formData.nameGu}
                  onChange={e => setFormData({ ...formData, nameGu: e.target.value })}
                  placeholder="દા.ત. સિંગતેલ"
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-brand-purple-500 focus:outline-none text-sm transition"
                />
                <p className="text-xs text-gray-400 mt-1">
                  English language → English name shows | Gujarati language → Gujarati name shows
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 text-white py-3 rounded-xl font-bold hover:shadow-lg transition disabled:opacity-60"
                >
                  {loading ? 'Saving...' : editingCategory ? '✓ Update Category' : '✓ Create Category'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
