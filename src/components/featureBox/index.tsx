import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./index.module.scss";
import someimg from "../../media/icons/profileIcon.svg";

interface Props {
  name: string;
  text: string;
  num: number;
  img: string;
}
const FeatureBox = ({ name, text, img, num }: Props) => {
  return (
    <div id={styles.fetureWrapper}>
      <Image id={styles.img} width={50} height={50} src={img} alt={name} />
      <p id={styles.title}>{name}</p>
      <p id={styles.text}>{text}</p>
      <p id={styles.number}>{num}</p>
    </div>
  );
};
export default FeatureBox;
