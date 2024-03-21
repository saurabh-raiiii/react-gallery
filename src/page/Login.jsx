import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import login_img from  "../assets/login.svg"
import google_img from  "../assets/google_icon.svg";

function Login() {

  return (
    <>
      <div className="h-[8vh] md:w-[90%] md:m-auto">
        <Navbar />
      </div>
      <div className="bg-gray-200 h-[92vh] flex items-center justify-center flex-col">
      
        <div className="flex rounded-lg shadow-sm bg-white w-[50%] h-[70%]">
          <div className="flex items-center md:w-[50%] h-auto m-5">
            <img src={login_img} alt="image" srcset="" />
          </div>
          <div className="flex bg-white md:w-[50%] h-auto justify-center flex-col gap-3 items-center rounded-r-lg pr-5">
            <div className="flex items-center mb-6 w-[90%]">
              <p className="text-4xl text-black ">Login </p>
            </div>
            <div className="w-[90%] justify-center flex flex-col gap-3">
              <div>
                <span className="text-sm">Email</span>
                <input
                  className="bg-gray-100 border-gray-100 outline-none h-10 w-[100%] p-2 border-2 focus:bg-white focus:border-2 focus:border-black"
                  type="text"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <span className="text-sm">Password</span>
                <input
                  className="bg-gray-100 border-gray-100 outline-none h-10 w-[100%] p-2 border-2 focus:bg-white focus:border-2 focus:border-black"
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex justify-center mt-6">
                <Link  to="/forgot_pass" className="underline text-xs">Forget password ?</Link>
              </div>

              <div>
                <input
                  className="h-10 w-[100%] bg-black hover:bg-gray-900 text-white duration-300"
                  type="button"
                  value="Sign In"
                />
              </div>

              <div>
                <button className="flex flex-row justify-center items-center h-10 w-[100%] bg-gray-200 duration-300 gap-2 border-2 border-gray-300 hover:border-black">
                  <img className="h-[70%]" src={google_img} alt="google_icon"/>
                  <span>Sign in with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Login;
