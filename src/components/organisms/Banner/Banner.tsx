import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import bannerImg1 from '@/assets/1Portada Pg W.webp';
import bannerImg2 from '@/assets/1Portada Pg W2.webp';
import bannerImg3 from '@/assets/1Portada Pg W3.webp';

const Banner: React.FC = () => {
  const bannerImages = [bannerImg1, bannerImg2, bannerImg3];

  return (
    <div className="Banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        spaceBetween={0}
        className="banner-swiper"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index} className={`banner-slide banner-slide-${index + 1}`}>
            <img src={image} alt={`Banner ${index + 1}`} className="banner-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
