import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import CTAbox from "@/components/ctabox";
import Image from "next/image";
import orangeCube from "../../../../media/images/orangeCube.svg";
import styles from "./index.module.scss";

const firstCube: Variants = {
  hovered: {
    y: -1,
    scale: 0.8,

    transition: {
      y: { type: "inertia", velocity: -80 },
      scale: {
        type: "spring",
        duration: 3,
      },
    },
  },
  notHovered: {
    y: 0,

    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};
const secondCube: Variants = {
  hovered: {
    y: -1,
    x: 1,
    scale: 0.8,
    transition: {
      default: { type: "inertia", velocity: 80 },
      scale: {
        type: "spring",
        duration: 3,
      },
    },
  },
  notHovered: {
    y: 0,
    x: 0,

    transition: {
      type: "tween",

      duration: 0.3,
    },
  },
};
const thirdCube: Variants = {
  hovered: {
    y: -1,
    x: -1,
    scale: 0.8,
    transition: {
      x: { type: "inertia", velocity: -80 },
      y: { type: "inertia", velocity: 80 },
      scale: {
        type: "spring",
        duration: 3,
      },
    },
  },
  notHovered: {
    y: 0,
    x: 0,

    transition: {
      type: "tween",

      duration: 0.3,
    },
  },
};
const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section id={styles.mainWrapper}>
      <div id={styles.cubesWrapper}>
        <motion.div
          initial={false}
          variants={firstCube}
          animate={isHovered ? "hovered" : "notHovered"}
          id={styles.firstCube}
        >
          <Image src={orangeCube} alt="orange cube" />
        </motion.div>
        <motion.div
          initial={false}
          variants={secondCube}
          animate={isHovered ? "hovered" : "notHovered"}
          id={styles.secondCube}
        >
          <Image src={orangeCube} alt="orange cube" />
        </motion.div>
        <motion.div
          initial={false}
          variants={thirdCube}
          animate={isHovered ? "hovered" : "notHovered"}
          id={styles.thirdCube}
        >
          <Image src={orangeCube} alt="orange cube" />
        </motion.div>
      </div>
      <div id={styles.boxWrapper}>
        <CTAbox changeState={setIsHovered} state={isHovered} />
      </div>
    </section>
  );
};
export default CTA;
