import React from "react";
import wWPU from "./WrapWindowsPopUp.module.css";
import { stateConst } from "../../../BusinesLogic/State/StateConst";
import { Link } from "react-router-dom";
import WindowPopUp from "../WindowPopUp/WindowPopUp";
import { useDispatch, useSelector } from "react-redux";
import { openPopup } from "../../../BusinesLogic/Redux/PopUpRedux";

const WrapWindowsPopUp = () => {
  const dispatch = useDispatch();
  const { gender } = useSelector((state) => state.mainReducer);
  const { isOpen } = useSelector((state) => state.popUpReducer.popUp);

  const handleMouseOver = () => {
    dispatch(openPopup());
  };

  return (
    <div className={wWPU.wrapWindowsPopUp}>
      {gender === "man" ? (
        <>
          {stateConst.header.man.map((element) => {
            if (element.popUp) {
              return (
                <div className={wWPU.container} onMouseOver={handleMouseOver}>
                  <div className={`  ${wWPU.trigger}  ${wWPU.link}`}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={element.path}>
                      {element.name}
                    </Link>
                  </div>
                  {isOpen && (
                    <div className={wWPU.popup}>
                      <WindowPopUp special={true} props={element.miniMenu} />
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <div className={wWPU.link}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={element.path}>
                    {element.name}
                  </Link>
                </div>
              );
            }
          })}
        </>
      ) : (
        <>
          {stateConst.header.woman.map((element) => {
            if (element.popUp) {
              return (
                <div className={wWPU.container} onMouseOver={handleMouseOver}>
                  <div className={`  ${wWPU.trigger}  ${wWPU.link}`}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={element.path}>
                      {element.name}
                    </Link>
                  </div>
                  {isOpen && (
                    <div className={wWPU.popup}>
                      <WindowPopUp special={true} props={element.miniMenu} />
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <div className={wWPU.link}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={element.path}>
                    {element.name}
                  </Link>
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
};

export default WrapWindowsPopUp;
