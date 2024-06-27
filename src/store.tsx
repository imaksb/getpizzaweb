import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice.tsx";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export type IRootState = ReturnType<typeof store.getState>;

export default store;
