import Layout from "@/components/organisms/layout/Layout";
import { Input, Button, Form, message } from "antd"; // Importar 'message' de antd
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookFilled,
  InstagramOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

// Definición de variantes para el "fade in up"
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.4,
      staggerChildren: 0.05,
      when: "beforeChildren",
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeOut",
    }
  }
} as const;


const Contact = () => {
  const [form] = Form.useForm(); // Hook para controlar el formulario de Ant Design

  const onFinish = async (values: {
    nombre: string;
    telefono: string;
    email: string;
    asunto: string;
    mensaje: string;
  }) => {
    try {
      message.loading('Enviando mensaje...', 0); // Mostrar spinner de carga

      const response = await fetch('/.netlify/functions/send-email', { // Ruta a tu Netlify Function
        // Si usas Vercel Function y está en `api/send-email.js`, sería: '/api/send-email'
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      message.destroy(); // Ocultar spinner de carga

      if (response.ok) {
        const data = await response.json();
        message.success(data.message || '¡Correo enviado exitosamente!');
        form.resetFields(); // Limpiar el formulario después del envío exitoso
      } else {
        const errorData = await response.json();
        message.error(errorData.message || 'Error al enviar el correo.');
      }
    } catch (error) {
      message.destroy(); // Ocultar spinner de carga
      console.error('Error al enviar el formulario:', error);
      message.error('Hubo un problema de conexión. Inténtalo de nuevo.');
    }
  };

  const googleMapsSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.623403565559!2d-75.63673562580424!3d1.6212513971295988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e25287f32d8478d%3A0x6d36e2f1e1a8a816!2sCredihogar%20-%20Muebles%20y%20Electrodom%C3%A9sticos!5e0!3m2!1ses!2sco!4v1701389025076!5m2!1ses!2sco"; // Tu URL real de Google Maps

  return (
    <Layout>
      <motion.div
        className="Contact"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="Contact-banner"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="container" variants={containerVariants}>
            <motion.h2 className="title-lite" variants={itemVariants}>CONTACTANOS</motion.h2>
            <motion.p className="description" variants={itemVariants}>
              ¿Tienes preguntas o necesitas una cotización? Estamos aquí para
              ayudarte. Escríbenos y recibe atención rápida, amable y
              personalizada. En Credihogar, tu hogar y tus ideas siempre tienen
              la puerta abierta. ¡Hablemos hoy!
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="container form-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="form-content" variants={containerVariants}>
            <motion.div className="col contact-info" variants={containerVariants}>
              <motion.h3 variants={itemVariants}>PÓNGASE EN CONTACTO</motion.h3>
              <motion.div className="info-item" variants={itemVariants}>
                <EnvironmentOutlined style={{ fontSize: "24px", color: "#ca2e0d" }} />
                <motion.div variants={containerVariants}>
                  <motion.h4 variants={itemVariants}>Oficina principal</motion.h4>
                  <motion.p variants={itemVariants}>
                    B/ LA CASTILLA Despues de la Y de nueva Colombia, calle 11
                    #3-18, Florencia, Caquetá
                  </motion.p>
                </motion.div>
              </motion.div>
              <motion.div className="info-item" variants={itemVariants}>
                <MailOutlined style={{ fontSize: "24px", color: "#ca2e0d" }} />
                <motion.div variants={containerVariants}>
                  <Link target="_blank" to="mailto:supercre18hogar@gmail.com">
                    <motion.h4 variants={itemVariants}>Email</motion.h4>
                    <motion.p variants={itemVariants}>supercre18hogar@gmail.com</motion.p>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div className="info-item" variants={itemVariants}>
                <PhoneOutlined style={{ fontSize: "24px", color: "#ca2e0d" }} />
                <motion.div variants={containerVariants}>
                  <Link target="_blank" to="tel:3125878778">
                    <motion.h4 variants={itemVariants}>Llámanos</motion.h4>
                    <motion.p variants={itemVariants}>312 587 8778</motion.p>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.h3 className="social-media-title" variants={itemVariants}>SÍGUENOS EN NUESTRAS REDES SOCIALES</motion.h3>
              <motion.div className="social-icons" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <Link target="_blank" to="https://www.facebook.com/CrediHogarCOL">
                    <FacebookFilled style={{ fontSize: "36px", color: "#ca2e0d" }} />
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link target="_blank" to="https://www.instagram.com/supercredihogar/?next=%2F">
                    <InstagramOutlined style={{ fontSize: "36px", color: "#ca2e0d" }} />
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link target="_blank" to="https://www.tiktok.com/@super_credihogar">
                    <TikTokOutlined style={{ fontSize: "36px", color: "#ca2e0d" }} />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="col contact-form-col" variants={containerVariants}>
              <motion.h3 variants={itemVariants}>ENVIAR UN MENSAJE</motion.h3>
              <Form
                form={form} // Asociar el hook de formulario
                name="contact"
                layout="vertical"
                onFinish={onFinish}
                className="contact-form"
              >
                <motion.div variants={itemVariants}>
                  <Form.Item
                    name="nombre"
                    rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
                  >
                    <Input placeholder="Nombre" />
                  </Form.Item>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Form.Item
                    name="telefono"
                    rules={[{ required: true, message: "Por favor ingresa tu teléfono" }]}
                  >
                    <Input placeholder="Teléfono" />
                  </Form.Item>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Por favor ingresa tu email" },
                      { type: "email", message: "Por favor ingresa un email válido" },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Form.Item
                    name="asunto"
                    rules={[{ required: true, message: "Por favor ingresa el asunto" }]}
                  >
                    <Input placeholder="Asunto" />
                  </Form.Item>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Form.Item
                    name="mensaje"
                    rules={[{ required: true, message: "Por favor ingresa tu mensaje" }]}
                  >
                    <Input.TextArea rows={4} placeholder="Mensaje" />
                  </Form.Item>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Form.Item>
                    <Button htmlType="submit" className="send-message-button button button-primary">
                      Enviar
                    </Button>
                  </Form.Item>
                </motion.div>
              </Form>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.iframe
          src={googleMapsSrc}
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        ></motion.iframe>
      </motion.div>
    </Layout>
  );
};

export default Contact;