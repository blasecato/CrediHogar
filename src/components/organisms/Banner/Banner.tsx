import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import bannerImg1 from '@/assets/1Portada Pg W.webp';
import bannerImg2 from '@/assets/1Portada Pg W2.webp';
import bannerImg3 from '@/assets/1Portada Pg W3.webp';

const Banner: React.FC = () => {
  const bannerImages = [
    { id: 1, src: bannerImg1, title: '¡RECIBE TUS MUEBLES LISTOS PARA USAR!', text: 'Sin herramientas, sin estrés, sin demoras.' },
    { id: 2, src: bannerImg2, title: 'CRÉDITO FÁCIL, SIN TANTO TRÁMITE', text: '¡Solo elige, disfruta y estrena hoy!' },
    { id: 3, src: bannerImg3, title: 'TU HOGAR TAMBIÉN MERECE UN NUEVO COMIENZO', text: 'Este diciembre, hazlo posible con nuestros muebles' }];

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
          <SwiperSlide key={index} className='banner-slide'>
            <div className={`back banner-slide-${index + 1}`} style={{ backgroundImage: `url(${image.src})` }}>
              <h1 className='super-title'>{image.title}</h1>
              <p className='super-text'>{image.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
