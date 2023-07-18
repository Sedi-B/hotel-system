import React from "react";
import kitchen from "../../assets/images/kitchen.jpg";
import dinningArea from "../../assets/images/dinningArea.jpg";
import city2 from "../../assets/images/city2.jpg";
import pool from "../../assets/images/pool.jpg";

const OurServices = () => {
  return (
    <>
      <div className="mb-3 space-y-6 ">
        <header className=" top-0 fixed w-screen">@SEDIHOMES</header>
        <div className="bg-[gray] font-bold text-2xl text-cyan-300">
          <p className="flex justify-center ">The views and rooms you can experience at <> SEDIHOMES.</p> 
          <div className="flex space-x-2">
            <img src={kitchen} alt="Our Services" className="h-80 w-90 rounded-full" />
            <img src={pool} alt="Our Services" className="h-70 w-80 rounded-full" />
            <img src={dinningArea} alt="Our Services" className="h-70 w-80 rounded-full" />
            <img src={city2} alt="Our Services" className="h-80 w-90 rounded-full" />
          </div>
        </div>
        <div>Facilities</div>
        <div>About @SEDIHOMES</div>
      </div>
    </>
  );
};

export default OurServices;
