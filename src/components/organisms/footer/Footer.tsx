import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import './Footer.scss';

// Import images from footer-caroucel folder
import logo1 from '@/assets/footer-caroucel/item-1.png';
import logo2 from '@/assets/footer-caroucel/item-2.png';
import logo3 from '@/assets/footer-caroucel/item-3.png';
import logo4 from '@/assets/footer-caroucel/item-4.png';
import logo5 from '@/assets/footer-caroucel/item-5.png';
import logo6 from '@/assets/footer-caroucel/item-6.png';
import logo7 from '@/assets/footer-caroucel/item-7.png';
import logo8 from '@/assets/footer-caroucel/item-8.png';
import logo9 from '@/assets/footer-caroucel/item-9.png';
import logo10 from '@/assets/footer-caroucel/item-10.png';
import logo11 from '@/assets/footer-caroucel/item-11.png';
import logo12 from '@/assets/footer-caroucel/item-12.png';

const Footer: React.FC = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
  ];

  return (
    <footer className="Footer">
      <div className="container">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1500}
          className="footer-swiper"
          breakpoints={{
            // Responsive: adjust slidesPerView on smaller screens
            320: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 3, spaceBetween: 12 },
            768: { slidesPerView: 4, spaceBetween: 16 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx} className="footer-slide">
              <div className="logo-wrap">
                <img src={logo} alt={`brand-${idx + 1}`} className="brand-logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </footer>
  );
};

export default Footer;
