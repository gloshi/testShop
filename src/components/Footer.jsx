import React, { useState } from "react";
import styles from "../style/Footer.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/ROUTES";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>QPICK</div>
      <div className={styles.categories}>
        <ul>
          <li>Избранное</li>
          <Link to={ROUTES.CART}>
          <li>Корзина</li>
          </Link>
          <li>Контакты</li>
        </ul>
      </div>
      <div className={styles.rules}>
        <span>Условия сервиса</span>

        <div className={styles.languageParams}>
          <img src="/img/RU.svg" alt="RU" />
          <span className={styles.languageActive}>Рус</span>
          <span className={styles.language}>Eng</span>
        </div>
      </div>
      <div className={styles.icons}>
         <div className={styles.vk}>
        <img src="/img/VK.svg" alt="VK" />
        </div>
        <div>
        <img src="/img/Telegram.svg" alt="Telegram" />
        </div>
        <div>
        <img src="/img/Whatsapp.svg" alt="Whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
