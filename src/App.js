import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ManMain from "./components/CentralPart/ManMain/ManMain";
import WomanMain from "./components/CentralPart/WomanMain/WomanMain";
import CentralPart from "./components/CentralPart/CentralPart";

function App() {
  return (
    <div className="App">
      <Header />
      <CentralPart />
      <Footer />
    </div>
  );
}

export default App;
