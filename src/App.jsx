import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/Register";
import Home from "./components/Home";
import Offers from "./components/Offers";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<Offers />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
