import React, { useState } from "react";
import { Link } from "react-router-dom";
import front from "../assets/Front.jpg";
import logo from "../assets/logo.jpeg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (name == "" && email == "" && password == "") {
      alert("Please fill all fields");
    } else {
    }
    alert("saved");
  };
  return (
    <>
      <section className="grid grid-cols-2 divide-x h-screen  bg-gray-100 ">
        <div className="flex flex-col items-center justify-center">
          <header className="top-0 fixed left-0">
            <div className="flex items-center">
              <div>
                <img className=" h-5 w-auto sm:h-10" src={logo} alt="logo" />
              </div>
              <div>@SEDIHOMES</div>{" "}
            </div>
          </header>

          <form className="left-2 w-80 h-64">
          
          <h2 className=" font-light text-sm ">
            Discover the best accommodation services
          </h2>
            {" "}
            <label> Names</label>
            <br />
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Names and Surname"
              className=" p-2 w-64 bg-grey-500 border border-black rounded-lg text-white-900  "
              required
            />
            <br />
            <label> Email</label>
            <br />
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className=" p-2 w-64 bg-grey-500 border border-black rounded-lg text-white-900  "
              required
            />
            <br />
            <label> Password</label>
            <br />
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className=" p-2 w-64 bg-black-500 border border-black rounded-lg text-white-900 "
              required
            />
            <br />
            <button
              onClick={(e) => handleClick(e)}
              type="submit"
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline-none text-white bg-blue py-2 px-2 rounded  my-3 w-64"
            >
              Register
            </button>
            <br />
            <a className="   text-black-500 hover:text-black-800 rounded-full baseline  my-3 ">
              Have an account?{" "}
              <Link className=" underline" to={"/Login"}>
                login
              </Link>
            </a>
            <br />
          </form>
        </div>
        <div className="h-screen bg-[url('./assets/Front.jpg')] bg-cover">
          
          <div className=" flex items-end justify-end"> <Link   className="p-3 px-6 pt-2 text-black  bg-blue rounded-full baseline  hover:bg-blend-color-burn  my-3 mx-3 " to={"/"}> Back</Link></div>
        </div>
      </section>
    </>
  );
};

export default Register;
