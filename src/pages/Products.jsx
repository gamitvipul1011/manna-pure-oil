import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { FaFilter, FaSearch } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Products = () => {
  const { t, i18n } = useTranslation();
  const isGu = i18n.language === 'gu';
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (location.state?.categoryId) setSelectedCategory(location.state.categoryId);
  }, [location.state]);

  const filtered = products.filter(p => {
    const catMatch = selectedCategory === 'all' || p.category._id === selectedCategory;
    const searchMatch = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.nameGu && p.nameGu.includes(searchQuery));
    return catMatch && searchMatch;
  });

  return (
    <div className="bg-gradient-purple min-h-screen">
      {/* Banner */}
   <div className="relative w-full h-[480px] overflow-hidden">
  <img
    src="/images/sunflower oil 1920 x 700.jpg"
    alt="banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  

  {/* Text Content */}
 

</div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text"
                placeholder={isGu ? 'શોધો...' : 'Search products...'}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none">
                <option value="all">{isGu ? 'બધી શ્રેણી' : 'All Categories'}</option>
                {categories.map(cat => (
                  <option key={cat._id} value={cat._id}>{isGu ? cat.nameGu : cat.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <button onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${selectedCategory === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
              {isGu ? 'બધા' : 'All'}
            </button>
            {categories.map(cat => (
              <button key={cat._id} onClick={() => setSelectedCategory(cat._id)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${selectedCategory === cat._id ? 'bg-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                {isGu ? cat.nameGu : cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white">{isGu ? 'કોઈ ઉત્પાદન મળ્યું નથી' : 'No products found'}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
