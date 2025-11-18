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
import credi from '@/assets/LOGOS/Logo R.png';
import techo from '@/assets/LOGOS/Techo G.png';
import elite from '@/assets/elite-dark.png';
import { Link } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, TikTokOutlined } from '@ant-design/icons';

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
        <h2 className="title">
          NUESTRAS MARCAS ALIADAS
        </h2>
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
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 12 },
            768: { slidesPerView: 1, spaceBetween: 16 },
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
      <div className="container container-two">
        <div className="column">
          <ul>
            <li>
              <img src={credi} alt="Credihogar logo" className='credi' />
            </li>
            <li>
              <p className="item">2025 Credihogar</p>
            </li>
            <li>
              <p className="item">Diseñado por</p>
            </li>
            <li>
              <img src={elite} alt="elite logo" className='credi' />
            </li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>
              <Link to='/' className="item">Inicio</Link>
            </li>
            <li>
              <Link target='_blank' to="https://store.converxia.com/shop/credihogar" className="item">Tienda</Link>
            </li>
            <li>
              <Link to='/' className="item">Ver catalogo</Link>
            </li>
            <li>
              <Link to='/about' className="item">Nosotros</Link>
            </li>
            <li>
              <Link to='/contact' className="item">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>
              <p className="item">Politicas de Privacidad</p>
            </li>
            <li>
              <p className="item">Termino y condiciones</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='container container-two'>
        <div className="column">
          <Link target="_blank" to="https://www.facebook.com/CrediHogarCOL">
            <FacebookOutlined />
            CrediHogarCOL
          </Link>
        </div>
        <div className="column">
          <Link target="_blank" to="https://www.instagram.com/supercredihogar/?next=%2F">
            <InstagramOutlined />
            supercredihogar
          </Link>
        </div>
        <div className="column">
          <Link target="_blank" to="https://www.tiktok.com/@super_credihogar">
            <TikTokOutlined />
            super-crediHogar
          </Link>
        </div>

      </div>
      <img src={techo} alt="techo logo" className='techo' />
    </footer>
  );
};

export default Footer;
