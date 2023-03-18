import React from 'react';
import styles from './index.module.scss';
import Image, { StaticImageData } from 'next/image';
import arrowUp from '@/media/icons/arrow-up.svg';

interface Props {
  imgUrl?: StaticImageData;
  name: string;
  price: string;
  shortName: string;
  changeValue: number;
  className?: string;
}

const StockCard = ({ imgUrl, name, price, shortName, changeValue, className }: Props) => {
  return (
    <div id={styles.mainWrapper} className={className}>
      <div id={styles.imgName}>
        <p id={styles.shortName}>{shortName}</p>
        <p id={styles.name} className="paragraph">
          {name}
        </p>
        {/*<Image width={10} height={10} src={imgUrl} alt="icon" />*/}
      </div>
      <p id={styles.price}>{price}</p>
      <div id={styles.upordown}>
        <p id={styles.per}>24h</p>
        <div className={styles.changeContainer}>
          <p style={{ color: changeValue < 0 ? '#FF2F2F' : '#2FFF9E' }}>{changeValue}%</p>
          <Image
            src={arrowUp}
            alt={'arrow'}
            style={
              changeValue < 0
                ? {
                    transform: 'rotate(180deg)',
                    filter:
                      'brightness(0) saturate(100%) invert(36%) sepia(53%) saturate(7478%) hue-rotate(346deg) brightness(105%) contrast(104%)',
                  }
                : undefined
            }
          />
        </div>
      </div>
    </div>
  );
};
export default StockCard;
