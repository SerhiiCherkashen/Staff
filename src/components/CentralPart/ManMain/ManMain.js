import React, { useEffect, useSyncExternalStore } from "react";
import main from "./ManMain.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DemoCard from "../DemoCard/DemoCard";
import { chooseCurrentProduct } from "../../../BusinesLogic/Redux/MainRedux";
import MapProducts from "../UniversalComponent/components/MapProducts/MapProducts";

const ManMain = () => {
  const dispatch = useDispatch();
  const { name, currentGender, arrayCurrentProductsForComponent } = useSelector(
    (state) => state.mainReducer
  );
  const testObject = {
    arr: [1, 2, 3],
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    hobbies: ["reading", "hiking", "cooking"],
  };

  function iterateObject(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        if (Array.isArray(obj[key])) {
          obj[key].forEach((item, index) => {
            if (typeof item === "object") {
              iterateObject(item);
            } else {
              console.log(`${item}`);
            }
          });
        } else {
          iterateObject(obj[key]);
        }
      } else {
        console.log(`${obj[key]}`);
      }
    }
  }

  iterateObject(testObject);

  return (
    <div className={main.manMain}>
      <h1>ManMain</h1>
      <div className={main.wrapSelections}>
        {currentGender.main.sections.map((element) => {
          return (
            <Link to="/asd">
              <img src={element} alt="" />
            </Link>
          );
        })}
      </div>
      {currentGender.main.collection && (
        <div className={main.wrapCollection}>
          {currentGender.main.collection.map((element) => {
            return (
              <div className={main.oneCollection}>
                <Link to="/oneProduct">
                  <img src={element} alt="" />
                </Link>
              </div>
            );
          })}
        </div>
      )}
      <MapProducts />
    </div>
  );
};

export default ManMain;
