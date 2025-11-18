import Layout from "@/components/organisms/layout/Layout";
import { Input, Button, Form } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookFilled,
  InstagramOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Contact = () => {
  const onFinish = (values: unknown) => {
    console.log("Valores del formulario:", values);
  };

  return (
    <Layout>
      <div className="Contact">
        <div className="Contact-banner">
          <div className="container">
            <h2 className="title-lite">CONTACTANOS</h2>
            <p className="description">
              ¿Tienes preguntas o necesitas una cotización? Estamos aquí para
              ayudarte. Escríbenos y recibe atención rápida, amable y
              personalizada. En Credihogar, tu hogar y tus ideas siempre tienen
              la puerta abierta. ¡Hablemos hoy!
            </p>
          </div>
        </div>
        <div className="container form-section">
          <div className="form-content">
            <div className="col contact-info">
              <h3>PÓNGASE EN CONTACTO</h3>
              <div className="info-item">
                <EnvironmentOutlined style={{ fontSize: "24px", color: "#ca2e0d" }} />
                <div>
                  <h4>Oficina principal</h4>
                  <p>
                    B/ LA CASTILLA Despues de la Y de nueva Colombia, calle 11
                    #3-18, Florencia, Caquetá
                  </p>
                </div>
              </div>
              <div className="info-item">
                <MailOutlined style={{ fontSize: "24px", color: "#ca2e0d" }} />
                <div>
                  <Link target="_blank" to="mailto:supercre18hogar@gmail.com">
                    <h4>Email</h4>
                    <p>supercre18hogar@gmail.com</p>
                  </Link>
                </div>
              </div>
              <div className="info-item">
                <PhoneOutlined style={{ fontSize: "24px", color: "#ca2e0d" }} />
                <div>
                  <Link target="_blank" to="tel:3125878778">
                    <h4>Llámanos</h4>
                    <p>312 587 8778</p>
                  </Link>
                </div>
              </div>

              <h3 className="social-media-title">SÍGUENOS EN NUESTRAS REDES SOCIALES</h3>
              <div className="social-icons">
                <Link target="_blank" to="https://www.facebook.com/CrediHogarCOL">
                  <FacebookFilled style={{ fontSize: "36px", color: "#ca2e0d" }} />
                </Link>
                <Link target="_blank" to="https://www.instagram.com/supercredihogar/?next=%2F">
                  <InstagramOutlined style={{ fontSize: "36px", color: "#ca2e0d" }} />
                </Link>
                <Link target="_blank" to="https://www.tiktok.com/@super_credihogar">
                  <TikTokOutlined style={{ fontSize: "36px", color: "#ca2e0d" }} />
                </Link>
              </div>
            </div>
            <div className="col contact-form-col">
              <h3>ENVIAR UN MENSAJE</h3>
              <Form
                name="contact"
                layout="vertical"
                onFinish={onFinish}
                className="contact-form"
              >
                <Form.Item
                  name="nombre"
                  rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
                >
                  <Input placeholder="Nombre" />
                </Form.Item>
                <Form.Item
                  name="telefono"
                  rules={[{ required: true, message: "Por favor ingresa tu teléfono" }]}
                >
                  <Input placeholder="Teléfono" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Por favor ingresa tu email" },
                    { type: "email", message: "Por favor ingresa un email válido" },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="asunto"
                  rules={[{ required: true, message: "Por favor ingresa el asunto" }]}
                >
                  <Input placeholder="Asunto" />
                </Form.Item>
                <Form.Item
                  name="mensaje"
                  rules={[{ required: true, message: "Por favor ingresa tu mensaje" }]}
                >
                  <Input.TextArea rows={4} placeholder="Mensaje" />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" className="send-message-button button button-primary">
                    Enviar
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31905.816083521677!2d-75.622254!3d1.6182771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e244f556ce54775%3A0x33817a90b8d243e8!2sCREDIHOGAR!5e0!3m2!1ses-419!2sco!4v1763492668997!5m2!1ses-419!2sco" width="100%" height="450" style={{ border: "0" }} loading="lazy"></iframe>      </div>
    </Layout>
  );
};

export default Contact;