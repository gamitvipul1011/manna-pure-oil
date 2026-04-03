import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === 'gu';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white px-6 text-center">
      <div className="text-9xl font-black text-brand-purple-200 mb-4 select-none">404</div>
      <div className="text-6xl mb-6">🫙</div>
      <h1 className="text-3xl font-bold text-brand-purple-800 mb-3">
        {isGu ? 'Page મળ્યો નહીં' : 'Page Not Found'}
      </h1>
      <p className="text-gray-500 mb-8 max-w-md">
        {isGu
          ? 'તમે જે page ખોળ્યો છો તે exist નથી. Home ઉપર જાઓ.'
          : "The page you're looking for doesn't exist. Go back to the home page."}
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/"
          className="px-8 py-3 bg-gradient-to-r from-brand-purple-700 to-brand-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
        >
          {isGu ? '🏠 Home ઉપર જાઓ' : '🏠 Go Home'}
        </Link>
        <Link
          to="/products"
          className="px-8 py-3 bg-gradient-to-r from-brand-orange-500 to-orange-400 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
        >
          {isGu ? '🛍️ Products' : '🛍️ Browse Products'}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
