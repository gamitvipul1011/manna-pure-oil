import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  // ✅ Default = English, or saved language
  const [language, setLanguage] = useState(
    localStorage.getItem('lang') || 'en'
  );

  // ✅ Sync i18n on load
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  // ✅ Manual change (EN / GU)
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
