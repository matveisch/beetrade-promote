import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Hero from '@/sections/hero_section';
import Products from '@/sections/products_section';
import ExchangeRates from '@/sections/ExchangeRates/ExchangeRates';
import React from 'react';

interface Rates {
  name: string;
  price: number;
  changeValue?: number;
}

export function getTodayDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
}

export function getYesterdayDate() {
  const today = new Date();
  const dd = String(today.getDate() - 1).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
}

export const getStaticProps = async () => {
  // getting forex rates
  const response = await fetch(
    `https://api.exchangerate.host/timeseries?start_date=${getYesterdayDate()}&end_date=${getTodayDate()}&base=USD&symbols=EUR,JPY,CHF,GBP,CAD`,
  );
  const forexRates = await response.json();

  const todayRates = forexRates.rates[getTodayDate()];
  const yesterdayRates = forexRates.rates[getYesterdayDate()];

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

  // getting crypto rates
  const res = await fetch(
    `https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ADAUSDT","ETHUSDT","XRPUSDT","BNBUSDT"]`,
  );
  const cryptoData = await res.json();

  return {
    props: {
      forexRates: todayRatesArray,
      cryptoData,
    },
  };
};

export default function Home({ forexRates, cryptoData }: any) {
  return (
    <>
      <Head>
        <title>BeeTrade</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.App}>
        <Hero />
        <Products />
        <ExchangeRates forexRates={forexRates} cryptoRates={cryptoData} />
        {/*<CTA />*/}
      </main>
    </>
  );
}
