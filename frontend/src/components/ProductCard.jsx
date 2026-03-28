import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLeaf, FaShoppingCart, FaEye, FaStar, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { t, i18n } = useTranslation();
  const isGu = i18n.language === 'gu';
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.inStock) {
      addToCart(product, 1);
    }
  };

  const inStock = product.inStock !== false; // default true if not set

  return (
    <div className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 relative border ${inStock ? 'border-gray-100' : 'border-red-100'}`}>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

      {/* Quick View Button */}
      <Link
        to={`/product/${product._id}`}
        className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-amber-500 hover:text-white"
      >
        <FaEye className="text-lg" />
      </Link>

      {/* ✅ Stock Badge — Available / Not Available */}
      <div className={`absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow ${
        inStock
          ? 'bg-green-500 text-white'
          : 'bg-red-500 text-white'
      }`}>
        {inStock ? (
          <>
            <FaCheckCircle className="text-xs" />
            <span>{isGu ? 'ઉપલબ્ધ' : 'Available'}</span>
          </>
        ) : (
          <>
            <FaTimesCircle className="text-xs" />
            <span>{isGu ? 'ઉપલબ્ધ નથી' : 'Not Available'}</span>
          </>
        )}
      </div>

      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-14 left-4 z-20 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow animate-pulse">
          {isGu ? 'ખાસ' : 'Featured'}
        </div>
      )}

      <Link to={`/product/${product._id}`} className="block">

        {/* Image Section */}
        <div
  className={`min-h-[320px] flex items-center justify-center p-6 relative overflow-hidden rounded-t-2xl ${
    inStock
      ? 'bg-gradient-to-br from-amber-50 via-orange-100 to-amber-200'
      : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100'
  }`}
>
  {/* Hover Shine Effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/20 blur-xl"></div>

  {/* Product Image */}
  <img
    src={product.image || 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500'}
    alt={product.name}
    className={`w-56 h-56 md:w-72 md:h-72 object-contain transition-all duration-500 ease-in-out transform group-hover:scale-110 drop-shadow-[0_25px_30px_rgba(0,0,0,0.25)] ${
      inStock ? '' : 'grayscale opacity-60'
    }`}
    onError={(e) => {
      e.target.src =
        'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500';
    }}
  />

          

          {/* Out of Stock overlay text */}
          {!inStock && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="bg-red-500/80 text-white text-sm font-bold px-4 py-2 rounded-full rotate-[-15deg]">
                {isGu ? 'સ્ટૉક નથી' : 'Out of Stock'}
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6 bg-white">

          <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-between group-hover:text-amber-600 transition-colors">
            <span className="line-clamp-1">
              {isGu && product.nameGu ? product.nameGu : product.name}
            </span>
            <FaLeaf className="text-green-500 text-lg ml-2 flex-shrink-0" />
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
            <span className="text-xs text-gray-500 ml-2">(4.8)</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 text-sm line-clamp-2">
            {(isGu && product.descriptionGu?.trim()) ? product.descriptionGu : (product.description || 'Pure and natural oil extracted using traditional cold press methods.')}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
              {t('coldPressed') || '100% Cold Pressed'}
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
              {t('natural') || '100% Natural'}
            </span>
          </div>

          {/* Price & Button */}
          <div className="flex items-end justify-between pt-4 border-t border-gray-100">
            <div>
              <p className="text-sm text-gray-500 mb-1">
                {isGu ? 'શરૂઆત' : 'Starting from'}
              </p>
              <p className="text-2xl font-bold text-gray-900">
                ₹{product.sizes?.[0]?.price || product.price || 0}
              </p>
              <p className="text-xs text-gray-500">{product.sizes?.[0]?.size || product.unit || ''}</p>
            </div>

            <div className="flex flex-col gap-2 items-end">
              <button
                onClick={handleAddToCart}
                disabled={!inStock}
                className={`px-5 py-3 font-semibold rounded-full transition-all duration-300 flex items-center space-x-2 text-sm ${
                  inStock
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <FaShoppingCart />
                <span>{isGu ? 'ઉમેરો' : 'Add'}</span>
              </button>
              
            </div>
          </div>

          
        </div>
      </Link>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(253, 186, 116, 0.4) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
