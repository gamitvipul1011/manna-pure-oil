import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaGlobe } from 'react-icons/fa';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 border border-white/30"
    >
      <FaGlobe className="text-white text-lg" />
      <span className="text-white font-semibold text-sm">
        {language === 'en' ? 'ગુજરાતી' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;