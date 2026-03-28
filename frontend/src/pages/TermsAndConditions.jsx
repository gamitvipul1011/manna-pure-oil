import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFileContract } from 'react-icons/fa';

const TermsAndConditions = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === 'gu';

  const terms = [
    {
      title: isGu ? '1. સ્વીકૃતિ' : '1. Acceptance',
      content: isGu
        ? 'અમારી website ઉપયોગ કરીને, તમે આ Terms & Conditions સ્વીકારો છો. જો સ્વીકારો ન હો, તો website ઉપયોગ ન કરો.'
        : 'By using our website, you agree to these Terms & Conditions. If you do not agree, please discontinue use.',
    },
    {
      title: isGu ? '2. ઉત્પાદનો' : '2. Products',
      content: isGu
        ? 'Manna Pure Oil 100% Natural Cold Pressed Oil offer કરે છે. Products FSSAI standards ને follow કરે છે. Stock availability change થઈ શકે છે.'
        : 'Manna Pure Oil offers 100% Natural Cold Pressed Oils. All products comply with FSSAI standards. Stock availability may change without notice.',
    },
    {
      title: isGu ? '3. WhatsApp Order Process' : '3. WhatsApp Order Process',
      content: isGu
        ? 'Orders WhatsApp (+91 78742 39595) દ્વારા place કરવાના છે. Order confirm email/message આવ્યા પછી order confirmed ગણાય. Final price delivery charges સાથે confirm message માં હોય.'
        : 'Orders are placed via WhatsApp (+91 78742 39595). An order is confirmed only after you receive a confirmation message. Final price including delivery charges will be communicated on confirmation.',
    },
    {
      title: isGu ? '4. ભૂલ / ફેરફાર' : '4. Pricing & Errors',
      content: isGu
        ? 'Prices notice વગર change થઈ શકે છે. Website ઉપર typo / error ના case માં Manna Pure Oil correct price charge કરવાનો અધિકાર reserve કરે છે.'
        : 'Prices may change without prior notice. In case of a pricing error on the website, Manna Pure Oil reserves the right to charge the correct price.',
    },
    {
      title: isGu ? '5. Intellectual Property' : '5. Intellectual Property',
      content: isGu
        ? 'Website ઉપરની images, content, logo - Manna Pure Oil ની intellectual property છે. Unauthorized use prohibited છે.'
        : 'All images, content, and logos on this website are the intellectual property of Manna Pure Oil. Unauthorized use is prohibited.',
    },
    {
      title: isGu ? '6. Governing Law' : '6. Governing Law',
      content: isGu
        ? 'આ terms dolara, Gujarat, India ના laws દ્વારા govern થાય છે.'
        : 'These terms are governed by the laws of dolara, Gujarat, India.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-purple-100 rounded-full mb-4">
            <FaFileContract className="text-brand-purple-600 text-3xl" />
          </div>
          <h1 className="text-4xl font-bold text-brand-purple-800 mb-2">
            {isGu ? 'નિયમો અને શરતો' : 'Terms & Conditions'}
          </h1>
          <p className="text-gray-500 text-sm">{isGu ? 'છેલ્લે અપડેટ: માર્ચ 2026' : 'Last updated: March 2026'}</p>
        </div>

        <div className="space-y-5">
          {terms.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition border-l-4 border-brand-purple-500">
              <h2 className="text-lg font-bold text-brand-purple-800 mb-2">{t.title}</h2>
              <p className="text-gray-600 leading-relaxed">{t.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-brand-purple-700 rounded-2xl p-6 text-white text-center">
          <p className="font-semibold text-lg mb-1">{isGu ? 'પ્રશ્ન છે?' : 'Have a question?'}</p>
          <p className="text-purple-200 text-sm">
            {isGu ? 'WhatsApp: +91 78742 39595' : 'Contact us on WhatsApp: +91 78742 39595'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
