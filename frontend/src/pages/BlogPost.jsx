import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaCalendar, FaTag } from 'react-icons/fa';
import blog1 from '../assets/blog.jpeg';
import blog2 from '../assets/blog2.jpeg';
import blog3 from '../assets/blog3.jpeg';

const blogData = [
  {
    id: 1,
    title: 'Benefits of Cold Pressed Groundnut Oil',
    titleGu: 'કોલ્ડ-પ્રેસ્ડ સિંગ તેલના ફાયદા',
    image: blog1,
    date: '12 Feb 2026',
    category: 'Health / સ્વાસ્થ્ય',
    content: `Cold pressed groundnut oil is extracted using traditional wooden press methods without any heat, preserving all the natural goodness.

**Why Choose Cold Pressed?**

Unlike refined oils, cold pressed oils retain vitamins E, B, and important minerals. The natural antioxidants present in the oil protect your body from free radical damage.

**Heart Health Benefits**
Cold pressed groundnut oil contains monounsaturated fatty acids (MUFA) which are known to reduce bad cholesterol levels. Regular use in cooking can contribute to better cardiovascular health.

**Cooking Benefits**
- High smoke point makes it ideal for deep frying
- Rich natural flavour enhances food taste
- No chemical residue or bleaching agents
- Retains natural vitamin E as a preservative

**Who Can Use It?**
Suitable for all age groups. Especially beneficial for those with high cholesterol, diabetes, and digestive issues. Consult your doctor if you have a nut allergy.

**Storage Tips**
Store in a cool, dark place. Use within 3 months of opening. Keep lid tightly closed to preserve freshness.

At Manna Pure Oil, we extract our groundnut oil using traditional cold press machines, ensuring maximum purity and nutrition in every drop.`,
    contentGu: `Cold Pressed Groundnut Oil ની extraction traditional wooden press method વડે heat use વગર થાય છે, natural goodness preserve રહે છે.

**Cold Pressed Oil ના ફાયદા**

Refined oils ની સરખામણીમાં cold pressed oils vitamins E, B, અને minerals retain કરે છે. Natural antioxidants body ને free radical damage થી protect કરે છે.

**Heart Health ના ફાયદા**
Cold pressed groundnut oil ઉપર Monounsaturated fatty acids (MUFA) hoy che je bad cholesterol ઘટાડવામાં help kare. Daily use cardiovascular health improve kare.

**Cooking Benefits**
- High smoke point, deep frying ઉત્તમ
- Natural flavour food ને better taste
- Chemical residue/bleaching agents નહીં
- Vitamin E natural preservative tarke

**Storage Tips**
Cool, dark place ઉપર store karo. Open pachi 3 months ma use karo. Fresh rahe maaThe tight lid rakho.

Manna Pure Oil ઉપર traditional cold press machines vade extraction thaay che — purity maximum.`,
  },
  {
    id: 2,
    title: 'Why 100% Natural Oil Matters',
    titleGu: '૧૦૦% કુદરતી (કોલ્ડ-પ્રેસ્ડ) તેલ શા માટે મહત્વનું છે',
    image: blog2,
    date: '05 Feb 2026',
    category: 'Nutrition / પોષણ',
    content: `In today's market, most oils go through extensive refining processes that strip away natural nutrients and add chemical preservatives. Here's why choosing 100% natural oil makes a significant difference.

**The Problem with Refined Oils**

Refined oils are treated with solvents like hexane for extraction, then bleached and deodorized. This process destroys natural vitamins and adds chemical residues to your food.

**Natural Oil Advantages**
- No hexane or chemical solvents
- No bleaching agents
- No artificial preservatives
- Natural colour, smell, and taste preserved
- Full nutritional profile intact

**Impact on Health**
Studies show that populations consuming naturally extracted oils have lower rates of lifestyle diseases. The natural vitamin E in cold pressed oils acts as a natural antioxidant, prolonging shelf life without chemicals.

**For Your Family**
When you choose natural oil, you choose health for your entire family. Children and elderly family members especially benefit from chemical-free food.

At Manna Pure Oil, our promise is simple: what we sell is exactly what nature intended — pure, natural, and honest.`,
    contentGu: `Market ઉપર majority oils extensive refining process ma thi pass thay che je natural nutrients ane chemicals add kare che. 100% natural oil choose karva na faydao.

**Refined Oils ni samassya**

Refined oils hexane jeva solvents vade extract thay, phir bleach ane deodorize thay. Natural vitamins destroy thay ane chemical residues add thay.

**Natural Oil ना ફaayda**
- Hexane ya chemical solvents nathi
- Bleaching agents nathi
- Artificial preservatives nathi
- Natural colour, smell, taste preserved
- Full nutrition intact

**Health ઉppar असर**
Natural oils use karnar populations lifestyle diseases na rates occha dikhava che. Natural Vitamin E chemical vinaa shelf life vadhare.

**Tamara parivar maaThe**
Natural oil choose karvo = health choose karvi. Children ane elderly ne chemical-free food especially benefit kare.

Manna Pure Oil ni guarantee — pure, natural, ane honest.`,
  },
  {
    id: 3,
    title: 'How We Make Pure Cold Pressed Oil',
    titleGu: 'અમે શુદ્ધ કોલ્ડ-પ્રેસ્ડ (લાકડાની ઘાણીનું) તેલ કેવી રીતે બનાવીએ છીએ',
    image: blog3,
    date: '28 Jan 2026',
    category: 'Process / પ્રક્રિયા',
    content: `At Manna Pure Oil, we follow traditional ghani (wooden press) methods combined with modern hygiene standards to produce the purest oil possible.

**Step 1: Seed Selection**
We source only premium quality seeds — groundnut, sesame, mustard, and coconut — directly from verified farmers. Seeds are cleaned and sun-dried to remove moisture.

**Step 2: Cold Press Extraction**
Seeds are loaded into our traditional wooden press machine. The press operates at low speed, generating minimal heat (below 45°C) to preserve all nutrients.

**Step 3: Natural Settling**
Freshly pressed oil is allowed to settle naturally for 12-24 hours. No centrifuge, no chemicals — just gravity and time.

**Step 4: Filtration**
Oil passes through natural cotton cloth filters to remove seed particles. No chemical filtration or bleaching.

**Step 5: Packaging**
Oil is bottled in food-grade containers and sealed for freshness. Each batch is checked for quality before dispatch.

**Our Commitment**
We believe food should be as close to nature as possible. Every bottle of Manna Pure Oil represents our commitment to traditional wisdom and modern quality standards.`,
    contentGu: `Manna Pure Oil ઉppar traditional ghani (wooden press) methods ane modern hygiene standards combine kari ne purest oil banavaay che.

**Step 1: Seed Selection**
Premium quality groundnut, sesame, mustard, coconut seeds verified farmers thi direct. Saaf ane sun-dried.

**Step 2: Cold Press Extraction**
Traditional wooden press machine upa seeds load thay. Low speed operation, minimal heat (45°C thi ochi) — nutrients preserved.

**Step 3: Natural Settling**
Pressed oil 12-24 kalaak natural settle thaay. No centrifuge, no chemicals — gravity ane time.

**Step 4: Filtration**
Natural cotton cloth filters through particles remove thay. Chemical filtration ya bleaching nathi.

**Step 5: Packaging**
Food-grade containers ma bottle karvaay, freshness maaThe seal. Har batch quality check pachi dispatch.

**Amari commitment**
Food possible teshu natural hovu joye. Manna Pure Oil ni har bottle traditional wisdom ane modern quality ni guarantee.`,
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const isGu = i18n.language === 'gu';

  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="text-6xl mb-4">📄</div>
        <h1 className="text-2xl font-bold text-brand-purple-800 mb-4">Blog not found</h1>
        <Link to="/blogs" className="text-brand-orange-500 hover:underline font-semibold">← Back to Blogs</Link>
      </div>
    );
  }

  const contentToShow = isGu && blog.contentGu ? blog.contentGu : blog.content;

  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <h3 key={i} className="text-xl font-bold text-brand-purple-800 mt-6 mb-2">{line.replace(/\*\*/g, '')}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="text-gray-700 ml-4 list-disc leading-relaxed">{line.slice(2)}</li>;
      }
      if (line.trim() === '') return <br key={i} />;
      return <p key={i} className="text-gray-700 leading-relaxed mb-2">{line}</p>;
    });
  };

  const otherBlogs = blogData.filter((b) => b.id !== blog.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back */}
        <Link to="/blogs" className="inline-flex items-center gap-2 text-brand-purple-700 hover:text-brand-orange-500 font-semibold mb-8 transition">
          <FaArrowLeft /> {isGu ? 'blogs ઉppar jaao' : 'Back to Blogs'}
        </Link>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl mb-8">
          <img src={blog.image} alt={blog.title} className="w-full h-64 md:h-96 object-cover" />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="flex items-center gap-1 text-brand-orange-500 font-semibold text-sm">
            <FaTag /> {blog.category}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-sm">
            <FaCalendar /> {blog.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-brand-purple-800 mb-8 leading-tight">
          {isGu ? blog.titleGu : blog.title}
        </h1>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-md p-8 mb-10">
          <ul className="list-none p-0">{renderContent(contentToShow)}</ul>
        </div>

        {/* Related */}
        <div>
          <h2 className="text-2xl font-bold text-brand-purple-800 mb-6">
            {isGu ? 'અন્ય Blogs' : 'More Blogs'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherBlogs.map((b) => (
              <Link key={b.id} to={`/blog/${b.id}`} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group">
                <img src={b.image} alt={b.title} className="w-full h-40 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-4">
                  <span className="text-xs text-brand-orange-500 font-semibold">{b.category}</span>
                  <h3 className="font-bold text-brand-purple-800 mt-1 group-hover:text-brand-orange-500 transition">
                    {isGu ? b.titleGu : b.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
