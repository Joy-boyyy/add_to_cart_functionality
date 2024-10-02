import { configureStore } from "@reduxjs/toolkit";
import shopingCartProduct from "../Slices/productsSlice";
import cartProducts from "../Slices/cartSlice";

const myStore = configureStore({
  reducer: {
    shopingCartProduct,
    cartProducts,
  },
});

export default myStore;
