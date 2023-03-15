import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import logo from "../../media/images/logo.png";
import profileIcon from "../../media/icons/profileIcon.svg";
const Navbar = () => {
  return (
    <div id={styles.mainWrapper}>
      <div id={styles.profile}>
        <a className="link">כניסה</a>
        <Image src={profileIcon} alt="profile icon" />
      </div>
      <div id={styles.links}>
        <ul>
          <li className={styles.navLink}>Home</li>
          <li>Courses</li>
          <li>My learning</li>
          <li>About us</li>
        </ul>
      </div>
      <div id={styles.logo}>
        <p>BeeTrade</p>
        <Image src={logo} alt="BeeTrade logo" />
      </div>
    </div>
  );
};
export default Navbar;
