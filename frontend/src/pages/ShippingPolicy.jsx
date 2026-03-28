import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaTruck } from 'react-icons/fa';

const ShippingPolicy = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === 'gu';

  const items = [
    {
      emoji: '📦',
      title: isGu ? 'Shipping Areas' : 'Shipping Areas',
      content: isGu
        ? 'અત્યારે Vyara,Gujarat અને nearby areas ને deliver કરીએ છીએ. Pan-India delivery WhatsApp ઉપર confirm કરો.'
        : 'Currently delivering in Vyara, Gujarat and nearby areas. For Pan-India delivery, please confirm via WhatsApp.',
    },
    {
      emoji: '⏱️',
      title: isGu ? 'Delivery Time' : 'Delivery Time',
      content: isGu
        ? 'Vyara nearby areas: 1-2 business days. Gujarat: 2-4 business days. Other states: 4-7 business days.'
        : 'Vyara nearby areas: 1-2 business days. Gujarat: 2-4 business days. Other states: 4-7 business days.',
    },
    {
      emoji: '💸',
      title: isGu ? 'Shipping Charges' : 'Shipping Charges',
      content: isGu
        ? '₹999 ઉપરના orders ઉપર FREE delivery vyara. ₹999 ઉપર Gujarat / India: ₹50-₹100 charges. WhatsApp ઉપર exact charges confirm કરો.'
        : 'FREE delivery on orders above ₹999 within vyara. Orders above ₹499 for Gujarat/India: ₹50-₹100 charges. Confirm exact charges on WhatsApp.',
    },
    {
      emoji: '🚚',
      title: isGu ? 'Tracking' : 'Order Tracking',
      content: isGu
        ? 'Order dispatch પછી WhatsApp ઉપર tracking link / update share કરવામાં આવશે.'
        : 'After dispatch, tracking link or status updates will be shared via WhatsApp.',
    },
    {
      emoji: '🎁',
      title: isGu ? 'Packaging' : 'Packaging',
      content: isGu
        ? 'Products food-safe, leak-proof packaging માં ship કરવામાં આવે છે. Handle with care labels apply.'
        : 'Products are shipped in food-safe, leak-proof packaging. All packages are labelled with handle with care stickers.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <FaTruck className="text-green-600 text-3xl" />
          </div>
          <h1 className="text-4xl font-bold text-brand-purple-800 mb-2">
            {isGu ? 'શિપિંગ નીતિ' : 'Shipping Policy'}
          </h1>
          <p className="text-gray-500 text-sm">{isGu ? 'છેલ્લે અપડેટ: માર્ચ 2026' : 'Last updated: March 2026'}</p>
        </div>

        <div className="space-y-5">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <h2 className="text-lg font-bold text-green-700 mb-2">{item.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-6 text-white text-center">
          <p className="font-bold text-lg mb-1">
            {isGu ? 'ઝડપી, સુરક્ષિત ડિલિવરી 🚀' : 'Fast & Safe Delivery 🚀'}
          </p>
          <p className="text-green-100 text-sm">WhatsApp: +91 78742 39595</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
