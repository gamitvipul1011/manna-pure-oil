import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./components/ScrollToTop";

import { UserAuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider, useCart } from './context/CartContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Loader from './components/Loader';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

const Layout = ({ children }) => {
  const { getCartCount } = useCart();
  return (
    <div className="min-h-screen flex flex-col">
      <Loader />
      <Navbar cartCount={getCartCount()} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
   
હા, જરૂર 👍

તમે તમારો code અહીં paste કરો (જેમાં App.js, Footer.js અથવા routing code હોય).
હું એમાં સીધું ScrollToTop add કરીને full working code બનાવી આપીશ જેથી:

✅ Footer link click કરો
✅ Navbar link click કરો
➡ Page automatic top થી open થાય

તમે બસ તમારો code મોકલો — હું એમાં edit કરીને ready code આપી દઈશ.


import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/logo5.jpeg";
import {
  FaFacebookF, FaInstagram, FaYoutube,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight,
} from "react-icons/fa";

const FooterSubscribe = ({ isGu }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSub = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error(isGu ? "માન્ય ઈમેલ દાખલ કરો" : "Enter a valid email");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success(isGu ? "સફળતાપૂર્વક સબ્સ્ક્રાઇબ થયું!" : "Subscribed successfully!");
      setEmail("");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="mt-5">
      <p className="text-xs font-bold mb-2" style={{ color: "#FFD700", textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
        {isGu ? "નવી માહિતી માટે સબ્સ્ક્રાઇબ કરો" : "Subscribe for latest updates"}
      </p>
      <form onSubmit={handleSub} className="flex rounded-full overflow-hidden shadow-xl border border-yellow-400/40">
        <input
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder={isGu ? "તમારો ઈમેલ" : "Enter your email"}
          className="px-4 py-2 w-full text-sm text-black focus:outline-none bg-white/90"
        />
        <button type="submit" disabled={loading}
          className="bg-yellow-500 hover:bg-orange-500 px-4 text-white transition-all duration-300">
          <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

const Footer = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === "gu";

  const links = [
    { en: "Home",     gu: "હોમ",        path: "/" },
    { en: "About Us", gu: "અમારા વિશે", path: "/about" },
    { en: "Products", gu: "ઉત્પાદનો",   path: "/products" },
    { en: "Blog",     gu: "બ્લોગ",      path: "/blogs" },
    { en: "Contact",  gu: "સંપર્ક",     path: "/contact" },
  ];

  const policies = [
    { path: "/privacy-policy",       en: "Privacy Policy",     gu: "ગોપનીયતા નીતિ" },
    { path: "/terms-and-conditions", en: "Terms & Conditions", gu: "નિયમો અને શરતો" },
    { path: "/refund-policy",        en: "Refund Policy",      gu: "રિફંડ નીતિ" },
    { path: "/shipping-policy",      en: "Shipping Policy",    gu: "શિપિંગ નીતિ" },
    { path: "/faq",                  en: "FAQ",                gu: "FAQ" },
  ];

  const goldText = { color: "#FFD700", textShadow: "0 2px 8px rgba(0,0,0,0.95)" };
  const creamText = { color: "rgb(235, 235, 235)", textShadow: "0 1px 6px rgb(3, 3, 3)" };

  return (
      <footer className="relative w-full text-white bg-[#14532d] overflow-hidden">

  {/* Background Image */}
  <img
  src="/images/Varli12.jpg"
  alt="footer bg"
  className="w-full h-auto block "
/>

  

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

    {/* BRAND */}
    <div>
      <div className="flex items-center gap-3 mb-3">
        <img
          src={logoImg}
          alt="Manna Pure Oil"
          className="w-14 h-14 rounded-full border-2 border-yellow-400 shadow-lg"
        />
        <span className="text-lg font-black text-yellow-400">
          {isGu ? "માના પ્યોર ઓઈલ" : "Manna Pure Oil"}
        </span>
      </div>

      <p className="text-xs font-semibold text-gray-100 leading-relaxed">
        {isGu
          ? "લાકડાની ઘાણીથી કઢેલું શુદ્ધ કોલ્ડ-પ્રેસ્ડ તેલ — ૧૦૦% કુદરતી, કોઈ રસાયણ નહીં."
          : "Wood-pressed cold extracted pure oil — 100% natural, no chemicals, no heat."}
      </p>

      <FooterSubscribe isGu={isGu} />
    </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="text-sm font-black mb-3 border-b border-yellow-400/40 pb-1 uppercase tracking-widest text-yellow-400">
        {isGu ? "ઝડપી લિંક્સ" : "Quick Links"}
      </h3>

      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              to={link.path}
              className="flex items-center gap-2 text-xs font-bold text-gray-100 hover:text-yellow-300 transition"
            >
              <span className="text-yellow-400">➜</span>
              {isGu ? link.gu : link.en}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* POLICIES */}
    <div>
      <h3 className="text-sm font-black mb-3 border-b border-yellow-400/40 pb-1 uppercase tracking-widest text-yellow-400">
        {isGu ? "નીતિઓ" : "Policies"}
      </h3>

      <ul className="space-y-2">
        {policies.map((p, i) => (
          <li key={i}>
            <Link
              to={p.path}
              className="flex items-center gap-2 text-xs font-bold text-gray-100 hover:text-yellow-300 transition"
            >
              <span className="text-yellow-400">➜</span>
              {isGu ? p.gu : p.en}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="text-sm font-black mb-3 border-b border-yellow-400/40 pb-1 uppercase tracking-widest text-yellow-400">
        {isGu ? "સંપર્ક કરો" : "Contact Us"}
      </h3>

      <ul className="space-y-2 text-xs font-bold text-gray-100">
        <li className="flex gap-2 items-center">
          <FaPhone className="text-yellow-400" />
          +91 78742 39595
        </li>

        <li className="flex gap-2 items-center">
          <FaEnvelope className="text-yellow-400" />
          mannapureoil@gmail.com
        </li>

        <li className="flex gap-2 items-start">
          <FaMapMarkerAlt className="text-yellow-400 mt-1" />
          {isGu
            ? "ડોલારા, વ્યારા, તાપી, ગુજરાત 394655"
            : "Dolara, Vyara, Tapi, Gujarat 394655"}
        </li>
      </ul>

      {/* Social */}
      <div className="flex gap-3 mt-4">
        <a
          href="https://www.facebook.com/share/1DHTPMPegK/"
          target="_blank"
          rel="noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/mannapureoil"
          target="_blank"
          rel="noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://youtube.com/@mannapureoil"
          target="_blank"
          rel="noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
        >
          <FaYoutube />
        </a>
      </div>
    </div>

  </div>

  {/* Bottom Copyright */}
  <div className="relative z-10 text-center py-3 text-xs font-bold text-yellow-400 bg-black/40">
    © {new Date().getFullYear()} Manna Pure Oil
    {isGu ? " | સર્વ અધિકાર સુરક્ષિત." : " | All Rights Reserved."}
  </div>

</footer>
  );
};

export default Footer;

તમારો Footer code perfectly correct છે 👍
આમાં change કરવાની જરૂર નથી.
ScrollToTop logic Footer માં નથી મૂકાતું — App.js માં મૂકાય છે.

એટલે તમને નીચે પ્રમાણે setup કરવું પડશે.

1️⃣ New File બનાવો
src/components/ScrollToTop.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
2️⃣ App.js માં Add કરો
App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>

      {/* Page change થાય ત્યારે automatic top scroll */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;
🎯 Result
હવે:

✔ Footer માં Home / About / Products / Blog / Contact click
✔ Navbar link click
✔ Product detail page open

➡ દરેક page automatic top થી open થશે

💡 Pro tip (website UX better કરવા):
જો તમે ઈચ્છો તો હું તમને "Floating Scroll To Top Button" (↑ arrow button) પણ બનાવી આપી શકું જે mobile website માટે ખૂબ useful હોય છે.
તે WhatsApp button જેવી floating દેખાય અને click કરતાં top પર લઈ જાય.


<Router>
      <LanguageProvider>
        <UserAuthProvider>
          <CartProvider>
            <Routes>
              <Route path="/"                    element={<Layout><Home /></Layout>} />
              <Route path="/products"            element={<Layout><Products /></Layout>} />
              <Route path="/product/:id"         element={<Layout><ProductDetail /></Layout>} />
              <Route path="/about"               element={<Layout><About /></Layout>} />
              <Route path="/blogs"               element={<Layout><Blogs /></Layout>} />
              <Route path="/blog/:id"            element={<Layout><BlogPost /></Layout>} />
              <Route path="/contact"             element={<Layout><Contact /></Layout>} />
              <Route path="/login"               element={<Layout><Login /></Layout>} />
              <Route path="/cart"                element={<Layout><Cart /></Layout>} />
              <Route path="/privacy-policy"      element={<Layout><PrivacyPolicy /></Layout>} />
              <Route path="/terms-and-conditions" element={<Layout><TermsAndConditions /></Layout>} />
              <Route path="/refund-policy"       element={<Layout><RefundPolicy /></Layout>} />
              <Route path="/shipping-policy"     element={<Layout><ShippingPolicy /></Layout>} />
              <Route path="/faq"                 element={<Layout><FAQ /></Layout>} />
              <Route path="*"                    element={<Layout><NotFound /></Layout>} />
            </Routes>
            <ToastContainer position="top-right" autoClose={3000} theme="light" style={{ zIndex: 9999 }} />
          </CartProvider>
        </UserAuthProvider>
      </LanguageProvider>
    </Router>    aa maro code aama add kari apo

તમારા code માં ScrollToTop ફક્ત Routes પહેલા add કરવો પડે. હું તમારો code edit કરીને આપી રહ્યો છું.

1️⃣ પહેલા આ file બનાવો
src/components/ScrollToTop.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
2️⃣ હવે તમારો code (ScrollToTop add કરીને)
import ScrollToTop from "./components/ScrollToTop";

<Router>
  <LanguageProvider>
    <UserAuthProvider>
      <CartProvider>

        {/* Page change થાય ત્યારે top scroll */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
          <Route path="/blog/:id" element={<Layout><BlogPost /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/cart" element={<Layout><Cart /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/terms-and-conditions" element={<Layout><TermsAndConditions /></Layout>} />
          <Route path="/refund-policy" element={<Layout><RefundPolicy /></Layout>} />
          <Route path="/shipping-policy" element={<Layout><ShippingPolicy /></Layout>} />
          <Route path="/faq" element={<Layout><FAQ /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="light"
          style={{ zIndex: 9999 }}
        />

      </CartProvider>
    </UserAuthProvider>
  </LanguageProvider>
</Router>
  );
}

export default App;
