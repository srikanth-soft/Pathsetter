"use client";
import React, { useEffect } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./Screens/Home/Home"
import About from "./Screens/About/About.jsx"
const App = () => {
  //
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
