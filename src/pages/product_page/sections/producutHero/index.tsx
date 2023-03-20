import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import playIcon from '@/media/icons/playIcon.svg';
const ProductHero = () => {
  return (
    <div className={styles.productHero}>
      <div className={styles.actionBlock}>
        <div
          style={{
            background: 'linear-gradient(270deg, #9E2FFF 0%, #FF9E2F 100%)',
            opacity: '0.5',
            borderRadius: '8px',
            width: '300px',
            height: '175px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
        <h1>קורס מתחילים מ0-עד דבש</h1>
        <p>
          קורס מתחיליקורס מתחילים מ0-עד דבש קורס מתחילים מ0-עד דבש vvקורס מתחילים מ0-עד דבש קורס מתחילים מ0-עד דבשקורס
          מתחילים מ0-עד דבשקורס מתחילים מ0-עד דבשקורס מתחילים מ0-עד דבשvם מ0-עד דבש
        </p>
      </div>
    </div>
  );
};
export default ProductHero;
