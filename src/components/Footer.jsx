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

import logoImg from "../assets/logo5.jpeg";
import warli from "../assets/warli011.jpeg";

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
      <p className="text-sm font-semibold mb-2 text-[#FDE68A]">
        {isGu
          ? "નવી માહિતી માટે સબ્સ્ક્રાઇબ કરો"
          : "Subscribe for latest updates"}
      </p>

      <form
        onSubmit={handleSub}
        className="flex rounded-full overflow-hidden border border-yellow-300/40 shadow-lg bg-white/10 backdrop-blur-sm"
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
          className="px-4 sm:px-5 bg-[#F59E0B] hover:bg-[#EA580C] text-white transition-all duration-300 disabled:opacity-70"
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
      link:
        "https://www.instagram.com/mannapureoil?igsh=MXFlems3Ynd2a2pldg==",
    },
    {
      icon: <FaYoutube />,
      link: "https://youtube.com/@mannapureoil?si=5fhVsw1HQxbd6eQQ",
    },
  ];

  return (
    <footer className="w-full">
      {/* TOP SECTION */}
      <div className="relative overflow-hidden bg-[#c3dbd5]">
        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 lg:pt-6 pb-32 sm:pb-36 lg:pb-44">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-start">
            
            {/* COL 1 */}
            <div className="rounded-2xl bg-black/20 backdrop-blur-[2px] border border-white/10 p-4 sm:p-5 shadow-lg">
              <div className="flex items-center gap-2.5 mb-4">
                <img
                  src={logoImg}
                  alt="Manna Pure Oil"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#FACC15]"
                />

                <div>
                  <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-extrabold text-[#FACC15] whitespace-nowrap">
                    {isGu ? "માના પ્યોર ઓઈલ" : "Manna Pure Oil"}
                  </h2>

                  <p className="text-[10px] sm:text-[11px] text-[#FEF3C7] uppercase mt-1">
                    {isGu
                      ? "શુદ્ધ કોલ્ડ પ્રેસ્ડ ઓઈલ"
                      : "Pure Cold Pressed Oil"}
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#FFFBEB]">
                {isGu
                  ? "લાકડાની ઘાણીથી કઢેલું શુદ્ધ કોલ્ડ-પ્રેસ્ડ તેલ — ૧૦૦% કુદરતી, કોઈ રસાયણ નહીં."
                  : "Wood-pressed cold extracted pure oil — 100% natural, no chemicals, no heat."}
              </p>

              <FooterSubscribe isGu={isGu} />
            </div>

            {/* QUICK LINKS */}
            <div className="rounded-2xl bg-black/20 border border-white/10 p-4 sm:p-5 shadow-lg">
              <h3 className="text-base font-bold mb-4 text-[#FACC15]">
                {isGu ? "ઝડપી લિંક્સ" : "Quick Links"}
              </h3>

              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-white hover:text-[#FDBA74]"
                    >
                      ➜ {isGu ? link.gu : link.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* POLICIES */}
            <div className="rounded-2xl bg-black/20 border border-white/10 p-4 sm:p-5 shadow-lg">
              <h3 className="text-base font-bold mb-4 text-[#FACC15]">
                {isGu ? "નીતિઓ" : "Policies"}
              </h3>

              <ul className="space-y-3">
                {policies.map((p, i) => (
                  <li key={i}>
                    <Link
                      to={p.path}
                      className="flex items-center gap-2 text-white hover:text-[#FDBA74]"
                    >
                      ➜ {isGu ? p.gu : p.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="rounded-2xl bg-black/20 border border-white/10 p-4 sm:p-5 shadow-lg">
              <h3 className="text-base font-bold mb-4 text-[#FACC15]">
                {isGu ? "સંપર્ક કરો" : "Contact Us"}
              </h3>

              <ul className="space-y-3 text-white">
                <li className="flex gap-3">
                  <FaPhone className="text-[#FACC15]" />
                  +91 78742 39595
                </li>

                <li className="flex gap-3">
                  <FaEnvelope className="text-[#FACC15]" />
                  mannapureoil@gmail.com
                </li>

                <li className="flex gap-3">
                  <FaMapMarkerAlt className="text-[#FACC15]" />
                  {isGu
                    ? "ડોલારા, વ્યારા-આહવા રોડ, તા-વ્યારા, જિ-તાપી"
                    : "Dolara, Vyara-Ahwa Road, Ta-Vyara, Di-Tapi"}
                </li>
              </ul>

              <div className="flex gap-3 mt-5">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-300/50 text-[#FACC15] hover:bg-[#EA580C] hover:text-white transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WARLI IMAGE BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
          <img
            src={warli}
            alt="Warli Pattern"
            className="w-full object-cover object-bottom"
          />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full bg-[#064E3B] border-t border-yellow-300/20">
        <p className="text-center px-4 py-3 text-[11px] sm:text-sm font-bold text-[#FACC15]">
          © {new Date().getFullYear()} Manna Pure Oil{" "}
          {isGu ? "| સર્વ અધિકાર સુરક્ષિત." : "| All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
