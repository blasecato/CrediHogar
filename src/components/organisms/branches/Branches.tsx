import { EnvironmentOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import process from '@/assets/procees.png';
import { motion } from 'framer-motion'; // 1. Importar Motion

// 2. Definir las variantes (usando 'as const' para TypeScript)
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
    { id: 1, title: 'Florencia', direction: 'Calle 5 # 3-45', phone: '314 567 8901', name: 'Juan Perez' },
    { id: 2, title: 'Florencia', direction: 'Calle 5 # 3-45', phone: '314 567 8901', name: 'Juan Perez' },
    { id: 3, title: 'Florencia', direction: 'Calle 5 # 3-45', phone: '314 567 8901', name: 'Juan Perez' },
    { id: 4, title: 'Florencia', direction: 'Calle 5 # 3-45', phone: '314 567 8901', name: 'Juan Perez' },
    { id: 5, title: 'Florencia', direction: 'Calle 5 # 3-45', phone: '314 567 8901', name: 'Juan Perez' },
    { id: 6, title: 'Florencia', direction: 'Calle 5 # 3-45', phone: '314 567 8901', name: 'Juan Perez' },
  ];

  return (
    // Sin animación en el 'div' raíz
    <div className="Branches">

      {/* 3. Primer bloque de animación (Sucursales) */}
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

        {/* 4. Contenedor para las tarjetas (para el 'stagger') */}
        <motion.div className="cards" variants={containerVariants}>
          {directions.map((item) => (
            // 5. Cada tarjeta es un 'item' animado
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
                <Button className="button-primary">Contactar</Button>
              </div>
            </motion.div>
          ))}

          {/* 6. El botón suelto también se anima como un 'item' */}
          <motion.div variants={itemVariants}>
            <Button className="button-primary">Contactar</Button>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* 7. Segundo bloque de animación (24 años...) */}
      <motion.div
        className="container container-two"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="sub-title" variants={itemVariants}>
          24 años llevando felicidad
          a hogares caqueteños
        </motion.h2>

        {/* 8. Contenedor para las imágenes (para el 'stagger') */}
        <motion.div className="flex-around" variants={containerVariants}>
          <motion.div className="col" variants={itemVariants}>
            <img src={process} alt="process" className='process' />
          </motion.div>
          <motion.div className="col" variants={itemVariants}>
            <img src={process} alt="process" className='process' />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Branches;