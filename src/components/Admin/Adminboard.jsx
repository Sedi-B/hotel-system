import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const Adminboard = () => {
  const [notifications, setNotifications] = useState(0);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="py-4 px-6 bg-white shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-6 w-auto" src="/logo.png" alt="logo" />
            <span className="text-gray-700 text-lg font-semibold ml-2">
              Admin
            </span>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-200">
              <BellIcon className="h-6 w-6 text-gray-600" />
              {notifications > 0 && (
                <span className="bg-red-500 rounded-full text-white text-xs px-2 py-1 ml-1">
                  {notifications}
                </span>
              )}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 ml-2">
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow p-6 flex flex-col items-center justify-start">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            className="block w-50 pl-10 pr-3 py-2 rounded-lg border border-gray-300 placeholder-gray-400
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search"
            type="text"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="flex">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              onClick={() => console.log("Add Room clicked")}
            >
              Add Room
            </button>
            <button
              className="bg-sky-700 text-white px-4 py-2 rounded-lg ml-2"
              onClick={() => console.log("Reservations clicked")}
            >
              Reservations
            </button>
            <button
              className="bg-blue text-white px-4 py-2 rounded-lg ml-2"
              onClick={() => console.log("Booking Management clicked")}
            >
              Booking Management
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Adminboard;
