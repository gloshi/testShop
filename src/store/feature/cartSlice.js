import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (el) => el.id !== action.payload
      );
    },
    getCartTotalPrice: (state) => {
      let { totalAmount, totalCount } = state.itemsInCart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
   
    increment: (state, action) => {
      state.itemsInCart = state.itemsInCart.map((el) => {
        if (el.id === action.payload) {
          return { ...el, amount: el.amount + 1 };
        }
        return el;
      });
    },
    decrement: (state, action) => {
      state.itemsInCart = state.itemsInCart
        .map((el) => {
          if (el.id === action.payload) {
            return { ...el, amount: el.amount - 1 };
          }
          return el;
        })
        .filter((el) => el.amount !== 0);
    },
  },
});

export const {
  setItemInCart,
  deleteItemFromCart,
  getCartTotalPrice,
  increment,
  decrement,
} = cartSlice.actions;
export default cartSlice.reducer;
