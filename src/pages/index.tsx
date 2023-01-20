import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainPage from "./main_page/MainPage";
export default function Home() {
  return (
    <>
      <div className={styles.MainWrapper}>
        <Head>
          <title>BeeTrade</title>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={styles.App}>
          <MainPage />
        </section>
      </div>
    </>
  );
}
