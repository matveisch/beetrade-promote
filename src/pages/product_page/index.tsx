import React from 'react';
import Rates from '@/pages/product_page/sections/rates_section';
import ProductHero from '@/pages/product_page/sections/producutHero';
import Features from '@/pages/product_page/sections/features';
const Index = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 14vw' }}>
      <ProductHero />
      <Features />
      <Rates />
    </div>
  );
};
export default Index;
