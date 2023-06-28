import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[linear-gradient(to_right_bottom,rgba(0,135,253,0.2),rgba(0,135,253,0.2)),url('./assets/home.jpg')] h-[100vh] w-[100vw] bg-cover flex flex-col items-center justify-center">
      <h1 className=" text-white font-extrabold text-7xl shadow-transparent shadow-xl inset-0">
        WELCOME TO SEDIHOMES HOTEL
      </h1>
      <p className="justify-self-center text-2xl text-grey">
        We give you the best home away accommodation services
      </p>
      <div className="items-end flex justify-end space-x-3 my-4">
        <Link
          className=" shadow-2xl shadow-white text-black rounded-md bg-white px-7 py-1"
          to={"/Register"}
        >
          Register
        </Link>

        <Link
          className=" shadow-2xl rounded-md bg-blue text-black px-7 py-1"
          to={"/About"}
        >
          {" "}
          Our services
        </Link>
      </div>
    </div>
  );
};

export default Home;
