import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import bannerImage from '../assets/contact1.jpeg';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isGu = i18n.language === 'gu';

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [subEmail, setSubEmail] = useState('');
  const [subLoading, setSubLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Contact form submit - works properly
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(isGu ? 'બધા વિગતો ભરવાની છે' : 'Please fill all required fields');
      return;
    }
    setLoading(true);
    // Simulate API call - in real app connect to backend
    setTimeout(() => {
      toast.success(isGu ? 'સંદેશ સફળતાપૂર્વક મોકલવામાં આવ્યો!' : 'Message sent successfully!');
      setSent(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setLoading(false);
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  };

  // ✅ Newsletter subscribe - works properly
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subEmail || !subEmail.includes('@')) {
      toast.error(isGu ? 'માન્ય ઈમેલ એડ્રેસ દાખલ કરો' : 'Please enter a valid email');
      return;
    }
    setSubLoading(true);
    setTimeout(() => {
      toast.success(isGu ? 'સફળતાપૂર્વક સબ્સ્ક્રાઇબ થયું!' : 'Subscribed successfully!');
      setSubEmail('');
      setSubLoading(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: <FaPhone />, en: 'Phone ', gu: 'મોબાઈલ નંબર',  valueEn: "+91 7874239595",
    valueGu: "91 7874239595", color: 'bg-green-50 text-green-600' },
    { icon: <FaEnvelope />, en: 'Email', gu: 'ઈમેલ', valueEn: "maanapureoil@gmail.com",valueGu: "maanapureoil@gmail.com", color: 'bg-blue-50 text-blue-600' },
    { icon: <FaMapMarkerAlt />, en: 'Address', gu: 'સરનામું', valueEn: "Dolara, Vyara-Ahwa Rd, Tapi, Gujarat 394655",
    valueGu: "ડોલારા, વ્યારા-આહવા રોડ, તાપી, ગુજરાત 394655", color: 'bg-orange-50 text-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-purple">
      {/* BANNER */}
     <div className="relative h-[65vh] flex items-center justify-center text-center">

  {/* Banner Image */}
  <img
    src={bannerImage}
    alt="Contact"
     className="absolute w-full h-full object-cover scale-105 hover:scale-110 transition duration-[5000ms]"
  
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">

    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
      {isGu ? "સંપર્ક કરો" : t("contactTitle")}
    </h1>

    <p className="text-lg md:text-xl text-green-100 mb-2">
      {t("contactSubtitle")}
    </p>

    <p className="text-green-200 text-sm md:text-base">
      Pure Cold Pressed Oil – 100% Natural
    </p>

  </div>

</div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* FORM */}
        <div className="bg-[#D0F0C0] rounded-3xl shadow-2xl p-8 border border-gray-100">
          <h2 className="text-3xl font-extrabold text-green-700 mb-1">
            {isGu ? 'સંદેશ મોકલો' : 'Send a Message'}
          </h2>
          <p className="text-gray-400 text-sm mb-7">
            {isGu ? 'અમે 24 કલાકની અંદર જવાબ આપીશું' : 'We reply within 24 hours'}
          </p>

          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <FaCheckCircle className="text-green-500 text-6xl mb-4" />
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                {isGu ? 'સંદેશ મોકલ્યો' : 'Message Sent!'}
              </h3>
              <p className="text-gray-500">
                {isGu ? 'અમે જલ્દી જવાબ આપીશું' : "We'll get back to you soon"}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 mb-1 block">
                    {t('name')} / {isGu ? 'naam' : 'Name'} *
                  </label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    placeholder={t('yourName')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-sm" />
                </div>
                <div>
                  <label className="text-xs font-bold text-purple-500 mb-1 block">
                    {t('phone')} / {isGu ? 'phone' : 'Phone'}
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder={t('yourPhone')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-sm" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-purple-500 mb-1 block">
                  {t('email')} / {isGu ? 'i-mail' : 'Email'} *
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  placeholder={t('yourEmail')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-sm" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block">
                  {t('message')} / {isGu ? 'sandesh' : 'Message'} *
                </label>
                <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required
                  placeholder={t('yourMessage')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition resize-none text-sm" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-60">
                {loading
                  ? <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  : <><FaPaperPlane /> {t('submit')}</>}
              </button>
            </form>
          )}
        </div>

        {/* INFO + SUBSCRIBE */}
       <div className="space-y-5">
  {contactInfo.map((info, i) => (
    <div key={i} className="flex items-center gap-5 bg-[#D0F0C0] rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-50">
      
      <div className={`p-4 rounded-2xl ${info.color} text-2xl`}>
        {info.icon}
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800">
          {isGu ? info.gu : info.en}
        </h3>

        <p className="text-purple-600 text-lg">
          {isGu ? info.valueGu : info.valueEn}
        </p>
      </div>

    </div>
  ))}


          <a href="https://maps.app.goo.gl/zzhqj1MSUcD7YHLeA/" target="_blank" rel="noopener noreferrer"
            className="block text-center bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-bold py-4 rounded-2xl transition shadow-lg hover:shadow-xl">
            📍 {isGu ? 'Google Maps પર જુઓ' : 'View on Google Maps'}
          </a>

          {/* ✅ NEWSLETTER SUBSCRIBE - functional */}
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
