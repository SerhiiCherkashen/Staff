import React from "react";
import windowPU from "./WindowPopUp.module.css";

const WindowPopUp = (props) => {
  return (
    <div className={windowPU.windowPU}>
      {props.special ? (
        <div className={windowPU.wrapContent}>
          {props.props.map((element) => {
            return <div> {element.name} </div>;
          })}
        </div>
      ) : (
        <div className={windowPU.wrapContent}>
          {props.props.map((element) => {
            return <div> {element.name} </div>;
          })}
        </div>
      )}
    </div>
  );
};

export default WindowPopUp;
