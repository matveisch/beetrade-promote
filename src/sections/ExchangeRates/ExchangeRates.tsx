import React, { useEffect, useState } from 'react';
import styles from './ExchangeRates.module.scss';
import StockCard from '@/sections/ExchangeRates/stockCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { delay } from 'framer-motion';

interface CryptoElement {
  name: string;
  shortName: string;
  price: string;
  changeValue: number;
  imgUrl: string;
}

function ExchangeRates({ forexRates, cryptoRates }: { forexRates: any[]; cryptoRates: any[] }) {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  // handel screen width
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!forexRates && !cryptoRates) {
    return <div>Loading...</div>;
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
          spaceBetween={30}
          centeredSlides
          slidesPerView={'auto'}>
          {cryptoRates?.map((data, index) => (
            <SwiperSlide key={index}>
              <StockCard
                changeValue={Number(Number(data.priceChangePercent).toFixed(2)) || 0}
                name={`${data.symbol}`}
                price={`${Number(data.lastPrice).toFixed(1)}`}
                shortName={data.symbol.substring(0, 3)}
                key={data.symbol}
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
          spaceBetween={30}
          centeredSlides
          slidesPerView={'auto'}>
          {forexRates?.map((data, index) => (
            <SwiperSlide key={index}>
              <StockCard
                changeValue={data.changeValue || 0}
                name={`${data.name}/USD`}
                price={`${data.price}`}
                shortName={data.name}
                key={data.name}
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
