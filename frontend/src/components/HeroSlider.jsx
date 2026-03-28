import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import family from '../assets/family.png';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Every Drop of Purity',
    subtitle: 'Cold Pressed • 100% Natural',
    description: 'Traditional oils made with love for your family',
    image: family
  },
  {
    title: 'Trust of Indian Families',
    subtitle: 'Pure & Chemical Free Oils',
    description: 'Healthy cooking starts with pure oil',
    image: '/banners/family.png'
  },
  {
    title: 'Maana Pure Oil',
    subtitle: 'Taste • Health • Tradition',
    description: 'Experience the goodness of cold-pressed oils',
    image: '/banners/family.png'
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
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  {slide.title}
                </h1>

                <h2 className="text-2xl md:text-3xl text-brand-green-300 mb-4">
                  {slide.subtitle}
                </h2>

                <p className="text-lg max-w-xl mb-8">
                  {slide.description}
                </p>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 rounded-full font-bold text-lg hover:scale-105 transition"
                >
                  Shop Now
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;
