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
        className="flex rounded-full overflow-hidden border border-yellow-400/40 shadow-lg bg-white/10 backdrop-blur-sm"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={isGu ? "તમારો ઈમેલ" : "Enter your email"}
          className="px-4 py-2.5 w-full text-sm text-black bg-white/95 focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-4 sm:px-5 bg-yellow-500 hover:bg-orange-500 text-white transition-all duration-300 disabled:opacity-70"
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

  return (
    <footer className="w-full mt-12">
      {/* Main Footer Background Section */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-green-950/55 to-black/50 z-0" />
        <div className="absolute inset-0 bg-black/20 z-0" />

        {/* Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14 pb-6 sm:pb-8 lg:pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logoImg}
                  alt="Manna Pure Oil"
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 shadow-lg flex-shrink-0"
                />
                <span className="text-lg sm:text-xl font-black leading-tight text-yellow-300 drop-shadow">
                  {isGu ? "માના પ્યોર ઓઈલ" : "Manna Pure Oil"}
                </span>
              </div>

              <p className="text-sm sm:text-[15px] font-medium leading-relaxed text-yellow-50/95">
                {isGu
                  ? "લાકડાની ઘાણીથી કઢેલું શુદ્ધ કોલ્ડ-પ્રેસ્ડ તેલ — ૧૦૦% કુદરતી, કોઈ રસાયણ નહીં."
                  : "Wood-pressed cold extracted pure oil — 100% natural, no chemicals, no heat."}
              </p>

              <FooterSubscribe isGu={isGu} />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm sm:text-base font-black mb-4 pb-2 border-b border-yellow-400/40 tracking-widest uppercase text-yellow-300">
                {isGu ? "ઝડપી લિંક્સ" : "Quick Links"}
              </h3>

              <ul className="space-y-2.5">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-yellow-50 hover:text-orange-300 transition-all duration-300"
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
            <div>
              <h3 className="text-sm sm:text-base font-black mb-4 pb-2 border-b border-yellow-400/40 tracking-widest uppercase text-yellow-300">
                {isGu ? "નીતિઓ" : "Policies"}
              </h3>

              <ul className="space-y-2.5">
                {policies.map((p, i) => (
                  <li key={i}>
                    <Link
                      to={p.path}
                      className="group flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-yellow-50 hover:text-orange-300 transition-all duration-300"
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
            <div>
              <h3 className="text-sm sm:text-base font-black mb-4 pb-2 border-b border-yellow-400/40 tracking-widest uppercase text-yellow-300">
                {isGu ? "સંપર્ક કરો" : "Contact Us"}
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm sm:text-[15px] font-semibold text-yellow-50">
                  <FaPhone className="text-yellow-300 mt-1 shrink-0" />
                  <a href="tel:+917874239595" className="hover:text-orange-300">
                    +91 78742 39595
                  </a>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-[15px] font-semibold text-yellow-50 break-all">
                  <FaEnvelope className="text-yellow-300 mt-1 shrink-0" />
                  <a
                    href="mailto:mannapureoil@gmail.com"
                    className="hover:text-orange-300"
                  >
                    mannapureoil@gmail.com
                  </a>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-[15px] font-semibold text-yellow-50">
                  <FaMapMarkerAlt className="text-yellow-300 mt-1 shrink-0" />
                  <span>
                    {isGu
                      ? "ડોલારા, વ્યારા, તાપી, ગુજરાત 394655"
                      : "Dolara, Vyara, Tapi, Gujarat 394655"}
                  </span>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-3 mt-5">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-400/60 bg-black/30 text-yellow-300 hover:bg-orange-500 hover:text-white hover:scale-110 hover:border-orange-400 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image visible spacing */}
          <div className="h-6 sm:h-8 lg:h-10" />
        </div>
      </div>

      {/* Bottom Copyright - Separate solid section */}
      <div className="relative z-30 w-full bg-[#064e3b] border-t border-yellow-400/30 shadow-[0_-2px_10px_rgba(0,0,0,0.25)]">
        <p className="m-0 text-center px-4 py-3 text-[11px] sm:text-sm font-bold text-yellow-300 leading-none -translate-y-[1px]">
          © {new Date().getFullYear()} Manna Pure Oil{" "}
          {isGu ? "| સર્વ અધિકાર સુરક્ષિત." : "| All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
