import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import tweetsSlice from "./slices/tweetsSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    tweets: tweetsSlice,
  },
  middleware: customizedMiddleware,
});

export default store;
