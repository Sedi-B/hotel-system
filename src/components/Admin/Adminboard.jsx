import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { auth, database } from "../../config/firebase";

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
  const [allDocs, setAllDocs] = useState([]);
  const fetchRooms = (e) => {
    getDocs(collection(database, "booked")).then((response) => {
      const results = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setAllDocs(results);
    });
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  {
    /*Deleting rooms*/
  }
  const deleteRoom = async (id) => {
    alert(`The room with ID ,${id} has been deleted successfully.`);
    try {
      const cancel = doc(database, "booked", id);

      await deleteDoc(cancel);
    } catch (error) {
      console.log(error);
    }
    //alert(`The room with ID ${id}, has been deleted successfully.`);
  };

  console.log(allDocs);

    {/*updating rooms*/}
    const [updatedDescription, setUpdatedDescription] = useState()  //
    const updateRoom = async (id) => {
      const collected = collection(database, "rooms");
      const update = addDocs (collected, id);
      await updateDoc(update, { description: updatedDescription });
    };

  return (
    <div className="bg-[#e4e0e0]">
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
          <button className="border bg-slate-500 px-4 py-2 bg-blue-500  text-white rounded">
            <SearchIcon className="h-6 w-6 inline text-white" />
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
      <div className="rounded-3xl p-4 bg-[#918e8e] h-screen ">
        {/* Display information based on the button clicked */}
        <div className=" flex justify-between">
          <h3 className="text-lg font-bold text-black">Admin dashboard</h3>
          <div className="space-x-2">
           
              Reserved Rooms
         
         
          </div>
        </div>
        <div className="space-x-6">
          {/*displaying booked rooms*/}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allDocs.map((booked) => (
              <div
                key={booked.id}
                className="bg-transparent rounded-lg shadow p-4"
              >
                <h2 className="text-lg font-bold mb-2">{booked.name}</h2>
                <div className="mb-2 ">
                  <span className="font-semibold">Room Number:</span>{" "}
                  {booked.roomNo}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Description:</span>{" "}
                  {booked.description}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Facilities:</span>{" "}
                  {booked.facilities}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Number of Guests:</span>{" "}
                  {booked.numberOfGuests}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Amount:</span> {booked.amount}
                </div>
                <img
                  src={booked.url}
                  alt="Room"
                  className="w-full h-40 object-cover rounded  "
                />
                <div className="flex  justify-between">  <button
                  className="bg-slate-400 border-separate my-1  p-2 rounded-md "
                  onClick={() => deleteRoom(booked.id)}
                >
                  {" "}
                  Delete Room
                </button>
                <button
                  className="bg-slate-400 border-separate my-1  p-2 rounded-md "
                  onClick={() => updateRoom(booked.id)}
                >
                  {" "}
                  Update Room
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminboard;
