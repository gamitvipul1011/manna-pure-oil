import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUndoAlt } from 'react-icons/fa';

const RefundPolicy = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === 'gu';

  const policies = [
    {
      emoji: '✅',
      title: isGu ? 'Refund ક્યારે મળે' : 'When Refund Is Applicable',
      content: isGu
        ? 'Product deliver ન થયું હોય, ખોટો product આવ્યો હોય, product damage/expired condition માં આવ્યો હોય — આ situations માં refund/replacement apply થાય.'
        : 'Refund or replacement is applicable when: product is not delivered, wrong product received, or product arrives damaged/expired.',
    },
    {
      emoji: '❌',
      title: isGu ? 'Refund ક્યારે ન મળે' : 'When Refund Is Not Applicable',
      content: isGu
        ? 'Customer preference change, incorrect address provided, product tamper/opened, delivery post 7 days request — આ situations માં refund apply થતું નથી.'
        : 'Refund is NOT applicable for change of mind, incorrect address provided by customer, tampered/opened product, or requests after 7 days of delivery.',
    },
    {
      emoji: '📱',
      title: isGu ? 'Return Process' : 'How to Return',
      content: isGu
        ? '1. Delivery ના 48 કલાક અંદર WhatsApp (+91 78742 39595) ઉપર photo સાથે contact કરો. 2. Issue confirm થયા પછી replacement / refund 3-5 business days માં process થશે.'
        : '1. Contact us on WhatsApp (+91 78742 39595) with a photo within 48 hours of delivery. 2. Once the issue is verified, replacement or refund will be processed within 3-5 business days.',
    },
    {
      emoji: '💰',
      title: isGu ? 'Refund Method' : 'Refund Method',
      content: isGu
        ? 'Online payment UPI / Bank transfer દ્વારા refund original payment method ઉપર return કરવામાં આવશે. COD orders ના case માં bank transfer / UPI refund ઓફર કરવામાં આવશે.'
        : 'For online payments, refunds will be credited to the original payment method. For COD orders, refund will be offered via bank transfer or UPI.',
    },
    {
      emoji: '🚫',
      title: isGu ? 'COD Order Policy' : 'COD Order Policy',
      content: isGu
        ? 'COD orders accept/reject WhatsApp confirmation required. Delivery attempt ના 2 failure પછી order cancel થઈ શકે. Repeated cancellation ઉપર future COD restricted.'
        : 'COD orders require WhatsApp confirmation before dispatch. After 2 failed delivery attempts, the order may be cancelled. Repeated cancellations may result in COD being restricted for that number.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
            <FaUndoAlt className="text-brand-orange-500 text-3xl" />
          </div>
          <h1 className="text-4xl font-bold text-brand-purple-800 mb-2">
            {isGu ? 'રિફંડ / રિટર્ન નીતિ' : 'Refund & Return Policy'}
          </h1>
          <p className="text-gray-500 text-sm">{isGu ? 'છેલ્લે અપડેટ: માર્ચ 2026' : 'Last updated: March 2026'}</p>
        </div>

        <div className="space-y-5">
          {policies.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{p.emoji}</span>
                <div>
                  <h2 className="text-lg font-bold text-brand-purple-800 mb-2">{p.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{p.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-brand-orange-500 to-orange-400 rounded-2xl p-6 text-white text-center">
          <p className="font-bold text-lg mb-1">{isGu ? 'Customer Satisfaction અમારી priority છે 🙏' : 'Customer satisfaction is our priority 🙏'}</p>
          <p className="text-orange-100 text-sm">WhatsApp: +91 78742 39595</p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
