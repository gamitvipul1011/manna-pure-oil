import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/logo5.jpeg";
import warliImg from "../assets/Warli11.jpg"; // ← આ file તમારી assets folder માં મૂકો
import {
  FaFacebookF, FaInstagram, FaYoutube,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight,
} from "react-icons/fa";

/* ── Subscribe mini-form ───────────────────────────────────────── */
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
    <div className="mt-4">
      <p className="text-xs font-bold mb-2 text-yellow-300 drop-shadow">
        {isGu ? "નવી માહિતી માટે સબ્સ્ક્રાઇબ કરો" : "Subscribe for latest updates"}
      </p>
      <form onSubmit={handleSub} className="flex rounded-full overflow-hidden shadow-lg border border-yellow-400/50">
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
          className="bg-yellow-500 hover:bg-orange-500 px-4 text-white transition-all duration-300"
        >
          <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

/* ── Main Footer ───────────────────────────────────────────────── */
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

  return (
    <footer className="relative w-full overflow-hidden bg-[#14532d]">

      {/*
       * ── Warli image = absolute background, fills entire footer ──
       * object-bottom keeps the figures (bottom of image) always visible
       */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <img
          src={warliImg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-bottom"
          style={{ filter: "brightness(0.50) saturate(0.85)" }}
        />
        {/* dark gradient top→bottom so top text is easy to read */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,30,10,0.88) 0%, rgba(5,30,10,0.68) 55%, rgba(5,30,10,0.35) 100%)",
          }}
        />
      </div>

      {/* ── All content on top (z-10) ── */}
      <div className="relative z-10">

        <div className="max-w-7xl mx-auto px-5 pt-8 pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ── 1. BRAND ── */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={logoImg}
                alt="Manna Pure Oil"
                className="w-14 h-14 rounded-full border-2 border-yellow-400 shadow-lg object-cover"
              />
              <span className="text-lg font-black text-yellow-400 drop-shadow-lg leading-tight">
                {isGu ? "માના પ્યોર ઓઈલ" : "Manna Pure Oil"}
              </span>
            </div>

            <p className="text-xs font-semibold text-gray-100 leading-relaxed drop-shadow">
              {isGu
                ? "લાકડાની ઘાણીથી કઢેલું શુદ્ધ કોલ્ડ-પ્રેસ્ડ તેલ — ૧૦૦% કુદરતી, કોઈ રસાયણ નહીં."
                : "Wood-pressed cold extracted pure oil — 100% natural, no chemicals, no heat."}
            </p>

            <FooterSubscribe isGu={isGu} />
          </div>

          {/* ── 2. QUICK LINKS ── */}
          <div>
            <h3 className="text-sm font-black mb-3 border-b border-yellow-400/50 pb-1 uppercase tracking-widest text-yellow-400 drop-shadow">
              {isGu ? "ઝડપી લિંક્સ" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-xs font-bold text-gray-100 hover:text-yellow-300 transition drop-shadow"
                  >
                    <span className="text-yellow-400">➜</span>
                    {isGu ? link.gu : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 3. POLICIES ── */}
          <div>
            <h3 className="text-sm font-black mb-3 border-b border-yellow-400/50 pb-1 uppercase tracking-widest text-yellow-400 drop-shadow">
              {isGu ? "નીતિઓ" : "Policies"}
            </h3>
            <ul className="space-y-2">
              {policies.map((p, i) => (
                <li key={i}>
                  <Link
                    to={p.path}
                    className="flex items-center gap-2 text-xs font-bold text-gray-100 hover:text-yellow-300 transition drop-shadow"
                  >
                    <span className="text-yellow-400">➜</span>
                    {isGu ? p.gu : p.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 4. CONTACT ── */}
          <div>
            <h3 className="text-sm font-black mb-3 border-b border-yellow-400/50 pb-1 uppercase tracking-widest text-yellow-400 drop-shadow">
              {isGu ? "સંપર્ક કરો" : "Contact Us"}
            </h3>
            <ul className="space-y-2 text-xs font-bold text-gray-100">
              <li className="flex gap-2 items-center drop-shadow">
                <FaPhone className="text-yellow-400 shrink-0" />
                +91 78742 39595
              </li>
              <li className="flex gap-2 items-center drop-shadow">
                <FaEnvelope className="text-yellow-400 shrink-0" />
                mannapureoil@gmail.com
              </li>
              <li className="flex gap-2 items-start drop-shadow">
                <FaMapMarkerAlt className="text-yellow-400 mt-0.5 shrink-0" />
                {isGu
                  ? "ડોલારા, વ્યારા, તાપી, ગુજરાત 394655"
                  : "Dolara, Vyara, Tapi, Gujarat 394655"}
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              {[
                { href: "https://www.facebook.com/share/1DHTPMPegK/", Icon: FaFacebookF },
                { href: "https://www.instagram.com/mannapureoil",       Icon: FaInstagram },
                { href: "https://youtube.com/@mannapureoil",            Icon: FaYoutube },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-3 text-xs font-bold text-yellow-400 bg-black/50">
          © {new Date().getFullYear()} Manna Pure Oil
          {isGu ? " | સર્વ અધિકાર સુરક્ષિત." : " | All Rights Reserved."}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
