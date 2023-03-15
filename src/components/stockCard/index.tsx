import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

interface Props {
  imgUrl: string;
  name: string;
  price: string;
  shortName?: string;
  upOrDown: boolean;
  changeValue: number;
}

const StockCard = ({
  imgUrl,
  name,
  price,
  shortName,
  upOrDown,
  changeValue,
}: Props) => {
  return (
    <div id={styles.mainWrapper}>
      <div id={styles.imgName}>
        {/* <Image width={10} height={10} src={imgUrl} alt="icon" /> */}
        <p id={styles.shortName}>{shortName}</p>
        <p id={styles.name} className="paragraph">
          {name}
        </p>
      </div>
      <p id={styles.price}>{price}</p>
      <div id={styles.upordown}>
        <p id={styles.per}>24h</p>
        <p style={{ color: upOrDown ? "#2FFF9E" : "#FF2F2F" }}>
          {changeValue}%
        </p>
      </div>
    </div>
  );
};
export default StockCard;
