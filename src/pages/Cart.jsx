import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaArrowLeft,
  FaArrowRight,
  FaShieldAlt,
  FaTruck,
  FaUndoAlt,
  FaWeight,
} from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  const getItemWeightInKg = (item) => {
    if (item.weightInKg !== undefined && item.weightInKg !== null) {
      return Number(item.weightInKg) || 0;
    }
    if (item.weightInGrams !== undefined && item.weightInGrams !== null) {
      return (Number(item.weightInGrams) || 0) / 1000;
    }

    const sizeText = String(item.size || '').toLowerCase().trim().replace(',', '.');

    const kgMatch = sizeText.match(/(\d+(\.\d+)?)\s*kg\b/);
    if (kgMatch) return parseFloat(kgMatch[1]) || 0;

    const gramMatch = sizeText.match(/(\d+(\.\d+)?)\s*(g|gm|grams?)\b/);
    if (gramMatch) return (parseFloat(gramMatch[1]) || 0) / 1000;

    const literMatch = sizeText.match(/(\d+(\.\d+)?)\s*(l|ltr|liter|litre)\b/);
    if (literMatch) return parseFloat(literMatch[1]) || 0;

    const mlMatch = sizeText.match(/(\d+(\.\d+)?)\s*ml\b/);
    if (mlMatch) return (parseFloat(mlMatch[1]) || 0) / 1000;

    return 0;
  };

  const subtotal = Number(getCartTotal()) || 0;

  const totalWeight = cartItems.reduce((total, item) => {
    const itemWeight = getItemWeightInKg(item);
    return total + itemWeight * item.quantity;
  }, 0);

  const shippingCharge = totalWeight > 0 ? totalWeight * 20 : 0;
  const finalTotal = subtotal + shippingCharge;

  // ========== EMPTY CART ==========
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        <div className="text-center relative z-10">
          <div className="w-40 h-40 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
            <FaShoppingCart className="text-7xl text-white/60" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-3">{t('cartEmpty')}</h2>
          <p className="text-purple-200 text-xl mb-2">ખરીદી કાર્ટ ખાલી છે</p>
          <p className="text-lg text-purple-300 mb-10">Add some products to get started!</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all transform hover:scale-105 hover:-translate-y-1"
          >
            <span>{t('startShopping')}</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  // ========== CART WITH ITEMS ==========
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">{t('cart')}</h1>
            <p className="text-purple-200 text-lg">ખરીદી કાર્ટ</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20">
                {getCartCount()} items
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-1">
                <FaWeight className="text-xs" /> {totalWeight.toFixed(2)} kg
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all"
          >
            <FaArrowLeft />
            <span className="font-semibold">{t('continueShopping')}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ========== CART ITEMS ========== */}
          <div className="lg:col-span-2 space-y-5">
            {cartItems.map((item) => {
              const itemWeight = getItemWeightInKg(item);
              const itemTotal = (Number(item.price) || 0) * item.quantity;
              const totalItemWeight = itemWeight * item.quantity;

              return (
                <div
                  key={item.uniqueKey || `${item._id}_${item.size}`}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-amber-200 to-amber-300 rounded-xl flex items-center justify-center p-3 shadow-lg group-hover:shadow-amber-500/20 transition-all">
                    <img
                      src={item.image || item.images?.[0]}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                      <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full border border-purple-400/30">
                        {item.size}
                      </span>
                      {itemWeight > 0 && (
                        <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full border border-blue-400/30 flex items-center gap-1">
                          <FaWeight className="text-xs" />
                          {itemWeight.toFixed(2)} kg × {item.quantity} = {totalItemWeight.toFixed(2)} kg
                        </span>
                      )}
                    </div>
                    <p className="text-3xl font-bold text-orange-400">
                      ₹{Number(item.price).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity - size pass karo */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full overflow-hidden border border-white/20">
                      <button
                        onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)}
                        className="px-4 py-3 text-white hover:bg-white/20 transition"
                      >
                        <FaMinus className="text-sm" />
                      </button>
                      <span className="px-6 py-3 font-bold text-white text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                        className="px-4 py-3 text-white hover:bg-white/20 transition"
                      >
                        <FaPlus className="text-sm" />
                      </button>
                    </div>

                    {/* Remove - size pass karo */}
                    <button
                      onClick={() => removeFromCart(item._id, item.size)}
                      className="text-red-300 hover:text-red-400 flex items-center gap-2 text-sm font-semibold transition"
                    >
                      <FaTrash />
                      {t('removeItem')}
                    </button>
                  </div>

                  {/* Total */}
                  <div className="text-center sm:text-right">
                    <p className="text-sm text-purple-200 mb-1">{t('total')} / કુલ</p>
                    <p className="text-3xl font-bold text-white">
                      ₹{itemTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========== ORDER SUMMARY ========== */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 sticky top-24 border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-1">Order Summary</h2>
              <p className="text-purple-200 text-sm mb-6">ઓર્ડર સારાંશ</p>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-purple-200">{t('subtotal')} / પેટા-કુલ</span>
                  <span className="font-semibold text-white">₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="text-purple-200 flex items-center gap-2">
                    <FaWeight className="text-sm" /> Total Weight / કુલ વજન
                  </span>
                  <span className="font-semibold text-white">{totalWeight.toFixed(2)} kg</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="text-purple-200 flex items-center gap-2">
                    <FaTruck className="text-sm" /> Shipping / ડિલિવરી
                  </span>
                  {shippingCharge > 0 ? (
                    <span className="font-semibold text-orange-400">
                      ₹{shippingCharge.toFixed(2)}
                    </span>
                  ) : (
                    <span className="font-semibold text-green-400">Free</span>
                  )}
                </div>

                <div className="bg-white/5 rounded-lg px-4 py-2 text-sm text-purple-300 border border-white/10">
                  ₹20 per kg × {totalWeight.toFixed(2)} kg = ₹{shippingCharge.toFixed(2)}
                </div>

                <div className="flex justify-between text-lg">
                  <span className="text-purple-200">Tax / GST</span>
                  <span className="font-semibold text-green-400">Included in price</span>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between text-2xl font-bold">
                    <span className="text-white">{t('total')}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                      ₹{finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all transform hover:scale-105 hover:-translate-y-1 mb-4">
                {t('checkout')} / ચૂકવણી
              </button>

              <Link
                to="/products"
                className="block text-center text-purple-200 hover:text-white font-semibold transition"
              >
                {t('continueShopping')}
              </Link>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3 text-sm text-purple-200">
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                  <FaShieldAlt className="text-green-400 text-lg" />
                  <span>Secure Payment / સુરક્ષિત ચૂકવણી</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                  <FaTruck className="text-blue-400 text-lg" />
                  <span>Shipping ₹20 per kg / ₹20 પ્રતિ કિલો</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                  <FaUndoAlt className="text-orange-400 text-lg" />
                  <span>Easy 7-day Returns / 7 દિવસમાં પરત</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
