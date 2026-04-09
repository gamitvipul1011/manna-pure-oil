import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

/* DESKTOP IMAGES */

import family1Desktop from '../assets/Ground nut oil 1920 x 800.jpg';
import family2Desktop from '../assets/Presentil oil 1920 x 800.jpg';
import family3Desktop from '../assets/Family Ghee 1920 x 800.jpg';

/* MOBILE IMAGES */

import family1Mobile from '../assets/Ground nut oil 1920 x 800.jpg';
import family2Mobile from '../assets/Presentil oil 1920 x 800.jpg';
import family3Mobile from '../assets/Family Ghee 1920 x 800.jpg';

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
    <section className="relative">
      <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  loop
  speed={900}
  className="h-screen md:h-[90vh]"
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div className="relative w-full h-full flex items-center justify-center bg-black">

        {/* DESKTOP IMAGE */}
        <img
          src={slide.desktopImage}
          alt="banner"
          className="hidden md:block w-full h-full object-cover"
        />

        {/* MOBILE IMAGE */}
        <img
          src={slide.mobileImage}
          alt="banner"
          className="block md:hidden w-full h-full object-contain"
        />

      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
};

export default HeroBanner;
