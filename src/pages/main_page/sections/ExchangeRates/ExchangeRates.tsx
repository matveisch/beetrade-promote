import React, { useEffect, useState } from 'react';
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
  imgUrl: string;
}

interface Rates {
  name: string;
  price: number;
  changeValue?: number;
}

function ExchangeRates() {
  const [cryptoDataArray, setCryptoDataArray] = useState<Rates[]>();
  const [screenWidth, setScreenWidth] = useState<number>(0);

  // handel screen width
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getTodayDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }

  function getYesterdayDate() {
    const today = new Date();
    const dd = String(today.getDate() - 1).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }

  async function getHistoricalRates() {
    try {
      const response = await fetch(
        `https://api.exchangerate.host/timeseries?start_date=${getYesterdayDate()}&end_date=${getTodayDate()}&base=USD&symbols=EUR,JPY,CHF,GBP,CAD`,
      );
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getHistoricalRates().then(data => {
      const todayRates = data.rates[getTodayDate()];
      const yesterdayRates = data.rates[getYesterdayDate()];

      const todayRatesArray: Rates[] = [];
      for (const key in todayRates) {
        todayRatesArray.push({ name: key, price: todayRates[key] });
      }

      const yesterdayRatesArray: Rates[] = [];
      for (const key in yesterdayRates) {
        yesterdayRatesArray.push({ name: key, price: yesterdayRates[key] });
      }

      // compare today rates to yesterday rates and set the change value in percentage
      todayRatesArray.forEach((todayRate, index) => {
        const yesterdayRate = yesterdayRatesArray[index];
        const changeValue = ((todayRate.price - yesterdayRate.price) / yesterdayRate.price) * 100;
        todayRate.price = Number(todayRate.price.toFixed(2));
        todayRate.changeValue = Number(changeValue?.toFixed(2));
      });

      setCryptoDataArray(todayRatesArray);
    });
  }, []);

  function getAmountOfSlides() {
    if (screenWidth < 650) {
      return 1;
    } else if (screenWidth < 900) {
      return 2;
    } else if (screenWidth < 1150) {
      return 3;
    } else if (screenWidth < 1400) {
      return 4;
    } else {
      return 5;
    }
  }

  if (!cryptoDataArray) {
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
          spaceBetween={1}
          centeredSlides
          slidesPerView={getAmountOfSlides()}>
          {/*{cryptoDataArray?.map((data, index) => (*/}
          {/*  <SwiperSlide key={index}>*/}
          {/*    <StockCard*/}
          {/*      changeValue={data.changeValue || 0}*/}
          {/*      name={`${data.name}/USD`}*/}
          {/*      price={`${data.price}`}*/}
          {/*      shortName={data.name}*/}
          {/*      key={data.name}*/}
          {/*      className={styles.slide}*/}
          {/*    />*/}
          {/*  </SwiperSlide>*/}
          {/*))}*/}
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
          slidesPerView={getAmountOfSlides()}>
          {cryptoDataArray?.map((data, index) => (
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
