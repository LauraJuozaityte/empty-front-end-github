import React from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { Header } from './Header';
import '../styles/styles.css';

export function LayoutMain({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <Nav />
      <main className="page-container">{children}</main>
      <Footer />
    </div>
  );
}
