import React, { useEffect, useState } from "react";
import styles from "../style/Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  deleteItemFromCart,
  getCartTotalPrice,
  increment,
} from "../store/feature/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const total = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  useEffect(() => {
    if (items.length > 0) {
      dispatch(getCartTotalPrice());
    }
  }, [dispatch, items]);

  if(!items.length){
    return <div className={styles.empty}>Ваша Корзина пуста ☹️</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Корзина</div>
      <div className={styles.box}>
        <div className={styles.cartBlock}>
          {items.length > 0
            ? items.map((el) => (
                <div key={el.id} className={styles.cartItem}>
                  <div className={styles.params}>
                    <div className={styles.leftBlock}>
                      <img src={el.img} alt="" />
                      <div className={styles.leftBlock__counter}>
                        <button
                          onClick={() => dispatch(decrement(el.id))}
                          className={styles.btnMinus}
                        >
                          <img src="/img/minus.svg" alt="minus" />
                        </button>
                        <div className={styles.count}>{el.amount}</div>
                        <button
                          onClick={() => dispatch(increment(el.id))}
                          className={styles.btnPlus}
                        >
                          <img src="/img/plus.svg" alt="plus" />
                        </button>
                      </div>
                    </div>
                    <div className={styles.rightBlock}>
                      <span className={styles.rightBlock__name}>
                        {el.title}
                      </span>
                      <span className={styles.rightBlock__price}>
                        {el.price} ₽
                      </span>
                    </div>
                    <div className={styles.countPrice}>
                      <div>
                        <img
                          onClick={() => dispatch(deleteItemFromCart(el.id))}
                          src="/img/delete.svg"
                          alt="delete"
                        />
                      </div>{" "}
                      <span>{el.price * el.amount} ₽</span>{" "}
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
        {items.length > 0 ? (
          <div className={styles.paymentBlock}>
            <div className={styles.paymentBlock__totalBlock}>
              <span>ИТОГО</span>
              <span>₽ {total}</span>
            </div>
            <button
              disabled={!items.length}
              onClick={() => alert("Заказ оформлен")}
              className={styles.totalBtn}
            >
              Перейти к оформлению
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
