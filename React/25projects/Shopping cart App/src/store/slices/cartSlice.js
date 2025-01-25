//create slice
//initialze inital state
//slice -> name , mention initial state, action or funcitons

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state,action){
        return state.filter(item => item.id !== action.payload);
    }
  },
});
export const { addToCart,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
