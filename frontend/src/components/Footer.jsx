import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube,
  FaLeaf, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight,
} from "react-icons/fa";

const FooterSubscribe = ({ isGu }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSub = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error(isGu ? 'valid email darakhalo' : 'Enter a valid email');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success(isGu ? 'Subscribe thayu!' : 'Subscribed successfully!');
      setEmail('');
      setLoading(false);
    }, 800);
  };
  return (
    <div className="mt-5">
      <p className="text-sm text-gray-400 mb-2">
        {isGu ? 'અપડેટ માટે સબ્સ્ક્રાઇબ કરો' : 'Subscribe for updates'}
      </p>
      <form onSubmit={handleSub} className="flex">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder={isGu ? 'તમારો ઈમેલ ' : 'Enter your email'}
          className="px-4 py-2 w-full rounded-l-full text-sm text-black focus:outline-none" />
        <button type="submit" disabled={loading}
          className="bg-brand-green-600 hover:bg-brand-green-700 px-4 rounded-r-full text-white disabled:opacity-60 transition">
          <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

const Footer = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === 'gu';

  const links = [
    { en: "Home",     gu: "હોમ",          path: "/" },
    { en: "About Us", gu: "અમારા વિશે",   path: "/about" },
    { en: "Products", gu: "ઉત્પાદનો",     path: "/products" },
    { en: "Blog",     gu: "બ્લોગ",        path: "/blogs" },
    { en: "Contact",  gu: "સંપર્ક",       path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-brand-purple-900 via-gray-900 to-black text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* ===== COL 1: BRAND + SUBSCRIBE ===== */}
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
            <FaLeaf className="text-brand-green-500 text-2xl" />
            {isGu ? 'માના પ્યોર ઓઈલ' : 'Manna Pure Oil'}
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed mb-4">
            {isGu
              ? 'લાકડામાંથી દબાવવામાં આવેલ ઠંડુ નિષ્કર્ષણ જે પોષક તત્વોને અકબંધ રાખે છે. કોઈ રસાયણો નહીં, કોઈ ગરમી નહીં - તમારા પરિવાર માટે ફક્ત 100% કુદરતી શુદ્ધતા..'
              : 'Wood-pressed cold extraction that keeps nutrients intact. No chemicals, no heat — just 100% natural purity for your family.'}
          </p>
          <FooterSubscribe isGu={isGu} />
        </div>

        {/* ===== COL 2+3: QUICK LINKS & POLICIES SIDE BY SIDE ===== */}
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {isGu ? 'ઝડપી લિંક્સ' : 'Quick Links'}
            </h3>
            <ul className="space-y-2 text-xs">
              {links.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="hover:text-brand-green-400 transition">
                    {isGu ? link.gu : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {isGu ? 'નીતિઓ' : 'Policies'}
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/privacy-policy" className="hover:text-brand-green-400 transition">{isGu ? 'ગોપનીયતા નીતિ' : 'Privacy Policy'}</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-brand-green-400 transition">{isGu ? 'નિયમો અને શરતો' : 'Terms & Conditions'}</Link></li>
              <li><Link to="/refund-policy" className="hover:text-brand-green-400 transition">{isGu ? 'રિફંડ નીતિ' : 'Refund Policy'}</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-brand-green-400 transition">{isGu ? 'શિપિંગ નીતિ' : 'Shipping Policy'}</Link></li>
              <li><Link to="/faq" className="hover:text-brand-green-400 transition">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* ===== COL 4: CONTACT + SOCIAL ===== */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            {isGu ? 'સંપર્ક કરો' : 'Contact Us'}
          </h3>
          <ul className="space-y-2 text-xs text-gray-400">
            <li className="flex items-center gap-2">
              <FaPhone className="text-brand-green-500 shrink-0" />
              +91 78742 39595
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-brand-green-500 shrink-0" />
              mannapureoil@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-brand-green-500 shrink-0 mt-0.5" />
              {isGu ? 'ડોલારા, વ્યારા, તાપી, ગુજરાત 394655' : 'Dolara, Vyara-Ahwa Rd, Vyara, Tapi, Gujarat, 394655'}
            </li>
          </ul>

          <p className="text-xs text-gray-500 mt-4">
            {isGu ? 'દરેક ટીપામાં શુદ્ધતા.' : 'Experience purity in every drop.'}
          </p>

          <div className="mt-3 text-xs text-gray-500">
            <p className="font-semibold text-gray-400 uppercase tracking-wider mb-1">
              {isGu ? 'સમય' : 'Working Hours'}
            </p>
            <p>{isGu ? 'સોમ–શનિ: સ.૯ – સ.૭' : 'Mon–Sat: 9:00 AM – 7:00 PM'}</p>
            <p>{isGu ? 'રવિ: બંધ' : 'Sunday: Closed'}</p>
          </div>

          <div className="flex gap-3 mt-4">
            {[
              { icon: <FaFacebookF />, link: "https://www.facebook.com/share/1DHTPMPegK/" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/mannapureoil?igsh=MXFlems3Ynd2a2pldg==" },
              { icon: <FaYoutube />, link: "https://youtube.com/@mannapureoil?si=5fhVsw1HQxbd6eQQ" },
            ].map((s, i) => (
              <a key={i} href={s.link} target="_blank" rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-brand-green-600 transition text-white text-sm">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Manna Pure Oil. {isGu ? 'સર્વ અધિકાર સુરક્ષિત.' : 'All Rights Reserved.'}
      </div>
    </footer>
  );
};

export default Footer;
