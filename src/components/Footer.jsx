import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import logoImg from "../assets/logo.jpeg";
import warli from "../assets/Warli11.jpg";

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
      toast.success(
        isGu
          ? "સફળતાપૂર્વક સબ્સ્ક્રાઇબ થયું!"
          : "Subscribed successfully!"
      );
      setEmail("");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="mt-5">
      <p className="text-xs sm:text-sm font-bold mb-2 text-yellow-300">
        {isGu
          ? "નવી માહિતી માટે સબ્સ્ક્રાઇબ કરો"
          : "Subscribe for latest updates"}
      </p>

      <form
        onSubmit={handleSub}
        className="flex rounded-full overflow-hidden shadow-xl border border-yellow-400/40"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={isGu ? "તમારો ઈમેલ" : "Enter your email"}
          className="px-4 py-2 w-full text-sm text-black focus:outline-none bg-white/90"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-500 hover:bg-orange-500 px-4 text-white transition-all duration-300 disabled:opacity-70"
        >
          {loading ? "..." : <FaArrowRight />}
        </button>
      </form>
    </div>
  );
};

const Footer = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === "gu";

  const links = [
    { en: "Home", gu: "હોમ", path: "/" },
    { en: "About Us", gu: "અમારા વિશે", path: "/about" },
    { en: "Products", gu: "ઉત્પાદનો", path: "/products" },
    { en: "Blog", gu: "બ્લોગ", path: "/blogs" },
    { en: "Contact", gu: "સંપર્ક", path: "/contact" },
  ];

  const policies = [
    { path: "/privacy-policy", en: "Privacy Policy", gu: "ગોપનીયતા નીતિ" },
    {
      path: "/terms-and-conditions",
      en: "Terms & Conditions",
      gu: "નિયમો અને શરતો",
    },
    { path: "/refund-policy", en: "Refund Policy", gu: "રિફંડ નીતિ" },
    { path: "/shipping-policy", en: "Shipping Policy", gu: "શિપિંગ નીતિ" },
    { path: "/faq", en: "FAQ", gu: "FAQ" },
  ];

  const goldText = {
    color: "#FFD700",
    textShadow: "0 2px 8px rgba(0,0,0,0.95)",
  };

  const creamText = {
    color: "#FFFDE7",
    textShadow: "0 1px 6px rgba(0,0,0,0.95)",
  };

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/share/1DHTPMPegK/",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/mannapureoil?igsh=MXFlems3Ynd2a2pldg==",
    },
    {
      icon: <FaYoutube />,
      link: "https://youtube.com/@mannapureoil?si=5fhVsw1HQxbd6eQQ",
    },
  ];

  return (
    <footer className="w-full mt-12">
      {/* TOP SECTION: Warli image full visible */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.62), rgba(6,78,59,0.35), rgba(0,0,0,0.28)), url(${warli})`,
          backgroundSize: "cover, contain",
          backgroundPosition: "center, center bottom",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundColor: "#052e24",
        }}
      >
        <div
          className="max-w-7xl mx-auto w-full px-5 pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-14 lg:pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* COL 1: BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={logoImg}
                alt="Manna Pure Oil"
                className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400 shadow-lg flex-shrink-0"
              />
              <span className="text-lg font-black leading-tight" style={goldText}>
                {isGu ? "માના પ્યોર ઓઈલ" : "Manna Pure Oil"}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold leading-relaxed" style={creamText}>
              {isGu
                ? "લાકડાની ઘાણીથી કઢેલું શુદ્ધ કોલ્ડ-પ્રેસ્ડ તેલ — ૧૦૦% કુદરતી, કોઈ રસાયણ નહીં."
                : "Wood-pressed cold extracted pure oil — 100% natural, no chemicals, no heat."}
            </p>

            <FooterSubscribe isGu={isGu} />
          </div>

          {/* COL 2: QUICK LINKS */}
          <div>
            <h3
              className="text-sm font-black mb-3 pb-1 border-b border-yellow-400/40 tracking-widest uppercase"
              style={goldText}
            >
              {isGu ? "ઝડપી લિંક્સ" : "Quick Links"}
            </h3>

            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-xs sm:text-sm font-bold transition-all duration-300 hover:text-orange-300 hover:translate-x-1"
                    style={creamText}
                  >
                    <span style={{ color: "#FFD700" }}>➜</span>
                    {isGu ? link.gu : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: POLICIES */}
          <div>
            <h3
              className="text-sm font-black mb-3 pb-1 border-b border-yellow-400/40 tracking-widest uppercase"
              style={goldText}
            >
              {isGu ? "નીતિઓ" : "Policies"}
            </h3>

            <ul className="space-y-2">
              {policies.map((p, i) => (
                <li key={i}>
                  <Link
                    to={p.path}
                    className="flex items-center gap-2 text-xs sm:text-sm font-bold transition-all duration-300 hover:text-orange-300 hover:translate-x-1"
                    style={creamText}
                  >
                    <span style={{ color: "#FFD700" }}>➜</span>
                    {isGu ? p.gu : p.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: CONTACT */}
          <div>
            <h3
              className="text-sm font-black mb-3 pb-1 border-b border-yellow-400/40 tracking-widest uppercase"
              style={goldText}
            >
              {isGu ? "સંપર્ક કરો" : "Contact Us"}
            </h3>

            <ul className="space-y-2.5">
              <li
                className="flex items-start gap-2 text-xs sm:text-sm font-bold"
                style={creamText}
              >
                <FaPhone className="shrink-0 mt-0.5" style={{ color: "#FFD700" }} />
                <a href="tel:+917874239595" className="hover:text-orange-300">
                  +91 78742 39595
                </a>
              </li>

              <li
                className="flex items-start gap-2 text-xs sm:text-sm font-bold break-all"
                style={creamText}
              >
                <FaEnvelope className="shrink-0 mt-0.5" style={{ color: "#FFD700" }} />
                <a
                  href="mailto:mannapureoil@gmail.com"
                  className="hover:text-orange-300"
                >
                  mannapureoil@gmail.com
                </a>
              </li>

              <li
                className="flex items-start gap-2 text-xs sm:text-sm font-bold"
                style={creamText}
              >
                <FaMapMarkerAlt
                  className="shrink-0 mt-0.5"
                  style={{ color: "#FFD700" }}
                />
                <span>
                  {isGu
                    ? "ડોલારા, વ્યારા, તાપી, ગુજરાત 394655"
                    : "Dolara, Vyara, Tapi, Gujarat 394655"}
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-yellow-400/60 bg-black/30 hover:bg-orange-500 hover:scale-110 hover:border-orange-400 transition-all duration-300"
                  style={{ color: "#FFD700" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Warli image niche vadhu visible thai te mate */}
        <div className="h-16 sm:h-20 lg:h-28" />
      </div>

      {/* BOTTOM SECTION: Copyright alag solid div ma */}
      <div className="w-full bg-[#064e3b] border-t border-yellow-400/30">
        <p className="m-0 text-center px-4 py-3 text-[11px] sm:text-sm font-bold text-yellow-300 leading-none -translate-y-[1px]">
          © {new Date().getFullYear()} Manna Pure Oil{" "}
          {isGu ? "| સર્વ અધિકાર સુરક્ષિત." : "| All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
