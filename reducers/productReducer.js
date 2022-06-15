import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productReducer = createReducer(initialState, {
  addToState: (state, action) => {
    state.products = action.payload;
  },
});
