import React from "react";
import Hero from "./sections/hero_section";
import Rates from "./sections/rates_section";
import Products from "./sections/products_section";
import styles from "./MainPage.module.scss";
const MainPage = () => {
  return (
    <div id={styles.mainWrapper}>
      <Hero />
      <Products />
      <Rates />
    </div>
  );
};
export default MainPage;
