import React from "react";
import windowPU from "./WindowPopUp.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chooseArrayProductsForComponent } from "../../../BusinesLogic/Redux/MainRedux";

const WindowPopUp = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={windowPU.windowPU}>
      {props.special ? (
        <div className={windowPU.wrapContent}>
          {props.props.map((element) => {
            return (
              <div
                onClick={() =>
                  dispatch(
                    chooseArrayProductsForComponent({
                      route: element.route,
                      name: element.name,
                    })
                  )
                }>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  // to={element.path}>
                  to={"/universal"}>
                  {element.name}
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={windowPU.wrapContent}>
          {props.props.map((element) => {
            return (
              <div>
                <Link to="/outerwear">{element.name} asd</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WindowPopUp;
