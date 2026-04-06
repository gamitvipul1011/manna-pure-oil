import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const products = [
   { image: "/images/products/slider222.jpeg" },
  { image: "/images/products/sl3.jpeg" },
  { image: "/images/products/sl1.jpeg" },
  { image: "/images/products/sl2.jpeg" },


  
  
];

const ProductBannerSection = () => {
  return (
    <section className="w-full h-[400px]">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[400px]">
              <img
                src={item.image}
                alt="product"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default ProductBannerSection;
