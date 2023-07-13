import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";

import AddRoom from "./components/Admin/AddRoom";
import Adminboard from "./components/Admin/Adminboard";
import AdminGuest from "./components/Admin/Adminguest";
import Adminlogin from "./components/Admin/Adminlogin";
import AdminRegister from "./components/Admin/Adminregister";
import AvailableRooms from "./components/User/AvailableRooms";
import Explore from "./components/User/Explore";
import FetchData from "./components/User/FetchData";
import Home from "./components/User/Home";
import Offers from "./components/User/Offers";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Booked from "./components/User/Booked";
import LandingArea from "./components/LandingArea";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LandingArea" element={<LandingArea />} />
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
        <Route path="/Booked" element={<Booked />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
