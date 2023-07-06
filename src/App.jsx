import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";

import AddRoom from "./components/Admin/AddRoom";
import Adminboard from "./components/Admin/Adminboard";
import AdminGuest from "./components/Admin/Adminguest";
import Adminlogin from "./components/Admin/Adminlogin";
import AdminRegister from "./components/Admin/Adminregister";
import AvailableRooms from "./components/AvailableRooms";
import Explore from "./components/Explore";
import FetchData from "./components/FetchData";
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
        <Route path="/AdminGuest" element={<AdminGuest />} />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/AddRoom" element={<AddRoom />} />
        <Route path="/Adminregister" element={<AdminRegister />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/FetchData" element={<FetchData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
