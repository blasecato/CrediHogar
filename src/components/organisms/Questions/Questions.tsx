import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { motion } from 'framer-motion'; // 1. Importar Motion

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  { key: '1', label: 'This is panel header 1', children: <p>{text}</p> },
  { key: '2', label: 'This is panel header 2', children: <p>{text}</p> },
  { key: '3', label: 'This is panel header 3', children: <p>{text}</p> },
  { key: '4', label: 'This is panel header 4', children: <p>{text}</p> },
  { key: '5', label: 'This is panel header 5', children: <p>{text}</p> },
  { key: '6', label: 'This is panel header 6', children: <p>{text}</p> },
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