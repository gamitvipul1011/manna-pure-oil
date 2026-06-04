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
} from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  // size mathi weight calculate karva mate helper
  // Supported: 1kg, 500g, 1L, 500ml, 2 liter
  // Simple rule: 1L = 1kg
  const getItemWeightInKg = (item) => {
    // jo direct field aapi hoy to pehla eni priority
    if (item.weightInKg !== undefined && item.weightInKg !== null) {
      return Number(item.weightInKg) || 0;
    }

    if (item.weightInGrams !== undefined && item.weightInGrams !== null) {
      return (Number(item.weightInGrams) || 0) / 1000;
    }

    const sizeText = String(item.size || '')
      .toLowerCase()
      .trim()
      .replace(',', '.');

    // 1kg, 2.5kg
    const kgMatch = sizeText.match(/(\d+(\.\d+)?)\s*kg\b/);
    if (kgMatch) {
      return parseFloat(kgMatch[1]) || 0;
    }

    // 500g, 250 gm, 100 grams
    const gramMatch = sizeText.match(/(\d+(\.\d+)?)\s*(g|gm|grams?)\b/);
    if (gramMatch) {
      return (parseFloat(gramMatch[1]) || 0) / 1000;
    }

    // 1L, 2 liter, 1 litre, 1 ltr
    const literMatch = sizeText.match(/(\d+(\.\d+)?)\s*(l|ltr|liter|litre)\b/);
    if (literMatch) {
      return parseFloat(literMatch[1]) || 0; // 1L = 1kg
    }

    // 500ml, 250 ml
    const mlMatch = sizeText.match(/(\d+(\.\d+)?)\s*ml\b/);
    if (mlMatch) {
      return (parseFloat(mlMatch[1]) || 0) / 1000; // 1000ml = 1kg
    }

    return 0;
  };

  const subtotal = Number(getCartTotal()) || 0;

  const totalWeight = cartItems.reduce((total, item) => {
    const itemWeight = getItemWeightInKg(item);
    return total + itemWeight * item.quantity;
  }, 0);

  // Exact weight pramane shipping
  const shippingCharge = totalWeight > 0 ? totalWeight * 20 : 0;

  // jo round-up joiye hoy to aa line use karo:
  // const shippingCharge = totalWeight > 0 ? Math.ceil(totalWeight) * 20 : 0;

  // Tax included in price
  const finalTotal = subtotal + shippingCharge;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center py-20">
        <div className="text-center">
          <FaShoppingCart className="text-9xl text-gray-300 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-brand-purple-800 mb-2">
            {t('cartEmpty')}
          </h2>
          <p className="text-brand-purple-400 text-lg mb-2">ખરીદી કાર્ટ ખાલી છે</p>
          <p className="text-xl text-gray-500 mb-8">Add some products to get started!</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white font-bold rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105"
          >
            <span>{t('startShopping')}</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-5xl font-bold text-brand-purple-800 mb-1">
              {t('cart')}
            </h1>
            <p className="text-brand-purple-400">ખરીદી કાર્ટ</p>
            <p className="text-gray-500">{getCartCount()} items in your cart</p>
          </div>

          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 text-brand-purple-600 hover:text-brand-purple-800 transition"
          >
            <FaArrowLeft />
            <span className="font-semibold">{t('continueShopping')}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => {
              const itemWeight = getItemWeightInKg(item);
              const itemTotal = (Number(item.price) || 0) * item.quantity;
              const totalItemWeight = itemWeight * item.quantity;

              return (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-6 hover:shadow-xl transition"
                >
                  <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-b from-amber-100 to-amber-200 rounded-xl flex items-center justify-center p-4">
                    <img
                      src={item.image || item.images?.[0]}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-purple-800 mb-1">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 mb-1">{item.size}</p>

                    {itemWeight > 0 && (
                      <p className="text-sm text-gray-500 mb-1">
                        Weight: {itemWeight.toFixed(2)} kg × {item.quantity} ={' '}
                        {totalItemWeight.toFixed(2)} kg
                      </p>
                    )}

                    <p className="text-3xl font-bold text-brand-orange-600">
                      ₹{Number(item.price).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center border-2 border-gray-300 rounded-full overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                      >
                        <FaMinus className="text-sm" />
                      </button>

                      <span className="px-6 py-2 font-bold">{item.quantity}</span>

                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                      >
                        <FaPlus className="text-sm" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-2 text-sm font-semibold"
                    >
                      <FaTrash />
                      {t('removeItem')}
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">{t('total')} / કુલ</p>
                    <p className="text-3xl font-bold text-brand-purple-800">
                      ₹{itemTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-2xl p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-brand-purple-800 mb-1">
                Order Summary
              </h2>
              <p className="text-brand-purple-400 text-sm mb-6">ઓર્ડર સારાંશ</p>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-600">{t('subtotal')} / પેટા-કુલ</span>
                  <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="text-gray-600">Total Weight / કુલ વજન</span>
                  <span className="font-semibold">{totalWeight.toFixed(2)} kg</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="text-gray-600">Shipping / ડિલિવરી</span>
                  <span className="font-semibold text-brand-orange-600">
                    ₹{shippingCharge.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="text-gray-600">Tax / GST</span>
                  <span className="font-semibold text-green-600">
                    Included in price
                  </span>
                </div>

                <div className="border-t-2 border-gray-300 pt-4">
                  <div className="flex justify-between text-2xl font-bold">
                    <span className="text-brand-purple-800">{t('total')}</span>
                    <span className="text-brand-orange-600">
                      ₹{finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full px-8 py-4 bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition transform hover:scale-105 mb-4">
                {t('checkout')} / ચૂકવણી
              </button>

              <Link
                to="/products"
                className="block text-center text-brand-purple-600 hover:text-brand-purple-800 font-semibold transition"
              >
                {t('continueShopping')}
              </Link>

              <div className="mt-8 pt-8 border-t border-gray-200 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <span className="text-xl">✓</span>
                  <span>Secure Payment / સુરક્ષિત ચૂકવણી</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🚚</span>
                  <span>Shipping Charge ₹20 per kg</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">↩</span>
                  <span>Easy 7-day Returns</span>
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
