import React from "react";
import styles from "./index.module.scss";

interface Props {
  text: string;
  onClick?: Function;
}

const MainBtn = ({ text, onClick }: Props) => {
  return <button className={styles.mainBtn}>{text}</button>;
};
export default MainBtn;
