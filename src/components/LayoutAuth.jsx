import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import '../styles/styles.css';

export function LayoutAuth({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <main className="page-container">{children}</main>
      <Footer />
    </div>
  );
}
