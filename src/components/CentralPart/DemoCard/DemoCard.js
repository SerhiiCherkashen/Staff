import React from "react";
import demoCard from "./DemoCard.module.css";

const DemoCard = (props) => {
  const element = props.element;
  return (
    <div className={demoCard.demoCard}>
      {/* <h1>DemoCard</h1> */}
      <img src={element.image} />
      <div>{element.name}</div>
      <div>
        {element.sizes.map((el) => {
          return <span style={{ marginLeft: "10px" }}>{el}</span>;
        })}
      </div>
      {element.oldPrice === 0 ? (
        <div> {element.newPrice} грн </div>
      ) : (
        <div>
          <span>{element.oldPrice} грн </span>
          <span>{element.newPrice} грн </span>
        </div>
      )}
    </div>
  );
};

export default DemoCard;
