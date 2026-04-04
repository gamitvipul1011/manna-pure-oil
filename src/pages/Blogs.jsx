import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";


import banner1 from "../assets/Blog Mustard oil 1920 x 700.jpg";
import blog1 from "../assets/blog11.jpeg";
import blog2 from "../assets/blog44.jpeg";
import blog3 from "../assets/blog55.jpeg";
import blog4 from "../assets/blogs4.jpeg";
import blog5 from "../assets/blogs5.jpeg";
import blog6 from "../assets/blogs6.jpg";
const Blogs = () => {
  const { t, i18n } = useTranslation();
  const isGu = i18n.language === "gu";

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const blogs = [
    {
      id: 1,
      title: "Benefits of Cold Pressed Groundnut Oil",
      titleGu: "કોલ્ડ-પ્રેસ્ડ સિંગ તેલના ફાયદા",
      description:
        "Cold pressed oils retain natural nutrients and antioxidants. Discover why switching to natural oil improves your health.",
      descGu:
        "કોલ્ડ-પ્રેસ્ડ તેલ કુદરતી પોષક તત્વો અને એન્ટી-ઓક્સિડન્ટ્સ જાળવી રાખે છે.",
      image: blog1,
      date: "12 Feb 2026",
      category: "Health / સ્વાસ્થ્ય",
    },
    {
      id: 2,
      title: "Why 100% Natural Oil Matters",
      titleGu: "૧૦૦% કુદરતી (કોલ્ડ-પ્રેસ્ડ) તેલ શા માટે મહત્વનું છે",
      description:
        "Refined oils lose nutrition during processing. Learn why pure and chemical-free oil is better for your family.",
      descGu:
        "રિફાઈન્ડ તેલ પ્રોસેસિંગ દરમિયાન તેનું પોષણ ગુમાવે છે.",
      image: blog2,
      date: "05 Feb 2026",
      category: "Nutrition / પોષણ",
    },
    {
      id: 3,
      title: "How We Make Pure Cold Pressed Oil",
      titleGu: "અમે શુદ્ધ કોલ્ડ-પ્રેસ્ડ તેલ કેવી રીતે બનાવીએ છીએ",
      description:
        "At Manna Pure Oil, we follow traditional extraction methods to preserve purity and taste.",
      descGu:
        "Manna Pure Oil માં અમે પરંપરાગત પદ્ધતિઓ દ્વારા શુદ્ધ તેલ બનાવીએ છીએ.",
      image: blog3,
      date: "28 Jan 2026",
      category: "Process / પ્રક્રિયા",
    },
    {
      id: 4,
      title: "Groundnut Oil for Heart Health",
      titleGu: "હૃદયના આરોગ્ય માટે સિંગ તેલ",
      description:
        "Groundnut oil contains healthy fats that help maintain cholesterol levels.",
      descGu:
        "સિંગ તેલમાં સ્વસ્થ ચરબી હોય છે જે હૃદયને સ્વસ્થ રાખે છે.",
      image: blog4,
      date: "20 Jan 2026",
      category: "Health / સ્વાસ્થ્ય",
    },
    {
      id: 5,
      title: "Cold Pressed Oil vs Refined Oil",
      titleGu: "કોલ્ડ-પ્રેસ્ડ તેલ અને રિફાઈન્ડ તેલમાં તફાવત",
      description:
        "Cold pressed oil is extracted naturally without heat or chemicals.",
      descGu:
        "કોલ્ડ-પ્રેસ્ડ તેલ ગરમી અને કેમિકલ વગર બનાવાય છે.",
      image: blog5,
      date: "12 Jan 2026",
      category: "Knowledge / માહિતી",
    },
    {
      id: 6,
      title: "Best Cooking Uses of Groundnut Oil",
      titleGu: "રસોઈમાં સિંગ તેલના શ્રેષ્ઠ ઉપયોગ",
      description:
        "Groundnut oil is perfect for frying and traditional cooking.",
      descGu:
        "સિંગ તેલ તળવા અને ભારતીય રસોઈ માટે ખૂબ ઉપયોગી છે.",
      image: blog6,
      date: "05 Jan 2026",
      category: "Cooking / રસોઈ",
    },
    
  ];

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    
    
    <div className="min-h-screen bg-gradient-purple">
     
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px]  overflow-hidden">
        <img
          src={banner1}
           className="absolute inset-0 w-full h-full object-fill object-center"
        
        />
      </div>
      <div className="max-w-6xl mx-auto text-center px-6 mb-16">
        
        
        <h1 className="text-5xl font-bold text-white mb-2">{t("latestBlogs")}</h1>
        <p className="text-brand-white text-lg mb-2">અમારા બ્લોગ્સ</p>
        <p className="text-yellow-500">{t("blogSubtitle")}</p>
      </div>
      
      
      
      

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#D0F0C0] rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
          >
           <div className="overflow-hidden bg-gray-100 flex items-center justify-center h-56">
  <Link to={`/blog/${blog.id}`}>
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
    />
  </Link>
</div>

            <div className="p-6">
              <div className="flex justify-between text-sm mb-3">
                <span className="text-yellow-600 font-semibold">{blog.category}</span>
                <span className="text-gray-500">{blog.date}</span>
              </div>

              <h3 className="text-xl font-bold text-green-700 mb-1">
                {isGu ? blog.titleGu : blog.title}
              </h3>

              <p className="text-gray-600 mb-5">
                {isGu ? blog.descGu : blog.description}
              </p>

              <Link
                to={`/blog/${blog.id}`}
                className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-800 transition"
              >
                {t("readMore")} <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}

      <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">

        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-xl bg-white text-green-700 font-semibold shadow hover:bg-green-600 hover:text-white transition disabled:opacity-40"
        >
          « Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 rounded-full font-semibold transition shadow
            ${
              currentPage === index + 1
                ? "bg-green-600 text-white"
                : "bg-white text-green-700 hover:bg-green-600 hover:text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-xl bg-white text-green-700 font-semibold shadow hover:bg-green-600 hover:text-white transition disabled:opacity-40"
        >
          Next »
        </button>

      </div>

    </div>
  );
};

export default Blogs;
