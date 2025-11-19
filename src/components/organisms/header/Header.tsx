import { useState } from 'react';
import logoImage from '@/assets/LOGOS/Logo rr.png';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd'; // Importar Dropdown y Menu de Ant Design
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
// Importar el PDF como un objeto/variable
import pdfMuebles from '@/assets/catalogos/catalogo-muebles.pdf';
import pdfElectro from '@/assets/catalogos/catalogo-electrodomesticos.pdf';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Define los items para el menú desplegable
  const catalogMenuItems = (
    <Menu>
      <Menu.Item key="1">
        <a className='description' href={pdfMuebles} target="_blank" rel="noopener noreferrer">
          Catálogo de Muebles
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a className='description' href={pdfElectro} target="_blank" rel="noopener noreferrer">
          Catálogo de Electrodomésticos
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="Header">
      <div className='container'>
        <div className="header-logo">
          <Link to='/' className='button button-transparent'>
            <img src={logoImage} alt="Logo" className='logo' />
          </Link>
        </div>
        <Button className='button button-transparent button-menu' onClick={() => setMenuOpen(!menuOpen)}>
          <MenuOutlined />
        </Button>
        {menuOpen &&
          <div className='menu'>
            <Button className='button button-transparent button-menu' onClick={() => setMenuOpen(false)}>
              <CloseOutlined />
            </Button>
            <ul>
              <img src={logoImage} alt="Logo" className='logo' />
              <li><Link to="/">INICIO</Link></li>
              <li><Link target='_blank' to="https://store.converxia.com/shop/credihogar">TIENDA</Link></li>
              {/* Aquí insertamos el Dropdown para el menú móvil */}
              <li className="catalog-menu-item-mobile">
                <Dropdown overlay={catalogMenuItems} placement="bottomLeft" arrow>
                  <a style={{ cursor: 'pointer' }} onClick={e => e.preventDefault()}>VER CATÁLOGO</a>
                </Dropdown>
              </li>
              <li><Link to="/about">NOSOTROS</Link></li>
              <li><Link to="/contact">CONTACTO</Link></li>
            </ul>
          </div>
        }
        <nav className="header-nav">
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link target='_blank' to="https://store.converxia.com/shop/credihogar">TIENDA</Link></li>
            {/* Aquí insertamos el Dropdown para la navegación principal */}
            <li className="catalog-menu-item">
              <Dropdown overlay={catalogMenuItems} placement="bottomCenter" arrow>
                <a style={{ cursor: 'pointer' }} onClick={e => e.preventDefault()}>VER CATÁLOGO</a>
              </Dropdown>
            </li>
            <li><Link to="/about">NOSOTROS</Link></li>
            <li><Link to="/contact">CONTACTO</Link></li>
          </ul>
          <div className='divider' />
        </nav>
      </div>
    </header >
  );
};

export default Header;