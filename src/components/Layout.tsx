import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
