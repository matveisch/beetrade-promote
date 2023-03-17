import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './ExchangeRates.module.scss';
import StockCard from '@/pages/main_page/sections/ExchangeRates/stockCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

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
  const [screenWidth, setScreenWidth] = useState<number>(0);

  // handel screen width
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getAmountOfSlides() {
    if (screenWidth < 730) {
      return 1;
    } else if (screenWidth < 940) {
      return 2;
    } else if (screenWidth < 1200) {
      return 3;
    } else {
      return 4;
    }
  }

  return (
    <div className={styles.exchangeRates}>
      <h2>מידע</h2>
      <div className={styles.row}>
        <h3>Crypto</h3>
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          loopedSlides={5}
          spaceBetween={1}
          centeredSlides
          slidesPerView={getAmountOfSlides()}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}>
          {cryptoDataArray.map((data, index) => (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.row}>
        <h3>Forex</h3>
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          loopedSlides={5}
          spaceBetween={1}
          centeredSlides
          slidesPerView={getAmountOfSlides()}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}>
          {cryptoDataArray.map((data, index) => (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ExchangeRates;
