import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Screens/Home"; // Assuming you have a Home component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Other routes can be added here */}
    </Routes>
  );
}

export default App;
