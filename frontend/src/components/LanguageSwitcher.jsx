import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded-full text-sm font-bold
          ${i18n.language === 'en'
            ? 'bg-brand-purple-600 text-white'
            : 'bg-gray-200'
          }`}
      >
        English
      </button>

      <button
        onClick={() => changeLanguage('gu')}
        className={`px-4 py-2 rounded-full text-sm font-bold
          ${i18n.language === 'gu'
            ? 'bg-brand-green-600 text-white'
            : 'bg-gray-200'
          }`}
      >
        ગુજરાતી
      </button>
    </div>
  );
};

export default LanguageSwitcher;
