import {
  ArrowLeftIcon,
  CalendarIcon,
  DeviceMobileIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import games from "../../assets/icons/games.png";
import city2 from "../../assets/images/city2.jpg";
import cityView from "../../assets/images/cityView.jpg";
import coffee from "../../assets/images/coffee.jpg";
import dinningArea from "../../assets/images/dinningArea.jpg";
import kitchen from "../../assets/images/kitchen.jpg";
import pool from "../../assets/images/pool.jpg";

const OurServices = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [contact, setContact] = useState("");

  const handleMessage = (e) => {
    e.preventDefault();
    console.log(e);
    if (!name || !surname || !contact) {
      alert("Please fill all fields");
     
    } else {
      alert("Message sent");
    }
  };
  return (
    <div className="mb-3 space-y-0 h-full w-screen  bg-slate-500">
      <header className=" top-0 fixed w-screen">@SEDIHOMES</header>
      <div className="  font-bold text-2xl text-cyan-300">
        <p className="flex justify-center p-3">
          Your experience with us here at sedihomes.
        </p>
        <div className="grid grid-cols-6 rounded-2xl w-screen">
          <div>
            {" "}
            <img src={kitchen} alt="Our Services" />
          </div>
          <div>
            <img src={dinningArea} alt="Our Services" />
          </div>
          <div>
            <img src={cityView} alt="Our Services" />
          </div>
          <div>
            <img src={pool} alt="Our Services" />
          </div>
          <div>
            <img src={city2} alt="Our Services" />
          </div>
          <div>
            <img src={coffee} alt="Our Services" />
          </div>
        </div>
      </div>
      <div className="mb-3 space-y-0 flex justify-center">
        <div className="  text-white">
          <h1 className="flex justify-center text-2xl text-cyan-300 font-bold">
            About Our Best Services
          </h1>
          <div>
            <p className="flex justify-center items-center">
              We offer a wide range of services to meet your needs, whether you
              are looking for an apartment or just wanting some relaxation and
              peace in the household! Here's what we have available:{" "}
            </p>
            <br />
            <b>Apartments-</b> SediHomes offers high end residential apartments
            on rent from R559.00 per night/day upwards depending upon size
            requirements.
            <br />
            <div className="items-start">
              <b> Dinning Areas</b>- With over two million people visiting every
              day across India, choosing a good dining area is essential if
              you,re planning any kind of luxury stay. At SediHomes, we provide
              various options like restaurants/cafés within walking distance
              which can satisfy most taste buds.
              <br />
              <b>Pools & Spas </b>- Whether its swimming pool, sauna, steam room
              or spa treatments at home, there should be no hesitation when
              selecting one among us since they make life more enjoyable by
              providing uninterrupted refreshment during long hours spent
              sitting around waiting for sunrise or late night snoozes after
              workouts done outside.
              <br />
              <b>Kitchens</b>- our kitchens come equipped with all modern
              appliances such as stoves, ovens, refrigerators etc., making it
              easy for guests to cook delicious meals that will delight them.
              <br />
              Additionally, each unit comes with free Wi-Fi connectivity so that
              families can access their favorite online content without having
              to worry about internet connection issues.
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center font-bold text-2xl text-cyan-300">Facilities </div>
      <div className="grid grid-cols-5 items-center ">
        <div>
          {" "}
          <WifiIcon className="w-20"> </WifiIcon> wifi
        </div>
        <div></div>
        <div>
          <img src={games} className="=w-10 " alt="bedroom"></img>
          Gaming Activities
        </div>
        <div>
          <DeviceMobileIcon className="w-20"></DeviceMobileIcon>
        </div>
        <div>
          <CalendarIcon className="w-20"></CalendarIcon>
        </div>
        <div>6</div>
      </div>
      <div>
        <h2 className="flex justify-center text-black font-bold">
          Get In Touch with Us
        </h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Names</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded w-full bg-gray-300 py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="border border-gray-400 rounded w-full bg-gray-300 py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="border border-gray-400 rounded w-full bg-gray-300 py-2 px-3"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 ">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-400 rounded w-full bg-gray-300 py-2 px-3"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleMessage}
              className="bg-slate-800 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div>
        <p className="flex justify-center ">
          {" "}
          Catch us on social media platforms like:
        </p>
        <ArrowLeftIcon className= "w-10"></ArrowLeftIcon>
      </div>
    </div>
  );
};

export default OurServices;
