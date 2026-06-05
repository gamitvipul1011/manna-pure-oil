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
  FaGift,
} from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  const FREE_DELIVERY_THRESHOLD = 999;
  const isGuj = i18n.language === 'gu';

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

  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;
  const calculatedShipping = totalWeight > 0 ? totalWeight * 20 : 0;
  const shippingCharge = isFreeDelivery ? 0 : calculatedShipping;
  const shippingDiscount = isFreeDelivery ? calculatedShipping : 0;
  const amountNeededForFree = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);

  const finalTotal = subtotal + shippingCharge;

  // ========== EMPTY CART ==========
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#9B7BC9] flex items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        <div className="text-center relative z-10">
          <div className="w-40 h-40 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
            <FaShoppingCart className="text-7xl text-white/60" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-3">
            {isGuj ? 'કાર્ટ ખાલી છે' : 'Cart is Empty'}
          </h2>
          <p className="text-xl text-purple-300 mb-10">
            {isGuj
              ? 'શરૂ કરવા માટે કેટલીક પ્રોડક્ટ્સ ઉમેરો!'
              : 'Add some products to get started!'}
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all transform hover:scale-105 hover:-translate-y-1"
          >
            <span>{isGuj ? 'ખરીદી શરૂ કરો' : 'Start Shopping'}</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  // ========== CART WITH ITEMS ==========
  return (
    <div className="min-h-screen bg-[#A855F7] via-purple-800 to-indigo-900 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">
              {isGuj ? 'ખરીદી કાર્ટ' : 'Shopping Cart'}
            </h1>
            <p className="text-purple-200 text-lg">
              {isGuj
                ? `તમારી કાર્ટમાં ${getCartCount()} વસ્તુઓ છે`
                : `${getCartCount()} items in your cart`}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20">
                {getCartCount()} {isGuj ? 'વસ્તુઓ' : 'items'}
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-1">
                <FaWeight className="text-xs" /> {totalWeight.toFixed(2)} {isGuj ? 'કિલો' : 'kg'}
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all"
          >
            <FaArrowLeft />
            <span className="font-semibold">
              {isGuj ? 'ખરીદી ચાલુ રાખો' : 'Continue Shopping'}
            </span>
          </button>
        </div>

        {/* ✅ FREE DELIVERY PROGRESS BAR */}
        {!isFreeDelivery && (
          <div className="mb-8 bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <FaGift className="text-yellow-400 text-xl animate-bounce" />
              <p className="text-white font-semibold">
                {isGuj ? (
                  <>
                    <span className="text-yellow-400 text-lg">₹{amountNeededForFree.toFixed(2)}</span> વધુ ઉમેરો અને{' '}
                    <span className="text-green-400 font-bold">ફ્રી ડિલિવરી</span> મેળવો!
                  </>
                ) : (
                  <>
                    Add <span className="text-yellow-400 text-lg">₹{amountNeededForFree.toFixed(2)}</span> more for{' '}
                    <span className="text-green-400 font-bold">FREE Delivery!</span>
                  </>
                )}
              </p>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${Math.min((subtotal / FREE_DELIVERY_THRESHOLD) * 100, 100)}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-purple-300">
              <span>₹0</span>
              <span>₹{FREE_DELIVERY_THRESHOLD} ({isGuj ? 'ફ્રી ડિલિવરી' : 'Free Delivery'})</span>
            </div>
          </div>
        )}

        {/* ✅ FREE DELIVERY UNLOCKED BANNER */}
        {isFreeDelivery && (
          <div className="mb-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-5 border border-green-400/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center">
                <FaTruck className="text-green-400 text-xl" />
              </div>
              <div>
                <p className="text-green-400 font-bold text-lg flex items-center gap-2">
                  🎉 {isGuj ? 'ફ્રી ડિલિવરી મળશે!' : 'Free Delivery Unlocked!'}
                </p>
                <p className="text-green-300 text-sm">
                  {isGuj
                    ? `તમે ₹${FREE_DELIVERY_THRESHOLD} થી ઉપર ખરીદી કરી છે.`
                    : `You have shopped above ₹${FREE_DELIVERY_THRESHOLD}.`}
                </p>
              </div>
              {shippingDiscount > 0 && (
                <div className="ml-auto text-right">
                  <p className="text-green-300 text-sm">
                    {isGuj ? 'તમે બચાવ્યા' : 'You saved'}
                  </p>
                  <p className="text-green-400 font-bold text-lg">₹{shippingDiscount.toFixed(2)}</p>
                </div>
              )}
            </div>
          </div>
        )}

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
                          {itemWeight.toFixed(2)} {isGuj ? 'કિલો' : 'kg'} × {item.quantity} = {totalItemWeight.toFixed(2)} {isGuj ? 'કિલો' : 'kg'}
                        </span>
                      )}
                    </div>
                    <p className="text-3xl font-bold text-orange-400">
                      ₹{Number(item.price).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity */}
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

                    <button
                      onClick={() => removeFromCart(item._id, item.size)}
                      className="text-red-300 hover:text-red-400 flex items-center gap-2 text-sm font-semibold transition"
                    >
                      <FaTrash />
                      {isGuj ? 'કાઢી નાખો' : 'Remove'}
                    </button>
                  </div>

                  {/* Total */}
                  <div className="text-center sm:text-right">
                    <p className="text-sm text-purple-200 mb-1">
                      {isGuj ? 'કુલ' : 'Total'}
                    </p>
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
              <h2 className="text-2xl font-bold text-white mb-1">
                {isGuj ? 'ઓર્ડર સારાંશ' : 'Order Summary'}
              </h2>
              <p className="text-purple-200 text-sm mb-6">
                {isGuj ? 'તમારા ઓર્ડરની વિગતો' : 'Your order details'}
              </p>

              <div className="space-y-4 mb-6">
                {/* Subtotal */}
                <div className="flex justify-between text-lg">
                  <span className="text-purple-200">
                    {isGuj ? 'પેટા-કુલ' : 'Subtotal'}
                  </span>
                  <span className="font-semibold text-white">₹{subtotal.toFixed(2)}</span>
                </div>

                {/* Total Weight */}
                <div className="flex justify-between text-lg">
                  <span className="text-purple-200 flex items-center gap-2">
                    <FaWeight className="text-sm" />
                    {isGuj ? 'કુલ વજન' : 'Total Weight'}
                  </span>
                  <span className="font-semibold text-white">
                    {totalWeight.toFixed(2)} {isGuj ? 'કિલો' : 'kg'}
                  </span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between text-lg">
                  <span className="text-purple-200 flex items-center gap-2">
                    <FaTruck className="text-sm" />
                    {isGuj ? 'ડિલિવરી' : 'Shipping'}
                  </span>
                  {isFreeDelivery ? (
                    <div className="text-right">
                      <span className="text-gray-400 line-through text-sm mr-2">
                        ₹{calculatedShipping.toFixed(2)}
                      </span>
                      <span className="font-bold text-green-400">
                        {isGuj ? 'ફ્રી' : 'FREE'}
                      </span>
                    </div>
                  ) : (
                    <span className="font-semibold text-orange-400">
                      ₹{shippingCharge.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Shipping calculation info */}
                {!isFreeDelivery && (
                  <div className="bg-white/5 rounded-lg px-4 py-2 text-sm text-purple-300 border border-white/10">
                    ₹20 {isGuj ? 'પ્રતિ કિલો' : 'per kg'} × {totalWeight.toFixed(2)} {isGuj ? 'કિલો' : 'kg'} = ₹{shippingCharge.toFixed(2)}
                  </div>
                )}

                {/* Free delivery savings */}
                {isFreeDelivery && shippingDiscount > 0 && (
                  <div className="bg-green-500/10 rounded-lg px-4 py-2 text-sm text-green-400 border border-green-500/20 flex items-center gap-2">
                    <FaGift className="text-green-400 flex-shrink-0" />
                    <span>
                      {isGuj
                        ? `ડિલિવરી પર ₹${shippingDiscount.toFixed(2)} બચાવ્યા!`
                        : `You saved ₹${shippingDiscount.toFixed(2)} on delivery!`}
                    </span>
                  </div>
                )}

                {/* Tax */}
                <div className="flex justify-between text-lg">
                  <span className="text-purple-200">
                    {isGuj ? 'ટેક્સ / GST' : 'Tax / GST'}
                  </span>
                  <span className="font-semibold text-green-400">
                    {isGuj ? 'કિંમતમાં સમાવિષ્ટ' : 'Included in price'}
                  </span>
                </div>

                {/* Final Total */}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between text-2xl font-bold">
                    <span className="text-white">
                      {isGuj ? 'કુલ' : 'Total'}
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                      ₹{finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all transform hover:scale-105 hover:-translate-y-1 mb-4">
                {isGuj ? 'ચૂકવણી કરો' : 'Proceed to Checkout'}
              </button>

              {/* Continue Shopping */}
              <Link
                to="/products"
                className="block text-center text-purple-200 hover:text-white font-semibold transition"
              >
                {isGuj ? 'ખરીદી ચાલુ રાખો' : 'Continue Shopping'}
              </Link>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3 text-sm text-purple-200">
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                  <FaShieldAlt className="text-green-400 text-lg flex-shrink-0" />
                  <span>
                    {isGuj ? 'સુરક્ષિત ચૂકવણી' : 'Secure Payment'}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-green-500/10 rounded-lg px-4 py-3 border border-green-500/20">
                  <FaTruck className="text-green-400 text-lg flex-shrink-0" />
                  <span>
                    {isGuj
                      ? `₹${FREE_DELIVERY_THRESHOLD} ઉપર ફ્રી ડિલિવરી`
                      : `Free Delivery above ₹${FREE_DELIVERY_THRESHOLD}`}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                  <FaUndoAlt className="text-orange-400 text-lg flex-shrink-0" />
                  <span>
                    {isGuj ? '7 દિવસમાં સરળ રિટર્ન' : 'Easy 7-day Returns'}
                  </span>
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
