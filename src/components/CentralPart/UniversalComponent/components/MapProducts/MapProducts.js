import React from "react";
import mapProducts from "./MapProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { chooseCurrentProduct } from "../../../../../BusinesLogic/Redux/MainRedux";
import DemoCard from "../../../DemoCard/DemoCard";

const MapProducts = (props) => {
  const dispatch = useDispatch();
  const { name, currentGender, arrayCurrentProductsForComponent } = useSelector(
    (state) => state.mainReducer
  );
  const array = arrayCurrentProductsForComponent.array;
  const data = arrayCurrentProductsForComponent.data;
  // console.log(
  //   "MapProducts array  : ",
  //   array,
  //   Object.keys(arrayCurrentProductsForComponent)
  // );
  return (
    <div className={mapProducts.mapProducts}>
      <h1>MapProducts</h1>
      <div className={mapProducts.wrapDemoCards}>
        {array.map((element, index) => {
          return (
            <div
              key={index + Date.now()}
              onClick={() => dispatch(chooseCurrentProduct(element.id))}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/oneProduct">
                <DemoCard element={element} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapProducts;
