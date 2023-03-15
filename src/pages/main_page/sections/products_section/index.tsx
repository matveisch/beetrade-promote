import React from "react";
import styles from "./index.module.scss";
import gifIng from "../../../../media/gifs/newtry.gif";
import Image from "next/image";
import MainBtn from "@/components/mainBtn";

const Products = () => {
  return (
    <section id={styles.mainWrapper}>
      <h2 className="h2" id={styles.title}>
        המוצרים שלנו
      </h2>
      <div className={`${styles.gradientWrapper} mainGrid`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textButtonWrapper}>
              <h2>קורס מ-0 עד דבש</h2>

              <MainBtn text={"לצפות"} />
            </div>

            <Image src={gifIng} alt="gif" />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.headerWrapper}>
              <h2>קורס מתקדמים</h2>
            </div>
            <p className="paragraph">
              טיפה טרייד זה ספר כזה עם כל מני מידע על זה ו גם פטרנים וגם זה וגם
              זו טיפה טרייד זה ספר כזה עם כל מני מידע על זה ו גם פטרנים וגם זה
              וגם זו
            </p>
            <MainBtn text={"לצפות"} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.headerWrapper}>
              <h2>סיגנלים</h2>
            </div>
            <p className="paragraph">
              כזה עם כל מני מידע על זה ו פה טרייד זה ספר כזה עם כל מני מידע על
              זה וכזה עם כל מני מידע על זה ו פה טרייד זה ספר כזה עם כל מני מידע
              על זה ו
            </p>
            <MainBtn text={"לצפות"} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.headerWrapper}>
              <h2>ספר טרייד</h2>
            </div>
            <p className="paragraph">
              טיפה טרייד זה ספר כזה עם כל מני מידע על זה ו פה טרייד זה ספר כזה
              עם כל מני מידע על זה ו
            </p>
            <MainBtn text={"לצפות"} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.headerWrapper}>
              <p id={styles.comingSoon} className="paragraph">
                מגיע בקרוב
              </p>
              <h2>קורס חדש</h2>
            </div>
            <p className="paragraph">
              טיפה טרייד זה ספר כזה עם כל מני מידע על זה ו גם פטרנים וגם זה וגם
              זו טיפה טרייד זה ספר כזה עם כל מני מידע על זה ו גם פטרנים וגם זה
              וגם זו
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
