import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
// import Adminboard from "./components/Admin/Adminboard";
import Adminboard from "./components/Admin/Adminboard";
import AvailableRooms from "./components/AvailableRooms";
import Home from "./components/Home";
import Offers from "./components/Offers";
import Register from "./components/Register";
import Login from "./components/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<Offers />} />
        <Route path="/Rooms" element={<AvailableRooms />} />
        <Route path="/Adminboard" element={<Adminboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
