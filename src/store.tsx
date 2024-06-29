import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice.tsx";
import cartReducer from "./features/cart/cartSlice.tsx";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
export type IRootState = ReturnType<typeof store.getState>;

export default store;
