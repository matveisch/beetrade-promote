import React from 'react';
import Hero from './sections/hero_section';
import Products from './sections/products_section';
import CTA from './sections/cta_section';
import styles from './MainPage.module.scss';
import FeatureBox from '@/components/featureBox';
import ExchangeRates from '@/pages/main_page/sections/ExchangeRates/ExchangeRates';

const MainPage = () => {
  return (
    <div id={styles.mainWrapper}>
      <Hero />
      <Products />
      <ExchangeRates />
      <CTA />
    </div>
  );
};
export default MainPage;
