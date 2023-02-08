import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import logo from "../../media/images/logo.png";
const Navbar = () => {
  return (
    <div id={styles.mainWrapper}>
      <div id={styles.profile}></div>
      <div id={styles.links}></div>
      <div id={styles.logo}>
        <Image src={logo} alt="BeeTrade logo" />
        <p>BeeTrade</p>
      </div>
    </div>
  );
};
export default Navbar;
