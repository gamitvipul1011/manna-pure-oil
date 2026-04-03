
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
{
nameGu: "રમેશ પટેલ",
nameEn: "Ramesh Patel",
image: "/images/user1.jpeg",
textGu: "મન્ના પ્યોર ઓઈલ ખરેખર શુદ્ધ અને સ્વાદિષ્ટ છે. હવે અમે બીજું તેલ વાપરતા નથી.",
textEn: "Manna Pure Oil is truly pure and tasty. We no longer use any other oil."
},

{
nameGu: "નીતા શાહ",
nameEn: "Neeta Shah",
image: "/images/user2.jpeg",
textGu: "ઘર માટે સલામત અને આરોગ્યપ્રદ તેલ. બાળકો માટે ખૂબ જ સારું.",
textEn: "Safe and healthy oil for family. Very good for children."
},

{
nameGu: "અજય દેસાઈ",
nameEn: "Ajay Desai",
image: "/images/user3.jpeg",
textGu: "કોલ્ડ પ્રેસ્ડ તેલનો સાચો અનુભવ મન્ના પ્યોર ઓઈલ સાથે થયો.",
textEn: "Experienced real cold-pressed oil with Manna Pure Oil."
}
];

const TestimonialsSection = () => {

const { i18n } = useTranslation();
const currentLang = i18n.language;

return (

<section className="py-15">
<div className="max-w-5xl mx-auto px-4 text-center">

{/* TITLE */}

<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-14">

{currentLang === "gu" ? "ગ્રાહકોના અનુભવ" : "Customer Experiences"}

<span className="block text-lg text-purple-100 mt-3">

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
className="max-w-3xl mx-auto"
>

{testimonials.map((item, index) => (

<SwiperSlide key={index}>

<div className="bg-purple-50 px-10 py-12 rounded-3xl shadow-xl max-w-3xl mx-auto
hover:scale-[1.03] transition duration-300">

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

