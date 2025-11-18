import { EnvironmentOutlined, PhoneOutlined, UserOutlined, WhatsAppOutlined } from "@ant-design/icons";
import img1 from '@/assets/questions/img1.png';
import img2 from '@/assets/questions/img2.png';
import img3 from '@/assets/questions/img3.jpg';
import img4 from '@/assets/questions/img4.jpg';
import img5 from '@/assets/questions/img5.jpg';
import img6 from '@/assets/questions/img6.jpg';
import img7 from '@/assets/questions/img7.jpg';
import img8 from '@/assets/questions/img8.jpg';
import img9 from '@/assets/questions/img9.jpg';
import img10 from '@/assets/questions/img10.jpg';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: 'beforeChildren' }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
} as const;


const Branches = () => {
  const directions = [
    { id: 1, title: 'Florencia', direction: 'B/ LA CASTILLA Despues de la Y de nueva Colombia, calle 11 #3-18', phone: '3125878778', name: 'LUZ ADRIANA TAPIERO' },
    { id: 2, title: 'Macarena', direction: 'Calle 6 No 6-22 Barrio el Centro', phone: '3144928207', name: 'PAOLA GIRONZA' },
    { id: 3, title: 'Pto Rico', direction: 'Calle 6 No 9-46 Barrio las Damas', phone: '3118970661', name: 'SANDRA ILIZALDE' },
    { id: 4, title: 'Cartagena del Chaira', direction: 'Carrera 10 No 3-60 Barrio Antioquia', phone: '3133638260', name: 'ADRIANA TRASLAVIÑA' },
    { id: 5, title: 'San Vicente', direction: 'Carrera 5 6 07 N° 5A-104 Barrio Santa Isabel', phone: '3105463794', name: 'NURY VILLAQUIRAN' },
    { id: 6, title: 'Pto Asis', direction: 'Carrera 27 N 21-10 Barrio el prado', phone: '3227139270', name: '' },
  ];
  const caroucel = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
  ];

  return (
    <div className="Branches">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="title" variants={itemVariants}>
          NUESTRAS SUCURSALES
        </motion.h2>
        <motion.div className="cards" variants={containerVariants}>
          {directions.map((item) => (
            <motion.div key={item.id} className="card" variants={itemVariants}>
              <h3 className="card-title">{item.title}</h3>
              <div className="list">
                <div className="item">
                  <span className="value">
                    <EnvironmentOutlined />
                    {item.direction}
                  </span>
                </div>
                <div className="item">
                  <span className="value">
                    <PhoneOutlined />
                    {item.phone}
                  </span>
                </div>
                <div className="item">
                  <span className="value">
                    <UserOutlined />
                    {item.name}
                  </span>
                </div>
              </div>
              <div className="flex-center">
                <a
                  href={`https://wa.me/57${item.phone}?text=Hola%20quiero%20hablar%20con%20un%20asesor%21`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary small"><WhatsAppOutlined />Contactar</a>
              </div>
            </motion.div>
          ))}
          <motion.div variants={itemVariants}>
            <a
              href="https://wa.me/573125425175?text=Hola%20quiero%20hablar%20con%20un%20asesor%21"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              <WhatsAppOutlined />
              Quiero hablar con un asesor
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="container container-two"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="sub-title" variants={itemVariants}>
          22 AÑOS LLEVANDO FELICIDAD <br /> A HOGARES CAQUETEÑOS
        </motion.h2>
        <motion.div className="swiper-container-wrapper" variants={itemVariants}>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {caroucel.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.img} alt={`Carrousel image ${item.id}`} className='process' />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Branches;