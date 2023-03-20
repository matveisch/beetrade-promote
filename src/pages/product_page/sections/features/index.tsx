import React from 'react';
import styles from './index.module.scss';
import Feature from '@/pages/product_page/sections/features/Feature/Feature';
import moneyBagIcon from '@/media/icons/moneyBagIcon.svg';

const Features = () => {
  const mockData = [
    {
      image: moneyBagIcon,
      title: 'שם הפרק',
      text: 'קורס מתחיליקורס מתחילים מ0-עד דבש קורס מתחילים מ0-עד דבש  vvקורס מתחילים מ0-עד דבש דבשvם מ0-עד דבש',
      index: 1,
    },
    {
      image: moneyBagIcon,
      title: 'שם הפרק',
      text: 'קורס מתחיליקורס מתחילים מ0-עד דבש קורס מתחילים מ0-עד דבש  vvקורס מתחילים מ0-עד דבש דבשvם מ0-עד דבש',
      index: 2,
    },
    {
      image: moneyBagIcon,
      title: 'שם הפרק',
      text: 'קורס מתחיליקורס מתחילים מ0-עד דבש קורס מתחילים מ0-עד דבש  vvקורס מתחילים מ0-עד דבש דבשvם מ0-עד דבש',
      index: 3,
    },
    {
      image: moneyBagIcon,
      title: 'שם הפרק',
      text: 'קורס מתחיליקורס מתחילים מ0-עד דבש קורס מתחילים מ0-עד דבש  vvקורס מתחילים מ0-עד דבש דבשvם מ0-עד דבש',
      index: 4,
    },
    {
      image: moneyBagIcon,
      title: 'שם הפרק',
      text: 'קורס מתחיליקורס מתחילים מ0-עד דבש קורס מתחילים מ0-עד דבש  vvקורס מתחילים מ0-עד דבש דבשvם מ0-עד דבש',
      index: 5,
    },
    {
      image: moneyBagIcon,
      title: 'שם הפרק',
      text: 'קורס מתחיליקורס מתחילים מ0-עד דבש קורס מתחילים מ0-עד דבש  vvקורס מתחילים מ0-עד דבש דבשvם מ0-עד דבש',
      index: 6,
    },
  ];

  return (
    <div className={styles.features}>
      <h2>מה תלמד:</h2>
      <div className={styles.featuresContainer}>
        {mockData.map((item, index) => (
          <Feature key={`${item.title}${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Features;
