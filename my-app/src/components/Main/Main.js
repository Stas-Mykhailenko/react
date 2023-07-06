import "./main.css";
import LeftPanel from "../LeftPanel/LeftPanel";
import MediumContainer from "../MediumContainer/MediumContainer";
import { useState } from "react";

const Main = () => {


  return (
    <div className="main">
      <LeftPanel/>
      <MediumContainer />
    </div>
  );
};

export default Main;
