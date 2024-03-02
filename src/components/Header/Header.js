import React from "react";
import header from "./Header.module.css";
import { Link } from "react-router-dom";
import { stateConst } from "../../BusinesLogic/State/StateConst";
import { useDispatch, useSelector } from "react-redux";
import { changeGender } from "../../BusinesLogic/Redux/MainRedux";
import { openPopup } from "../../BusinesLogic/Redux/PopUpRedux";
import WindowPopUp from "./WindowPopUp/WindowPopUp";
import { FnHeaderPopUp } from "../../BusinesLogic/Functions/FnHeaderPopUp";
import WrapWindowsPopUp from "./WrapWindowsPopUp/WrapWindowsPopUp";

const Header = () => {
  const dispatch = useDispatch();
  const { gender } = useSelector((state) => state.mainReducer);
  const { isOpen } = useSelector((state) => state.popUpReducer.popUp);

  // const handleMouseOver = () => {
  //   dispatch(openPopup());
  // };

  return (
    <div className={header.header}>
      <div className={header.top}>asd</div>
      <div className={header.main}>
        <div className={header.left}>
          <img className={header.staff} src={stateConst.image.icons.staff} />
        </div>
        <div className={header.right}>
          <div className={header.rTop}>
            <div className={header.rTopLeft}>
              <div
                style={
                  gender === "man" ? { borderBottom: "3px solid black" } : {}
                }
                onClick={() => dispatch(changeGender("man"))}
                className={header.linkMW}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/main"}>
                  Man
                </Link>
              </div>
              <div
                style={
                  gender === "woman" ? { borderBottom: "3px solid black" } : {}
                }
                onClick={() => dispatch(changeGender("woman"))}
                className={header.linkMW}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/main"}>
                  Woman
                </Link>
              </div>
            </div>
            <div className={header.rTopRight}>
              <img src={stateConst.image.icons.search} />
              <img src={stateConst.image.icons.profile} />
              <img src={stateConst.image.icons.like} />
              <img src={stateConst.image.icons.basket} />
            </div>
          </div>
          <div className={header.rBottom}>
            <div className={header.link}>
              <Link
                style={{ textDecoration: "none", color: "red" }}
                to={"/discounts"}>
                Знижки
              </Link>
            </div>
            <div className={header.link}>
              <Link
                style={{ textDecoration: "none", color: "green" }}
                to={"/new"}>
                Новинки
              </Link>
            </div>
            <WrapWindowsPopUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
