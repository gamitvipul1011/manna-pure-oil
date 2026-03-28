import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { FaFilter, FaSearch } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { productAPI, categoryAPI } from '../utils/api';
import { toast } from 'react-toastify';

const Products = () => {
  const { t, i18n } = useTranslation();
  const isGu = i18n.language === 'gu';
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Auto-select category if coming from Home page category click
  useEffect(() => {
    if (location.state?.categoryId) {
      setSelectedCategory(location.state.categoryId);
    }
  }, [location.state]);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchQuery, products]);

  const fetchData = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        productAPI.getAll(),
        categoryAPI.getAll()
      ]);
      setProducts(productsRes.data);
      setCategories(categoriesRes.data);
      setFilteredProducts(productsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => {
        const categoryId = typeof p.category === 'object' ? p.category._id : p.category;
        return categoryId === selectedCategory;
      });
    }

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return products.length;
    return products.filter(p => {
      const prodCategoryId = typeof p.category === 'object' ? p.category._id : p.category;
      return prodCategoryId === categoryId;
    }).length;
  };

  const selectedCategoryName = selectedCategory !== 'all'
    ? categories.find(c => c._id === selectedCategory)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-purple-700 to-purple-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            {t('products')}
          </h1>
          <p className="text-xl text-white/80">
            {isGu ? 'અમારા શુદ્ધ, કોલ્ડ-પ્રેસ્ડ તેલ જુઓ' : 'Discover our range of pure, cold-pressed oils'}
          </p>
          {/* Show selected category banner */}
          {selectedCategoryName && (
            <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full font-semibold text-lg">
              <span>📂</span>
              <span>
                {isGu && selectedCategoryName.nameGu ? selectedCategoryName.nameGu : selectedCategoryName.name}
              </span>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="bg-amber-200 rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={isGu ? 'ઉત્પાદન શોધો...' : 'Search products...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-purple-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-purple-500 focus:outline-none transition-colors appearance-none cursor-pointer bg-white"
              >
                <option value="all">
                  {isGu ? `બધી શ્રેણી (${getCategoryCount('all')})` : `All Categories (${getCategoryCount('all')})`}
                </option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {isGu && cat.nameGu ? cat.nameGu : cat.name} ({getCategoryCount(cat._id)})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isGu ? 'બધા' : 'All'} ({getCategoryCount('all')})
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => setSelectedCategory(cat._id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat._id
                    ? 'bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isGu && cat.nameGu ? cat.nameGu : cat.name} ({getCategoryCount(cat._id)})
              </button>
            ))}
          </div>
        </div>

        {/* Active Filter Info */}
        {(selectedCategory !== 'all' || searchQuery) && (
          <div className="mb-6 flex items-center justify-between bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-white font-semibold">
                {isGu ? `${filteredProducts.length} ઉત્પાદન મળ્યા` : `Showing ${filteredProducts.length} product(s)`}
              </span>
              {selectedCategory !== 'all' && selectedCategoryName && (
                <span className="px-3 py-1 bg-white/30 text-white rounded-full text-sm font-semibold">
                  {isGu && selectedCategoryName.nameGu ? selectedCategoryName.nameGu : selectedCategoryName.name}
                </span>
              )}
              {searchQuery && (
                <span className="px-3 py-1 bg-white/30 text-white rounded-full text-sm font-semibold">
                  "{searchQuery}"
                </span>
              )}
            </div>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="text-white/80 hover:text-white font-semibold text-sm underline"
            >
              {isGu ? 'ફિલ્ટર હટાવો' : 'Clear Filters'}
            </button>
          </div>
        )}

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-2xl text-white font-bold mb-2">
              {isGu ? 'કોઈ ઉત્પાદન મળ્યું નહીં' : 'No products found'}
            </p>
            <p className="text-white/70 mb-6">
              {searchQuery
                ? (isGu ? `"${searchQuery}" માટે કોઈ ઉત્પાદન નથી` : `No products match "${searchQuery}"`)
                : (isGu ? 'આ શ્રેણીમાં કોઈ ઉત્પાદન નથી' : 'No products in this category')
              }
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-6 py-3 bg-white text-brand-purple-700 font-bold rounded-full hover:bg-white/90 transition-colors"
            >
              {isGu ? 'બધા ઉત્પાદન જુઓ' : 'View All Products'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Products;
