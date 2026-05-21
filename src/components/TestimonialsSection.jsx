
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
{
nameGu: "મેહુલ વસાવા",
nameEn: "Mehul Vasava",
image: "/images/Mehul.jpg",
textGu: "ઉત્તમ……ગુણવત્તા…..👌 .",
textEn: "Excellent……Quality…..👌."
},

{
nameGu: " તરુણ ચૌધરી",
nameEn: "Tarun Chaudhari",
image: "/images/user2.jpeg",
textGu: "શુદ્ધ ઠંડુ દબાયેલું તેલ અને શુદ્ધ કુદરતી રીત.",
textEn: "Pure cold pressed oil and pure naturally."
},
  
{
nameGu: "ભાવિન રાઠોડ",
nameEn: "BHAVIN RATHOD",
image: "/images/user2.jpeg",
textGu: "ઘર માટે સલામત અને આરોગ્યપ્રદ તેલ. બાળકો માટે ખૂબ જ સારું.",
textEn: "Safe and healthy oil for family. Very good for children."
},
  {
nameGu: " સની",
nameEn: " sunny",
image: "/images/user2.jpeg",
textGu: "સારા સ્વાસ્થ્ય માટે ઉત્તમ ઉત્પાદન.",
textEn: "Great product for good health."
},
  {
nameGu: "વાસુદેવ પ્રજાપતિ",
nameEn: "vasudev Prajapati",
image: "/images/user2.jpeg",
textGu: "ઘર માટે સલામત અને આરોગ્યપ્રદ તેલ. બાળકો માટે ખૂબ જ સારું.",
textEn: "Safe and healthy oil for family. Very good for children."
},

];

const TestimonialsSection = () => {

const { i18n } = useTranslation();
const currentLang = i18n.language;

return (

<section className="py-15 ">
<div className="max-w-5xl mx-auto px-4 text-center ">

{/* TITLE */}

<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-14 ">

{currentLang === "gu" ? "ગ્રાહકોના અનુભવ" : "Customer Experiences"}

<span className="block text-lg text-purple-100 mt-3 ">

{currentLang === "gu"
? "અમારા ગ્રાહકો શું કહે છે"
: "What our customers say"}

</span>

</h2>

{/* SLIDER */}

<Swiper
modules={[Autoplay, Pagination]}
autoplay={{ delay: 4000, disableOnInteraction: false }}
pagination={{ clickable: true }}
loop
className="max-w-3xl mx-auto ">

{testimonials.map((item, index) => (

<SwiperSlide key={index}>

<div className="bg-[#D0F0C0] px-10 py-12 rounded-3xl shadow-xl max-w-3xl mx-auto
hover:scale-[1.03] transition duration-300 ">

{/* IMAGE */}

<img
src={item.image}
alt={currentLang === "gu" ? item.nameGu : item.nameEn}
className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-6 object-cover
border-4 border-white shadow-xl"
/>

{/* TEXT */}

<p className="italic text-lg text-gray-800 leading-relaxed">

“{currentLang === "gu" ? item.textGu : item.textEn}”

</p>

{/* NAME */}

<h4 className="font-bold text-purple-800 mt-6 text-lg">

{currentLang === "gu" ? item.nameGu : item.nameEn}

</h4>

</div>

</SwiperSlide>

))}

</Swiper>

</div>

</section>

);

};

export default TestimonialsSection;

