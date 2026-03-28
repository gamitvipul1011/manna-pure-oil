import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const { i18n } = useTranslation();
  const isGu = i18n.language === 'gu';
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: isGu ? 'Cold Pressed Oil શું છે?' : 'What is Cold Pressed Oil?',
      a: isGu
        ? 'Cold Pressed Oil ઓળખ-ઓળ એ oil extraction ની method છે જ્યાં heat use નથી. આ method oil ના natural nutrients, vitamins, અને taste preserve કરે છે.'
        : 'Cold pressed oil is an extraction method where no heat is used. This preserves the natural nutrients, vitamins, and flavour of the oil.',
    },
    {
      q: isGu ? 'Order WhatsApp ઉપર કેવી રીતે place કરવો?' : 'How to place an order on WhatsApp?',
      a: isGu
        ? 'Website ઉપર product select કરો, WhatsApp order button click કરો. Message automatically prefill થશે. Send karo — અમારી team confirm karashe.'
        : 'Select a product on the website, click the WhatsApp Order button. The message will be pre-filled. Send it and our team will confirm your order.',
    },
    {
      q: isGu ? 'COD (Cash on Delivery) available છે?' : 'Is Cash on Delivery available?',
      a: isGu
        ? 'હા,Vyara,Gujarat area ઉપર COD available છે. Other areas ઉપર WhatsApp ઉપર confirm karo.'
        : 'Yes, COD is available within Vyara,Gujarat. For other areas, please confirm via WhatsApp.',
    },
    {
      q: isGu ? 'Products FSSAI certified છે?' : 'Are products FSSAI certified?',
      a: isGu
        ? 'હા, Manna Pure Oil ના products FSSAI standards ને follow કરે છે. 100% natural, chemical-free.'
        : 'Yes, Manna Pure Oil products comply with FSSAI standards. 100% natural and chemical-free.',
    },
    {
      q: isGu ? 'Delivery time ક્રેટ?' : 'What is the delivery time?',
      a: isGu
        ? 'Vyara,tapi nearby areas: 1-2 days. Gujarat: 2-4 days. Other states: 4-7 business days. Exact time order confirm tha pachi jashe.'
        : 'vyara,tapi nearby areas : 1-2 days. Gujarat: 2-4 days. Other states: 4-7 business days. Exact time will be shared after order confirmation.',
    },
    {
      q: isGu ? 'Minimum order amount ?' : 'Is there a minimum order amount?',
      a: isGu
        ? 'Minimum order amount નથી. ₹999 ઉપર vyara,tapi nearby areas ઉપર FREE delivery.'
        : 'There is no minimum order amount. Orders above ₹999 within vyara,tapi nearby areas get FREE delivery.',
    },
    {
      q: isGu ? 'Oil Shelf Life ?' : 'What is the shelf life of the oil?',
      a: isGu
        ? 'Cold Pressed Oil ની shelf life unopened 6-12 months. Open પછી 3 months airtight container ઉપર cool, dark place ઉપર store karo.'
        : 'Shelf life of cold pressed oil is 6-12 months unopened. Once opened, store in an airtight container in a cool, dark place and use within 3 months.',
    },
    {
      q: isGu ? 'Bulk order available?' : 'Do you offer bulk orders?',
      a: isGu
        ? 'હા, bulk orders ઉપર special discount available. WhatsApp ઉપર contact karo: +91 78742 39595.'
        : 'Yes, special discounts are available on bulk orders. Contact us on WhatsApp: +91 78742 39595.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <FaQuestionCircle className="text-yellow-600 text-3xl" />
          </div>
          <h1 className="text-4xl font-bold text-brand-purple-800 mb-2">
            {isGu ? 'વારંવાર પૂછાતા પ્રશ્નો' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-gray-500">{isGu ? 'સામાન્ય પ્રશ્નોના ઉત્તર' : 'Answers to common questions'}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-bold text-brand-purple-800 pr-4">{faq.q}</span>
                {open === i
                  ? <FaChevronUp className="text-brand-orange-500 flex-shrink-0" />
                  : <FaChevronDown className="text-gray-400 flex-shrink-0" />}
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center bg-brand-purple-700 rounded-2xl p-6 text-white">
          <p className="font-bold text-lg mb-2">{isGu ? 'હજુ પ્રશ્ન છે? 💬' : 'Still have questions? 💬'}</p>
          <a
            href="https://wa.me/917874239595?text=Hello!%20I%20have%20a%20question%20about%20Manna%20Pure%20Oil"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full font-semibold text-white"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
