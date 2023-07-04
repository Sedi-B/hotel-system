import React  from "react";
import { Link , useNavigate} from "react-router-dom";
import logeron from "../assets/logeron.jpg";
import logo from "../assets/logo.jpeg";
import {useState} from 'react'
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../confg/firebase";


const Login = () => {

  const naviagte = useNavigate()
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("You are logged in");
        naviagte("/About")
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <>


      <section className="grid grid-cols-2 divide-x h-screen md:px-0 ">
        
        <div className="flex flex-col items-center justify-center bg-">
        <header className="left-0 fixed  top-0">
        <div className="flex items-center ">
          <div className="pt-2 ">
            <img className=" h-5 w-auto sm:h-10" src={logo} alt="logo" />
          </div>
          <div> @SEDIHOMES</div>
        </div>
      </header>
          
          <form className="left-2">
          <h2 className="flex justify-center  font-extralight"> WELCOME TO SEDIHOMES</h2>
            <label> Email</label>
            <br />
            <input
              type="text"
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email"
              className="p-2 w-64 bg-grey-500 border border-black rounded-lg text-white-900  "
              required
            />
            <br />
            <label> Password</label>
            <br />
            <input
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
              className=" p-2 w-64 bg-black-500 border border-black rounded-lg text-white-900 "
              required
            />
            <br />
            <button
              type="submit"
              onClick={signIn}
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline-none text-white bg-blue py-2 px-2 rounded  my-3 w-64
            "
            >
              Login
            </button> <br/>
            <a className="inline-block align-baseline text-sm text-black-400 hover:text-black-800">
              Forgot your password?
            </a>
            <div className="flex justify-center text-center "> 
              
              or continue  with <br/>
             
             
            </div>
            <br />
            Do not have an account?
            <Link to={"/Register"}> Register</Link>
            <div> </div>
          </form>
        </div>
        <div className="bg-[url('./assets/logeron.jpg')] bg-cover">
          
          <div className=" flex items-end justify-end"> <Link   className="p-3 px-6 pt-2 text-black bg-orange-500 rounded-full baseline  hover:bg-blend-color-burn  my-3 mx-3 " to={"/"}> Back</Link></div>
        </div>
      </section>
    </>
  );
};

export default Login;
