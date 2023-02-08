import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import imagy from "../../media/images/Asset 1.png";
import starFilled from "../../media/icons/starFilled.svg";
import starEmpty from "../../media/icons/starEmpty.svg";
interface Props {
  stars: number;
  text: string;
  date: string;
  images: [];
}
const ReviewSlide = ({ stars, text, date, images }: Props) => {
  function starFun(star: number) {
    let starsArr = [];
    for (let j = 0; j < 5 - star; j++) {
      starsArr.push(<Image src={starEmpty} alt="star filled" />);
    }
    for (let i = 0; i < star; i++) {
      starsArr.push(<Image src={starFilled} alt="star filled" />);
    }

    return starsArr;
  }

  return (
    <div id={styles.reviewWrapper}>
      <div id={styles.starsAndDate}>
        <p id={styles.date}>{date}</p>

        <div id={styles.stars}>{starFun(stars)}</div>
      </div>

      <p id={styles.reviewText}>{text}</p>
      <div id={styles.resultImages}>
        <Image src={imagy} alt="" />
        <Image src={imagy} alt="" />
        <Image src={imagy} alt="" />
      </div>
    </div>
  );
};
export default ReviewSlide;
