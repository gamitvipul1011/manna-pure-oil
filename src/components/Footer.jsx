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
      <p className="mb-2 text-sm font-semibold text-[#FDE68A]">
        {isGu
          ? "નવી માહિતી માટે સબ્સ્ક્રાઇબ કરો"
          : "Subscribe for latest updates"}
      </p>

      <form
        onSubmit={handleSub}
        className="flex overflow-hidden rounded-full border border-yellow-300/40 bg-white/10 shadow-lg backdrop-blur-sm"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={isGu ? "તમારો ઈમેલ" : "Enter your email"}
          className="w-full bg-white/95 px-4 py-2.5 text-sm text-black focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#F59E0B] px-4 text-white transition-all duration-300 hover:bg-[#EA580C] disabled:opacity-70 sm:px-5"
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
      <div className="bg-[#c3dbd5]">
        {/* TOP INFORMATION */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 lg:pt-6 pb-6">
          <div className="grid grid-cols-1 gap-6 items-start sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
            {/* COL 1 */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 shadow-lg backdrop-blur-[2px] sm:p-5">
              <div className="mb-4 flex items-center gap-2.5">
                <img
                  src={logoImg}
                  alt="Manna Pure Oil"
                  className="h-12 w-12 rounded-full border-2 border-[#FACC15] object-cover sm:h-14 sm:w-14"
                />

                <div>
                  <h2 className="whitespace-nowrap text-[18px] font-extrabold text-[#FACC15] sm:text-[20px] lg:text-[22px]">
                    {isGu ? "માના પ્યોર ઓઈલ" : "Manna Pure Oil"}
                  </h2>

                  <p className="mt-1 text-[10px] uppercase text-[#FEF3C7] sm:text-[11px]">
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
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 shadow-lg sm:p-5">
              <h3 className="mb-4 text-base font-bold text-[#FACC15]">
                {isGu ? "ઝડપી લિંક્સ" : "Quick Links"}
              </h3>

              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-white transition hover:text-[#FDBA74]"
                    >
                      ➜ {isGu ? link.gu : link.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* POLICIES */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 shadow-lg sm:p-5">
              <h3 className="mb-4 text-base font-bold text-[#FACC15]">
                {isGu ? "નીતિઓ" : "Policies"}
              </h3>

              <ul className="space-y-3">
                {policies.map((p, i) => (
                  <li key={i}>
                    <Link
                      to={p.path}
                      className="flex items-center gap-2 text-white transition hover:text-[#FDBA74]"
                    >
                      ➜ {isGu ? p.gu : p.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 shadow-lg sm:p-5">
              <h3 className="mb-4 text-base font-bold text-[#FACC15]">
                {isGu ? "સંપર્ક કરો" : "Contact Us"}
              </h3>

              <ul className="space-y-3 text-white">
                <li className="flex gap-3">
                  <FaPhone className="mt-1 text-[#FACC15]" />
                  <span>+91 78742 39595</span>
                </li>

                <li className="flex gap-3">
                  <FaEnvelope className="mt-1 text-[#FACC15]" />
                  <span>mannapureoil@gmail.com</span>
                </li>

                <li className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 text-[#FACC15]" />
                  <span>
                    {isGu
                      ? "ડોલારા, વ્યારા-આહવા રોડ, તા-વ્યારા, જિ-તાપી"
                      : "Dolara, Vyara-Ahwa Road, Ta-Vyara, Di-Tapi"}
                  </span>
                </li>
              </ul>

              <div className="mt-5 flex gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-300/50 text-[#FACC15] transition hover:bg-[#EA580C] hover:text-white"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FULL WARLI IMAGE BELOW INFORMATION */}
        <div className="w-full mt-4 pointer-events-none">
          <img
            src={warli}
            alt="Warli Pattern"
            className="block w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full border-t border-yellow-300/20 bg-[#064E3B]">
        <p className="px-4 py-3 text-center text-[11px] font-bold text-[#FACC15] sm:text-sm">
          © {new Date().getFullYear()} Manna Pure Oil{" "}
          {isGu ? "| સર્વ અધિકાર સુરક્ષિત." : "| All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
