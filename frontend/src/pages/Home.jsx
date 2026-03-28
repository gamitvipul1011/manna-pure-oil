import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLeaf, FaCertificate, FaHeart } from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';
import HeroBanner from '../components/HeroBanner';
import ProductBannerSection from '../components/ProductBannerSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { productAPI, categoryAPI } from '../utils/api';

const Home = () => {
  const { t, i18n } = useTranslation();
  const isGu = i18n.language === 'gu';
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [hoveredCat, setHoveredCat] = useState(null);

  useEffect(() => {
    categoryAPI.getAll().then(res => setCategories(res.data)).catch(() => {});
    productAPI.getAll().catch(() => {});
  }, []);

  const features = [
    { icon: <GiChemicalDrop className="text-4xl" />, title: t('coldPressed'), color: 'from-purple-600 to-purple-500' },
    { icon: <FaLeaf className="text-4xl" />,         title: t('natural'),     color: 'from-green-600 to-green-500' },
    { icon: <FaCertificate className="text-4xl" />,  title: t('certified'),   color: 'from-orange-500 to-orange-400' },
    { icon: <FaHeart className="text-4xl" />,        title: t('traditional'), color: 'from-pink-500 to-red-400' },
  ];

  const benefits = [
    { icon: '💚', en: 'Heart Healthy',   gu: 'હૃદય માટે સ્વસ્થ' },
    { icon: '🌿', en: 'Rich Nutrition',  gu: 'પોષક તત્વોથી ભરપૂર' },
    { icon: '✨', en: 'Natural Aroma',   gu: 'કુદરતી સુગંધ' },
    { icon: '🥇', en: 'Premium Quality', gu: 'ઉચ્ચ ગુણવત્તા' },
  ];

  const pastelBg = [
    'bg-[#e8f5e9]',
    'bg-[#fce4ec]',
    'bg-[#e3f2fd]',
    'bg-[#fff3e0]',
    'bg-[#f3e5f5]',
    'bg-[#e0f7fa]',
    'bg-[#fafafa]',
    'bg-[#fff9c4]',
    'bg-[#f1f8e9]',
  ];

  const getImgSrc = (cat) => {
    if (!cat.image) return null;
    return cat.image.startsWith('http') ? cat.image : `http://localhost:5000${cat.image}`;
  };

  const goToCategory = (catId) => {
    navigate('/products', { state: { categoryId: catId } });
  };

  return (
    <div className="min-h-screen">
      <HeroBanner />

      {/* BENEFITS STRIP */}
      <section className="bg-white py-4 shadow border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center justify-center gap-3 py-1">
                <span className="text-3xl">{b.icon}</span>
                <p className="font-bold text-gray-700 text-sm">{isGu ? b.gu : b.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-gradient-purple">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
              {isGu ? 'માના કેમ પસંદ કરવો?' : 'Why Choose Manna?'}
            </h2>
            <p className="text-purple-200">{isGu ? 'અમારી વિશેષતા' : 'Our Specialties'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-7 rounded-3xl shadow-premium hover:-translate-y-2 transition-all duration-300 group">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${f.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductBannerSection />

      {/* CATEGORIES SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
              {isGu ? 'અમારા પ્રાકૃતિક તેલ' : 'Explore Our Natural Oils'}
            </h2>
            <p className="text-gray-500 text-lg">
              {isGu ? 'શુદ્ધ • કોલ્ડ પ્રેસ્ડ • સ્વસ્થ જીવન' : 'Pure • Cold Pressed • Healthy Living'}
            </p>
          </div>

          {categories.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-xl">
                {isGu ? 'હજુ કોઈ શ્રેણી નથી' : 'No categories yet. Add from Admin Panel.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat, idx) => {
                const imgSrc = getImgSrc(cat);
                const bgClass = pastelBg[idx % pastelBg.length];
                const isHovered = hoveredCat === cat._id;

                return (
                  <div
                    key={cat._id}
                    className={`relative ${bgClass} rounded-2xl border border-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden`}
                    onMouseEnter={() => setHoveredCat(cat._id)}
                    onMouseLeave={() => setHoveredCat(null)}
                    onClick={() => goToCategory(cat._id)}
                  >
                    <div className="flex items-center justify-between p-5 pr-3">
                      {/* Left: text content */}
                      <div className="flex-1 pr-4">
                        <h3 className="text-xl font-extrabold text-gray-800 mb-0.5">
                          {isGu && cat.nameGu?.trim() ? cat.nameGu : cat.name}
                        </h3>
                       
                        {!cat.nameGu?.trim() && <div className="mb-3"></div>}

                        <button
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-brand-orange-600 transition-all duration-200"
                          onClick={(e) => { e.stopPropagation(); goToCategory(cat._id); }}
                        >
                          <span className={`w-2 h-2 rounded-full bg-brand-orange-400 transition-transform duration-300 ${isHovered ? 'scale-150' : ''}`}></span>
                          {isGu ? 'હવે ખરીદો' : 'Shop Now'}
                        </button>
                      </div>

                      {/* Right: image with cross/spin animation on hover */}
                      <div className="w-28 h-28 flex-shrink-0 flex items-center justify-center relative">
                        {imgSrc ? (
                          <>
                            {isHovered && (
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                <div className="absolute w-full h-0.5 bg-brand-orange-400 opacity-25 rotate-45"></div>
                                <div className="absolute w-full h-0.5 bg-brand-orange-400 opacity-25 -rotate-45"></div>
                              </div>
                            )}
                            <img
                              src={imgSrc}
                              alt={cat.name}
                              className={`w-full h-full object-contain drop-shadow-md transition-all duration-500 relative z-20 ${
                                isHovered ? 'scale-125 -rotate-6 drop-shadow-xl' : 'scale-100 rotate-0'
                              }`}
                            />
                          </>
                        ) : (
                          <span className={`text-6xl transition-all duration-500 ${isHovered ? 'scale-125 rotate-12' : 'scale-100'}`}>🫙</span>
                        )}
                      </div>
                    </div>

                    {/* Bottom border accent on hover */}
                    <div className={`h-0.5 bg-gradient-to-r from-brand-orange-400 to-brand-green-500 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-purple">
        <div className="max-w-5xl mx-auto px-4">
          <TestimonialsSection />
        </div>
      </section>
    </div>
  );
};

export default Home;
