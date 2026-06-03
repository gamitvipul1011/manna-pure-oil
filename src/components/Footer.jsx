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
      <p className="text-xs sm:text-sm font-semibold mb-2 text-yellow-200">
        {isGu
          ? "નવી માહિતી માટે સબ્સ્ક્રાઇબ કરો"
          : "Subscribe for latest updates"}
      </p>

      <form
        onSubmit={handleSub}
        className="flex rounded-full overflow-hidden border border-yellow-300/40 bg-white/10 backdrop-blur-md"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={isGu ? "તમારો ઈમેલ" : "Enter your email"}
          className="w-full px-4 py-2.5 text-sm text-black bg-white/95 focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-4 sm:px-5 bg-yellow-500 hover:bg-orange-500 text-white transition-all duration-300"
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

  const cardClass =
    "rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)] p-5 sm:p-6 hover:bg-white/12 transition-all duration-300";

  return (
    <footer className="w-full mt-12">
      {/* Main Footer Section */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${warli})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.78),rgba(2,44,34,0.68),rgba(0,0,0,0.72))]" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Top glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-yellow-300/10 blur-3xl rounded-full pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 lg:pt-16 pb-8 sm:pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Brand */}
            <div className={cardClass}>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logoImg}
                  alt="Manna Pure Oil"
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 shadow-lg"
                />
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-yellow-300 leading-tight">
                    {isGu ? "માના પ્યોર ઓઈલ" : "Manna Pure Oil"}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-yellow-100/80 mt-1">
                    {isGu ? "શુદ્ધ કોલ્ડ-પ્રેસ્ડ તેલ" : "Pure Cold Pressed Oil"}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-[15px] leading-relaxed text-yellow-50/95">
                {isGu
                  ? "લાકડાની ઘાણીથી કઢેલું શુદ્ધ કોલ્ડ-પ્રેસ્ડ તેલ — ૧૦૦% કુદરતી, કોઈ રસાયણ નહીં."
                  : "Wood-pressed cold extracted pure oil — 100% natural, no chemicals, no heat."}
              </p>

              <FooterSubscribe isGu={isGu} />
            </div>

            {/* Quick Links */}
            <div className={cardClass}>
              <h3 className="text-sm sm:text-base font-black mb-4 pb-2 border-b border-yellow-300/30 uppercase tracking-widest text-yellow-300">
                {isGu ? "ઝડપી લિંક્સ" : "Quick Links"}
              </h3>

              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-sm sm:text-[15px] text-yellow-50 hover:text-orange-300 font-medium transition-all duration-300"
                    >
                      <span className="text-yellow-300 group-hover:translate-x-1 transition-transform duration-300">
                        ➜
                      </span>
                      {isGu ? link.gu : link.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div className={cardClass}>
              <h3 className="text-sm sm:text-base font-black mb-4 pb-2 border-b border-yellow-300/30 uppercase tracking-widest text-yellow-300">
                {isGu ? "નીતિઓ" : "Policies"}
              </h3>

              <ul className="space-y-3">
                {policies.map((p, i) => (
                  <li key={i}>
                    <Link
                      to={p.path}
                      className="group flex items-center gap-2 text-sm sm:text-[15px] text-yellow-50 hover:text-orange-300 font-medium transition-all duration-300"
                    >
                      <span className="text-yellow-300 group-hover:translate-x-1 transition-transform duration-300">
                        ➜
                      </span>
                      {isGu ? p.gu : p.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={cardClass}>
              <h3 className="text-sm sm:text-base font-black mb-4 pb-2 border-b border-yellow-300/30 uppercase tracking-widest text-yellow-300">
                {isGu ? "સંપર્ક કરો" : "Contact Us"}
              </h3>

              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 text-sm sm:text-[15px] text-yellow-50 font-medium">
                  <FaPhone className="text-yellow-300 mt-1 shrink-0" />
                  <a href="tel:+917874239595" className="hover:text-orange-300">
                    +91 78742 39595
                  </a>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-[15px] text-yellow-50 font-medium break-all">
                  <FaEnvelope className="text-yellow-300 mt-1 shrink-0" />
                  <a
                    href="mailto:mannapureoil@gmail.com"
                    className="hover:text-orange-300"
                  >
                    mannapureoil@gmail.com
                  </a>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-[15px] text-yellow-50 font-medium">
                  <FaMapMarkerAlt className="text-yellow-300 mt-1 shrink-0" />
                  <span>
                    {isGu
                      ? "ડોલારા, વ્યારા, તાપી, ગુજરાત 394655"
                      : "Dolara, Vyara, Tapi, Gujarat 394655"}
                  </span>
                </li>
              </ul>

              {/* Social */}
              <div className="flex gap-3 mt-5">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-yellow-300/50 bg-black/25 text-yellow-300 hover:bg-orange-500 hover:text-white hover:scale-110 hover:border-orange-400 transition-all duration-300 shadow-md"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Warli image visibility space */}
          <div className="h-8 sm:h-10 lg:h-14" />
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-30 w-full bg-[#053b2c] border-t border-yellow-400/25">
        <p className="m-0 text-center px-4 py-3 text-[11px] sm:text-sm font-bold text-yellow-300 leading-none -translate-y-[1px]">
          © {new Date().getFullYear()} Manna Pure Oil{" "}
          {isGu ? "| સર્વ અધિકાર સુરક્ષિત." : "| All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
