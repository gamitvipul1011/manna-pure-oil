import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/logo.jpeg";
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
  const creamText = { color: "#FFFDE7", textShadow: "0 1px 6px rgba(0,0,0,0.95)" };

  return (
     <footer className="relative h-[650px] text-gray-100 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/images/Warli 1920 x 650.jpg"
      alt="footer background"
      className="w-full h-full object-contain object-bottom"
    />
  </div>

  {/* Premium Gradient Overlay */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "linear-gradient(to bottom, rgba(5,25,10,0.88) 0%, rgba(5,25,10,0.78) 40%, rgba(5,25,10,0.45) 70%, rgba(0,0,0,0.08) 100%)",
    }}
  />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 md:grid-cols-4 gap-12">

    {/* BRAND */}
    <div>
      <h2 className="text-3xl font-bold flex items-center gap-3 mb-4 tracking-wide">
        <FaLeaf className="text-green-400 text-2xl" />
        {isGu ? "માના પ્યોર ઓઈલ" : "Manna Pure Oil"}
      </h2>

      <p className="text-sm text-gray-200 leading-relaxed">
        {isGu
          ? "લાકડામાં દબાવવામાં આવેલ શુદ્ધ કોલ્ડ-પ્રેસ્ડ તેલ જે કુદરતી પોષક તત્વોને જાળવી રાખે છે."
          : "Wood pressed cold extracted oils preserving natural nutrients with no chemicals and no heat."}
      </p>

      <FooterSubscribe isGu={isGu} />
    </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
        {isGu ? "ઝડપી લિંક્સ" : "Quick Links"}
      </h3>

      <ul className="space-y-3 text-sm">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              to={link.path}
              className="hover:text-green-300 hover:translate-x-1 transition-all duration-300 inline-block"
            >
              {isGu ? link.gu : link.en}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* POLICIES */}
    <div>
      <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
        {isGu ? "નીતિઓ" : "Policies"}
      </h3>

      <ul className="space-y-3 text-sm">
        <li>
          <Link to="/privacy-policy" className="hover:text-green-300 transition">
            {isGu ? "ગોપનીયતા નીતિ" : "Privacy Policy"}
          </Link>
        </li>

        <li>
          <Link to="/terms-and-conditions" className="hover:text-green-300 transition">
            {isGu ? "નિયમો અને શરતો" : "Terms & Conditions"}
          </Link>
        </li>

        <li>
          <Link to="/refund-policy" className="hover:text-green-300 transition">
            {isGu ? "રિફંડ નીતિ" : "Refund Policy"}
          </Link>
        </li>

        <li>
          <Link to="/shipping-policy" className="hover:text-green-300 transition">
            {isGu ? "શિપિંગ નીતિ" : "Shipping Policy"}
          </Link>
        </li>

        <li>
          <Link to="/faq" className="hover:text-green-300 transition">
            FAQ
          </Link>
        </li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
        {isGu ? "સંપર્ક કરો" : "Contact Us"}
      </h3>

      <ul className="space-y-4 text-sm text-gray-200">

        <li className="flex items-center gap-3">
          <FaPhone className="text-green-400" />
          +91 78742 39595
        </li>

        <li className="flex items-center gap-3">
          <FaEnvelope className="text-green-400" />
          mannapureoil@gmail.com
        </li>

        <li className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-green-400 mt-1" />
          {isGu
            ? "ડોલારા, વ્યારા, તાપી, ગુજરાત 394655"
            : "Dolara, Vyara-Ahwa Rd, Vyara, Tapi, Gujarat 394655"}
        </li>

      </ul>

      {/* SOCIAL ICONS */}
      <div className="flex gap-4 mt-6">

        <a
          href="https://www.facebook.com/share/1DHTPMPegK/"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-green-600 transition duration-300"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/mannapureoil"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-green-600 transition duration-300"
        >
          <FaInstagram />
        </a>

        <a
          href="https://youtube.com/@mannapureoil"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-green-600 transition duration-300"
        >
          <FaYoutube />
        </a>

      </div>

    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="absolute bottom-0 left-0 w-full border-t border-white/20 text-center py-4 text-sm text-gray-200 z-10 backdrop-blur-sm">
    © {new Date().getFullYear()} Manna Pure Oil
    {isGu ? " | સર્વ અધિકાર સુરક્ષિત." : " | All Rights Reserved."}
  </div>

</footer>
  );
};

export default Footer;
