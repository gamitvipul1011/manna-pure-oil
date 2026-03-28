import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaLock, FaCookieBite, FaPhone, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === 'gu';

  const sections = [
    {
      icon: <FaShieldAlt className="text-brand-purple-600 text-2xl" />,
      title: isGu ? 'અમે કઈ માહિતી એકત્ર કરીએ છીએ' : 'What Data We Collect',
      content: isGu
        ? 'જ્યારે તમે અમારી વેબસાઇટ પર ઑર્ડર કરો અથવા WhatsApp દ્વારા સંપર્ક કરો, ત્યારે અમે નીચેની માહિતી એકત્ર કરી શકીએ: તમારું નામ, ફોન નંબર, ડિલિવરી સરનામું, ઑર્ડર વિગતો.'
        : 'When you place an order or contact us via WhatsApp, we may collect: your name, phone number, delivery address, and order details.',
    },
    {
      icon: <FaLock className="text-green-600 text-2xl" />,
      title: isGu ? 'પેમેન્ટ માહિતી' : 'Payment Information',
      content: isGu
        ? 'અમે WhatsApp દ્વારા ઑર્ડર સ્વીકારીએ છીએ. Online payment UPI / bank transfer દ્વારા કરવામાં આવે છે. અમે ક્રેડિટ/ડેબિટ કાર્ડ ડેટા સ્ટોર કરતા નથી.'
        : 'We accept orders via WhatsApp. Online payments are done via UPI or bank transfer. We do not store any credit/debit card details.',
    },
    {
      icon: <FaCookieBite className="text-brand-orange-500 text-2xl" />,
      title: isGu ? 'કૂકીઝ' : 'Cookies',
      content: isGu
        ? 'અમારી વેબસાઇટ ભાષા preferences અને session data માટે cookies નો ઉપયોગ કરે છે. Third-party cookies ઉપયોગ થતી નથી.'
        : 'Our website uses cookies for language preferences and session data only. We do not use third-party tracking cookies.',
    },
    {
      icon: '🔄',
      title: isGu ? 'ડેટાનો ઉપયોગ' : 'How We Use Your Data',
      content: isGu
        ? 'એકત્ર કરેલ ડેટાનો ઉપયોગ ઑર્ડર પ્રોસેસ, ડિલિવરી, અને customer support માટે થાય છે. ડેટા ત્રીજા પક્ષ સાથે share કરવામાં આવતો નથી.'
        : 'Collected data is used for order processing, delivery coordination, and customer support. We never sell or share your data with third parties.',
    },
    {
      icon: '📞',
      title: isGu ? 'સંપર્ક' : 'Contact Us',
      content: isGu
        ? 'Privacy સંબંધી પ્રશ્નો માટે WhatsApp: +91 78742 39595 અથવા email: maanapureoil@gmail.com'
        : 'For privacy concerns, WhatsApp: +91 78742 39595 or email: maanapureoil@gmail.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-purple-100 rounded-full mb-4">
            <FaShieldAlt className="text-brand-purple-600 text-3xl" />
          </div>
          <h1 className="text-4xl font-bold text-brand-purple-800 mb-2">
            {isGu ? 'ગોપનીયતા નીતિ' : 'Privacy Policy'}
          </h1>
          <p className="text-gray-500 text-sm">{isGu ? 'છેલ્લે અપડેટ: માર્ચ 2026' : 'Last updated: March 2026'}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <p className="text-gray-600 leading-relaxed">
            {isGu
              ? 'Manna Pure Oil ("અમે") તમારી ગોપનીયતાનો આદર કરે છે. આ Privacy Policy વર્ણવે છે કે અમે WhatsApp orders, website visits, અને customer interactions દ્વારા data કઈ રીતે handle કરીએ છીએ.'
              : 'Manna Pure Oil ("we") respects your privacy. This Privacy Policy describes how we handle data collected through WhatsApp orders, website visits, and customer interactions.'}
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((sec, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl">
                  {typeof sec.icon === 'string' ? sec.icon : sec.icon}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-brand-purple-800 mb-2">{sec.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{sec.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
