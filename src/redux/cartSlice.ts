import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartItem {
  id: number;
  img: string;
  name: string;
  price: number;
  desc: string;
  category: string;
  rating: number;
}

interface stateType {
  cart: cartItem[];
}

const initialState: stateType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_item: (state, action: PayloadAction<cartItem>) => {
      state.cart.push(action.payload);
    },
  },
});
export default cartSlice;
export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
