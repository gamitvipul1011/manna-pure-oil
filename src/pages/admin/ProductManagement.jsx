import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaImage, FaLeaf, FaFlask } from 'react-icons/fa';
import { productAPI, categoryAPI } from '../../utils/api';
import { toast } from 'react-toastify';

const emptySize = () => ({ size: '', price: '', existingImages: [], newImages: [], newPreviews: [] });
const emptyForm = { name: '', nameGu: '', description: '', descriptionGu: '', benefits: '', benefitsGu: '', uses: '', usesGu: '', category: '' };

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [sizes, setSizes] = useState([emptySize()]);
  const [activeFormTab, setActiveFormTab] = useState('basic');

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const [pRes, cRes] = await Promise.all([productAPI.getAll(), categoryAPI.getAll()]);
      setProducts(pRes.data); setCategories(cRes.data);
    } catch { toast.error('Failed to load data'); }
  };

  const set = (key, val) => setFormData(prev => ({ ...prev, [key]: val }));

  const handleSizeImageChange = (sIdx, e) => {
    const files = Array.from(e.target.files);
    setSizes(prev => prev.map((sv, i) => i !== sIdx ? sv : {
      ...sv, newImages: [...sv.newImages, ...files], newPreviews: [...sv.newPreviews, ...files.map(f => URL.createObjectURL(f))]
    }));
  };
  const removeSizeNew = (sIdx, iIdx) => setSizes(prev => prev.map((sv, i) => i !== sIdx ? sv : { ...sv, newImages: sv.newImages.filter((_, j) => j !== iIdx), newPreviews: sv.newPreviews.filter((_, j) => j !== iIdx) }));
  const removeSizeExisting = (sIdx, iIdx) => setSizes(prev => prev.map((sv, i) => i !== sIdx ? sv : { ...sv, existingImages: sv.existingImages.filter((_, j) => j !== iIdx) }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const validSizes = sizes.filter(s => s.size && s.price);
    if (!validSizes.length) { toast.error('Add at least one size'); setLoading(false); return; }

    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => data.append(k, v));
    data.append('sizes', JSON.stringify(validSizes.map(s => ({ size: s.size, price: s.price }))));
    validSizes.forEach((sv, idx) => {
      const existingPaths = (sv.existingImages || []).map(url => { const m = url.match(/\/uploads\/.+/); return m ? m[0] : url; });
      data.append(`existingSizeImages_${idx}`, JSON.stringify(existingPaths));
      sv.newImages.forEach(f => data.append(`sizeImage_${idx}`, f));
    });

    try {
      if (editingProduct) { await productAPI.update(editingProduct._id, data); toast.success('Product updated!'); }
      else { await productAPI.create(data); toast.success('Product created!'); }
      fetchData(); closeModal();
    } catch (err) { toast.error(err.response?.data?.message || 'Operation failed'); }
    finally { setLoading(false); }
  };

  const handleEdit = (p) => {
    setEditingProduct(p);
    setFormData({ name: p.name||'', nameGu: p.nameGu||'', description: p.description||'', descriptionGu: p.descriptionGu||'', benefits: p.benefits||'', benefitsGu: p.benefitsGu||'', uses: p.uses||'', usesGu: p.usesGu||'', category: p.category?._id||p.category });
    setSizes(p.sizes?.length ? p.sizes.map(sv => ({ size: sv.size, price: sv.price, existingImages: sv.images||[], newImages: [], newPreviews: [] })) : [emptySize()]);
    setActiveFormTab('basic');
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this product?')) {
      try { await productAPI.delete(id); toast.success('Deleted'); fetchData(); }
      catch { toast.error('Delete failed'); }
    }
  };

  const closeModal = () => { setShowModal(false); setEditingProduct(null); setFormData(emptyForm); setSizes([emptySize()]); setActiveFormTab('basic'); };

  const formTabs = [
    { key: 'basic', label: 'Basic Info' },
    { key: 'details', label: 'Benefits & Uses' },
    { key: 'sizes', label: 'Sizes & Images' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold text-brand-purple-800">Products</h1>
        <button onClick={() => setShowModal(true)} className="bg-brand-purple-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-brand-purple-700 transition shadow-lg">
          <FaPlus /> Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-brand-purple-700 to-brand-purple-600 text-white">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Sizes / Prices</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id} className="border-b border-gray-100 hover:bg-purple-50 transition">
                <td className="p-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-amber-50 border border-gray-100">
                    <img src={product.image || product.images?.[0] || product.sizes?.[0]?.images?.[0]}
                      alt="" className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="p-4">
                  <p className="font-semibold text-gray-800">{product.name}</p>
                  {product.nameGu && <p className="text-xs text-brand-purple-400 mt-0.5">{product.nameGu}</p>}
                </td>
                <td className="p-4">
                  {product.sizes?.map((s, i) => (
                    <span key={i} className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-0.5 rounded-full mr-1 mb-1">
                      {s.size} ₹{s.price}
                    </span>
                  ))}
                </td>
                <td className="p-4">
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category?.name || 'N/A'}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-3">
                    <button onClick={() => handleEdit(product)} className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"><FaEdit /></button>
                    <button onClick={() => handleDelete(product._id)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"><FaTrash /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {products.length === 0 && (
          <div className="py-16 text-center text-gray-400">
            <FaLeaf className="text-5xl mx-auto mb-3 opacity-30" />
            <p>No products yet. Add your first product!</p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-start z-50 overflow-y-auto py-4">
          <div className="bg-white w-full max-w-2xl mx-4 rounded-3xl shadow-2xl my-4">

            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-5 bg-gradient-to-r from-brand-purple-700 to-brand-purple-600 rounded-t-3xl">
              <h2 className="text-xl font-bold text-white">
                {editingProduct ? '✏️ Edit Product' : '➕ Add New Product'}
              </h2>
              <button onClick={closeModal} className="text-white/80 hover:text-white bg-white/10 rounded-xl p-2 transition"><FaTimes /></button>
            </div>

            {/* Inner Tab Bar */}
            <div className="flex border-b border-gray-100 bg-gray-50 rounded-none px-6">
              {formTabs.map(tab => (
                <button key={tab.key} onClick={() => setActiveFormTab(tab.key)}
                  className={`px-5 py-3 text-sm font-semibold transition-all border-b-2 -mb-px ${
                    activeFormTab === tab.key
                      ? 'border-brand-purple-600 text-brand-purple-700'
                      : 'border-transparent text-gray-400 hover:text-gray-700'
                  }`}>
                  {tab.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-6 space-y-4 min-h-72">

                {/* ===== TAB 1: BASIC INFO ===== */}
                {activeFormTab === 'basic' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold text-gray-500 mb-1 block">Product Name (English) *</label>
                        <input type="text" placeholder="e.g. Groundnut Oil" value={formData.name} required
                          onChange={e => set('name', e.target.value)}
                          className="w-full border-2 border-gray-200 px-3 py-2.5 rounded-xl focus:border-brand-purple-500 focus:outline-none text-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-500 mb-1 block">ઉત્પાદન નામ (gu)</label>
                        <input type="text" placeholder="ઉત્પાદન નું નામ" value={formData.nameGu}
                          onChange={e => set('nameGu', e.target.value)}
                          className="w-full border-2 border-gray-200 px-3 py-2.5 rounded-xl focus:border-brand-purple-500 focus:outline-none text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-500 mb-1 block">Description (English) *</label>
                      <textarea placeholder="Product description in English..." value={formData.description} required rows={3}
                        onChange={e => set('description', e.target.value)}
                        className="w-full border-2 border-gray-200 px-3 py-2.5 rounded-xl focus:border-brand-purple-500 focus:outline-none resize-none text-sm" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-500 mb-1 block">વર્ણન (gu - ગુજરાતી)</label>
                      <textarea placeholder="Gujarati maa varnan..." value={formData.descriptionGu} rows={3}
                        onChange={e => set('descriptionGu', e.target.value)}
                        className="w-full border-2 border-gray-200 px-3 py-2.5 rounded-xl focus:border-brand-purple-500 focus:outline-none resize-none text-sm" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-500 mb-1 block">Category *</label>
                      <select value={formData.category} required onChange={e => set('category', e.target.value)}
                        className="w-full border-2 border-gray-200 px-3 py-2.5 rounded-xl focus:border-brand-purple-500 focus:outline-none text-sm bg-white">
                        <option value="">Select Category</option>
                        {categories.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
                      </select>
                    </div>
                  </div>
                )}

                {/* ===== TAB 2: BENEFITS & USES ===== */}
                {activeFormTab === 'details' && (
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-2xl p-4">
                      <p className="text-xs font-bold text-green-700 mb-3 flex items-center gap-2">
                        <FaLeaf /> BENEFITS — દrekek faydaa alag line maa likhjo (Enter dabo)
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-bold text-gray-500 mb-1 block">Benefits (English)</label>
                          <textarea placeholder={"Improves heart health\nRich in antioxidants\nBoosts immunity"}
                            value={formData.benefits} rows={5}
                            onChange={e => set('benefits', e.target.value)}
                            className="w-full border-2 border-gray-200 px-3 py-2.5 rounded-xl focus:border-green-500 focus:outline-none resize-none text-sm font-mono" />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-gray-500 mb-1 block">ફાયદા (gu - ગુજરાતી)</label>
                          <textarea placeholder={"હૃદય માટે સારું\nantioxidants ભરપૂર\nRoga pratikarak shakti vadhe"}
                            value={formData.benefitsGu} rows={5}
                            onChange={e => set('benefitsGu', e.target.value)}
                            className="w-full border-2 border-gray-200 px-3 py-2.5 rounded-xl focus:border-green-500 focus:outline-none resize-none text-sm font-mono" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-2xl p-4">
                      <p className="text-xs font-bold text-orange-700 mb-3 flex items-center gap-2">
                        <FaFlask /> USES — ek line = ek ઉpayog
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-bold text-gray-500 mb-1 block">Uses (English)</label>
                          <textarea placeholder={"Cooking & frying\nAyurvedic massage\nHair care\nSkin nourishment"}
                            value={formData.uses} rows={5}
                            onChange={e => set('uses', e.target.value)}
                            className="w-full border-2 border-gray-200 px-3 py-2.5 rounded-xl focus:border-orange-500 focus:outline-none resize-none text-sm font-mono" />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-gray-500 mb-1 block">ઉપયોગ (gu - ગુજરાતી)</label>
                          <textarea placeholder={"Raso maa vaparaay\nAyurvedik maalish\nVaalmaa\nTvacha ne poshan"}
                            value={formData.usesGu} rows={5}
                            onChange={e => set('usesGu', e.target.value)}
                            className="w-full border-2 border-gray-200 px-3 py-2.5 rounded-xl focus:border-orange-500 focus:outline-none resize-none text-sm font-mono" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ===== TAB 3: SIZES & IMAGES ===== */}
                {activeFormTab === 'sizes' && (
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-bold text-gray-500">Sizes with images per size</p>
                      <button type="button" onClick={() => setSizes([...sizes, emptySize()])}
                        className="text-brand-purple-600 text-xs font-bold hover:text-brand-purple-800 flex items-center gap-1 bg-purple-50 px-3 py-1.5 rounded-lg">
                        <FaPlus className="text-xs" /> Add Size
                      </button>
                    </div>
                    <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                      {sizes.map((sv, sIdx) => (
                        <div key={sIdx} className="border-2 border-gray-100 rounded-2xl p-4 bg-gray-50 hover:border-brand-purple-200 transition">
                          <div className="flex gap-2 items-center mb-3">
                            <input type="text" placeholder="Size (e.g. 300ml)" value={sv.size}
                              onChange={e => { const s = [...sizes]; s[sIdx].size = e.target.value; setSizes(s); }}
                              className="border-2 border-gray-200 p-2.5 rounded-xl flex-1 text-sm focus:border-brand-purple-500 focus:outline-none" />
                            <input type="number" placeholder="Price ₹" value={sv.price}
                              onChange={e => { const s = [...sizes]; s[sIdx].price = e.target.value; setSizes(s); }}
                              className="border-2 border-gray-200 p-2.5 rounded-xl w-28 text-sm focus:border-brand-purple-500 focus:outline-none" />
                            {sizes.length > 1 && (
                              <button type="button" onClick={() => setSizes(sizes.filter((_, i) => i !== sIdx))}
                                className="text-red-400 hover:text-red-600 p-2 bg-red-50 rounded-lg"><FaTimes /></button>
                            )}
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            {sv.existingImages?.map((img, iIdx) => (
                              <div key={iIdx} className="relative group">
                                <img src={img} className="w-16 h-16 object-cover rounded-xl border-2 border-gray-200" />
                                <button type="button" onClick={() => removeSizeExisting(sIdx, iIdx)}
                                  className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition">×</button>
                              </div>
                            ))}
                            {sv.newPreviews?.map((img, iIdx) => (
                              <div key={iIdx} className="relative group">
                                <img src={img} className="w-16 h-16 object-cover rounded-xl border-2 border-brand-orange-300" />
                                <button type="button" onClick={() => removeSizeNew(sIdx, iIdx)}
                                  className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition">×</button>
                              </div>
                            ))}
                            <label className="w-16 h-16 border-2 border-dashed border-brand-purple-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-purple-50 hover:border-brand-purple-500 transition text-brand-purple-400">
                              <FaImage className="text-lg" />
                              <span className="text-xs mt-0.5">Add</span>
                              <input type="file" multiple accept="image/*" className="hidden" onChange={e => handleSizeImageChange(sIdx, e)} />
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Form Footer */}
              <div className="flex justify-between items-center px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-3xl">
                <div className="flex gap-2">
                  {formTabs.map((tab, i) => (
                    <button key={tab.key} type="button" onClick={() => setActiveFormTab(tab.key)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${activeFormTab === tab.key ? 'bg-brand-purple-600 scale-125' : 'bg-gray-300'}`} />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={closeModal}
                    className="px-5 py-2.5 border-2 border-gray-200 rounded-xl font-semibold text-gray-600 hover:bg-gray-100 transition text-sm">
                    Cancel
                  </button>
                  <button type="submit" disabled={loading}
                    className="bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-60 text-sm">
                    {loading ? 'Saving...' : editingProduct ? '✓ Update Product' : '✓ Create Product'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
