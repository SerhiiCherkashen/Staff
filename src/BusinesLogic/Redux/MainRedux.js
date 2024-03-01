import React from "react";
// import
import { createSlice } from "@reduxjs/toolkit";
import { stateRedux } from "../State/StateRedux";
import { stateConst } from "../State/StateConst";

const state = stateRedux;

const mainSlice = createSlice({
  name: "main",
  initialState: state,
  reducers: {
    changeGender: (state, action) => {
      if (action.payload === "man") {
        state.currentGender = stateConst.products.man;
        state.gender = "man";
      } else {
        state.currentGender = stateConst.products.woman;
        state.gender = "woman";
      }
    },
    changeIMG: (state) => {
      console.log("MAN || Woman");
    },
    chooseCurrentProduct: (state, action) => {},
  },
});

export const { changeGender, changeIMG, chooseCurrentProduct } =
  mainSlice.actions;
export default mainSlice.reducer;
