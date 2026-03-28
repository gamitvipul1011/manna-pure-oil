import React from "react";
import { motion } from "framer-motion";
import banner1 from "../assets/banner2.jpeg";
import aboutImg from "../assets/about.jpeg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaLeaf, FaHeart, FaSeedling, FaHandHoldingHeart } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const About = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isGu = i18n.language === "gu";

  const values = [
    { icon: <FaLeaf />, title: isGu ? "શુદ્ધતા" : "Purity" },
    { icon: <FaHeart />, title: isGu ? "ગુણવત્તા" : "Quality" },
    { icon: <FaSeedling />, title: isGu ? "પરંપરા" : "Tradition" },
    { icon: <FaHandHoldingHeart />, title: isGu ? "કાળજી" : "Care" },
  ];

  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <div className="relative h-[80vh] flex items-center justify-center">
        <img src={banner1} className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative text-center text-white px-4"
        >
          <motion.h1 variants={fadeUp} className="text-5xl font-extrabold mb-4">
            {isGu ? "શુદ્ધ. પરંપરાગત. વિશ્વસનીય." : "Pure. Traditional. Trusted."}
          </motion.h1>

          <motion.p variants={fadeUp} className="mb-6 text-gray-300 text-lg">
            {isGu ? "શુદ્ધ તેલનો અનુભવ કરો" : "Experience the purity of real oil"}
          </motion.p>

          <motion.button
            variants={fadeUp}
            onClick={() => navigate("/products")}
            className="bg-orange-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            {isGu ? "હવે ખરીદો" : "Shop Now"}
          </motion.button>
        </motion.div>
      </div>

      {/* STORY SECTION */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.img
          variants={fadeUp}
          src={aboutImg}
          className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
        />

        <motion.div variants={fadeUp}>
          <h2 className="text-4xl font-bold text-purple-800 mb-4">
            {isGu ? "અમારી કહાની" : "Our Story"}
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {isGu
              ? "પરંપરાગત પદ્ધતિથી બનાવેલું શુદ્ધ તેલ, જે આરોગ્ય અને વિશ્વાસનું પ્રતિક છે."
              : "Pure oil made with traditional methods, representing health and trust."}
          </p>
        </motion.div>
      </motion.section>

      {/* ABOUT CONTENT (YOUR TEXT) */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 max-w-5xl mx-auto px-4"
      >
        <motion.div variants={fadeUp} className="bg-white p-10 rounded-3xl shadow-xl">

          <h2 className="text-3xl font-bold text-purple-800 mb-6">
            🌿 About Us – Manna Pure Oil
          </h2>

          {!isGu ? (
            <>
              <p className="font-semibold mb-4">
                At Manna Pure Oil, purity is not just a promise — it is a philosophy we live by.
              </p>

              <p className="mb-4">
                In a world driven by speed and shortcuts, we chose to slow down… to rediscover what real, nourishing oil should be. Every drop we create is a reflection of nature’s honesty, preserved through tradition and delivered with care.  
              </p>

              <p className="mb-4 italic border-l-4 border-orange-500 pl-4">
               Manna Pure Oil was born from a simple yet powerful realization — what we consume today is no longer what nature intended.
              </p>

              <p className="mb-4">
                Like many families, we once relied on easily available refined oils, trusting what was on the label. But over time, we began to question — the lack of aroma, the absence of authenticity, and most importantly, the impact on our health.
This curiosity turned into a mission.
              </p>

              <p className="font-semibold text-purple-700 mb-4">
                We went back to our roots… to the traditional methods our grandparents trusted. We explored the age-old cold-pressed technique, where seeds are gently crushed to extract oil without heat or chemicals — preserving its natural nutrients, flavor, and soul.
              </p>

              <p className="mb-4">
                We went back to traditional cold-pressed methods...
              </p>

              <p className="bg-green-50 p-4 rounded-lg font-medium text-green-800">
               What started as a personal choice for our own family soon became a purpose — to bring this purity back to every household.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold mb-4">
                Manna Pure Oil માં, શુદ્ધતા માત્ર વચન નથી — તે અમારી જીવનશૈલી છે.
              </p>

              <p className="mb-4">
                ગતિ અને શોર્ટકટથી ચાલતી દુનિયામાં, અમે વાસ્તવિક, પૌષ્ટિક તેલ શું હોવું જોઈએ તે ફરીથી શોધવા માટે ધીમું કરવાનું પસંદ કર્યું. અમે બનાવેલ દરેક ટીપું કુદરતની પ્રામાણિકતાનું પ્રતિબિંબ છે, જે પરંપરા દ્વારા સચવાયું છે અને કાળજી સાથે પહોંચાડવામાં આવ્યું છે.
              </p>

              <p className="mb-4 border-l-4 border-orange-500 pl-4">
              મન્ના પ્યોર ઓઈલનો જન્મ એક સરળ છતાં શક્તિશાળી અનુભૂતિમાંથી થયો હતો - આજે આપણે જે ખાઈએ છીએ તે હવે કુદરતના હેતુ મુજબ નથી.
              </p>

              <p className="mb-4">
               ઘણા પરિવારોની જેમ, અમે પણ એક સમયે સરળતાથી ઉપલબ્ધ રિફાઇન્ડ તેલ પર આધાર રાખતા હતા, લેબલ પર જે લખ્યું હતું તેના પર વિશ્વાસ કરતા હતા. પરંતુ સમય જતાં, અમે શંકા કરવા લાગ્યા - સુગંધનો અભાવ, પ્રમાણિકતાનો અભાવ, અને સૌથી અગત્યનું, અમારા સ્વાસ્થ્ય પર તેની અસર.
આ જિજ્ઞાસા એક મિશનમાં ફેરવાઈ ગઈ.
              </p>

              <p className="font-semibold text-purple-700 mb-4">
                અમે અમારા મૂળ તરફ પાછા ફર્યા... અમારા દાદા-દાદી જે પરંપરાગત પદ્ધતિઓ પર વિશ્વાસ કરતા હતા તે તરફ. અમે વર્ષો જૂની કોલ્ડ-પ્રેસ્ડ ટેકનિકની શોધ કરી, જ્યાં બીજને ગરમી કે રસાયણો વિના તેલ કાઢવા માટે ધીમેધીમે કચડી નાખવામાં આવે છે - તેના કુદરતી પોષક તત્વો, સ્વાદ અને આત્માને જાળવી રાખવામાં આવે છે.
              </p>

              <p className="mb-4">
                કોલ્ડ-પ્રેસ પદ્ધતિ અપનાવી.
              </p>

              <p className="bg-green-50 p-4 rounded-lg font-medium text-green-800">
                આપણા પોતાના પરિવાર માટે વ્યક્તિગત પસંદગી તરીકે જે શરૂ થયું હતું તે ટૂંક સમયમાં એક હેતુ બની ગયું - આ પવિત્રતા દરેક ઘરમાં પાછી લાવવાનો.
              </p>
            </>
          )}

        </motion.div>
      </motion.section>

      {/* VALUES */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-purple-800">
            {isGu ? "અમારી મૂલ્યો" : "Our Values"}
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <div className="text-3xl text-green-600 mb-3">{v.icon}</div>
                <h3 className="font-semibold text-purple-800">{v.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <div className="py-20 bg-green-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          {isGu ? "આજે જ અજમાવો" : "Try Pure Oil Today"}
        </h2>

        <button
          onClick={() => navigate("/products")}
          className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          {isGu ? "ખરીદી કરો" : "Shop Now"}
        </button>
      </div>

    </div>
  );
};

export default About;