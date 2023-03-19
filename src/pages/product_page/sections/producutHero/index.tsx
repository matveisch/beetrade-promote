import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import playIcon from '@/media/icons/playIcon.svg';
const ProductHero = () => {
  return (
    <>
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
          <button>קנייה</button>
        </div>
      </div>
    </>
  );
};
export default ProductHero;
