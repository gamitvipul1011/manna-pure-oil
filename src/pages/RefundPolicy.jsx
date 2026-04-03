import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaUndo,
  FaBoxOpen,
  FaTimesCircle,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaPhone,
  FaExclamationTriangle,
  FaTruck
} from "react-icons/fa";
const RefundPolicy = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === "gu";

   const sections = [
    {
      icon: <FaUndo className="text-purple-600 text-2xl" />,
      title: isGu ? "રિટર્ન અને રિફંડ નીતિ" : "Return and Refund Policy",
      content: isGu
        ? "આ નીતિ Manna Pure Oil વેબસાઇટ પરથી ખરીદેલા પ્રોડક્ટ્સ માટે રિટર્ન, રિપ્લેસમેન્ટ અને રિફંડ સંબંધિત શરતો સમજાવે છે."
        : "This policy explains the terms for returns, replacements, and refunds for products purchased from the Manna Pure Oil website.",
    },

    {
      icon: <FaBoxOpen className="text-blue-600 text-2xl" />,
      title: isGu ? "વ્યાખ્યાઓ" : "Definitions",
      content: isGu ? (
        <ul className="list-disc ml-5 space-y-1">
          <li>Company – Manna Pure Oil</li>
          <li>You – Service નો ઉપયોગ કરનાર અથવા ખરીદી કરનાર વ્યક્તિ</li>
          <li>Order – પ્રોડક્ટ ખરીદવા માટે આપેલી વિનંતી</li>
          <li>Product – Service મારફતે ખરીદેલા પ્રોડક્ટ્સ</li>
        </ul>
      ) : (
        <ul className="list-disc ml-5 space-y-1">
          <li>Company – Manna Pure Oil</li>
          <li>You – Individual purchasing from the Service</li>
          <li>Order – Request to purchase products</li>
          <li>Product – Items purchased from the website</li>
        </ul>
      ),
    },

    {
      icon: <FaExclamationTriangle className="text-orange-500 text-2xl" />,
      title: isGu ? "રિટર્ન માટે લાયકાત" : "Eligibility for Returns",
      content: isGu ? (
        <>
          <p className="mb-2">
            ખાદ્ય પ્રોડક્ટ્સ હોવાના કારણે રિટર્ન માત્ર નીચેની સ્થિતિમાં સ્વીકારવામાં આવશે:
          </p>

          <ul className="list-disc ml-5 space-y-1">
            <li>પ્રોડક્ટ ડેમેજ અથવા લીક થયેલ હોય</li>
            <li>ખોટો પ્રોડક્ટ ડિલિવર થયો હોય</li>
          </ul>

          <p className="mt-3 font-semibold">રિટર્ન માટે શરતો:</p>

          <ul className="list-disc ml-5 space-y-1">
            <li>48 કલાકમાં અમને જાણ કરવી</li>
            <li>પ્રોડક્ટ અનઉપયોગિત અને original packaging માં હોવો જોઈએ</li>
            <li>ફોટો અથવા વિડિયો proof આપવો પડશે</li>
          </ul>
        </>
      ) : (
        <>
          <p className="mb-2">
            Due to the nature of edible products, returns are accepted only if:
          </p>

          <ul className="list-disc ml-5 space-y-1">
            <li>The product is damaged, defective, or leaked</li>
            <li>The wrong product was delivered</li>
          </ul>

          <p className="mt-3 font-semibold">Conditions:</p>

          <ul className="list-disc ml-5 space-y-1">
            <li>You must notify us within 48 hours of delivery</li>
            <li>The product must be unused and in original packaging</li>
            <li>Photo or video proof must be provided</li>
          </ul>
        </>
      ),
    },

    {
      icon: <FaTimesCircle className="text-red-500 text-2xl" />,
      title: isGu ? "રિટર્ન ન કરી શકાય તેવા પ્રોડક્ટ્સ" : "Non-Returnable Items",
      content: isGu ? (
        <ul className="list-disc ml-5 space-y-1">
          <li>ખુલેલા અથવા ઉપયોગ કરેલા પ્રોડક્ટ્સ</li>
          <li>સમય મર્યાદા પછી રિટર્ન કરેલા પ્રોડક્ટ્સ</li>
          <li>ડિલિવરી પછી ખોટી રીતે handle કરેલા પ્રોડક્ટ્સ</li>
        </ul>
      ) : (
        <ul className="list-disc ml-5 space-y-1">
          <li>Opened or used products</li>
          <li>Products returned after the allowed period</li>
          <li>Products damaged due to misuse after delivery</li>
        </ul>
      ),
    },

    {
      icon: <FaTruck className="text-blue-700 text-2xl" />,
      title: isGu ? "રિટર્ન પ્રક્રિયા" : "Return Process",
      content: isGu
        ? "રિટર્ન શરૂ કરવા માટે Order details સાથે અમારો સંપર્ક કરો. તપાસ પછી reverse pickup અથવા product return માટે સૂચનાઓ આપવામાં આવશે."
        : "To initiate a return, contact us with your order details. After verification, we will arrange reverse pickup or provide return instructions.",
    },

    {
      icon: <FaMoneyBillWave className="text-green-700 text-2xl" />,
      title: isGu ? "રિફંડ" : "Refunds",
      content: isGu
        ? "રિટર્ન થયેલ પ્રોડક્ટ મળ્યા પછી તપાસ કરવામાં આવશે. મંજૂરી મળ્યા પછી 5–7 Business Days માં રિફંડ original payment method માં મોકલવામાં આવશે."
        : "After receiving and inspecting the returned product, refunds will be processed within 5–7 business days to the original payment method.",
    },

    {
      icon: <FaExchangeAlt className="text-indigo-600 text-2xl" />,
      title: isGu ? "રિપ્લેસમેન્ટ" : "Replacements",
      content: isGu
        ? "ડેમેજ અથવા ખોટા પ્રોડક્ટ્સ માટે ઉપલબ્ધતા અનુસાર replacement આપવામાં આવશે."
        : "For damaged or incorrect products, we may provide a replacement depending on availability.",
    },

    {
      icon: <FaUndo className="text-gray-700 text-2xl" />,
      title: isGu ? "ઓર્ડર રદ કરવો" : "Cancellation Policy",
      content: isGu
        ? "ઓર્ડર dispatch પહેલા જ cancel કરી શકાય છે. એકવાર shipment થઈ જાય પછી cancel કરી શકાશે નહીં."
        : "Orders can be cancelled only before they are dispatched. Once shipped, they cannot be cancelled.",
    },

    {
      icon: <FaPhone className="text-green-700 text-2xl" />,
      title: isGu ? "સંપર્ક કરો" : "Contact Us",
      content: (
        <>
          <p>Email: mannapureoil@gmail.com</p>
          <p>Phone / WhatsApp: +91 78742 39595</p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-gradient-purple min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">
            {isGu
              ? "રિટર્ન અને રિફંડ નીતિ – Manna Pure Oil"
              : "Return & Refund Policy – Manna Pure Oil"}
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

export default RefundPolicy;