import React from "react";
import { Routes, Route } from "react-router-dom";

import "./main.css";
import Home from "../../pages/Home"
import Listtodo from "../../pages/Listtodo"
import Vote from "../../pages/Vote"


const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="vote" element={<Listtodo/>} />
        <Route path="listtodo" element={ <Vote />} /> 
      </Routes>
    </div>
  );
};

export default Main;
