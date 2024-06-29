import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../../store.tsx";



interface CartState {
  cart: CartItemProps[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    deleteItem(state, action) {
      // payload = id
      state.cart.splice(action.payload, 1);
    },
    increaseItemQuantity(state) {
      const item = state.cart.find((item) => item.pizzaId);
      if (item) {
        item.quantity = 1;
        item.totalPrice = item?.quantity * item?.unitPrice;
      }
    },
    decreaseItemQuantity(state) {
      const item = state.cart.find((item) => item.pizzaId);
      if (item) {
        item.quantity--;
        item.totalPrice = item?.quantity * item?.unitPrice;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
export const getCart = (state: IRootState) => state.cart.cart;
export const getTotalCartPrice = (state: IRootState) => state.cart.cart.reduce((sum: number, item: CartItemProps) => sum + item.totalPrice, 0);
export const getTotalCartQuantity = (state: IRootState) => state.cart.cart.reduce((sum: number, item: CartItemProps) => sum + item.quantity, 0);
