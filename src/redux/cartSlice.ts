import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartItem {
  id: number;
  img: string;
  name: string;
  price: number;
  desc: string;
  category: string;
  rating: number;
  quantity: number;
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
      // Find the index of the item in the cart
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        // ✅ Correct way: Updating state via index
        state.cart[itemIndex] = {
          ...state.cart[itemIndex],
          quantity: state.cart[itemIndex].quantity + 1,
        };
      } else {
        // ✅ Add new item with quantity set to 1
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});
export default cartSlice;
export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
