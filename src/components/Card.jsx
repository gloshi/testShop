import React from "react";
import styles from "../style/Card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { increment, setItemInCart } from "../store/feature/cartSlice";

const Card = ({ el }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCard = items.some((item) => item.id === el.id);
  const onClickAddToCart = (item) => {
    if (isItemInCard) {
      dispatch(increment(item.id));
    } else {
      dispatch(setItemInCart(item));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardImg}>
        <img src={el.img} alt={el.title} />
      </div>

      <div className={styles.box}>
        <span className={styles.title}>{el.title}</span>
        <span className={styles.price}>{el.price} ₽</span>
        {el.oldPrice ? <div className={styles.oldPrice}>{el.oldPrice} ₽</div> : ""}
      </div>
      <div className={styles.box}>
        <div className={styles.rate}>
          <img src="/img/star.svg" alt="star" />
          {el.rate}
        </div>
        <button onClick={() => onClickAddToCart(el)} className={styles.btnBuy}>
          Купить
        </button>
      </div>
    </div>
  );
};

export default Card;
