import React, { useEffect } from "react";
import centralP from "./CentralPart.module.css";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import ManMain from "./ManMain/ManMain";
import WomanMain from "./WomanMain/WomanMain";
import Discounts from "./Discounts/Discounts";
import New from "./New/New";
import StaffBasic from "./StaffBasic/StaffBasic";
import StaffTactical from "./StaffTactical/StaffTactical";
import Cloth from "./Cloth/Cloth";
import Shoes from "./Shoes/Shoes";
import Bags from "./Bags/Bags";
import Accessories from "./Accessories/Accessories";
import BigImage from "./BigImage/BigImage";
import OneProduct from "./OneProduct/OneProduct";
import Outerwear from "./Cloth/components/Outerwear/Outerwear";
import UniversalComponent from "./UniversalComponent/UniversalComponent";

const CentralPart = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/main" && <BigImage />}
      <div className={centralP.centralP}>
        <Routes>
          <Route path="/main" element={<ManMain />}></Route>
          {/* <Route path="/woman" element={<WomanMain />}></Route> */}
          <Route path="/universal" element={<UniversalComponent />}></Route>
          <Route path="/man/:id" element={<BigImage />}></Route>
          <Route path="/discounts" element={<Discounts />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/sBasic" element={<StaffBasic />}></Route>
          <Route path="/sTactical" element={<StaffTactical />}></Route>
          <Route path="/cloth/outerwear" element={<Outerwear />}></Route>
          <Route path="/cloth" element={<Cloth />}></Route>
          <Route path="/shoes" element={<Shoes />}></Route>
          <Route path="/bags" element={<Bags />}></Route>
          <Route path="/accessories" element={<Accessories />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/oneProduct" element={<OneProduct />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default CentralPart;
