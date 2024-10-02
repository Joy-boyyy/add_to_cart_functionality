import { createSlice } from "@reduxjs/toolkit";

const cartDetails = {
  cartItems: [],
  totalPrice: 0,
  totalCardItem: 0,
};

const cartProducts = createSlice({
  name: "cartProducts",
  initialState: cartDetails,
  reducers: {
    addProduct(state, action) {
      const productObj = action.payload;

      const findVar = state.cartItems.findIndex(
        (findProp) => findProp.id === productObj.id
      );
      if (findVar >= 0) {
        state.cartItems[findVar].quantity += 1;
        // state.cartItems[findVar].price += state.cartItems[findVar].price;
      } else {
        state.cartItems.push({ ...productObj, quantity: 1 });
      }
    },

    // minus quantity of product

    reduceQuantity(state, action) {
      const minusQuan = action.payload;

      const findVar = state.cartItems.findIndex(
        (finding) => finding.id === minusQuan.id
      );

      if (state.cartItems[findVar].quantity > 1) {
        state.cartItems[findVar].quantity -= 1;
      }
    },

    incQuantity(state, action) {
      const minusQuan = action.payload;

      const findVar = state.cartItems.findIndex(
        (finding) => finding.id === minusQuan.id
      );

      if (findVar >= 0) {
        state.cartItems[findVar].quantity += 1;
      }
    },
    // --------- total variable

    myTotal(state) {
      state.totalPrice = state.cartItems.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    },

    // delete my item
    delMyItem(state, action) {
      const newData = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newData;
    },

    // ------------ MY all total card item

    totalCardItemFun(state) {
      const totalCartQuantity = state.cartItems.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );

      state.totalCardItem = totalCartQuantity;
    },
  },
});

export const {
  addProduct,
  reduceQuantity,
  incQuantity,
  myTotal,
  delMyItem,
  totalCardItemFun,
} = cartProducts.actions;

export default cartProducts.reducer;
