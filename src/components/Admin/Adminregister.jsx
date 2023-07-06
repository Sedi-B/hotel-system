import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import logo from "../../assets/logo.jpeg";


const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // TODO: Handle form submission
  //   // You can validate the form fields and perform any necessary actions here
  // };
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Registered");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (


    <div className="flex justify-center items-center h-screen bg-[gray]">

    {/* Header Section */}
    <header className="top-0 fixed left-0 text-white">
        <div className="flex items-center">
          <img src={logo} alt="logo" className=" h-5 w-auto sm:h-10 mr-4" />

          <div>@SEDIHOMES</div>
        </div>
        <div className="flex items-center">
      
        </div>
      </header>


      <form className="max-w-md mx-auto ">
        <h1 className="text-4xl font-extralight py-3  ">Register an Account</h1>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button
            // type="submit"
            className="bg-blue hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            onClick={signUp}
          >
            Register
          </button>
          <br />
          Already have an account?
          <Link className="underline " to={"/Adminlogin"}>
            {" "}
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AdminRegister;
