import React, { useState } from 'react';
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
  FaWhatsapp,
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaTimes,
  FaCity,
  FaMailBulk,
} from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount, clearCart } = useCart();

  const FREE_DELIVERY_THRESHOLD = 999;
  const SHIPPING_PER_KG_SLAB = 20; // ₹20 per kg slab
  const isGuj = i18n.language === 'gu';

  // ✅ Your Business WhatsApp Number
  const WHATSAPP_NUMBER = '917874239595';

  // Checkout form state
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    note: '',
  });
  const [errors, setErrors] = useState({});

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

  // ✅ NEW: Slab-based shipping calculation
  // 0-1kg = ₹20, 1.001-2kg = ₹40, 2.001-3kg = ₹60, etc.
  const calculateShipping = (weightInKg) => {
    if (weightInKg <= 0) return 0;
    const slabs = Math.ceil(weightInKg); // Round UP to next whole kg
    return slabs * SHIPPING_PER_KG_SLAB;
  };

  // ✅ Get slab info for display
  const getSlabInfo = (weightInKg) => {
    if (weightInKg <= 0) return { slabs: 0, minKg: 0, maxKg: 0 };
    const slabs = Math.ceil(weightInKg);
    const minKg = slabs - 1;
    const maxKg = slabs;
    return { slabs, minKg, maxKg };
  };

  const subtotal = Number(getCartTotal()) || 0;

  const totalWeight = cartItems.reduce((total, item) => {
    const itemWeight = getItemWeightInKg(item);
    return total + itemWeight * item.quantity;
  }, 0);

  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;
  const calculatedShipping = calculateShipping(totalWeight);
  const shippingCharge = isFreeDelivery ? 0 : calculatedShipping;
  const shippingDiscount = isFreeDelivery ? calculatedShipping : 0;
  const amountNeededForFree = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const slabInfo = getSlabInfo(totalWeight);

  const finalTotal = subtotal + shippingCharge;

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!customerInfo.name.trim()) {
      newErrors.name = isGuj ? 'નામ જરૂરી છે' : 'Name is required';
    }

    if (!customerInfo.phone.trim()) {
      newErrors.phone = isGuj ? 'ફોન નંબર જરૂરી છે' : 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(customerInfo.phone.trim())) {
      newErrors.phone = isGuj ? 'માન્ય 10 અંકનો ફોન નંબર દાખલ કરો' : 'Enter valid 10-digit phone number';
    }

    if (!customerInfo.address.trim()) {
      newErrors.address = isGuj ? 'સરનામું જરૂરી છે' : 'Address is required';
    }

    if (!customerInfo.city.trim()) {
      newErrors.city = isGuj ? 'શહેર જરૂરી છે' : 'City is required';
    }

    if (!customerInfo.pincode.trim()) {
      newErrors.pincode = isGuj ? 'પિનકોડ જરૂરી છે' : 'Pincode is required';
    } else if (!/^\d{6}$/.test(customerInfo.pincode.trim())) {
      newErrors.pincode = isGuj ? 'માન્ય 6 અંકનો પિનકોડ દાખલ કરો' : 'Enter valid 6-digit pincode';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    const orderDate = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const orderNumber = `ORD-${Date.now().toString().slice(-8)}`;

    let message = '';

    if (isGuj) {
      message += `🛒 *નવો ઓર્ડર - ${orderNumber}*\n`;
      message += `📅 તારીખ: ${orderDate}\n`;
      message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

      message += `👤 *ગ્રાહકની માહિતી:*\n`;
      message += `• નામ: ${customerInfo.name}\n`;
      message += `• ફોન: ${customerInfo.phone}\n`;
      message += `• સરનામું: ${customerInfo.address}\n`;
      message += `• શહેર: ${customerInfo.city}\n`;
      message += `• પિનકોડ: ${customerInfo.pincode}\n`;
      if (customerInfo.note) {
        message += `• નોંધ: ${customerInfo.note}\n`;
      }
      message += `\n━━━━━━━━━━━━━━━━━━━━\n\n`;

      message += `📦 *ઓર્ડરની વિગતો:*\n\n`;

      cartItems.forEach((item, index) => {
        const itemWeight = getItemWeightInKg(item);
        const itemTotal = (Number(item.price) || 0) * item.quantity;
        const totalItemWeight = itemWeight * item.quantity;

        message += `${index + 1}. *${item.name}*\n`;
        message += `   📏 સાઇઝ: ${item.size}\n`;
        message += `   💰 ભાવ: ₹${Number(item.price).toFixed(2)}\n`;
        message += `   🔢 જથ્થો: ${item.quantity}\n`;
        if (itemWeight > 0) {
          message += `   ⚖️ વજન: ${totalItemWeight.toFixed(2)} કિલો\n`;
        }
        message += `   💵 કુલ: ₹${itemTotal.toFixed(2)}\n\n`;
      });

      message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

      message += `💰 *બિલ સારાંશ:*\n`;
      message += `• પેટા-કુલ: ₹${subtotal.toFixed(2)}\n`;
      message += `• કુલ વજન: ${totalWeight.toFixed(2)} કિલો\n`;
      message += `• શિપિંગ સ્લેબ: ${slabInfo.slabs} kg (₹${SHIPPING_PER_KG_SLAB}/kg સ્લેબ)\n`;

      if (isFreeDelivery) {
        message += `• ડિલિવરી: ~~₹${calculatedShipping.toFixed(2)}~~ *ફ્રી* ✅\n`;
        if (shippingDiscount > 0) {
          message += `• ડિલિવરી બચત: ₹${shippingDiscount.toFixed(2)} 🎉\n`;
        }
      } else {
        message += `• ડિલિવરી: ₹${shippingCharge.toFixed(2)}\n`;
      }

      message += `• ટેક્સ/GST: કિંમતમાં સમાવિષ્ટ\n`;
      message += `\n🔥 *કુલ ચૂકવણી: ₹${finalTotal.toFixed(2)}*\n`;
      message += `\n━━━━━━━━━━━━━━━━━━━━\n`;
      message += `📌 *ચૂકવણી પદ્ધતિ:* ડિલિવરી પર ચૂકવણી (COD) / ઓનલાઇન\n`;
      message += `\n🙏 ઓર્ડર કરવા બદલ આભાર!`;
    } else {
      message += `🛒 *New Order - ${orderNumber}*\n`;
      message += `📅 Date: ${orderDate}\n`;
      message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

      message += `👤 *Customer Details:*\n`;
      message += `• Name: ${customerInfo.name}\n`;
      message += `• Phone: ${customerInfo.phone}\n`;
      message += `• Address: ${customerInfo.address}\n`;
      message += `• City: ${customerInfo.city}\n`;
      message += `• Pincode: ${customerInfo.pincode}\n`;
      if (customerInfo.note) {
        message += `• Note: ${customerInfo.note}\n`;
      }
      message += `\n━━━━━━━━━━━━━━━━━━━━\n\n`;

      message += `📦 *Order Items:*\n\n`;

      cartItems.forEach((item, index) => {
        const itemWeight = getItemWeightInKg(item);
        const itemTotal = (Number(item.price) || 0) * item.quantity;
        const totalItemWeight = itemWeight * item.quantity;

        message += `${index + 1}. *${item.name}*\n`;
        message += `   📏 Size: ${item.size}\n`;
        message += `   💰 Price: ₹${Number(item.price).toFixed(2)}\n`;
        message += `   🔢 Qty: ${item.quantity}\n`;
        if (itemWeight > 0) {
          message += `   ⚖️ Weight: ${totalItemWeight.toFixed(2)} kg\n`;
        }
        message += `   💵 Total: ₹${itemTotal.toFixed(2)}\n\n`;
      });

      message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

      message += `💰 *Bill Summary:*\n`;
      message += `• Subtotal: ₹${subtotal.toFixed(2)}\n`;
      message += `• Total Weight: ${totalWeight.toFixed(2)} kg\n`;
      message += `• Shipping Slab: ${slabInfo.slabs} kg (₹${SHIPPING_PER_KG_SLAB}/kg slab)\n`;

      if (isFreeDelivery) {
        message += `• Delivery: ~~₹${calculatedShipping.toFixed(2)}~~ *FREE* ✅\n`;
        if (shippingDiscount > 0) {
          message += `• Delivery Savings: ₹${shippingDiscount.toFixed(2)} 🎉\n`;
        }
      } else {
        message += `• Delivery: ₹${shippingCharge.toFixed(2)}\n`;
      }

      message += `• Tax/GST: Included in price\n`;
      message += `\n🔥 *Total Payable: ₹${finalTotal.toFixed(2)}*\n`;
      message += `\n━━━━━━━━━━━━━━━━━━━━\n`;
      message += `📌 *Payment Method:* Cash on Delivery (COD) / Online\n`;
      message += `\n🙏 Thank you for your order!`;
    }

    return message;
  };

  // Handle WhatsApp checkout
  const handleWhatsAppCheckout = () => {
    if (!validateForm()) return;

    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
    setShowCheckoutModal(false);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

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
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-12 relative overflow-hidden">
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

                  {/* ✅ NEW: Slab-based shipping calculation info */}
                  

                      {/* ✅ Slab visual table */}
                      <div className="mt-2 bg-white/5 rounded-lg p-2 text-xs text-purple-400">
                        <p className="font-semibold mb-1">{isGuj ? 'સ્લેબ ચાર્ટ:' : 'Slab Chart:'}</p>
                        <div className="grid grid-cols-2 gap-1">
                          {[1, 2, 3, 4, 5].map((kg) => (
                            <div
                              key={kg}
                              className={`flex justify-between px-2 py-1 rounded ${
                                slabInfo.slabs === kg
                                  ? 'bg-orange-500/20 text-orange-300 font-bold'
                                  : ''
                              }`}
                            >
                              <span>
                                {kg === 1 ? '0' : kg - 1}.001-{kg} {isGuj ? 'કિલો' : 'kg'}
                              </span>
                              <span>₹{kg * SHIPPING_PER_KG_SLAB}</span>
                            </div>
                          ))}
                        </div>
                      </div>
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

                {/* ✅ WhatsApp Checkout Button */}
                <button
                  onClick={() => setShowCheckoutModal(true)}
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all transform hover:scale-105 hover:-translate-y-1 mb-4 flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>{isGuj ? 'WhatsApp પર ઓર્ડર કરો' : 'Order via WhatsApp'}</span>
                </button>

                {/* Info text */}
                <div className="bg-green-500/10 rounded-xl px-4 py-3 border border-green-500/20 mb-4">
                  <p className="text-green-300 text-sm text-center flex items-center justify-center gap-2">
                    <FaWhatsapp className="text-green-400" />
                    {isGuj
                      ? 'તમારો ઓર્ડર WhatsApp પર મોકલવામાં આવશે'
                      : 'Your order will be sent via WhatsApp'}
                  </p>
                </div>

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

      {/* ========== WHATSAPP CHECKOUT MODAL ========== */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowCheckoutModal(false)}
          ></div>

          {/* Modal */}
          <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowCheckoutModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition z-10"
            >
              <FaTimes />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-0">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-green-400 text-3xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {isGuj ? 'WhatsApp પર ઓર્ડર કરો' : 'Order via WhatsApp'}
                  </h2>
                  <p className="text-purple-300 text-sm">
                    {isGuj ? 'તમારી વિગતો ભરો' : 'Fill in your details'}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Summary Mini */}
            <div className="mx-8 mt-4 bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-purple-200 text-sm">
                  {getCartCount()} {isGuj ? 'વસ્તુઓ' : 'items'} • {totalWeight.toFixed(2)} {isGuj ? 'કિલો' : 'kg'}
                </span>
                <span className="text-white font-bold text-lg">₹{finalTotal.toFixed(2)}</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {cartItems.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 text-purple-200 px-2 py-1 rounded-full"
                  >
                    {item.name} ×{item.quantity}
                  </span>
                ))}
              </div>
              {/* Shipping info in modal */}
              <div className="flex justify-between text-xs text-purple-300 border-t border-white/10 pt-2">
                <span>{isGuj ? 'ડિલિવરી' : 'Delivery'}:</span>
                {isFreeDelivery ? (
                  <span className="text-green-400 font-semibold">
                    {isGuj ? 'ફ્રી' : 'FREE'} 🎉
                  </span>
                ) : (
                  <span className="text-orange-400">
                    ₹{shippingCharge.toFixed(2)} ({slabInfo.slabs}{isGuj ? ' કિલો સ્લેબ' : 'kg slab'})
                  </span>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="p-8 space-y-5">
              {/* Name */}
              <div>
                <label className="text-purple-200 text-sm font-semibold mb-2 flex items-center gap-2">
                  <FaUser className="text-purple-400" />
                  {isGuj ? 'પૂરું નામ *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  placeholder={isGuj ? 'તમારું નામ લખો' : 'Enter your full name'}
                  className={`w-full bg-white/10 border ${
                    errors.name ? 'border-red-500' : 'border-white/20'
                  } rounded-xl px-4 py-3.5 text-white placeholder-purple-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-purple-200 text-sm font-semibold mb-2 flex items-center gap-2">
                  <FaPhone className="text-purple-400" />
                  {isGuj ? 'ફોન નંબર *' : 'Phone Number *'}
                </label>
                <div className="flex">
                  <span className="bg-white/10 border border-white/20 border-r-0 rounded-l-xl px-4 py-3.5 text-purple-300 font-semibold">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    placeholder={isGuj ? 'ફોન નંબર' : 'Phone number'}
                    maxLength={10}
                    className={`w-full bg-white/10 border ${
                      errors.phone ? 'border-red-500' : 'border-white/20'
                    } rounded-r-xl px-4 py-3.5 text-white placeholder-purple-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="text-purple-200 text-sm font-semibold mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-purple-400" />
                  {isGuj ? 'સંપૂર્ણ સરનામું *' : 'Full Address *'}
                </label>
                <textarea
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  placeholder={isGuj ? 'ઘર/ફ્લેટ નં., શેરી, વિસ્તાર' : 'House/Flat No., Street, Area'}
                  rows={3}
                  className={`w-full bg-white/10 border ${
                    errors.address ? 'border-red-500' : 'border-white/20'
                  } rounded-xl px-4 py-3.5 text-white placeholder-purple-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition resize-none`}
                />
                {errors.address && (
                  <p className="text-red-400 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              {/* City and Pincode */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-purple-200 text-sm font-semibold mb-2 flex items-center gap-2">
                    <FaCity className="text-purple-400" />
                    {isGuj ? 'શહેર *' : 'City *'}
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={customerInfo.city}
                    onChange={handleInputChange}
                    placeholder={isGuj ? 'શહેર' : 'City'}
                    className={`w-full bg-white/10 border ${
                      errors.city ? 'border-red-500' : 'border-white/20'
                    } rounded-xl px-4 py-3.5 text-white placeholder-purple-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition`}
                  />
                  {errors.city && (
                    <p className="text-red-400 text-xs mt-1">{errors.city}</p>
                  )}
                </div>
                <div>
                  <label className="text-purple-200 text-sm font-semibold mb-2 flex items-center gap-2">
                    <FaMailBulk className="text-purple-400" />
                    {isGuj ? 'પિનકોડ *' : 'Pincode *'}
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={customerInfo.pincode}
                    onChange={handleInputChange}
                    placeholder="000000"
                    maxLength={6}
                    className={`w-full bg-white/10 border ${
                      errors.pincode ? 'border-red-500' : 'border-white/20'
                    } rounded-xl px-4 py-3.5 text-white placeholder-purple-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition`}
                  />
                  {errors.pincode && (
                    <p className="text-red-400 text-xs mt-1">{errors.pincode}</p>
                  )}
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="text-purple-200 text-sm font-semibold mb-2 flex items-center gap-2">
                  📝 {isGuj ? 'વધારાની નોંધ (વૈકલ્પિક)' : 'Additional Note (Optional)'}
                </label>
                <input
                  type="text"
                  name="note"
                  value={customerInfo.note}
                  onChange={handleInputChange}
                  placeholder={isGuj ? 'કોઈ ખાસ સૂચના...' : 'Any special instructions...'}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-purple-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
                />
              </div>

              {/* Final Total Display */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                <div className="flex justify-between items-center">
                  <span className="text-green-300 font-semibold">
                    {isGuj ? 'ચૂકવવાની રકમ' : 'Amount to Pay'}
                  </span>
                  <span className="text-3xl font-bold text-green-400">
                    ₹{finalTotal.toFixed(2)}
                  </span>
                </div>
                {!isFreeDelivery && totalWeight > 0 && (
                  <p className="text-green-400/60 text-xs mt-1 text-right">
                    ({isGuj ? 'ડિલિવરી સહિત' : 'incl. delivery'} ₹{shippingCharge.toFixed(2)})
                  </p>
                )}
              </div>

              {/* Send to WhatsApp Button */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full px-8 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-xl rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-3xl" />
                <span>{isGuj ? 'WhatsApp પર મોકલો' : 'Send on WhatsApp'}</span>
              </button>

              <p className="text-center text-purple-400 text-xs">
                {isGuj
                  ? 'WhatsApp ખોલશે અને ઓર્ડર મેસેજ તૈયાર હશે'
                  : 'WhatsApp will open with your order message ready'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
