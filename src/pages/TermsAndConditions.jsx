import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFileContract,
  FaBalanceScale,
  FaUserShield,
  FaBoxOpen,
  FaShoppingCart,
  FaMoneyBillWave,
  FaTruck,
  FaUndo,
  FaCopyright,
  FaExclamationTriangle,
  FaGavel,
  FaPhone,
} from "react-icons/fa";

const TermsConditions = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === "gu";

  const sections = [
    {
      icon: <FaFileContract className="text-purple-600 text-2xl" />,
      title: isGu ? "શરતો અને નિયમો" : "Terms and Conditions",
      content: isGu
        ? "આ શરતો Manna Pure Oil વેબસાઇટના ઉપયોગ અને અમારા ઉત્પાદનોની ખરીદી માટે લાગુ પડે છે. અમારી Service નો ઉપયોગ કરીને તમે આ શરતોને સ્વીકારો છો."
        : "These Terms govern your use of the Manna Pure Oil website and the purchase of products from us. By using the Service, you agree to be bound by these Terms.",
    },

    {
      icon: <FaBalanceScale className="text-blue-600 text-2xl" />,
      title: isGu ? "વ્યાખ્યાઓ" : "Definitions",
      content: isGu ? (
        <ul className="list-disc ml-5 space-y-1">
          <li>Company – Manna Pure Oil</li>
          <li>You – Service નો ઉપયોગ કરનાર વ્યક્તિ</li>
          <li>Service – અમારી વેબસાઇટ</li>
          <li>Products – અમારી વેબસાઇટ પર વેચાતા પ્રોડક્ટ્સ</li>
          <li>Order – પ્રોડક્ટ ખરીદવા માટે આપેલી વિનંતી</li>
        </ul>
      ) : (
        <ul className="list-disc ml-5 space-y-1">
          <li>Company – Manna Pure Oil</li>
          <li>You – Individual using the Service</li>
          <li>Service – The website operated by the Company</li>
          <li>Products – Items offered for sale</li>
          <li>Order – Request placed to purchase products</li>
        </ul>
      ),
    },

    {
      icon: <FaUserShield className="text-green-600 text-2xl" />,
      title: isGu ? "Service નો ઉપયોગ" : "Use of the Service",
      content: isGu ? (
        <ul className="list-disc ml-5 space-y-1">
          <li>કાયદેસર ઉપયોગ માટે જ Service નો ઉપયોગ કરો</li>
          <li>કોઈપણ અનધિકૃત access કરવાનો પ્રયાસ ના કરો</li>
          <li>Service ની security અથવા functionality ને નુકસાન ના કરો</li>
        </ul>
      ) : (
        <ul className="list-disc ml-5 space-y-1">
          <li>Use the Service only for lawful purposes</li>
          <li>Do not attempt unauthorized access</li>
          <li>Do not disrupt functionality or security</li>
        </ul>
      ),
    },

    {
      icon: <FaBoxOpen className="text-orange-500 text-2xl" />,
      title: isGu ? "પ્રોડક્ટ માહિતી" : "Product Information",
      content: isGu
        ? "અમે પ્રોડક્ટની માહિતી સાચી રાખવાનો પ્રયાસ કરીએ છીએ, પરંતુ રંગ, પેકેજિંગ અથવા વિગતોમાં થોડો ફેરફાર શક્ય છે."
        : "We strive to ensure product descriptions, images and prices are accurate, but minor variations may occur.",
    },

    {
      icon: <FaShoppingCart className="text-purple-700 text-2xl" />,
      title: isGu ? "ઓર્ડર અને સ્વીકાર" : "Orders and Acceptance",
      content: isGu ? (
        <ul className="list-disc ml-5 space-y-1">
          <li>તમારી માહિતી સાચી હોવી જોઈએ</li>
          <li>ચૂકવણી માટે યોગ્ય payment method ઉપયોગ કરો</li>
          <li>અમે કોઈપણ ઓર્ડર reject અથવા cancel કરી શકીએ છીએ</li>
        </ul>
      ) : (
        <ul className="list-disc ml-5 space-y-1">
          <li>All order information must be accurate</li>
          <li>You must be authorized to use the payment method</li>
          <li>We reserve the right to cancel orders</li>
        </ul>
      ),
    },

    {
      icon: <FaMoneyBillWave className="text-green-700 text-2xl" />,
      title: isGu ? "કિંમત અને ચુકવણી" : "Pricing and Payment",
      content: isGu
        ? "બધી કિંમતો ભારતીય રૂપિયા (₹) માં છે. ચુકવણી ઓર્ડર સમયે ઉપલબ્ધ payment methods દ્વારા કરવી પડશે."
        : "All prices are listed in Indian Rupees (₹). Payment must be made at the time of placing the order.",
    },

    {
      icon: <FaTruck className="text-blue-700 text-2xl" />,
      title: isGu ? "શિપિંગ અને ડિલિવરી" : "Shipping and Delivery",
      content: isGu
        ? "ડિલિવરી સમય અંદાજિત હોય છે અને બહારના કારણોસર બદલાઈ શકે છે."
        : "Delivery timelines are estimates and may vary due to external factors.",
    },

    {
      icon: <FaUndo className="text-indigo-600 text-2xl" />,
      title: isGu ? "રિટર્ન અને રિફંડ" : "Returns and Refunds",
      content: isGu
        ? "રિટર્ન અને રિફંડ અમારી Return Policy મુજબ કરવામાં આવશે."
        : "Returns and refunds are governed by our Return Policy.",
    },

    {
      icon: <FaCopyright className="text-pink-500 text-2xl" />,
      title: isGu ? "બૌદ્ધિક સંપત્તિ" : "Intellectual Property",
      content: isGu
        ? "વેબસાઇટનું બધું content Company ની માલિકી છે અને કાયદાથી સુરક્ષિત છે."
        : "All website content including text, images and logos is owned by the Company.",
    },

    {
      icon: <FaExclamationTriangle className="text-red-500 text-2xl" />,
      title: isGu ? "જવાબદારી મર્યાદા" : "Limitation of Liability",
      content: isGu
        ? "Company કોઈપણ પરોક્ષ નુકસાન માટે જવાબદાર નથી."
        : "The Company shall not be liable for indirect or consequential damages.",
    },

    {
      icon: <FaGavel className="text-gray-700 text-2xl" />,
      title: isGu ? "લાગુ કાયદો" : "Governing Law",
      content: isGu
        ? "આ શરતો ભારતના કાયદા અનુસાર લાગુ પડશે."
        : "These Terms are governed by the laws of India.",
    },

    {
      icon: <FaPhone className="text-green-700 text-2xl" />,
      title: isGu ? "સંપર્ક કરો" : "Contact Us",
      content: (
        <>
          <p>Email: mannapureoil@gmail.com</p>
          <p>Phone: +91 78742 39595</p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-gradient-purple min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">
            {isGu ? "શરતો અને નિયમો – Manna Pure Oil" : "Terms & Conditions – Manna Pure Oil"}
          </h1>
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

      </div>
    </div>
  );
};

export default TermsConditions;