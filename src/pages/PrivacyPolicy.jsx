import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaUserShield,
  FaDatabase,
  FaCookieBite,
  FaLock,
  FaUserCheck,
  FaChild,
  FaLink,
  FaSyncAlt,
  FaPhone,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === "gu";

  const sections = [
    {
      icon: <FaDatabase className="text-purple-600 text-2xl" />,
      title: isGu ? "અમે કઈ માહિતી એકત્ર કરીએ છીએ" : "Information We Collect",
      content: isGu ? (
        <>
          <p className="mb-2 font-semibold">વ્યક્તિગત માહિતી</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>તમારું સંપૂર્ણ નામ</li>
            <li>સંપર્ક નંબર</li>
            <li>ઈમેલ સરનામું</li>
            <li>ડિલિવરી સરનામું</li>
          </ul>

          <p className="mt-4 mb-2 font-semibold">ઉપયોગ માહિતી</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>IP Address</li>
            <li>Browser અને Device Type</li>
            <li>કઈ pages જુઓ છો અને કેટલો સમય રહે છો</li>
          </ul>
        </>
      ) : (
        <>
          <p className="mb-2 font-semibold">Personal Data</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Full Name</li>
            <li>Contact Number</li>
            <li>Email Address</li>
            <li>Delivery Address</li>
          </ul>

          <p className="mt-4 mb-2 font-semibold">Usage Data</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>IP Address</li>
            <li>Browser and Device Type</li>
            <li>Pages visited and time spent</li>
          </ul>
        </>
      ),
    },

    {
      icon: <FaCookieBite className="text-orange-500 text-2xl" />,
      title: isGu
        ? "Cookies અને અનુભવ સુધારણા"
        : "Cookies & Experience Enhancement",
      content: isGu ? (
        <>
          <p className="mb-2">
            અમારી વેબસાઇટ તમારા browsing અનુભવને સરળ અને વ્યક્તિગત બનાવવા
            cookies નો ઉપયોગ કરે છે.
          </p>

          <ul className="list-disc ml-5 space-y-1">
            <li>Essential Cookies – website functionality માટે</li>
            <li>Preference Cookies – તમારી પસંદગીઓ યાદ રાખવા</li>
            <li>Performance Cookies – website performance સુધારવા</li>
          </ul>
        </>
      ) : (
        <>
          <p className="mb-2">
            We use cookies to ensure a smooth and personalized browsing
            experience.
          </p>

          <ul className="list-disc ml-5 space-y-1">
            <li>Essential Cookies – enable website functionality</li>
            <li>Preference Cookies – remember your choices</li>
            <li>Performance Cookies – improve platform performance</li>
          </ul>
        </>
      ),
    },

    {
      icon: <FaUserShield className="text-green-600 text-2xl" />,
      title: isGu ? "તમારી માહિતીનો ઉપયોગ" : "How We Use Your Information",
      content: isGu ? (
        <ul className="list-disc ml-5 space-y-1">
          <li>તમારા ઓર્ડર પ્રોસેસ અને ડિલિવરી માટે</li>
          <li>Customer support આપવા માટે</li>
          <li>Offers અને product updates આપવા માટે</li>
          <li>અમારી services સુધારવા માટે</li>
          <li>Secure transactions માટે</li>
        </ul>
      ) : (
        <ul className="list-disc ml-5 space-y-1">
          <li>Process and deliver your orders</li>
          <li>Provide customer support</li>
          <li>Share product updates and offers</li>
          <li>Improve our services</li>
          <li>Ensure secure transactions</li>
        </ul>
      ),
    },

    {
      icon: <FaLock className="text-blue-600 text-2xl" />,
      title: isGu ? "માહિતી શેર કરવી" : "Sharing of Information",
      content: isGu
        ? "અમે તમારી વ્યક્તિગત માહિતી વેચતા નથી. માહિતી માત્ર trusted delivery અથવા payment partners સાથે અથવા કાનૂની જરૂરિયાત હોય ત્યારે જ શેર થાય છે."
        : "We never sell your personal data. Information may only be shared with trusted partners such as delivery or payment providers, when required by law, or with your consent.",
    },

    {
      icon: <FaUserCheck className="text-purple-700 text-2xl" />,
      title: isGu ? "તમારા અધિકારો" : "Your Rights",
      content: isGu ? (
        <ul className="list-disc ml-5 space-y-1">
          <li>તમારી માહિતી જોવા</li>
          <li>તમારી વિગતો સુધારવા</li>
          <li>તમારી માહિતી delete કરવાની વિનંતી કરવા</li>
        </ul>
      ) : (
        <ul className="list-disc ml-5 space-y-1">
          <li>Access your personal data</li>
          <li>Update your information</li>
          <li>Request deletion of your data</li>
        </ul>
      ),
    },

    {
      icon: <FaChild className="text-pink-500 text-2xl" />,
      title: isGu ? "બાળકોની ગોપનીયતા" : "Children’s Privacy",
      content: isGu
        ? "અમારી સેવાઓ 13 વર્ષથી ઓછી ઉંમરના બાળકો માટે બનાવેલી નથી."
        : "Our services are not intended for children under 13.",
    },

    {
      icon: <FaLink className="text-indigo-600 text-2xl" />,
      title: isGu ? "બાહ્ય લિંક્સ" : "External Links",
      content: isGu
        ? "અમારી વેબસાઇટમાં third-party links હોઈ શકે છે. તેમની privacy policy માટે અમે જવાબદાર નથી."
        : "Our website may include links to third-party platforms. We are not responsible for their privacy practices.",
    },

    {
      icon: <FaSyncAlt className="text-gray-600 text-2xl" />,
      title: isGu ? "Policy Updates" : "Updates to This Policy",
      content: isGu
        ? "અમારી સેવાઓમાં ફેરફાર થાય ત્યારે આ Privacy Policy update થઈ શકે છે."
        : "This Privacy Policy may be updated as our services evolve.",
    },

    {
      icon: <FaPhone className="text-green-700 text-2xl" />,
      title: isGu ? "સંપર્ક કરો" : "Contact Us",
      content: isGu ? (
        <>
          <p>ફોન: +91 78742 39595</p>
          <p>ઈમેલ: mannapureoil@gmail.com</p>
        </>
      ) : (
        <>
          <p>Phone: +91 78742 39595</p>
          <p>Email: mannapureoil@gmail.com</p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-gradient-purple min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">
            {isGu ? "ગોપનીયતા નીતિ – Manna Pure Oil" : "Privacy Policy – Manna Pure Oil"}
          </h1>

          <p className="text-white max-w-2xl mx-auto">
            {isGu
              ? "Manna Pure Oil માં અમે તમારી માહિતીની સુરક્ષા અને ગોપનીયતાને ખૂબ મહત્વ આપીએ છીએ."
              : "At Manna Pure Oil, your trust is valued. We are committed to protecting your personal information."}
          </p>
        </div>

               <div className="bg-[#D0F0C0] rounded-2xl p-8 space-y-8">

  {sections.map((sec, i) => (
    <div key={i} className="flex gap-4 items-start">

      <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center">
        {sec.icon}
      </div>

      <div>

        <h2 className="text-lg font-bold text-purple-800 mb-2">
          {sec.title}
        </h2>

        <div className="text-gray-700 leading-relaxed">
          {sec.content}
        </div>

      </div>

    </div>
  ))}

</div>

        <div className="mt-12 text-center bg-purple-100 p-6 rounded-2xl">
          <p className="italic text-purple-800 font-medium">
            {isGu
              ? "Manna Pure Oil માં શુદ્ધતા માત્ર અમારા ઉત્પાદનોમાં નથી — પરંતુ તમારા વિશ્વાસને સુરક્ષિત રાખવામાં પણ છે."
              : "At Manna Pure Oil, purity is not just in what we create — it is in how we respect and protect your trust."}
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;