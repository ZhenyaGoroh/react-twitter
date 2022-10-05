import { combineReducers } from "redux";
import { tweetsSlice } from "../slices/tweetsSlice";
import HomePageReducer from "./HomePageReducer";

const rootReducer = combineReducers({
  // homePage: HomePageReducer,
  tweets: tweetsSlice,
});

export default rootReducer;
