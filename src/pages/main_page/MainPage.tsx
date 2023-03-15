import React from "react";
import Hero from "./sections/hero_section";
// import Rates from "../product_page/sections/rates_section";
import Products from "./sections/products_section";
import CTA from "./sections/cta_section";
import CTAbox from "../../components/ctabox";
import styles from "./MainPage.module.scss";
import StockCard from "@/components/stockCard";
import FeatureBox from "@/components/featureBox";

const MainPage = () => {
  return (
    <div id={styles.mainWrapper}>
      <Hero />
      <Products />
      {/* <Rates /> */}
      <StockCard
        changeValue={1.65}
        imgUrl="
      https://codingartistweb.com/wp-content/uploads/2019/09/cropped-logo-final-01.png"
        name="Bitcoin"
        shortName="BTC"
        price="$17,522"
        upOrDown={true}
      />
      <FeatureBox
        name="blabla"
        text="sososo jddsnfjsdnf sdkkfsdf"
        img="https://www.haifa.muni.il/wp-content/uploads/2021/03/LOGO-Haifa-2.svg"
        num={2}
      />
      <CTA />
    </div>
  );
};
export default MainPage;
