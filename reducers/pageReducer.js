import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

export const pageReducer = createReducer(initialState, {
  inc_page: (state, action) => {
    state.currentPage = action.payload;
  },
});
