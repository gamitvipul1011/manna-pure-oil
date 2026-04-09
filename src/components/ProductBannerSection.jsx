import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  
  { image: "/images/products/slider1 (1).jpeg" },
  { image: "/images/products/slider1 (2).jpeg" },
  { image: "/images/products/slider1 (3).jpeg" },
  { image: "/images/products/slider1 (4).jpeg" },
  { image: "/images/products/slider1 (5).jpeg" },
  { image: "/images/products/slider1 (6).jpeg" },
  { image: "/images/products/slider1 (7).jpeg" },
  

  
  
];

const ProductBannerSection = () => {
  return (
    <section className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">

  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    loop
    className="w-full h-full"
  >
    {products.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={item.image}
            alt="product"
            className="w-full h-full object-contain md:object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

</section>
  );
};

export default ProductBannerSection;
