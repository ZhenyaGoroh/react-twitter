import { combineReducers } from "redux";
import HomePageReducer from "./HomePageReducer";

const rootReducer = combineReducers({ tweets: HomePageReducer });

export default rootReducer;
