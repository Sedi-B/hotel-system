import { CalendarIcon, DeviceMobileIcon, WifiIcon } from "@heroicons/react/outline";
import React from "react";
import games from "../../assets/icons/games.png";
import bed from "../../assets/images/bed.jpg";
import city2 from "../../assets/images/city2.jpg";
import cityView from "../../assets/images/cityView.jpg";
import coffee from "../../assets/images/coffee.jpg";
import dinningArea from "../../assets/images/dinningArea.jpg";
import kitchen from "../../assets/images/kitchen.jpg";
import pool from "../../assets/images/pool.jpg";
const OurServices = () => {
  return (
    <>
      <div className="mb-3 space-y-0 ">
        <header className=" top-0 fixed w-screen">@SEDIHOMES</header>
        <div className="bg-[gray] font-bold text-2xl text-cyan-300">
          <p className="flex justify-center p-3">
            Your experience with us here at SEDIHOMES.
          </p>
          <div className="flex space-x-2 w-screen">
            <img src={kitchen} alt="Our Services" className="h-80 w-90 " />
            <img src={dinningArea} alt="Our Services" className="h-80 w-90 " />
            <img src={pool} alt="Our Services" className="h-80 w-90 " />
            <img src={city2} alt="Our Services" className="h-80 w-90 " />
            <img src={coffee} alt="Our Services" className="h-80 w-90" />
            <img src={cityView} alt="Our Services" className="h-80 w-90 " />
          </div>
        </div>
        <div className="flex items-center justify-center bg-slate-400  text-cyan-300">
          About Our Best Services
          <h1></h1>
        </div>
        <div className="flex justify-center">Facilities </div>
        <div className="grid grid-cols-5 items-center ">
          <div>
            {" "}
            <WifiIcon className="w-20"> </WifiIcon> wifi
          
          </div>
          <div>
        
          </div>
          <div>
            <img src={games} className="=w-10 " alt="bedroom"></img>
            Gaming Activities
          </div>
          <div>
            <DeviceMobileIcon className="w-20"></DeviceMobileIcon>
          </div>
          <div><CalendarIcon className="w-20"></CalendarIcon></div>
          <div>6</div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
