import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './ExchangeRates.module.scss';
import StockCard from '@/pages/main_page/sections/ExchangeRates/stockCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CryptoElement {
  name: string;
  shortName: string;
  price: string;
  changeValue: number;
  upOrDown: boolean;
  imgUrl: string;
}

const cryptoData: CryptoElement[] = [
  {
    name: 'Bitcoin',
    shortName: 'BTC',
    price: '$17,522',
    changeValue: 1.65,
    upOrDown: true,
    imgUrl: 'https://codingartistweb.com/wp-content/uploads/2019/09/cropped-logo-final-01.png',
  },
  {
    name: 'Ethereum',
    shortName: 'ETH',
    price: '$1,522',
    changeValue: 1.65,
    upOrDown: true,
    imgUrl: 'https://codingartistweb.com/wp-content/uploads/2019/09/cropped-logo-final-01.png',
  },
  {
    name: 'Ripple',
    shortName: 'XRP',
    price: '$1,522',
    changeValue: 1.65,
    upOrDown: true,
    imgUrl: 'https://codingartistweb.com/wp-content/uploads/2019/09/cropped-logo-final-01.png',
  },
  {
    name: 'Cardano',
    shortName: 'ADA',
    price: '$1,522',
    changeValue: 1.65,
    upOrDown: true,
    imgUrl: 'https://codingartistweb.com/wp-content/uploads/2019/09/cropped-logo-final-01.png',
  },
  {
    name: 'Litecoin',
    shortName: 'LTC',
    price: '$1,522',
    changeValue: 1.65,
    upOrDown: true,
    imgUrl: 'https://codingartistweb.com/wp-content/uploads/2019/09/cropped-logo-final-01.png',
  },
];

function ExchangeRates() {
  const [cryptoDataArray, setCryptoDataArray] = useState<CryptoElement[]>(cryptoData);
  function firstElementToLast(array: CryptoElement[]) {
    const arrayToChange = [...array];
    const firstElement = arrayToChange.shift();
    if (firstElement) {
      arrayToChange.push(firstElement);
    }
    return arrayToChange;
  }

  function lastElementToFirst(array: CryptoElement[]) {
    const arrayToChange = [...array];
    const lastElement = arrayToChange.pop();
    if (lastElement) {
      arrayToChange.unshift(lastElement);
    }
    return arrayToChange;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
  };

  return (
    <div className={styles.exchangeRates}>
      <h1>Crypto</h1>
      <div className={styles.row}>
        {/*<div className={styles.arrow} onClick={() => setCryptoDataArray(firstElementToLast(cryptoDataArray))} />*/}
        <Slider {...settings}>
          {cryptoDataArray.map((data, index) => (
            <StockCard
              changeValue={data.changeValue}
              imgUrl={data.imgUrl}
              name={data.name}
              price={data.price}
              shortName={data.shortName}
              upOrDown={data.upOrDown}
              key={data.shortName}
              className={styles.slide}
            />
          ))}
        </Slider>
        {/*<div*/}
        {/*  className={styles.arrow}*/}
        {/*  style={{ left: '10px', right: 'unset', transform: 'rotate(180deg)', marginTop: '-20px' }}*/}
        {/*  onClick={() => setCryptoDataArray(lastElementToFirst(cryptoDataArray))}*/}
        {/*/>*/}
      </div>
    </div>
  );
}

export default ExchangeRates;
