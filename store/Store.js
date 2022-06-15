import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../reducers/cartReducer";
import { pageReducer } from "../reducers/pageReducer";
import { productReducer } from "../reducers/productReducer";
import { filterReducer } from "../reducers/filterReducer";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    page: pageReducer,
    filter: filterReducer,
  },
});
