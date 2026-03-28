import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

/* DESKTOP IMAGES */
import familyDesktop from '../assets/slider1.jpeg';
import family1Desktop from '../assets/slider2.jpeg';
import family2Desktop from '../assets/slider3.jpeg';

/* MOBILE IMAGES */
import familyMobile from '../assets/mo_slider1.jpeg';
import family1Mobile from '../assets/mo_slider2.jpeg';
import family2Mobile from '../assets/mo_slider3.jpeg';

const slides = [
  {
    desktopImage: familyDesktop,
    mobileImage: familyMobile
  },
  {
    desktopImage: family1Desktop,
    mobileImage: family1Mobile
  },
  {
    desktopImage: family2Desktop,
    mobileImage: family2Mobile
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
        className="h-[60vh] md:h-[90vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">

              {/* DESKTOP IMAGE */}
              <img
                src={slide.desktopImage}
                alt="Banner"
                className="hidden md:block w-full h-full object-cover"
              />

              {/* MOBILE IMAGE */}
              <img
                src={slide.mobileImage}
                alt="Banner"
                className="block md:hidden w-full h-full object-cover"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;
