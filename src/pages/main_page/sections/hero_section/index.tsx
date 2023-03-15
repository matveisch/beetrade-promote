import React, { useState } from "react";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import gif from "../../../../media/gifs/newtry.gif";
import button from "../../../../media/icons/play-btn.svg";
import buttonBg from "../../../../media/icons/hexagon-20.svg";

import pattern from "../../../../media/images/asset 1.png";
import silver from "../../../../media/images/asset 3.png";
import bnb from "../../../../media/images/asset 4.png";
import gold from "../../../../media/images/asset 5.png";
import etherium from "../../../../media/images/asset 6.png";
import graph from "../../../../media/images/asset 7.png";
import bill from "../../../../media/images/asset 8.png";
import bitcoin from "../../../../media/images/asset 9.png";

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [direction, setDitrection] = useState(false);
  return (
    <section id={styles.mainContainer}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        id={styles.content}
      >
        <div id={styles.titleSub}>
          <h1 className={"h1 " + styles.title}>להיות ברווח</h1>
          <h1 className={"h1 " + styles.title}>לחיות בדבש</h1>
          <p id={styles.subtitle} className="paragrapgh">
            אוריינות פיננסית היא הצורך של אדם מודרני. אנו נלמד אותך להכפיל את
            ההון שלך.
          </p>
        </div>
        <div id={styles.buttons}>
          <motion.button
            onHoverStart={() => {
              setHovered(true);
              setDitrection(true);
            }}
            onHoverEnd={() => {
              setHovered(false);
              setDitrection(false);
            }}
            id={styles.mainBtn}
          >
            <motion.div id={styles.btn}>
              <Image src={button} alt="play button" />
            </motion.div>
            <motion.div
              id={styles.btnBg}
              animate={{ rotate: 360, scale: 1.1 }}
              transition={{
                rotate: { repeat: Infinity, ease: "linear", duration: 7 },
                scale: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3,
                },
              }}
            >
              <Image src={buttonBg} alt="button bg" />
            </motion.div>
            <p className="paragraph">תחילת הדרך</p>
          </motion.button>

          <motion.div
            animate={{
              width: hovered ? "180px" : "3px",
              x: direction ? 177 : 0,
              opacity: hovered ? 0.5 : 0.3,
            }}
            transition={{ type: "tween" }}
            id={styles.br}
          ></motion.div>

          <motion.button
            id={styles.secBtn}
            className="paragrapgh"
            onHoverStart={() => {
              setHovered(true);
              setDitrection(false);
            }}
            onHoverEnd={() => {
              setHovered(false);
              setDitrection(false);
            }}
          >
            <p className="paragraph">More info</p>
          </motion.button>
        </div>
      </motion.div>
      <div id={styles.bgImages}>
        <motion.div
          whileHover={{ rotate: 30 }}
          animate={{ x: 500, y: 1, rotate: 10, scale: 1.3, opacity: 1 }}
          transition={{
            x: {
              type: "inertia",
              velocity: 1000,
              power: 1,
              min: 0,
              max: 1000,
              bounceStiffness: 1000,
              bounceDamping: 100000,
              timeConstant: 5000,
            },
            y: {
              type: "inertia",
              velocity: -50,
              power: 1,
              timeConstant: 5000,
            },
            rotate: {
              type: "inertia",
              velocity: -100,
              timeConstant: 10000,
            },
            scale: {
              type: "spring",
              duration: 20,
            },
            opacity: {
              duration: 4,
              delay: 2,
            },
          }}
          className={styles.bgImgDiv}
        >
          <Image src={bill} alt="bill" />
        </motion.div>
        <motion.div
          whileHover={{ rotate: 30 }}
          animate={{ x: 1, y: 1, rotate: 10, scale: 1.3, opacity: 1 }}
          transition={{
            x: {
              type: "inertia",
              velocity: 700,
              power: 1,
              timeConstant: 5000,
              delay: 3,
            },
            y: {
              type: "inertia",
              velocity: 150,
              power: 1,
              timeConstant: 5000,
              delay: 4,
            },
            rotate: {
              type: "inertia",
              velocity: -100,
              timeConstant: 10000,
            },
            scale: {
              type: "spring",
              duration: 20,
            },
            opacity: {
              duration: 4,
              delay: 4,
            },
          }}
          className={styles.bgImgDiv}
        >
          <Image src={bitcoin} alt="bill" />
        </motion.div>
        <motion.div
          whileHover={{ rotate: 30 }}
          animate={{ x: 1, y: 1, rotate: 10, scale: 1.3, opacity: 1 }}
          transition={{
            x: {
              type: "inertia",
              velocity: -800,
              power: 1,
              timeConstant: 5000,
              delay: 2,
            },
            y: {
              type: "inertia",
              velocity: -100,
              power: 1,
              timeConstant: 5000,
              delay: 2,
            },
            rotate: {
              type: "inertia",
              velocity: -100,
              timeConstant: 10000,
            },
            scale: {
              type: "spring",
              duration: 20,
            },
            opacity: {
              duration: 4,
              delay: 2.5,
            },
          }}
          className={styles.bgImgDiv}
        >
          <Image src={graph} alt="bill" />
        </motion.div>
        <motion.div
          whileHover={{ rotate: 30 }}
          animate={{ x: 1, y: 1, rotate: 10, scale: 1.3, opacity: 1 }}
          transition={{
            x: {
              type: "inertia",
              velocity: -500,
              power: 1,
              timeConstant: 5000,
            },
            y: {
              type: "inertia",
              velocity: -300,
              power: 1,
              timeConstant: 5000,
            },
            rotate: {
              type: "inertia",
              velocity: -100,
              timeConstant: 10000,
            },
            scale: {
              type: "spring",
              duration: 20,
            },
            opacity: {
              duration: 4,
              delay: 2.2,
            },
          }}
          className={styles.bgImgDiv}
        >
          <Image src={silver} alt="bill" />
        </motion.div>
        <motion.div
          whileHover={{ rotate: 30 }}
          animate={{ x: 1, y: 1, rotate: 10, scale: 1.3, opacity: 1 }}
          transition={{
            x: {
              type: "inertia",
              velocity: 50,
              power: 1,
              timeConstant: 5000,
              delay: 3,
            },
            y: {
              type: "inertia",
              velocity: 200,
              power: 1,
              timeConstant: 5000,
              delay: 3,
            },
            rotate: {
              type: "inertia",
              velocity: -100,
              timeConstant: 10000,
            },
            scale: {
              type: "spring",
              duration: 20,
            },
            opacity: {
              duration: 4,
              delay: 3,
            },
          }}
          className={styles.bgImgDiv}
        >
          <Image src={gold} alt="bill" />
        </motion.div>
        <motion.div
          whileHover={{ rotate: 30 }}
          animate={{ x: 1, y: 1, rotate: 10, scale: 1.3, opacity: 1 }}
          transition={{
            x: {
              type: "inertia",
              velocity: 100,
              power: 1,
              timeConstant: 5000,
              delay: 0.4,
            },
            y: {
              type: "inertia",
              velocity: -500,
              power: 1,
              timeConstant: 5000,
              delay: 0.4,
            },
            rotate: {
              type: "inertia",
              velocity: -100,
              timeConstant: 10000,
            },
            scale: {
              type: "spring",
              duration: 20,
            },
            opacity: {
              duration: 4,
              delay: 2.5,
            },
          }}
          className={styles.bgImgDiv}
        >
          <Image src={etherium} alt="bill" />
        </motion.div>
        <motion.div
          whileHover={{ rotate: 30 }}
          animate={{ x: 1, y: 1, rotate: 10, scale: 1.3, opacity: 1 }}
          transition={{
            x: {
              type: "inertia",
              velocity: 500,
              power: 1,
              timeConstant: 5000,
              delay: 4,
            },
            y: {
              type: "inertia",
              velocity: -350,
              power: 1,
              timeConstant: 5000,
              delay: 4,
            },
            rotate: {
              type: "inertia",
              velocity: -100,
              timeConstant: 10000,
            },
            scale: {
              type: "spring",
              duration: 20,
            },
            opacity: {
              duration: 4,
              delay: 4,
            },
          }}
          className={styles.bgImgDiv}
        >
          <Image src={pattern} alt="bill" />
        </motion.div>
        <motion.div
          whileHover={{ rotate: 30 }}
          animate={{ x: 1, y: 1, rotate: 10, scale: 1.3, opacity: 1 }}
          transition={{
            x: {
              type: "inertia",
              velocity: -400,
              power: 1,
              timeConstant: 5000,
              delay: 1,
            },
            y: {
              type: "inertia",
              velocity: 200,
              power: 1,
              timeConstant: 5000,
              delay: 1,
            },
            rotate: {
              type: "inertia",
              velocity: -100,
              timeConstant: 10000,
            },
            scale: {
              type: "spring",
              duration: 20,
            },
            opacity: {
              duration: 4,
              delay: 2,
            },
          }}
          className={styles.bgImgDiv}
        >
          <Image src={bnb} alt="bill" />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
