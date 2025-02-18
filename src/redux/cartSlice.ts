import { createSlice } from "@reduxjs/toolkit";

interface stateType {
  cart: {
    id: number;
    img: string;
    name: string;
    price: number;
    desc: string;
    category: string;
    rating: number;
  }[];
}

const initialState: stateType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_item: (state, action) => {
      state.cart += action.payload;
    },
  },
});
export default cartSlice;
export const cartActions = cartSlice.actions;
