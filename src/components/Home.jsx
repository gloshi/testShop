import React from "react";
import styles from "../style/Home.module.scss";
import Card from "./Card";
import { headphones, wirelessHeadphones } from "../utils/data";
const Home = () => {
  console.log(headphones, wirelessHeadphones);
  return (
    <div className={styles.container}>
      <div className={styles.title_headphones}>Наушники</div>
      <div className={styles.gridHeadphones}>
        {headphones.map((el) => (
          <Card el={el} key={el.id} />
        ))}
      </div>
      <div className={styles.title_wirelessHeadphones}>
        Беспроводные наушники
      </div>
      <div className={styles.gridWirelessHeadphones}>
        {wirelessHeadphones.map((el) => (
          <Card el={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
