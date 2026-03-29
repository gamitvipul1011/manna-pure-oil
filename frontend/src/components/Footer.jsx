import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLeaf,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
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
    <div className="mt-6">
      <p className="text-sm text-gray-200 mb-3">
        {isGu ? "નવી માહિતી માટે સબ્સ્ક્રાઇબ કરો" : "Subscribe for latest updates"}
      </p>

      <form
        onSubmit={handleSub}
        className="flex bg-white rounded-full overflow-hidden shadow-lg"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={isGu ? "તમારો ઈમેલ" : "Enter your email"}
          className="px-4 py-2 w-full text-sm text-black focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-brand-green-600 hover:bg-brand-green-700 px-4 text-white transition"
        >
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
    { en: "Home", gu: "હોમ", path: "/" },
    { en: "About Us", gu: "અમારા વિશે", path: "/about" },
    { en: "Products", gu: "ઉત્પાદનો", path: "/products" },
    { en: "Blog", gu: "બ્લોગ", path: "/blogs" },
    { en: "Contact", gu: "સંપર્ક", path: "/contact" },
  ];

  return (
    <footer className="relative bg-green-950 text-gray-100 pt-16 pb-8 overflow-hidden">

      {/* overlay */}
      <div className="absolute inset-0 bg-green-900/80"></div>

      {/* illustration */}
      <div className="absolute bottom-0 left-0 w-full opacity-20">
        <img
  src="/images/footer01.jpg"
  alt="farm"
 className="w-full h-full object-cover object-[center_75%] md:object-[center_60%]"
/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-3 mb-4">
            <FaLeaf className="text-brand-green-400" />
            {isGu ? "માના પ્યોર ઓઈલ" : "Manna Pure Oil"}
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed">
            {isGu
              ? "લાકડામાં દબાવવામાં આવેલ શુદ્ધ કોલ્ડ-પ્રેસ્ડ તેલ જે કુદરતી પોષક તત્વોને જાળવી રાખે છે."
              : "Wood pressed cold extracted oils preserving natural nutrients with no chemicals and no heat."}
          </p>

          <FooterSubscribe isGu={isGu} />
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-5 border-b border-white/20 pb-2">
            {isGu ? "ઝડપી લિંક્સ" : "Quick Links"}
          </h3>

          <ul className="space-y-3 text-sm">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="hover:text-brand-green-300 transition"
                >
                  {isGu ? link.gu : link.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h3 className="text-lg font-semibold mb-5 border-b border-white/20 pb-2">
            {isGu ? "નીતિઓ" : "Policies"}
          </h3>

          <ul className="space-y-3 text-sm">

            <li>
              <Link to="/privacy-policy" className="hover:text-brand-green-300">
                {isGu ? "ગોપનીયતા નીતિ" : "Privacy Policy"}
              </Link>
            </li>

            <li>
              <Link to="/terms-and-conditions" className="hover:text-brand-green-300">
                {isGu ? "નિયમો અને શરતો" : "Terms & Conditions"}
              </Link>
            </li>

            <li>
              <Link to="/refund-policy" className="hover:text-brand-green-300">
                {isGu ? "રિફંડ નીતિ" : "Refund Policy"}
              </Link>
            </li>

            <li>
              <Link to="/shipping-policy" className="hover:text-brand-green-300">
                {isGu ? "શિપિંગ નીતિ" : "Shipping Policy"}
              </Link>
            </li>

            <li>
              <Link to="/faq" className="hover:text-brand-green-300">
                FAQ
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-lg font-semibold mb-5 border-b border-white/20 pb-2">
            {isGu ? "સંપર્ક કરો" : "Contact Us"}
          </h3>

          <ul className="space-y-4 text-sm text-gray-300">

            <li className="flex items-center gap-3">
              <FaPhone className="text-brand-green-400" />
              +91 78742 39595
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-brand-green-400" />
              mannapureoil@gmail.com
            </li>

            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-brand-green-400 mt-1" />
              {isGu
                ? "ડોલારા, વ્યારા, તાપી, ગુજરાત 394655"
                : "Dolara, Vyara-Ahwa Rd, Vyara, Tapi, Gujarat 394655"}
            </li>

          </ul>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">

            <a
              href="https://www.facebook.com/share/1DHTPMPegK/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/mannapureoil"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com/@mannapureoil"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green-600 transition"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      {/* bottom */}
      <div className="relative z-10 border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Manna Pure Oil
        {isGu ? " | સર્વ અધિકાર સુરક્ષિત." : " | All Rights Reserved."}
      </div>

    </footer>
  );
};

export default Footer;
