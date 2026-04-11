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
      <footer className="relative w-full text-white bg-[#14532d]">
      {/* ── FULL IMAGE — no crop, full height ── */}
      <img
  src="/images/Warli 1920 x 651.jpg"
  alt="footer bg"
  className="w-full h-auto block"
  style={{ backgroundColor: "#14532d" }}
/>
      {/* ── OVERLAY ON TOP OF IMAGE — absolute, covers whole footer ── */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "linear-gradient(to bottom, rgba(20,83,45,0.40) 0%, rgba(20,83,45,0.35) 55%, rgba(20,83,45,0.20) 78%, rgba(0,0,0,0.08) 100%)",
  }}
/>

      {/* ── CONTENT — sits on top of image ── */}
      <div className="absolute inset-0 flex flex-col justify-between">
        

        {/* TOP CONTENT AREA */}
        <div className="pointer-events-auto max-w-7xl mx-auto w-full px-6 pt-4 grid grid-cols-1 md:grid-cols-4 gap-8 ">

          {/* COL 1: BRAND */}
          <div>
           

  <div className="flex items-center gap-3 mb-3 group">

  <div className="relative">
    <img
      src={logoImg}
      alt="Manna Pure Oil"
      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full 
      object-contain border-2 border-yellow-400 shadow-lg flex-shrink-0
      transition-all duration-500 ease-out group-hover:scale-110"
    />

    {/* Glow Effect */}
    <div className="absolute inset-0 rounded-full  blur-md opacity-0 
    group-hover:opacity-100 transition duration-500"></div>
  </div>

  <span className="text-lg font-black leading-tight" style={goldText}>
    {isGu ? "માના પ્યોર ઓઈલ" : "Manna Pure Oil"}
  </span>

</div>
            <p
  className="text-xs font-semibold leading-relaxed transition-all duration-300 
  hover:scale-[1.03] hover:tracking-wide"
  style={creamText}
>
  {isGu
    ? "લાકડાની ઘાણીથી કઢેલું શુદ્ધ કોલ્ડ-પ્રેસ્ડ તેલ — ૧૦૦% કુદરતી, કોઈ રસાયણ નહીં."
    : "Wood-pressed cold extracted pure oil — 100% natural, no chemicals, no heat."}
</p>
            <FooterSubscribe isGu={isGu} />
          </div>

          {/* COL 2: QUICK LINKS */}
          <div>
            <h3 className="text-sm font-black mb-3 pb-1 border-b border-yellow-400/40 tracking-widest uppercase" style={goldText}>
              {isGu ? "ઝડપી લિંક્સ" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={i}>
                  <Link to={link.path}
                    className="flex items-center gap-2 text-xs font-bold transition-all duration-300 hover:text-orange-400 hover:translate-x-1"
                    style={creamText}>
                    <span style={{ color: "#FFD700" }}>➜</span>
                    {isGu ? link.gu : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: POLICIES */}
          <div>
            <h3 className="text-sm font-black mb-3 pb-1 border-b border-yellow-400/40 tracking-widest uppercase" style={goldText}>
              {isGu ? "નીતિઓ" : "Policies"}
            </h3>
            <ul className="space-y-2">
              {policies.map((p, i) => (
                <li key={i}>
                  <Link to={p.path}
                    className="flex items-center gap-2 text-xs font-bold transition-all duration-300 hover:text-orange-400 hover:translate-x-1"
                    style={creamText}>
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
    {[
      { icon: <FaPhone className="shrink-0" style={{ color: "#FFD700" }} />, text: "+91 78742 39595" },
      { icon: <FaEnvelope className="shrink-0" style={{ color: "#FFD700" }} />, text: "mannapureoil@gmail.com" },
      {
        icon: <FaMapMarkerAlt className="shrink-0 mt-0.5" style={{ color: "#FFD700" }} />,
        text: isGu ? "ડોલારા, વ્યારા, તાપી, ગુજરાત 394655" : "Dolara, Vyara, Tapi, Gujarat 394655",
      },
    ].map((item, i) => (
      <li
        key={i}
        className="flex items-start gap-2 text-xs font-bold transition-all duration-300 hover:translate-x-1 hover:text-yellow-300 cursor-pointer"
        style={creamText}
      >
        <span className="transition-transform duration-300 group-hover:scale-110">
          {item.icon}
        </span>
        <span className="transition-colors duration-300">{item.text}</span>
      </li>
    ))}
  </ul>


            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {[
                { icon: <FaFacebookF />, link: "https://www.facebook.com/share/1DHTPMPegK/" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/mannapureoil?igsh=MXFlems3Ynd2a2pldg==" },
                { icon: <FaYoutube />,   link: "https://youtube.com/@mannapureoil?si=5fhVsw1HQxbd6eQQ" },
              ].map((s, i) => (
                <a key={i} href={s.link} target="_blank" rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-yellow-400/60 bg-black/30 hover:bg-orange-500 hover:scale-110 hover:border-orange-400 transition-all duration-300"
                  style={{ color: "#FFD700" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT — exactly at bottom of image */}
        <div className="pointer-events-auto w-full text-center py-2 text-xs font-bold"
          style={{
            color: "#FFD700",
            textShadow: "0 1px 6px rgba(0,0,0,0.95)",
            background: "rgba(0,0,0,0.35)"
          }}>
          © {new Date().getFullYear()} Manna Pure Oil
          {isGu ? " | સર્વ અધિકાર સુરક્ષિત." : " | All Rights Reserved."}
        </div>

      </div>

    </footer>
  );
};

export default Footer;
