import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const phoneNumber = '917874239595'; // Replace with actual number
  const message = encodeURIComponent(
    'Hello! I want to know more about Maana Pure Oil products.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      title={t('whatsappText')}
    >
      <div className="relative">
        {/* Pulsing Ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

        {/* Button */}
        <div className="relative bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-premium">
          <FaWhatsapp className="text-white text-4xl" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {t('whatsappText')}
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
