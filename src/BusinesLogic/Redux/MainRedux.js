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
    chooseArrayProductsForComponent: (state, action) => {
      const route = action.payload.route;
      const name = action.payload.name;

      let object = state.currentGender;
      route.forEach((element) => {
        for (const key in object) {
          if (key === element) {
            object = object[key];
            console.log("KEY : ", element, key, object[key]);
          }
        }
      });
      console.log(
        "Object : ",
        object.length,
        Array.isArray(object),
        typeof object
      );
      if (Array.isArray(object)) {
        state.arrayCurrentProductsForComponent = {
          data: {},
          array: object,
        };
      } else {
        let arr = [];
        let iterateObject = (obj) => {
          for (const key in obj) {
            if (typeof obj[key] === "object") {
              if (Array.isArray(obj[key])) {
                obj[key].forEach((item, index) => {
                  console.log("ARR `${item}`: ", `${item}`);
                  arr.push(item);

                  // if (typeof item === "object") {
                  //   iterateObject(item);
                  // } else {
                  //   // console.log("ARR `${item}`: ", `${item}`);
                  //   // arr.push(`${item}`);
                  //   // console.log(`${item}`);
                  // }
                });
              } else {
                iterateObject(obj[key]);
              }
            } else {
              console.log("ARR `${obj[key]}`: ", `${obj[key]}`);
              arr.push(`${obj[key]}`);
              // console.log(`${obj[key]}`);
            }
          }
        };
        iterateObject(object);
        console.log("ARR : ", arr);
        state.arrayCurrentProductsForComponent = {
          data: {},
          array: arr,
        };
      }
    },
  },
});

export const {
  changeGender,
  changeIMG,
  chooseCurrentProduct,
  chooseArrayProductsForComponent,
} = mainSlice.actions;
export default mainSlice.reducer;
