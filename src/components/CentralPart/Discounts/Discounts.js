import React from "react";
import discounts from "./Discounts.module.css";
import { closePopup, openPopup } from "../../../BusinesLogic/Redux/PopUpRedux";
import { useDispatch, useSelector } from "react-redux";
import WindowPopUp from "../../Header/WindowPopUp/WindowPopUp";

const Discounts = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.popUpReducer.popUp);

  // const handleMouseOver = () => {
  //   dispatch(openPopup());
  // };

  return (
    <div className={discounts.discounts}>
      <h1>Discounts</h1>

      {/* <div className={discounts.container} onMouseOver={handleMouseOver}>
        <div className={discounts.trigger}>QWERTY</div>
        {isOpen && (
          <div className={discounts.popup}>
            <WindowPopUp />
          </div>
        )}
      </div>
      <div className={discounts.container} onMouseOver={handleMouseOver}>
        <div className={discounts.trigger}>QWERTY</div>
        {isOpen && (
          <div className={discounts.popup}>
            <h1>AASASASAAAAAAAA</h1>
            <h1>AASASASAAAAAAAA</h1>
            <h1>AASASASAAAAAAAA</h1>
            <h1>AASASASAAAAAAAA</h1>
          </div>
        )}
      </div>
      <div className={discounts.container} onMouseOver={handleMouseOver}>
        <div className={discounts.trigger}>asdasdasd</div>
        {isOpen && (
          <div className={discounts.popup}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
        )}
      </div> */}
    </div>
  );
};

export default Discounts;
