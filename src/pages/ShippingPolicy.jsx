import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaTruck,
  FaClock,
  FaShippingFast,
  FaMoneyBillWave,
  FaMapMarkedAlt,
  FaExclamationTriangle,
  FaPhone,
} from "react-icons/fa";

const ShippingPolicy = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === "gu";

  const sections = [
    {
      icon: <FaTruck className="text-purple-600 text-2xl" />,
      title: isGu ? "શિપિંગ નીતિ" : "Shipping Policy",
      content: isGu
        ? "આ નીતિ Manna Pure Oil વેબસાઇટ પરથી કરેલા ઓર્ડરની શિપિંગ, ડિલિવરી અને હેન્ડલિંગ સંબંધિત નિયમો સમજાવે છે."
        : "This Shipping Policy explains the terms related to shipping, delivery, and handling of orders placed through the Manna Pure Oil website.",
    },

    {
      icon: <FaClock className="text-blue-600 text-2xl" />,
      title: isGu ? "ઓર્ડર પ્રોસેસિંગ" : "Order Processing",
      content: isGu
        ? "બધા ઓર્ડર confirmation પછી 1–2 Business Days માં process થાય છે. રવિવાર અને જાહેર રજાના દિવસોમાં ઓર્ડર process કરવામાં આવતાં નથી."
        : "All orders are processed within 1–2 business days after confirmation. Orders are not processed on Sundays or public holidays.",
    },

    {
      icon: <FaShippingFast className="text-orange-500 text-2xl" />,
      title: isGu ? "ડિલિવરી સમય" : "Shipping Methods & Delivery Time",
      content: isGu ? (
        <ul className="list-disc ml-5 space-y-1">
          <li>Standard Shipping – અંદાજે 4–7 Business Days</li>
          <li>Express Shipping – અંદાજે 2–4 Business Days</li>
          <li>ડિલિવરી સમય location અને logistics પર આધારિત હોઈ શકે છે</li>
        </ul>
      ) : (
        <ul className="list-disc ml-5 space-y-1">
          <li>Standard Shipping – Estimated 4–7 Business Days</li>
          <li>Express Shipping – Estimated 2–4 Business Days</li>
          <li>Delivery time may vary depending on location and logistics</li>
        </ul>
      ),
    },

    {
      icon: <FaMoneyBillWave className="text-green-700 text-2xl" />,
      title: isGu ? "શિપિંગ ચાર્જ" : "Shipping Charges",
      content: isGu ? (
        <ul className="list-disc ml-5 space-y-1">
          <li>શિપિંગ ચાર્જ weight અને location પર આધારિત છે</li>
          <li>₹999 થી વધુ ઓર્ડર પર Free Standard Shipping</li>
          <li>ચાર્જ checkout સમયે બતાવવામાં આવશે</li>
        </ul>
      ) : (
        <ul className="list-disc ml-5 space-y-1">
          <li>Shipping charges depend on weight and delivery location</li>
          <li>Free Standard Shipping on orders above ₹999</li>
          <li>Charges are shown at checkout</li>
        </ul>
      ),
    },

    {
      icon: <FaMapMarkedAlt className="text-indigo-600 text-2xl" />,
      title: isGu ? "ડિલિવરી" : "Delivery",
      content: isGu
        ? "ઓર્ડર third-party courier partners દ્વારા business hours દરમિયાન deliver કરવામાં આવે છે."
        : "Orders are delivered through third-party courier partners during standard business hours.",
    },

    {
      icon: <FaExclamationTriangle className="text-red-500 text-2xl" />,
      title: isGu ? "શિપિંગ મર્યાદા" : "Shipping Restrictions",
      content: isGu ? (
        <ul className="list-disc ml-5 space-y-1">
          <li>અમે હાલમાં ભારતની અંદર જ shipping કરીએ છીએ</li>
          <li>P.O. Box addresses પર delivery નથી</li>
          <li>Restricted locations પર delivery શક્ય નથી</li>
        </ul>
      ) : (
        <ul className="list-disc ml-5 space-y-1">
          <li>We currently ship within India only</li>
          <li>No delivery to P.O. Box addresses</li>
          <li>Restricted locations may not be serviceable</li>
        </ul>
      ),
    },

    {
      icon: <FaTruck className="text-gray-700 text-2xl" />,
      title: isGu ? "ઓર્ડર ફેરફાર અથવા રદ" : "Order Modification & Cancellation",
      content: isGu
        ? "એકવાર ઓર્ડર dispatch થઈ જાય પછી તેમાં ફેરફાર અથવા cancellation શક્ય નથી."
        : "Once an order has been processed and dispatched, it cannot be modified or canceled.",
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
              ? "શિપિંગ નીતિ – Manna Pure Oil"
              : "Shipping Policy – Manna Pure Oil"}
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

export default ShippingPolicy;