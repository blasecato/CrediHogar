import { useState } from 'react';
import logoImage from '@/assets/LOGOS/logo.png';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
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
              <li><Link to="#">TIENDA</Link></li>
              <li><Link to="#">VER CATALOGO</Link></li>
              <li><Link to="/about">NOSOTROS</Link></li>
              <li><Link to="/contact">CONTACTO</Link></li>
            </ul>
          </div>
        }
        <nav className="header-nav">
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="#">TIENDA</Link></li>
            <li><Link to="#">VER CATALOGO</Link></li>
            <li><Link to="/about">NOSOTROS</Link></li>
            <li><Link to="/contact">CONTACTO</Link></li>
          </ul>
          <div className='divider' />
        </nav>
      </div>
    </header>
  );
};

export default Header;
