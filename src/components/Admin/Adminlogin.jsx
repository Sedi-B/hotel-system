import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword,signOut } from "firebase/auth";
import { auth } from "../../confg/firebase";
import logo from "../../assets/logo.jpeg"
import { sendPasswordResetEmail } from "firebase/auth";


const Adminlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("You are now logged in");
        navigate("/Adminboard");
      })
      .catch((error) => {
        console.log("Error:", error);
        alert(`Failed to login ${error}`);
      });
  };
{/* forgot password*/}
const forgotPassword= (e) =>{
e.preventDefault();
sendPasswordResetEmail(auth,email).then(()=>{
  alert('Check your mail for reset link')  //success message if the user is registered with that
}).catch((error) =>
 console.log("Could'nt reset:", error));
}

  return (
    <div className="flex items-center justify-center h-screen bg-slate-400">
{/* Header Section */}
<header className="top-0 fixed left-0 text-white">
        <div className="flex items-center">
          <img src={logo} alt="logo" className=" h-5 w-auto sm:h-10 mr-4" />

          <div>@SEDIHOMES</div>
        </div>
        <div className="flex items-center">
      
        </div>
      </header>

      <form className="w-64 ">
        <h2 className="text-xl font-extra mb-4">Administration Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={signIn}
        >
          Login
        </button>{" "}
        <br />
        <button
          className=" text-white py-0 px-0"
          type="submit"
          onClick={forgotPassword}
        >
          Forgot password
        </button> <br/>
        Don't have an account?
        <Link className="underline  " to={"/Adminregister"}>
          {" "}
          Create new
        </Link>
      </form>
    </div>
  );
};

export default Adminlogin;
