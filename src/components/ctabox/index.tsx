import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.scss";

interface Props {
  changeState: Function;
  state: boolean;
}
const CTAbox = ({ changeState, state }: Props) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div className={styles.staContainer}>
      <div className={styles.container}>
        <motion.div
          className={styles.box}
          onMouseEnter={() => {
            setHovered(true);
            changeState(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
            changeState(false);
          }}
          whileHover={{ scale: 2 }}
          whileTap={{ scale: 1.5 }}
          initial={{ rotateX: -20, rotateY: 45, rotateZ: 0 }}
          animate={{
            rotateX: !isHovered ? [null, -20, -30, -15] : [null, -45],
            rotateY: !isHovered ? [null, 20, 45, 30] : [null, 45],
            rotateZ: !isHovered ? [null, 10, -20, 0] : [null, 0],
            // scale: !isHovered ? [null, 1, 1] : [1, 2],
          }}
          transition={{
            default: {
              times: !isHovered ? [0, 1, 2, 3] : [0, 0.5],
              duration: !isHovered ? 3 : 1,
              repeat: !isHovered ? Infinity : 0,
              repeatType: "reverse",
            },
            scale: {
              duration: 0.3,
            },
          }}
        >
          <div className={styles.card} id={styles.front}></div>
          <div className={styles.card} id={styles.back}></div>
          <div className={styles.card} id={styles.left}></div>
          <div className={styles.card} id={styles.right}></div>
          <div className={styles.card} id={styles.top}></div>
          <div className={styles.card} id={styles.bottom}></div>
          <motion.p
            className="paragraph"
            id={styles.text}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            המוצרים שלנו
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};
export default CTAbox;
