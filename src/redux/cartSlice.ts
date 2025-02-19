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
  total: number;
  amount: number;
}

const initialState: stateType = {
  cart: [],
  total: 0,
  amount: 0,
};

const gitAmountAndTotal = (state: stateType) => {
  const getTotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const getAmount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  state.amount = getAmount;
  state.total = getTotal;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_item: (state, action: PayloadAction<cartItem>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        state.cart[itemIndex] = {
          ...state.cart[itemIndex],
          quantity: state.cart[itemIndex].quantity + 1,
        };
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      gitAmountAndTotal(state);
    },
    minus_quantity: (state, action: PayloadAction<cartItem>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity--;
      }
      gitAmountAndTotal(state);
    },
    rimove_item: (state, action: PayloadAction<cartItem>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      gitAmountAndTotal(state);
    },
  },
});
export default cartSlice;
export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
