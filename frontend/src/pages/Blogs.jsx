import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import blog1 from "../assets/blog.jpeg";
import blog2 from "../assets/blog2.jpeg";
import blog3 from "../assets/blog3.jpeg";

const Blogs = () => {
  const { t, i18n } = useTranslation();
  const isGu = i18n.language === 'gu';

  const blogs = [
    {
      id: 1,
      title: "Benefits of Cold Pressed Groundnut Oil",
      titleGu: "કોલ્ડ-પ્રેસ્ડ સિંગ તેલના ફાયદા",
      description: "Cold pressed oils retain natural nutrients and antioxidants. Discover why switching to natural oil improves your health.",
      descGu: "કોલ્ડ-પ્રેસ્ડ તેલ કુદરતી પોષક તત્વો અને એન્ટી-ઓક્સિડન્ટ્સ જાળવી રાખે છે.",
      image: blog1,
      date: "12 Feb 2026",
      category: "Health / સ્વાસ્થ્ય"
    },
    {
      id: 2,
      title: "Why 100% Natural Oil Matters",
      titleGu: "૧૦૦% કુદરતી (કોલ્ડ-પ્રેસ્ડ) તેલ શા માટે મહત્વનું છે",
      description: "Refined oils lose nutrition during processing. Learn why pure and chemical-free oil is better for your family.",
      descGu: "રિફાઈન્ડ તેલ પ્રોસેસિંગ દરમિયાન તેનું પોષણ ગુમાવે છે. જાણો શા માટે શુદ્ધ અને કેમિકલ-મુક્ત તેલ તમારા પરિવાર માટે વધુ સારું છે.",
      image: blog2,
      date: "05 Feb 2026",
      category: "Nutrition / પોષણ"
    },
    {
      id: 3,
      title: "How We Make Pure Cold Pressed Oil",
      titleGu: "અમે શુદ્ધ કોલ્ડ-પ્રેસ્ડ (લાકડાની ઘાણીનું) તેલ કેવી રીતે બનાવીએ છીએ",
      description: "At Manna Pure Oil, we follow traditional extraction methods to preserve purity and taste.",
      descGu: "Manna Pure Oil માં, અમે પ્રાચીન પરંપરાગત પદ્ધતિઓ દ્વારા શુદ્ધ તેલ બનાવીએ છીએ.",
      image: blog3,
      date: "28 Jan 2026",
      category: "Process / પ્રક્રિયા"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-16">
      <div className="max-w-6xl mx-auto text-center px-6 mb-16">
        <h1 className="text-5xl font-bold text-green-700 mb-2">{t('latestBlogs')}</h1>
        <p className="text-brand-purple-400 text-lg mb-2">અમારા બ્લોગ્સ</p>
        <p className="text-gray-500">{t('blogSubtitle')}</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
            <div className="overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-6">
              <div className="flex justify-between text-sm mb-3">
                <span className="text-yellow-600 font-semibold">{blog.category}</span>
                <span className="text-gray-500">{blog.date}</span>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-1">{isGu ? blog.titleGu : blog.title}</h3>
              <p className="text-gray-600 mb-5">{isGu ? blog.descGu : blog.description}</p>
              <Link to={`/blog/${blog.id}`} className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-800 transition">
                {t('readMore')} <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
