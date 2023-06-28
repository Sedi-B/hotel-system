import React, { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/register-back.jpg";
import logo from "../assets/logo.jpeg";
import standard from "../assets/standard.jpg";
import deluxe from "../assets/deluxe.jpg";
import family from "../assets/family.jpg";
const Offers = () => {
  return (
    <>
      <section className="grid grid-cols-2 divide-x h-screen   ">
        <div class="flex justify-center items-center bg-[linear-gradient(to_left_bottom,rgba(0,135,253,2),rgba(0,135,253,0)),url('./assets/register-back.jpg')] bg-cover">
          <header className="left-0 fixed  top-0 ">
            <div className=" flex items-center ">
              <div>
                <img className=" h-5 w-auto sm:h-10" src={logo} alt="logo" />
              </div>
              <div> @SEDIHOMES</div>
              <a
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
              </Link>
            </div>
          </header>

          <div className="flex flex-col items-center justify-center">
            <form className="max-w-md bg-transparent shadow-md rounded-full px-8 pt-6 pb-8 mb-4">
              <h1 className="flex justify-center  font-extralight text-white">BOOK YOUR ROOM WITH US!</h1>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm  mb-2">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Check-in:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Check-in date"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm  mb-2">
                  Check-out:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Check-out date"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Number of guests:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="No.guest"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-white hover:bg-blue-700 text-blue  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Check Availability
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="h-screen space-y-4 font-bold">
          What we have @SEDIHOMES
          <div className="font-semibold">Standard room <img className=" w-80" src={standard} alt="standard pic" /> </div>
          <div className=" "> Deluxe room <img className="  w-80" src={deluxe} alt="deluxe pic" /></div>
          <div className=" ">Family Sharing <img className="  w-80" src={family} alt="family pic" /> </div>
          <div > AT SEDIHHOMES we give you the best accommodation services worldwide, we have so </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
