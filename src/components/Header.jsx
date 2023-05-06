import React from "react";
import styles from "../style/Header.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/ROUTES";
import { useSelector } from "react-redux";
const Header = () => {
  const items = useSelector(state => state.cart.itemsInCart)
  const total = items.reduce((prev,curr) => {return prev + curr.amount},0)
  return (
    <div className={styles.container}>
      <Link to={ROUTES.HOME}>
        <div className={styles.title}>QPICK</div>
      </Link>
      <div className={styles.icons}>
        <img src="/img/like.svg" alt="like" />
        <Link to={ROUTES.CART}>
          <img src="/img/cart.svg" alt="cart" />
        </Link>
        {true ? <div className={styles.cart_count}>2</div> : ""}
        {items.length > 0 ? <div className={styles.like_count}>{total}</div> : ""}
      </div>
    </div>
  );
};

export default Header;
