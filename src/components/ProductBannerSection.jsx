
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const products = [
{
image: "/images/products/ground15.jpeg",
nameGu: "શીંગતેલ",
nameEn: "Groundnut Oil",
descGu: "પરંપરાગત કોલ્ડ પ્રેસ પદ્ધતિથી બનાવેલું શુદ્ધ શીંગતેલ. હૃદય માટે લાભદાયક.",
descEn: "Pure cold-pressed groundnut oil made using traditional wooden press. Heart friendly.",
benefitsGu: ["હૃદય સ્વાસ્થ્ય", "વિટામિન E", "શુદ્ધ સ્વાદ"],
benefitsEn: ["Heart Health", "Vitamin E", "Pure Taste"]
},

{
image: "/images/products/musterd oil 1l.jpg",
nameGu: "રાઈ તેલ",
nameEn: "Mustard Oil",
descGu: "પાચન માટે ઉત્તમ અને ભારતીય રસોઈ માટે આદર્શ રાઈ તેલ.",
descEn: "Ideal mustard oil for digestion and authentic Indian cooking.",
benefitsGu: ["પાચન સુધારે", "રોગપ્રતિકારક શક્તિ"],
benefitsEn: ["Improves Digestion", "Boosts Immunity"]
},

{
image: "/images/products/WHITE_5L.jpg",
nameGu: "તલ તેલ",
nameEn: "White Sesame Oil",
descGu: "એન્ટીઑક્સિડન્ટ્સથી ભરપૂર, હાડકાં અને ત્વચા માટે લાભદાયક.",
descEn: "Rich in antioxidants, beneficial for bones and skin.",
benefitsGu: ["હાડકાં મજબૂત", "એન્ટીઑક્સિડન્ટ"],
benefitsEn: ["Strong Bones", "Antioxidants"]
},

{
image: "/images/products/COCONUT_1L.jpg",
nameGu: "નાળિયેર તેલ",
nameEn: "Coconut Oil",
descGu: "શુદ્ધ સુગંધ અને આરોગ્ય માટે ઉત્તમ નાળિયેર તેલ.",
descEn: "Pure aromatic coconut oil for health, hair and skin.",
benefitsGu: ["વાળ અને ત્વચા", "ઉર્જા"],
benefitsEn: ["Hair & Skin", "Energy"]
},

{
image: "/images/products/WHITE_Ltr.jpg",
nameGu: "કાળા તલ તેલ",
nameEn: "Black Sesame Oil",
descGu: "પોષક તત્વોથી ભરપૂર, વાળ અને ત્વચા માટે ખૂબ લાભદાયક.",
descEn: "Rich in nutrients, highly beneficial for hair and skin.",
benefitsGu: ["વાળ માટે ઉત્તમ", "ત્વચા પોષણ", "શરીર શક્તિ વધારવું"],
benefitsEn: ["Hair Care", "Skin Nourishment", "Boosts Strength"]
},

{
image: "/images/products/cous.jpeg",
nameGu: "એરંડા તેલ",
nameEn: "Castor Oil",
descGu: "વાળની વૃદ્ધિ અને ત્વચા સંભાળ માટે ઉપયોગી કુદરતી તેલ.",
descEn: "Natural oil useful for hair growth and skin care.",
benefitsGu: ["વાળ વૃદ્ધિ", "ત્વચા માટે સારું", "પાચન માટે મદદરૂપ"],
benefitsEn: ["Hair Growth", "Good for Skin", "Supports Digestion"]
},

{
image: "/images/products/sun flower 5Ltr.jpg",
nameGu: "સૂર્યમુખી તેલ",
nameEn: "Sunflower Oil",
descGu: "હળવું અને હૃદય માટે લાભદાયક તેલ, દૈનિક રસોઈ માટે યોગ્ય.",
descEn: "Light and heart-healthy oil, perfect for daily cooking.",
benefitsGu: ["હૃદય માટે સારું", "હળવું તેલ", "વિટામિન E સમૃદ્ધ"],
benefitsEn: ["Heart Healthy", "Light Oil", "Rich in Vitamin E"]
},

{
image: "/images/products/ghee.jpeg",
nameGu: "ગિર ગાયનું ઘી",
nameEn: "Gir Cow Ghee",
descGu: "પરંપરાગત બિલોના પદ્ધતિથી બનાવેલું શુદ્ધ દેશી ઘી.",
descEn: "Pure gir cow ghee made using traditional bilona method.",
benefitsGu: ["શક્તિ વધારશે", "સ્મૃતિ સુધારે"],
benefitsEn: ["Boosts Strength", "Improves Memory"]
}
];

const ProductBannerSection = () => {

const { i18n } = useTranslation();
const lang = i18n.language;

return (

<section
className="py-24 relative"
style={{
backgroundImage: "url('/images/oil-bg.jpg')",
backgroundSize: "cover",
backgroundPosition: "center"
}}
>

{/* PURPLE OVERLAY */}

<div className="absolute inset-0 bg-gradient-purple"></div>

<div className="relative z-10">

{/* HEADING */}

<div className="text-center mb-16 px-4">

<h2 className="text-4xl md:text-5xl font-extrabold text-white">

{lang === "gu" ? "અમારા શુદ્ધ તેલ" : "Our Pure Oils"}

</h2>

<p className="text-white mt-4">

{lang === "gu"
? "કોલ્ડ પ્રેસ્ડ, કુદરતી અને સ્વસ્થ"
: "Cold Pressed • Natural • Healthy"}

</p>

</div>

{/* SLIDER */}

<Swiper
modules={[Autoplay, Pagination]}
autoplay={{ delay: 5000, disableOnInteraction: false }}
pagination={{ clickable: true }}
loop
className="max-w-6xl mx-auto"
>

{products.map((item, index) => (

<SwiperSlide key={index}>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center
bg-[#D0F0C0]
rounded-3xl shadow-2xl p-10
hover:scale-[1.02] transition duration-300">

{/* IMAGE */}

<div className="flex justify-center">

<img
src={item.image}
alt={item.nameEn}
className="max-h-80 object-contain drop-shadow-xl"
/>

</div>

{/* CONTENT */}

<div>

<h3 className="text-3xl font-bold text-purple-800 mb-4">

{lang === "gu" ? item.nameGu : item.nameEn}

</h3>

<p className="text-gray-700 mb-6">

{lang === "gu" ? item.descGu : item.descEn}

</p>

<ul className="space-y-2">

{(lang === "gu"
? item.benefitsGu
: item.benefitsEn
).map((benefit, i) => (

<li key={i} className="flex items-center gap-2">

<span className="text-green-600">✔</span>

<span>{benefit}</span>

</li>

))}

</ul>

</div>

</div>

</SwiperSlide>

))}

</Swiper>

</div>

</section>

);

};

export default ProductBannerSection;

