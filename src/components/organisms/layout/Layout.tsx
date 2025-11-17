import React from 'react';
import type { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

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
        <Footer/>
    </div>
  );
};

export default Layout;
