import process from '@/assets/procees.png';
import surePng from '@/assets/sure.png';
import moneyPng from '@/assets/money.png';
import carPng from '@/assets/car.png';
import { motion } from 'framer-motion';
import { WhatsAppOutlined } from '@ant-design/icons';

const About = () => {
  const bannerImages = [
    { id: 1, img: moneyPng, text: 'Financiamiento facil' },
    { id: 2, img: surePng, text: 'Entrega a domicilio' },
    { id: 3, img: carPng, text: 'Garantia de Calidad' }
  ];

  // Tus variantes están perfectas
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } } // <-- El problema está aquí
  } as const;

  return (
    // 1. Quita TODAS las props de animación de este 'div' principal.
    //    Ahora es un 'div' normal, no un 'motion.div'.
    <div className="About">
      <div className="container">

        {/* 2. APLICA las props de 'container' A ESTE GRUPO */}
        <motion.div
          className="flex"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Estos 'column' ahora se animarán como 'items' 
            del 'flex' (su padre) cuando 'flex' entre en la pantalla.
          */}
          <motion.div className="column" variants={itemVariants}>
            <h2 className="title">
              ¿QUIENES SOMOS?
            </h2>
            <p className="description">
              Somos una empresa del sur del Caquetá dedicada a{' '}
              ofrecer soluciones de financiamiento accesibles para{' '}
              la compra de electrodomésticos y muebles. Nuestro{' '}
              propósito es mejorar la calidad de vida de nuestros{' '}
              clientes, brindando comodidad y confianza.{' '}
            </p>
          </motion.div>

          <motion.div className="column" variants={itemVariants}>
            <img src={process} alt="process" className="process" />
          </motion.div>
        </motion.div>

        {/* 3. APLICA las props de 'container' OTRA VEZ a este NUEVO grupo */}
        <motion.div
          className="why"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 className="title" variants={itemVariants}>
            ¿POR QUE ELEGIRNOS?
          </motion.h2>

          {/* 4. IMPORTANTE: Para que el 'stagger' funcione en el .map(),
            el 'div' que lo envuelve ('flex-reason') TAMBIÉN debe ser
            un 'motion.div' y actuar como un contenedor.
          */}
          <motion.div className="flex-reason" variants={containerVariants}>
            {bannerImages.map((item, index) => (
              <motion.div key={item.id} className="reason" variants={itemVariants}>
                <div className="circle">
                  <img src={item.img} alt={`reason-${index}`} className="icon reason-image" />
                </div>
                <p className="text">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex-center" variants={itemVariants}>
            <a
              className="button button-primary"
              href="https://wa.me/573125425175?text=Hola%20quiero%20hablar%20con%20un%20asesor%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppOutlined />
              Escríbenos por WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;