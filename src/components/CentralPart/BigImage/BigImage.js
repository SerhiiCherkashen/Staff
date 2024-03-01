import React from "react";
import bigImage from "./BigImage.module.css";
import { useSelector } from "react-redux";

const BigImage = () => {
  const { currentGender } = useSelector((state) => state.mainReducer);
  return (
    <div className={bigImage.bigImage}>
      {/* <h1>BigImage</h1> */}
      <img src={currentGender.main.bigImage} />
    </div>
  );
};

export default BigImage;
