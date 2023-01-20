import React from "react";
import Hero from "./sections/hero_section";
import styles from "./MainPage.module.scss";
const MainPage = () => {
  return (
    <div id={styles.mainWrapper}>
      <Hero />
    </div>
  );
};
export default MainPage;
