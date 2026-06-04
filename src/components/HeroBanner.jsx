import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

/* DESKTOP IMAGES */
import family1Desktop from '../assets/Ground nut oil 1920 x 800.jpg';
import family2Desktop from '../assets/Presentil oil 1920 x 800.jpg';
import family3Desktop from '../assets/Family Ghee 1920 x 800.jpg';

/* MOBILE IMAGES */
import family1Mobile from "../assets/mo_500gro.jpeg";
import family2Mobile from "../assets/mo_500pri.jpeg";
import family3Mobile from "../assets/mo_ghee500.jpeg";

const slides = [
  {
    desktopImage: family1Desktop,
    mobileImage: family1Mobile
  },
  {
    desktopImage: family2Desktop,
    mobileImage: family2Mobile
  },
  { 
    desktopImage: family3Desktop,
    mobileImage: family3Mobile
  }
];

const HeroBanner = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        speed={900}
        // ડેસ્કટોપમાં height 85vh રહેશે અને મોબાઈલમાં auto રહેશે 
        className="w-full h-auto md:h-[85vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Flex નો ઉપયોગ કર્યો છે જેથી ઈમેજ સેન્ટરમાં રહે */}
            <div className="relative w-full h-full flex justify-center items-center">

              {/* DESKTOP IMAGE */}
              <img
                src={slide.desktopImage}
                alt="banner desktop"
                className="hidden md:block w-full h-full object-cover object-center"
              />

              {/* MOBILE IMAGE */}
              <img
                src={slide.mobileImage}
                alt="banner mobile"
                // max-h-[60vh] થી ઈમેજ બહુ મોટી નહિ થાય
                // object-contain થી ઈમેજ જરાય ક્રોપ નહિ થાય (આખી દેખાશે)
                className="block md:hidden w-full h-auto max-h-[60vh] object-contain"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;
