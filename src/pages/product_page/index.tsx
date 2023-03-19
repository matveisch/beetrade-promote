import React from 'react';
import styles from './ProductPage.module.scss';
import Rates from '@/pages/product_page/sections/rates_section';
import ProductHero from '@/pages/product_page/sections/producutHero';
const Index = () => {
  return (
    <>
      <ProductHero />
      <Rates />
    </>
  );
};
export default Index;
