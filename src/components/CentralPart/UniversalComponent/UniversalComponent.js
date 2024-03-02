import React from "react";
import universal from "./UniversalComponent.module.css";
import { stateConst } from "../../../BusinesLogic/State/StateConst";
import { useDispatch, useSelector } from "react-redux";
import MapProducts from "./components/MapProducts/MapProducts";

const UniversalComponent = () => {
  const dispatch = useDispatch();
  const { arrayCurrentProductsForComponent } = useSelector(
    (state) => state.mainReducer
  );

  return (
    <div className={universal.universal}>
      <h1>UniversalComponent</h1>
      <h1>Filter</h1>
      <MapProducts />
    </div>
  );
};

export default UniversalComponent;
