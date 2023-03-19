import React from 'react';
import Rates from '@/pages/product_page/sections/rates_section';
import ProductHero from '@/pages/product_page/sections/producutHero';
const Index = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ProductHero />
      <Rates />
    </div>
  );
};
export default Index;
