import React from "react";
import { motion } from "framer-motion";
import banner1 from "../assets/about_coco.jpg";
import aboutImg from "../assets/Father son 756 x 540.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaLeaf,
  FaHeart,
  FaSeedling,
  FaHandHoldingHeart,
} from "react-icons/fa";

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

  const process = [
    {
      title: isGu ? "પ્રીમિયમ બીજ" : "Premium Seeds",
      desc: isGu
        ? "વિશ્વસનીય ખેડુતો પાસેથી શ્રેષ્ઠ ગુણવત્તાના બીજ."
        : "High-quality seeds sourced from trusted farms.",
    },
    {
      title: isGu ? "ધીમી દબાણ પ્રક્રિયા" : "Slow Crushing",
      desc: isGu
        ? "પરંપરાગત કોલ્ડ પ્રેસ પદ્ધતિથી ધીમે દબાવવામાં આવે છે."
        : "Seeds crushed slowly using traditional cold press.",
    },
    {
      title: isGu ? "ગરમી વિના" : "No Heat",
      desc: isGu
        ? "ગરમી અથવા રસાયણો વિના તેલ કાઢવામાં આવે છે."
        : "No chemicals or heat used.",
    },
    {
      title: isGu ? "શુદ્ધ બોટલિંગ" : "Pure Bottling",
      desc: isGu
        ? "કાળજીપૂર્વક ફિલ્ટર કરીને બોટલમાં ભરવામાં આવે છે."
        : "Filtered and bottled with care.",
    },
  ];

  return (
  
  <div className="bg-gradient-purple min-h-screen -mt-16 md:mt-0">

  {/* Banner */}
  <div className="relative w-full overflow-hidden">

  <picture className="block w-full">

    {/* Mobile */}
    <source media="(max-width:768px)" srcSet={banner1} />

    {/* Desktop */}
    <img
      src={banner1}
      alt="banner"
      className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[500px] object-cover object-center"
    />

  </picture>

</div>





  {/* Banner */}
  

      {/* STORY */}
      <section className="pt-8 md:pt-24 pb-24 bg-gradient-purple">

       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-green-100 rounded-3xl blur-2xl opacity-40"></div>

        <img
          src={aboutImg}
          className="relative rounded-3xl shadow-2xl object-cover w-full h-[420px] hover:scale-105 transition duration-500"
        />
      </motion.div>

      {/* TEXT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#D0F0C0] backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-green-100"
      >

        <h2 className="text-4xl font-bold text-green-800 mb-6">
          {isGu ? "અમારી કહાની" : "Our Story"}
        </h2>

       <p className="text-gray-700 leading-relaxed text-[16px]">

          {isGu ? (
            <>
              એક સાંજે રાત્રિભોજન પછી, હું, મારી પત્ની અને મારા સસરા સાથે બેઠા હતા.
              સામાન્ય વાતચીત કરતાં કરતાં આરોગ્ય અને ખોરાક વિશે ચર્ચા શરૂ થઈ.

              <br /><br />

              ત્યારે એક વિચાર આવ્યો — પાણી પછી તેલ એ એવી વસ્તુ છે
              જે આપણે દરરોજ દરેક ભોજનમાં વાપરીએ છીએ.

              <br /><br />

              જો એટલી મહત્વની વસ્તુ અશુદ્ધ બની જાય,
              તો તેના પર આધારિત દરેક વસ્તુની ગુણવત્તા ઘટી જાય છે.

              <br /><br />

              એ રાત માત્ર ચર્ચા નહોતી — એ જવાબદારીની શરૂઆત હતી.

              <br /><br />

              <span className="font-semibold text-green-800">
                Manna Pure Oil એ જ વિચારમાંથી જન્મ્યું.
              </span>

              <br /><br />

              અમારો ઉદ્દેશ્ય છે — દરેક રસોડામાં ફરીથી શુદ્ધતા, વિશ્વાસ અને કાળજી લાવવી.

              <br /><br />

              જેમ આપણે પોતાના પરિવાર માટે ખોરાક બનાવીએ છીએ,
              તેમ જ અમે એવું તેલ બનાવવું માંગીએ છીએ
              જે સંપૂર્ણ કુદરતી અને રસાયણમુક્ત હોય.

              <br /><br />

              <span className="font-semibold text-green-800">
                આ માત્ર તેલ નથી — આ આરોગ્ય અને વિશ્વાસ છે.
              </span>
            </>
          ) : (
            <>
              One evening after dinner, while sitting together — me, my wife,
              and my father-in-law — a simple conversation turned into something meaningful.

              <br /><br />

              We were discussing health, food, and the small choices that shape our lives.

              <br /><br />

              That’s when a thought stayed with us — after water,
              oil is something we consume every single day.

              <br /><br />

              If something so essential becomes impure,
              everything built on it loses its goodness.

              <br /><br />

              That night wasn’t just a discussion —
              it was the beginning of a responsibility.

              <br /><br />

              <span className="font-semibold text-green-800">
                Manna Pure Oil was born from that feeling.
              </span>

              <br /><br />

              A promise to bring back purity, honesty, and care into every kitchen.

              <br /><br />

              Just like the food we cook for our own family,
              we wanted oil that is natural, chemical-free,
              and made with patience.

              <br /><br />

              <span className="font-semibold text-bg-gradient-to-r from-yellow-400 to-orange-500">
                It’s not just oil — it’s health, trust, and family.
              </span>
            </>
          )}

        </p>

      </motion.div>

    

  </div>

</section>

      {/* ABOUT DETAILS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">

          

            <h2 className="text-3xl font-bold text-white mb-6">
              🌿 {isGu ? "અમારા વિશે" : "About Us"}
            </h2>

            {/* your big text unchanged */}
            <p className="bg-[#D0F0C0] p-6 rounded-2xl font-medium text-black mb-10 shadow leading-relaxed">

  {isGu ? (
    <>
      <span className="block font-semibold text-black mb-2">
        🌿 અમારા વિશે – Manna Pure Oil
      </span>

      Manna Pure Oil ની શરૂઆત એક સરળ અને સાચી ચિંતા પરથી થઈ — 
      આપણા પોતાના ઘરે વપરાતું તેલ કેટલું શુદ્ધ છે?

      <br /><br />

      ઘણા પરિવારોની જેમ, અમે પણ વિચારવાનું શરૂ કર્યું કે રોજિંદા ખોરાકમાં શું વપરાય છે.
      બજારમાં મળતું તેલ ઘણી વાર વધારે પ્રોસેસ્ડ લાગતું હતું — 
      જેમાં કુદરતી સુગંધ, સ્વાદ અને વિશ્વાસની કમી હતી.

      <br /><br />

      અમને કંઈક સારું જોઈએ હતું — એવું કે જે આપણે આપણા પરિવાર માટે નિર્ભયપણે વાપરી શકીએ.

      <br /><br />

      ત્યાંથી જ Manna Pure Oil ની શરૂઆત થઈ.

      <br /><br />

      અમે પરંપરાગત માર્ગ પસંદ કર્યો — 
      કોલ્ડ-પ્રેસ પદ્ધતિ, પસંદ કરેલા બીજ અને કોઈ પણ રસાયણ વગર.

      <br /><br />

      અમારું લક્ષ્ય માત્ર એક બ્રાન્ડ બનાવવાનું નહોતું,
      પણ એવું ઉત્પાદન બનાવવાનું હતું જે પર આપણે પોતે વિશ્વાસ રાખી શકીએ.

      <br /><br />

      અમે હજુ પણ શીખી રહ્યા છીએ, આગળ વધી રહ્યા છીએ —
      પરંતુ એક બાબત ક્યારેય બદલાતી નથી:
      અમે ગુણવત્તા પર ક્યારેય સમાધાન કરતા નથી.

      <br /><br />

      દરેક બેચ કાળજી અને ધ્યાનથી બનાવવામાં આવે છે —
      કાચા માલથી લઈને પેકિંગ સુધી.

      <br /><br />

      અમે માનીએ છીએ કે વિશ્વાસ શબ્દોથી નહીં,
      પણ સતત ગુણવત્તાથી બને છે.

      <br /><br />

      આ અમારે માટે માત્ર વ્યવસાય નથી —
      પરંતુ દરેક પરિવાર પ્રત્યેની જવાબદારી છે.

      <br /><br />

      કારણ કે દિવસના અંતે,
      તમે તમારા ઘરે જે તેલ વાપરો છો…
      એ જ તેલ અમે પણ અમારા ઘરે ઇચ્છીએ છીએ.

      <br /><br />

      <span className="font-semibold text-green-900">
        Manna Pure Oil — સરળ, વિશ્વસનીય અને રોજિંદા વિશ્વાસ માટે બનાવેલું.
      </span>
    </>
  ) : (
    <>
      <span className="block font-semibold text-lg mb-2">
        🌿 About Us – Manna Pure Oil
      </span>

      Manna Pure Oil started with a very real and simple concern — 
      the quality of oil we were using in our own home.

      <br /><br />

      Like many families, we began questioning what goes into our daily food.
      The oils available in the market often felt too processed, lacking the natural aroma, taste, and trust.

      <br /><br />

      We wanted something better — something we could confidently use for our own family.

      <br /><br />

      That’s where Manna Pure Oil began.

      <br /><br />

      We chose to go back to the roots — 
      using cold-pressed methods, carefully selected seeds, and avoiding chemicals.

      <br /><br />

      Our goal was not just to build another brand,
      but to create something we ourselves would trust every day.

      <br /><br />

      We are still growing and improving —
      but one thing remains constant:
      we do not compromise on quality.

      <br /><br />

      Each batch is made with care —
      from sourcing to final packaging.

      <br /><br />

      We believe trust is built through consistency.

      <br /><br />

      This is not just a business for us —
      it is a responsibility towards families.

      <br /><br />

      Because at the end of the day,
      the oil you use in your home…
      is the oil we want in ours too.

      <br /><br />

      <span className="font-semibold text-green-900">
        Manna Pure Oil — Simple, Honest, and Made for Everyday Trust.
      </span>
    </>
  )}

</p>

          </div>

       
      </section>

      {/* VISION & MISSION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          <div className="bg-[#D0F0C0] backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              🌿 {isGu ? "વિઝન" : "Vision"}
            </h3>

           <p className="text-gray-700 leading-relaxed whitespace-pre-line">
  {isGu
    ? `🌿 વિઝન – Manna Pure Oil

અમારું વિઝન છે પરંપરાગત તેલ બનાવવાની શુદ્ધતા ફરીથી દરેક ઘરમાં પહોંચાડવી — જ્યાં આરોગ્ય, કાળજી અને સચ્ચાઈ દરેક ટીપામાં વહે છે.

અમે એવા ભવિષ્યની કલ્પના કરીએ છીએ જ્યાં પરિવારો માત્ર તેલ નહીં પરંતુ સ્વસ્થ જીવન પસંદ કરે… જ્યાં દરેક ભોજનમાં કુદરતી સારા ગુણ હોય અને દરેક રસોડું પોષણ, પ્રેમ અને વિશ્વાસનું સ્થાન બને.

Manna Pure Oil માં, અમારું લક્ષ્ય લોકોને ફરીથી અસલી કોલ્ડ-પ્રેસ્ડ તેલ સાથે જોડવાનું છે — જે ઈમાનદારીથી બનાવવામાં આવ્યું છે, પરંપરામાં જડેલું છે અને વધુ સ્વસ્થ આવતીકાલ માટે તૈયાર કરવામાં આવ્યું છે.`
    : `🌿 Vision – Manna Pure Oil

To become a trusted part of every home by bringing back the purity of traditional oil-making, where health, care, and honesty flow in every drop.

We envision a future where families choose not just oil, but wellness… where every meal carries the goodness of nature, and every kitchen becomes a place of nourishment, love, and trust.

At Manna Pure Oil, our vision is to reconnect people with authentic, cold-pressed oils — crafted with integrity, rooted in tradition, and made for a healthier tomorrow.`}
</p>
          </div>

          <div className="bg-[#D0F0C0] backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              🎯 {isGu ? "મિશન" : "Mission"}
            </h3>

           <p className="text-gray-700 leading-relaxed whitespace-pre-line">
  {isGu
    ? `🎯 મિશન – Manna Pure Oil

અમારું મિશન છે શુદ્ધ, કોલ્ડ-પ્રેસ્ડ તેલ દરેક ઘરમાં પહોંચાડવું — જે આરોગ્ય, વિશ્વાસ અને અસલિયત સાથે દરેક ભોજનને પોષણ આપે.

અમે પરંપરાગત તેલ કાઢવાની પદ્ધતિઓને જાળવી રાખવા પ્રતિબદ્ધ છીએ, જેથી દરેક ટીપામાં તેનું કુદરતી પોષણ, સમૃદ્ધ ગુણધર્મો અને સાચો સ્વાદ જળવાઈ રહે.

Manna Pure Oil માં, અમે પરિવારો સાથે લાંબા સમયનો વિશ્વાસભર્યો સંબંધ બનાવવાનો પ્રયત્ન કરીએ છીએ — એવા ઉત્પાદનો દ્વારા જે સચ્ચા, રસાયણમુક્ત અને કાળજીપૂર્વક બનાવવામાં આવ્યા હોય, જેમ આપણે પોતાના પરિવાર માટે પસંદ કરીએ.

ગુણવત્તા, પારદર્શિતા અને સમર્પણ દ્વારા, અમારું મિશન છે સ્વસ્થ જીવનને સરળ, કુદરતી અને દરેક માટે સુલભ બનાવવું.`
    : `🎯 Mission – Manna Pure Oil

Our mission is to deliver pure, cold-pressed oils that nourish every home with health, trust, and authenticity.

We are committed to preserving traditional extraction methods, ensuring that every drop retains its natural goodness, rich nutrients, and true taste.

At Manna Pure Oil, we strive to build lasting relationships with families by offering products that are honest, chemical-free, and crafted with care — just as we would choose for our own loved ones.

Through quality, transparency, and dedication, our mission is to make healthy living simple, natural, and accessible for all.`}
</p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold text-white mb-12">
            {isGu ? "પ્રક્રિયા" : "Process"}
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {process.map((p, i) => (

              <div
                key={i}
                className="bg-[#D0F0C0] backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 hover:-translate-y-2 transition"
              >
                <FaSeedling className="text-green-600 text-3xl mb-3 mx-auto" />
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold text-white mb-12">
            {isGu ? "અમારી મૂલ્યો" : "Our Values"}
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {values.map((v, i) => (

              <div
                key={i}
                className="bg-[#D0F0C0] backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 hover:-translate-y-2 transition"
              >
                <div className="text-3xl text-green-600 mb-3 flex justify-center">
                  {v.icon}
                </div>
                <h3>{v.title}</h3>
              </div>

            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
