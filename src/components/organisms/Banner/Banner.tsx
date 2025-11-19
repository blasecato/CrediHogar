import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import bannerImg1 from '@/assets/2Portada Pg W.webp';
import bannerImg2 from '@/assets/2Portada Pg W2.jpg';
import bannerImg3 from '@/assets/2Portada Pg W3.webp';
import { ShoppingOutlined, WhatsAppOutlined } from '@ant-design/icons';

const Banner: React.FC = () => {
  const bannerImages = [
    { id: 1, src: bannerImg1, },
    { id: 2, src: bannerImg2, },
    { id: 3, src: bannerImg3, }
  ];

  return (
    <div className="Banner">
      <div className='flex-button'>
        <a href="https://store.converxia.com/shop/credihogar" target="_blank" rel="noopener noreferrer" className="button button-gray">
          <ShoppingOutlined />
          Ir a tienda online
        </a>
        <a href="https://wa.me/573125425175?text=Hola%20quiero%20hablar%20con%20un%20asesor%21" target="_blank" rel="noopener noreferrer" className="button button-primary button-banner">
          <WhatsAppOutlined />
          Escríbenos por WhatsApp
        </a>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5001, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        spaceBetween={0}
        className="banner-swiper"
      >
        <>

          {bannerImages.map((image, index) => (
            <SwiperSlide key={index} className='banner-slide'>
              <div className={`back banner-slide-${index + 1}`} style={{ backgroundImage: `url(${image.src})` }}>

              </div>

            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default Banner;
