import React from "react";
import { useNavigate } from "react-router-dom";
import deluxe from "../assets/deluxe.jpg";
import family from "../assets/family.jpg";
import logo from "../assets/logo.jpeg";
import standard from "../assets/standard.jpg";

import { useState } from "react";

const Offers = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const navigate = useNavigate();

  /* check availability function*/

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    navigate("/AvailableRooms");
  };

  return (
    <>
      <section className="grid grid-cols-2 divide-x h-screen  md:px-0 ">
        <div className="flex justify-center items-center bg-[linear-gradient(to_left_top,rgba(0,135,253,0.5),rgba(0,135,253,0)),url('./assets/register-back.jpg')] bg-cover">
          <header className="left-0 fixed  top-0 ">
            <div className=" flex items-center ">
              <div>
                <img className=" h-5 w-auto sm:h-10" src={logo} alt="logo" />
              </div>
              <div> @SEDIHOMES</div>
              {/* <a
                href="#"
                className="p-3 px-6 pt-2 text-white  bg-blue rounded-full baseline  hover:bg-blend-color-burn  py-2 my-3 mx-3 "
              >
                {" "}
                Button{" "}
              </a>

              <Link
                className="p-3 px-6 pt-2 text-black  bg-blue rounded-full baseline  hover:bg-blend-color-burn  my-3 mx-3 "
                to={"/"}
              >
                {" "}
                Go back
              </Link> */}
            </div>
          </header>

          <div className="flex flex-col items-center justify-center">
            <form className=" flex justify-center flex-col h-[500px] items-center">
              <h1 className="flex justify-center font-bold from-neutral-50 text-white">
                BOOK YOUR ROOM WITH US!
              </h1>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm  mb-2">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Check-in:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  placeholder="Check-in date"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm  mb-2">
                  Check-out:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  placeholder="Check-out date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  onClick={handleCheckAvailability}
                  className="bg-white hover:bg-blue-700 text-blue  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit  "
                >
                  Check Availability
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="space-y-4 h-screen  bg-cyan-100 flex flex-col items-center">
          What we have @SEDIHOMES
          <div className="font-semibold ">
            Standard
            <img className=" w-80" src={standard} alt="standard pic" />{" "}
          </div>
          <div className=" font-semibold ">
            {" "}
            Deluxe <img className="  w-80" src={deluxe} alt="deluxe pic" />
          </div>
          <div className="font-semibold  ">
            Family Sharing{" "}
            <img className="  w-80" src={family} alt="family pic" />{" "}
          </div>
          <div className=" font-light flex  items-center ">
            {" "}
            @SEDIHOMES we give you the best accommodation services worldwide, we
            have a beautiful city-view and comfortable home feeling rooms with
            special facilities according to the chosen kind
          </div>
          <footer className="flex justify-center items-end bottom-">
            @sedihomes.2023
          </footer>
        </div>
      </section>
    </>
  );
};

export default Offers;
