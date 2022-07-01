import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartValue: 0,
};

export const cartReducer = createReducer(initialState, {
  atc: (state, action) => {
    // const item = action.payload;
    // const isItemExists = state.cart.find((i) => i.product === item.product);
    // if (isItemExists) {
    //   state.cart.map((i) => i.product === isItemExists.product ? item : i)
    // }
    state.cart = [...state.cart, action.payload];
  },

  inc_cart: (state, action) => {
    state.cartValue = state.cartValue + action.payload;
  },
});

// export const cartReducer = createReducer(initialState, {
//  increment: (state, action) => {
//    const item = state.products.find(
//      (product) => product._id === action.payload._id
//    );
//    if (state.currentItem < 30) {
//      state.currentItem += 1;
//    }
//  },
//  increment_addToCart: (state, action) => {
//    state.currentItem = action.payload;
//    state.cartValue = state.cartValue + state.currentItem;
//  },
//  decrement: (state, action) => {
//    if (state.currentItem > 0) {
//      state.currentItem -= 1;
//    }
//    if (state.currentItem < 1) {
//      state.currentItem = 0;
//    }
//  },
//  decrement_: (state, action) => {
//    if (state.cartValue > 0) {
//      state.cartValue -= 1;
//    }
//    if (state.cartValue < 1) {
//      state.cartValue = 0;
//    }
//  },
//  atc: (state, action) => {
//    state.cart = [...state.cart, action.payload];
//  },
//  addToState: (state, action) => {
//    state.products = action.payload;
//  },
// );
