import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  price: [],
};

export const filterReducer = createReducer(initialState, {
  addToCategory: (state, action) => {
    state.categories = action.payload;
  },
  atp: (state, action) => {
    state.price = action.payload;
  },
});
