import {  LogoutIcon} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import logo from "../../assets/logo.jpeg";
import { auth, database } from "../../config/firebase";
import {collection, getDocs } from "firebase/firestore";

const Booked = () => {
  const [reservedRooms, setReservedRooms] = useState([]);
  const Navigate = useNavigate();

  

  const fetchReservedRooms = async () => {
    try {
      const reserved = await getDocs((collection(database,"reserved"))); // Call your API to fetch reserved rooms
      setReservedRooms(reserved);
    } catch (error) {
      console.log("Error while fetching reserved rooms:", error);
    }
  };
  useEffect(() => {
    fetchReservedRooms();
  }, []);

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
    <div className="">
      <div> {/* Header Section */}
      <header className="left-0 fixed  top-0">
        <div className="flex items-center ">
          <div className="pt-2 ">
            <img className=" h-5 w-auto sm:h-10" src={logo} alt="logo" />
          </div>
          <div> @SEDIHOMES</div>
        
        </div>
      </header>
      </div>
      
      {/* Main Section */}
      <div className="mt-11 py-3">
      <LogoutIcon className=" w-6"></LogoutIcon>
      </div>
    </div>
  );
};

export default Booked;
