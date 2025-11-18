import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { motion } from 'framer-motion'; // 1. Importar Motion


const items: CollapseProps['items'] = [
  { key: '1', label: '1.	¿Cómo funciona el financiamiento en SUPER CREDI HOGAR?', children: <p>Ofrecemos financiamiento en modalidades semanal, quincenal y mensual para ajustarnos a tu presupuesto.</p> },
  { key: '2', label: '2.	¿Cuáles son los requisitos para acceder al crédito?', children: <p>Ser mayor de edad, no estar reportado en centrales de riesgo y contar con el 20% de la cuota inicial."</p> },
  { key: '3', label: '3.	¿Cuánto tiempo tarda la aprobación del crédito?', children: <p>La aprobación toma entre 20 minutos y 1 hora.</p> },
  { key: '4', label: '4.	¿Cuáles son los plazos de pago disponibles?', children: <p>Desde 1 mes hasta 8 meses</p> },
  { key: '5', label: '5.	¿El precio incluye la entrega a domicilio?', children: <p>Sí, el precio incluye la entrega en tu domicilio."</p> },
  { key: '6', label: '6.	¿Qué sucede si no puedo hacer un pago a tiempo?', children: <p>Podemos establecer un compromiso de pago para ayudarte a cumplir con las cuotas.</p> },
  { key: '7', label: '7.	¿Qué tipo de productos ofrecen?', children: <p>Electrodomésticos y muebles para el hogar.</p> },
  { key: '8', label: '8.	¿Puedo cambiar la frecuencia de mis pagos después de iniciar el crédito?', children: <p>Sí, puedes solicitar el cambio de frecuencia de pago.</p> },
  { key: '9', label: '9.	¿Tienen alguna garantía en los productos?', children: <p>Sí, nuestros productos cuentan con garantía.</p> },
  { key: '10', label: '10.	¿Cómo puedo comunicarme para resolver dudas sobre mi crédito o mis pagos?', children: <p>"Puedes comunicarte con nosotros por WhatsApp.</p> },
];

// 2. Definir las variantes (con 'as const' para TypeScript)
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, when: 'beforeChildren' } // Un stagger sutil
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
} as const;

const Questions = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    // El 'div' raíz no necesita animación
    <div className='Questions'>

      {/* 3. El 'container' es el que escucha el 'whileInView' */}
      <motion.div
        className='container'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // amount: 0.2 es un buen valor
      >

        {/* 4. El título es un 'item' */}
        <motion.h2 className="title" variants={itemVariants}>
          Preguntas Frecuentes
        </motion.h2>

        {/* 5. Envolvemos el componente 'Collapse' en un 'motion.div' 
           que también se comporta como un 'item'.
        */}
        <motion.div variants={itemVariants}>
          <Collapse
            items={items}
            defaultActiveKey={['1']}
            accordion
            onChange={onChange}
          />
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Questions;