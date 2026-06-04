import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FaLeaf, FaShoppingCart, FaEye, FaStar, 
  FaCheckCircle, FaTimesCircle 
} from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === 'gu';
  const { addToCart } = useCart();
  const inStock = product.inStock !== false;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inStock) addToCart(product, 1);
  };

  return (
    // ✅ Fix 1 - Backticks add કર્યા
    <div
      className={`group bg-[#D0F0C0] rounded-2xl overflow-hidden shadow-md 
        hover:shadow-2xl transition-all duration-300 relative border ${
          inStock ? 'border-gray-100' : 'border-red-100'
        }`}
    >
      {/* ✅ Fix 2 - "text" દૂર કર્યું */}

      {/* Stock Badge */}
      <div
        className={`absolute top-3 left-3 z-20 flex items-center gap-1 
          px-2 py-1 rounded-full text-xs font-bold shadow ${
            inStock ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
      >
        {inStock ? (
          <>
            <FaCheckCircle />
            <span>{isGu ? 'ઉપલબ્ધ' : 'In Stock'}</span>
          </>
        ) : (
          <>
            <FaTimesCircle />
            <span>{isGu ? 'નથી' : 'Out'}</span>
          </>
        )}
      </div>

      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-3 right-3 z-20 bg-orange-500 text-white 
                        px-2 py-1 rounded-full text-xs font-bold">
          {isGu ? 'ખાસ' : 'Featured'}
        </div>
      )}

      <Link to={`/products/${product._id}`}>
        {/* Image */}
        <div className="w-full overflow-hidden bg-gradient-to-br 
                        from-amber-50 to-amber-100 relative">
          <img
            src={product.image}
            alt={product.name}
            // ✅ Fix 3 - Backticks add કર્યા
            className={`w-full h-auto sm:h-[260px] md:h-[320px] object-cover 
              transition duration-500 group-hover:scale-110 ${
                inStock ? '' : 'grayscale opacity-60'
              }`}
            onError={(e) => {
              e.target.src =
                'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400';
            }}
          />

          {/* ✅ Fix 4 - "text" દૂર કર્યું */}

          {!inStock && (
            <div className="absolute inset-0 flex items-center justify-center 
                            bg-black/30">
              <span className="bg-red-500 text-white text-sm font-bold 
                               px-4 py-2 rounded-full rotate-[-12deg]">
                {isGu ? 'સ્ટૉક નથી' : 'Out of Stock'}
              </span>
            </div>
          )}

          {/* Quick View */}
          <div className="absolute inset-0 flex items-center justify-center 
                          opacity-0 group-hover:opacity-100 transition bg-black/10">
            <span className="bg-white/90 px-4 py-2 rounded-full text-sm 
                             font-bold flex items-center gap-2 shadow">
              <FaEye /> {isGu ? 'જુઓ' : 'View'}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-base font-bold text-gray-800 mb-1 line-clamp-1 
                         flex items-center justify-between">
            <span>
              {isGu && product.nameGu ? product.nameGu : product.name}
            </span>
            <FaLeaf className="text-green-500 ml-1 shrink-0" />
          </h3>

          {/* Stars */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xs" />
            ))}
            <span className="text-xs text-gray-400 ml-1">(4.8)</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-xs mb-3 line-clamp-2">
            {isGu && product.descriptionGu
              ? product.descriptionGu
              : product.description}
          </p>

          {/* Price & Cart */}
          <div className="flex items-center justify-between pt-3 
                          border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-400">
                {isGu ? 'થી શરૂ' : 'From'}
              </p>
              <p className="text-xl font-black text-gray-800">
                ₹{product.sizes?.[0]?.price || 0}
              </p>
            </div>

            {/* ✅ Fix 5 - "text" દૂર કર્યું, Cart Button add કર્યો */}
            <button
              onClick={handleAddToCart}
              disabled={!inStock}
              className={`flex items-center gap-2 px-4 py-2 rounded-full 
                text-sm font-bold transition-all ${
                  inStock
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >
              <FaShoppingCart />
              {isGu ? 'ઉમેરો' : 'Add'}
            </button>
          </div>
        </div>
      </Link>

      {/* ✅ Fix 6 - Link અંદર <a> નહીં, સીધો button */}
      <Link
        to={`/products/${product._id}`}
        className="flex items-center justify-center gap-2 mx-4 mb-4 py-2.5 
                   rounded-full bg-green-500 hover:bg-green-600 text-white 
                   text-sm font-bold transition-all hover:shadow-lg"
      >
        {isGu ? 'વિગતો જુઓ' : 'View Details'}
      </Link>
    </div>
  );
};

export default ProductCard;
