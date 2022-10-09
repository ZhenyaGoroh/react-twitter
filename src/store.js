import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import tweetsSlice from "./slices/tweetsSlice";
import userSlice from "./slices/userSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    tweets: tweetsSlice,
    user: userSlice,
  },
  middleware: customizedMiddleware,
});

export default store;
