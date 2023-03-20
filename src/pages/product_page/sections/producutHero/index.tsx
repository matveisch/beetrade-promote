import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import playIcon from '@/media/icons/playIcon.svg';
const ProductHero = () => {
  return (
    <div className={styles.productHero}>
      <div className={styles.actionBlock}>
        <div className={styles.videoContainer}>
          <Image src={playIcon} alt={'play-icon'} />
        </div>
        <div className={styles.buttonsContainer}>
          <button>דאמו</button>
          <button className="button">
            <span className="button__label">קנייה</span>
          </button>
        </div>
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.innerContainer}>
          <h1>קורס מתחילים מ0-עד דבש</h1>
          <p>
            קורס מתחיליקורס מתחילים מ0-עד דבש קורס מתחילים מ0-עד דבש vvקורס מתחילים מ0-עד דבש קורס מתחילים מ0-עד דבשקורס
            מתחילים מ0-עד דבשקורס מתחילים מ0-עד דבשקורס מתחילים מ0-עד דבשvם מ0-עד דבש
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductHero;
