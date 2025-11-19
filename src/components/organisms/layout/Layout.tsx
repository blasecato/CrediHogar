import React from 'react';
import type { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { WhatsAppOutlined } from '@ant-design/icons';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <main className="layout-main">
        {children}
      </main>
      <a
        className='btn-float'
        href="https://wa.me/573125425175?text=Hola%20quiero%20hablar%20con%20un%20asesor%21"
        target="_blank"
        rel="noopener noreferrer">
        <span className="material-symbols-outlined">
          <WhatsAppOutlined />
        </span>
      </a>
      <Footer />
    </div>
  );
};

export default Layout;
