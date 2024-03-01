import { createSlice } from "@reduxjs/toolkit";
import { stateRedux } from "../State/StateRedux";

const state = stateRedux;

const popUpSlice = createSlice({
  name: "popOp",
  initialState: state,
  reducers: {
    openPopup: (state) => {
      state.popUp.isOpen = true;
    },
    closePopup: (state) => {
      state.popUp.isOpen = false;
    },
  },
});

export const { openPopup, closePopup } = popUpSlice.actions;
export default popUpSlice.reducer;
