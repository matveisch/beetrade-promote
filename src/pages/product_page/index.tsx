import React from 'react';
import Rates from '@/pages/product_page/sections/rates_section';
import ProductHero from '@/pages/product_page/sections/producutHero';
import Features from '@/pages/product_page/sections/features';
import Students from '@/pages/product_page/sections/students';
const Index = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 14vw' }}>
      <ProductHero />
      <Features />
      <Students />
      <Rates />
    </div>
  );
};
export default Index;
