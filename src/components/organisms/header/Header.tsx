import React from 'react';
import logoImage from '@/assets/LOGOS/logo.png';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className='container'>
        <div className="header-logo">
          <Button className='button button-transparent'>
            <img src={logoImage} alt="Logo" className='logo' />
          </Button>
        </div>

        <nav className="header-nav">
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="#">TIENDA</Link></li>
            <li><Link to="#">VER CATALOGO</Link></li>
            <li><Link to="#">NOSOTROS</Link></li>
            <li><Link to="#">VER CATALOGO</Link></li>
            <li><Link to="#">CONTACTO</Link></li>
          </ul>
          <div className='divider' />
        </nav>
      </div>
    </header>
  );
};

export default Header;
