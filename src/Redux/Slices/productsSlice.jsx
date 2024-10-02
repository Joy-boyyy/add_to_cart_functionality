import { createSlice } from "@reduxjs/toolkit";
import myProducts from "./AllProducts";

const shopingCartProduct = createSlice({
  name: "shopingCartProduct",
  initialState: myProducts,
  reducers: {},
});

export default shopingCartProduct.reducer;
