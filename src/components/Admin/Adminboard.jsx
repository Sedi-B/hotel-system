import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import logo from "../../assets/logo.jpeg";
import { auth } from "../../config/firebase";

const Adminboard = () => {
  const Navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        alert("bye");
        Navigate("/Adminlogin");
      })
      .catch((error) => console.log("Error while signing out:", error));
  };

  return (
    <div>
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-[#535252] text-white">
        <div className="flex items-center">
          <img src={logo} alt="logo" className=" h-5 w-auto sm:h-10 mr-4" />

          <div>@SEDIHOMES</div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <BellIcon className="h-6 w-6 text-white" />
          </div>
          <img
            src="/path/to/profile.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>

      {/* Body Section */}
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <div>
          <button className="border bg-slate-500 px-8 py-2 bg-blue-500  text-white rounded">
            <SearchIcon className="h-6 w-6 text-white" />
            <span className="ml-2">Search</span>
          </button>
        </div>
        <div>
          <Link
            className="border bg-slate-600 px-4 py-2 bg-blue-500 text-white rounded"
            to={"/Adminboard"}
          >
            Reservations
          </Link>
          <Link
            className="border bg-slate-600 px-4 py-2 bg-blue-500 text-white rounded ml-2"
            to={"/AdminGuest"}
          >
            Guest
          </Link>
          <Link
            className="border bg-slate-600 px-4 py-2 bg-blue-500 text-white rounded ml-2"
            to={"/AddRoom"}
          >
            {" "}
            Add Room
          </Link>
          <button
            className="px-4 py-2 bg-[blue] text-white rounded ml-2"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="p-4 bg-[#9d9a9a] h-screen">
        {/* Display information based on the button clicked */}
        <h3 className="text-white">Reservations</h3>
      </div>
    </div>
  );
};

export default Adminboard;
