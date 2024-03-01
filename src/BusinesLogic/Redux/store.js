import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../Redux/MainRedux";
import popUpReducer from "../Redux/PopUpRedux";

export const store = configureStore({
  reducer: { mainReducer, popUpReducer },
});
