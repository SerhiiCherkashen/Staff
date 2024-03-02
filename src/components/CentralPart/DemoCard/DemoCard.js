import React from "react";
import demoCard from "./DemoCard.module.css";

const DemoCard = (props) => {
  const element = props.element;
  return (
    <div className={demoCard.demoCard}>
      {/* <h1>DemoCard</h1> */}
      {/* <div className={demoCard.asd}>a</div> */}
      {element.discount !== 0 && (
        <div className={demoCard.discount}>-{element.discount} %</div>
      )}
      <div className={demoCard.like}>a</div>
      <img src={element.image} />
      <div className={demoCard.name}>{element.name}</div>
      <div>
        {element.sizes.map((el) => {
          return <span className={demoCard.size}>{el}</span>;
        })}
      </div>
      {element.oldPrice === 0 ? (
        <div className={demoCard.moneyOne}> {element.newPrice} грн </div>
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
