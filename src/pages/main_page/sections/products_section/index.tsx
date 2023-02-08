import React from "react";
import styles from "./index.module.scss";
import gifIng from "../../../../media/gifs/newtry.gif";
import Image from "next/image";
import MainBtn from "@/components/mainBtn";
const Products = () => {
  return (
    <section>
      <div className={`${styles.gradientWrapper} mainGrid`}>
        <div className={styles.container}>
          <h2>קורס מ-0 עד דבש</h2>
          <button>לצפות</button>
          <Image src={gifIng} alt="gif" />
        </div>
        <div className={styles.container}>
          <h2>קורס מתקדמים</h2>
          <p className="paragraph">
            טיפה טרייד זה ספר כזה עם כל מני מידע על זה ו גם פטרנים וגם זה וגם זו
            טיפה טרייד זה ספר כזה עם כל מני מידע על זה ו גם פטרנים וגם זה וגם זו
          </p>
          <MainBtn text={"לצפות"} />
        </div>
        <div className={styles.container}>
          Aute voluptate incididunt voluptate eiusmod. Lorem laborum sint sit
          quis aliqua Lorem. Exercitation eu magna in tempor. Reprehenderit est
          eiusmod occaecat do cillum et. Aliquip laborum ex eiusmod irure labore
          magna ullamco.
        </div>
        <div className={styles.container}>
          Aute voluptate incididunt voluptate eiusmod. Lorem laborum sint sit
          quis aliqua Lorem. Exercitation eu magna in tempor. Reprehenderit est
          eiusmod occaecat do cillum et. Aliquip laborum ex eiusmod irure labore
          magna ullamco.
        </div>
        <div className={styles.container}>
          Aute voluptate incididunt voluptate eiusmod. Lorem laborum sint sit
          quis aliqua Lorem. Exercitation eu magna in tempor. Reprehenderit est
          eiusmod occaecat do cillum et. Aliquip laborum ex eiusmod irure labore
          magna ullamco.
        </div>
      </div>
    </section>
  );
};
export default Products;
