import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import 'tailwindcss/tailwind.css';
import Register from "./components/Register";
import Home from "./components/Home";
import Offers from "./components/Offers";
import AvailableRooms from "./components/AvailableRooms";

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<Offers />} />
          <Route path="/Rooms" element={<AvailableRooms />} />
          
        </Routes>
      </BrowserRouter>
    
  );
};

export default App;
