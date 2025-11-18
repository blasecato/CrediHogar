import Layout from "@/components/organisms/layout/Layout"
import logoImage from '@/assets/LOGOS/logo3d.png';
import img1 from '@/assets/about/img1.png';
import img2 from '@/assets/about/img2.png';
import img3 from '@/assets/about/img3.png';
import img4 from '@/assets/about/img4.png';
import img5 from '@/assets/about/img5.png';
import img6 from '@/assets/about/img6.png';
import img7 from '@/assets/about/img7.png';
import img8 from '@/assets/about/img8.png';
import sisti from '@/assets/about/sisti.png';
import { motion } from 'framer-motion';

// Definición de variantes para el "fade in up"
// Ajustes para hacer las animaciones más rápidas
const containerVariants = {
  hidden: { opacity: 0, y: 30 }, // Reducimos el desplazamiento inicial
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween", // Cambiado de "spring" a "tween" para un control de duración más directo
      duration: 0.4, // Duración total de la animación del contenedor
      staggerChildren: 0.05, // Reducido significativamente el retraso entre hijos
      when: "beforeChildren",
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 15 }, // Reducimos el desplazamiento inicial
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween", // Cambiado de "spring" a "tween"
      duration: 0.3, // Duración de la animación de cada ítem
      ease: "easeOut", // Un suavizado para que termine más rápido
    }
  }
} as const;

const corporateValues = [
  {
    icon: img1,
    title: "Empatía",
    text: 'Entendemos las realidades de nuestros clientes y nos esforzamos por brindar soluciones humanas y sensibles a sus necesidades.'
  },
  {
    icon: img2,
    title: "Accesibilidad",
    text: 'Hacemos posible que más personas puedan acceder a productos de calidad y financiamiento justo, sin complicaciones.'
  },
  {
    icon: img3,
    title: "Transparencia",
    text: 'Comunicamos de forma clara, sin letras pequeñas ni condiciones ocultas. Con nosotros, los clientes saben exactamente lo que están adquiriendo.'
  },
  {
    icon: img4,
    title: "Trabajo en equipo",
    text: 'Fomentamos la colaboración, la confianza mutua y el desarrollo conjunto, porque sabemos que el éxito es el resultado del esfuerzo colectivo.'
  },
  {
    icon: img5,
    title: "Pasión por el servicio",
    text: 'Servimos con entusiasmo, amabilidad y dedicación, generando experiencias memorables que van más allá de una simple venta.'
  },
  {
    icon: img6,
    title: "Equidad",
    text: 'Tratamos a todos con justicia, sin discriminación, ofreciendo las mismas oportunidades de acceso a productos y financiamiento.'
  }
];

const About = () => {
  return (
    <Layout>
      <motion.div
        className="About"
        initial="hidden"
        animate="visible"
      >
        <motion.section
          className="About__header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 className="title" variants={itemVariants}>ACERCA DE NOSOTROS</motion.h2>
          <motion.p variants={itemVariants}>
            Nuestro compromiso es acompañarte en cada etapa de
            tu hogar, con atención cercana, facilidades de pago y
            diseños que reflejan lo mejor de ti.
            Somos parte de tu hogar
          </motion.p>
          <motion.img src={logoImage} alt="Logo" className='logo' variants={itemVariants} />
        </motion.section>

        <motion.section
          className="About__values"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 className="title" variants={itemVariants}>NUESTROS VALORES CORPORATIVOS</motion.h2>
          <motion.div className="About__valuesGrid" variants={containerVariants}>
            {corporateValues.map((value, index) => (
              <motion.div className={`About__valueCard About__valueCard-${index + 1}`} key={index} variants={itemVariants}>
                <motion.div className="About__cardIcon" variants={itemVariants}>
                  <img src={value.icon} alt={value.title} className="image" />
                </motion.div>
                <motion.h3 variants={itemVariants}>{value.title}</motion.h3>
                <motion.p variants={itemVariants}>{value.text}</motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="About__sisti"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 className="title" variants={itemVariants}>NUESTRA MISIÓN</motion.h2>
          <motion.div className="flex-between flex-between-1" variants={containerVariants}>
            <p className="text">
              En CREDI HOGAR trabajamos para transformar cada hogar en un espacio
              moderno, funcional y con estilo. Ofrecemos productos de alta calidad,
              alineados con las últimas tendencias, a precios competitivos y con
              opciones de financiamiento accesibles. Nuestro compromiso es brindar una
              experiencia de compra excepcional, respaldada por un equipo humano
              cercano, profesional y apasionado por superar las expectativas de cada
              cliente.
            </p>
            <motion.img src={img7} alt="sisti logo" className='ocho' variants={itemVariants} />
          </motion.div>

          <motion.h2 className="title" variants={itemVariants}>NUESTRA VISIÓN</motion.h2>
          <motion.div className="flex-between" variants={containerVariants}>
            <motion.img src={img8} alt="sisti logo" className='ocho' variants={itemVariants} />
            <p className="text">
              En CREDI HOGAR trabajamos para transformar cada hogar en un espacio
              moderno, funcional y con estilo. Ofrecemos productos de alta calidad,
              alineados con las últimas tendencias, a precios competitivos y con
              opciones de financiamiento accesibles. Nuestro compromiso es brindar una
              experiencia de compra excepcional, respaldada por un equipo humano
              cercano, profesional y apasionado por superar las expectativas de cada
              cliente.
            </p>
          </motion.div>

          <motion.h2 className="title" variants={itemVariants}>ALIADOS QUE CONFÍAN EN NOSOTROS</motion.h2>
          <motion.img src={sisti} alt="sisti logo" className='sisti' variants={itemVariants} />
        </motion.section>

      </motion.div>
    </Layout>
  )
}

export default About