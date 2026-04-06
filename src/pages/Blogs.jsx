import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";


import banner1 from "../assets/Blog Mustard oil 1920 x 700.jpg";
import blog1 from "../assets/History of Oil 1200 x 600.jpg";
import blog2 from "../assets/journey of oil 1200 x 600.jpg";
import blog3 from "../assets/father son 600.jpeg";
import blog4 from "../assets/Cold Pressed vs Refinend 1200 x 600.jpg";
import blog5 from "../assets/different oil 1200 x 600.jpg";
import blog6 from "../assets/Bilona Ghee 1200 x 600.jpg";
const Blogs = () => {
  const { t, i18n } = useTranslation();
  const isGu = i18n.language === "gu";

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const blogs = [
    {
      id: 1,
  title: "The History of Indian Cooking Oils: From Tradition to Today",
  titleGu: 'ભારતીય રસોઈ તેલનો ઇતિહાસ: પરંપરાથી આજ સુધી',
  image: blog1,
  date: '06 Apr 2026',
  category: 'Awareness / જાગૃતિ',
  description: "In every Indian kitchen, oil is not just an ingredient—it, s a story of culture, tradition, health, and generations of wisdom." ,
  descGu: "દરેક ભારતીય રસોડામાં તેલ માત્ર એક ingredient નથી — તે સંસ્કૃતિ, પરંપરા, સ્વાસ્થ્ય અને પેઢીઓની સમજણની વાર્તા છે.",
      
    },
    {
      id: 2,
       title: 'From Seed to Bottle: The Journey of Wooden Cold-Pressed Oils',
       titleGu: 'બીજથી બોટલ સુધી: લાકડાની ઘાણીના કોલ્ડ-પ્રેસ્ડ તેલની સફર',
       image: blog2,
       date: '06 Apr 2026',
       category: 'Process / પ્રક્રિયા',
       description:"Every drop of oil you use tells a story — a story of nature, care, and tradition",
       descGu: "તમે જે તેલ વાપરો છો તેની દરેક બુંદ એક વાર્તા કહે છે — કુદરત, કાળજી અને પરંપરાની વાર્તા"
    },
    {
     id: 3,
       title: 'Understanding Good Fats vs Bad Fats in Cooking Oil',
       titleGu: 'રસોઈ તેલમાં સારા ફેટ્સ અને ખરાબ ફેટ્સ સમજીએ',
       image: blog3,
       date: '06 Apr 2026',
       category: 'Health / સ્વાસ્થ્ય',
       description: "In every Indian kitchen, oil is the foundation of every meal. But not all fats are the same. Understanding good fats and bad fats can improve your family’s health",
       descGu: "દરેક ભારતીય રસોડામાં તેલ દરેક ભોજનનો આધાર છે. પરંતુ બધા ફેટ્સ એકસરખા નથી. સારા અને ખરાબ ફેટ્સ સમજવાથી પરિવારનું સ્વાસ્થ્ય સુધરી શકે છે.",
    },
    {
     id: 4,
       title: 'Cold Pressed Oil vs Refined Oil: What You Must Know',
       titleGu: 'કોલ્ડ-પ્રેસ્ડ તેલ vs રિફાઇન્ડ તેલ: શું જાણવું જરૂરી છે',
       image: blog4,
       date: '06 Apr 2026',
       category: "Awareness / જાગૃતિ",
       description: "In today,s health-conscious world, choosing the right cooking oil is very important. Many Indian households are now becoming aware of what they consume daily.The biggest question is: Cold Pressed Oil vs Refined Oil.",
        descGu: "આજના health-conscious સમયમાં યોગ્ય રસોઈ તેલ પસંદ કરવું ખૂબ જ મહત્વનું છે. ઘણા ભારતીય પરિવારો હવે તેઓ શું ખાય છે તેની જાગૃતિ રાખી રહ્યા છે.મુખ્ય પ્રશ્ન છે: Cold Pressed Oil vs Refined Oil.",
    },
    {
        id: 5,
        title: 'Cold Pressed Oil Benefits: Why Every Indian Kitchen is Switching Today',
        titleGu: 'કોલ્ડ-પ્રેસ્ડ તેલના ફાયદા: કેમ દરેક ભારતીય રસોડું આજે બદલાઈ રહ્યું છે',
        image: blog5,
        date: '06 Apr 2026',
        category: 'Health / સ્વાસ્થ્ય',
        description: "In today,s fast-moving world, Indian families are slowly returning to natural and healthier choices. One major shift is the use of cold pressed oils in daily cooking.At Manna Pure Oil, we believe what you cook with matters as much as what you cook.",
        descGu: "આજના ઝડપી સમયમાં ભારતીય પરિવારો ફરીથી કુદરતી અને સ્વસ્થ પસંદગી તરફ વળી રહ્યા છે. તેમાં સૌથી મોટો બદલાવ છે cold pressed oil નો ઉપયોગ.Manna Pure Oil માં અમે માનીએ છીએ કે તમે શું બનાવો છો એટલું જ મહત્વનું છે કે તમે કયા તેલથી બનાવો છો.",
    },
    {
      id: 6,
        title: "Why Gir Cow Bilona Ghee is the Healthiest Choice for Your Family",
        titleGu: "ગિર ગાયનું બિલોના ઘી કેમ તમારા પરિવાર માટે સૌથી સ્વસ્થ પસંદગી છે",
        image: blog6,
        date: '06 Apr 2026',
        category: "Health / સ્વાસ્થ્ય",
        description: "In every Indian household, ghee is more than just an ingredient — it represents health, tradition, and care.But the real question is:Is the ghee you use truly healthy?",
        descGu: "દરેક ભારતીય ઘરમાં ઘી માત્ર એક ingredient નથી — તે સ્વાસ્થ્ય, પરંપરા અને પ્રેમનું પ્રતિક છે.પરંતુ મુખ્ય પ્રશ્ન છે:શું તમે જે ઘી વાપરો છો તે ખરેખર સ્વસ્થ છે?",
    },
    
  ];

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    
    
    <div className="min-h-screen bg-gradient-purple">
     
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={banner1}
           className="absolute inset-0 w-full h-full object-cover"
        
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
           <div className="overflow-hidden bg-gray-100 flex items-center justify-center h-55">
  <Link to={`/blog/${blog.id}`}>
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-full object-fill group-hover:scale-105 transition duration-500"
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
