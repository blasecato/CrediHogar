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
    title: "Trabajoen equipo",
    text: 'Fomentamos la colaboración, la confianza mutua y el desarrollo conjunto, porque sabemos que el éxito es el resultado del esfuerzo colectivo.'
  },
  {
    icon: img5,
    title: "Pasión por elservicio ",
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
      <div className="About">
        <section className="About__header">
          <h2 className="title">ACERCA DE NOSOTROS</h2>
          <p>
            Nuestro compromiso es acompañarte en cada etapa de
            tu hogar, con atención cercana, facilidades de pago y
            diseños que reflejan lo mejor de ti.
            Somos parte de tu hogar
          </p>
          <img src={logoImage} alt="Logo" className='logo' />
        </section>
        <section className="About__values">
          <h2 className="title">NUESTROS VALORES CORPORATIVOS</h2>
          <div className="About__valuesGrid">
            {corporateValues.map((value, index) => (
              <div className={`About__valueCard About__valueCard-${index + 1}`} key={index}>
                <div className="About__cardIcon">
                  <img src={value.icon} alt={value.title} className="image" />
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="About__sisti">
          <h2 className="title">NUESTRA MISIÓN</h2>
          <div className="flex-between flex-between-1">
            <p className="text">
              En CREDI HOGAR trabajamos para transformar cada hogar en un espacio
              moderno, funcional y con estilo. Ofrecemos productos de alta calidad,
              alineados con las últimas tendencias, a precios competitivos y con
              opcionesde financiamiento accesibles. Nuestro compromiso es brindaruna
              experiencia de compra excepcional, respaldada por un equipo humano
              cercano, profesional y apasionado por superar las expectativas de cada
              cliente.
            </p>
            <img src={img7} alt="sisti logo" className='ocho' />
          </div>
          <h2 className="title">NUESTRA VISIÓN</h2>
          <div className="flex-between">
            <img src={img8} alt="sisti logo" className='ocho' />
            <p className="text">
              En CREDI HOGAR trabajamos para transformar cada hogar en un espacio
              moderno, funcional y con estilo. Ofrecemos productos de alta calidad,
              alineados con las últimas tendencias, a precios competitivos y con
              opcionesde financiamiento accesibles. Nuestro compromiso es brindaruna
              experiencia de compra excepcional, respaldada por un equipo humano
              cercano, profesional y apasionado por superar las expectativas de cada
              cliente.

            </p>
          </div>
          <h2 className="title">ALIADOS QUE CONFÍAN EN NOSOTROS</h2>
          <img src={sisti} alt="sisti logo" className='sisti' />
        </section>

      </div>
    </Layout>
  )
}

export default About