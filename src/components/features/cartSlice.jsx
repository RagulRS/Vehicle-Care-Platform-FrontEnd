
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
    },
    decreaseCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      } else {
        existingItem.quantity -= 1;
      }
      state.totalQuantity -= 1;
      state.totalAmount -= action.payload.price;
    },
  },
});

export const { addToCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;