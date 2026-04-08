import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLeaf, FaCertificate, FaHeart } from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';
import HeroBanner from '../components/HeroBanner';
import ProductBannerSection from '../components/ProductBannerSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { categories } from '../data/products';

// Category images from assets
import groundnutImg  from '../assets/catagory/g1.png';
import coconutImg    from '../assets/catagory/co1.png';
import whiteSesamImg from '../assets/catagory/w1.png';
import blackSesamImg from '../assets/catagory/bl1r.png';
import mustardImg    from '../assets/catagory/m1.png';
import sunflowerImg  from '../assets/catagory/sun1.png';
import castorImg     from '../assets/catagory/cos04.png';
import gheeImg       from '../assets/catagory/gh2.png';
import honey         from '../assets/catagory/ho.png';

const catImages = {
  cat1: groundnutImg,
  cat2: coconutImg,
  cat3: whiteSesamImg,
  cat4: blackSesamImg,
  cat5: mustardImg,
  cat6: sunflowerImg,
  cat7: castorImg,
  cat8: gheeImg,
  cat9:honey,
};

const pastelBg = [
 "bg-gradient-to-b from-[#00AEEF] via-[#00AEEF] to-[#0072BC]",  
  "bg-gradient-to-b from-[#FFFFFF] via-[#F1F5F9] to-[#38BDF8]",
  "bg-gradient-to-b from-[#FFC107] via-[#FFC107] to-[#FFC107]",
  "bg-gradient-to-b from-[#2C2C2C] via-[#1A1A1A] to-[#000000]",
  "bg-gradient-to-b from-[#7C2D12] via-[#F97316] to-[#7C2D12]",
  "bg-gradient-to-b from-[#166534] via-[#15803d] to-[#14532d]",
  "bg-gradient-to-b from-[#8C5E34] via-[#A67C52] to-[#593A21]",
  "bg-[#8EE000] ",
  "bg-[#FFD700] ",
];

const Home = () => {
  const { t, i18n } = useTranslation();
  const isGu = i18n.language === 'gu';
  const navigate = useNavigate();
  const [hoveredCat, setHoveredCat] = useState(null);

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

  return (
    <div className="min-h-screen">
      <HeroBanner />

      {/* BENEFITS STRIP */}
      <section className="bg-[#D0F0C0] py-4 shadow border-b border-gray-100">
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
              <div key={i} className="bg-[#D0F0C0] p-7 rounded-3xl shadow-premium hover:-translate-y-2 transition-all duration-300 group">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${f.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 bg-[#D0F0C0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
              {isGu ? 'અમારા પ્રાકૃતિક તેલ' : 'Explore Our Natural Oils'}
            </h2>
            <p className="text-gray-500 text-lg">
              {isGu ? 'શુદ્ધ • કોલ્ડ પ્રેસ્ડ • સ્વસ્થ જીવન' : 'Pure • Cold Pressed • Healthy Living'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {categories.map((cat, idx) => {
              const img = catImages[cat._id];
              const bgClass = pastelBg[idx % pastelBg.length];
              const isHovered = hoveredCat === cat._id;
              return (
                <div
                  key={cat._id}
                  className={`relative ${bgClass} rounded-2xl border border-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden`}
                  onMouseEnter={() => setHoveredCat(cat._id)}
                  onMouseLeave={() => setHoveredCat(null)}
                  onClick={() => navigate('/products', { state: { categoryId: cat._id } })}
                >
                  <div className="flex items-center justify-between p-5 pr-3">
                    <div className="flex-1 pr-2">
                      <h3 className="text-lg font-extrabold text-white drop-shadow mb-1">
                        {isGu ? cat.nameGu : cat.name}
                      </h3>
                      <button className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white transition">
                        <span className={`w-2 h-2 rounded-full bg-orange-400 transition-transform duration-300 ${isHovered ? 'scale-150' : ''}`}></span>
                        {isGu ? 'હવે ખરીદો' : 'Shop Now'}
                      </button>
                    </div>
                    <div className="w-32 h-32 flex items-center justify-center flex-shrink-0">
  <img
    src={img}
    alt={cat.name}
    className={`max-w-full max-h-full object-contain drop-shadow-md transition-all duration-500 ${
      isHovered ? "scale-125 " : "scale-100"
    }`}
  />
</div>
                  </div>
                  <div className={`h-0.5 bg-gradient-to-r from-orange-400 to-green-500 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ProductBannerSection />

      <section className="py-16 bg-gradient-purple">
        <div className="max-w-5xl mx-auto px-4">
          <TestimonialsSection />
        </div>
      </section>
    </div>
  );
};

export default Home;
