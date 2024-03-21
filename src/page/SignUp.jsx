import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import signup_img from "../assets/signup.svg";

function SignUp() {
  return (
    <>
      <div className="h-[8vh] md:w-[90%] md:m-auto">
        <Navbar />
      </div>
      <div className="bg-gray-200 h-[92vh] flex items-center justify-center flex-col">
        <div className="flex rounded-lg shadow-sm bg-white h-[70%] w-[50%]">
          <div className="flex items-center md:w-[50%] h-auto m-5">
            <img src={signup_img} alt="image" srcset="" />
          </div>
          <div className="flex bg-white md:w-[50%] h-auto justify-center flex-col  gap-3 items-center rounded-r-lg pr-5">
            <div className="flex items-center mb-6 w-[90%]">
              <p className="text-4xl text-black ">SignUp </p>
            </div>
            <div className="w-[90%] justify-center flex flex-col gap-3">
              <div>
                <span className="text-sm">User Name</span>
                <input
                  className="bg-gray-100 border-gray-100 outline-none h-10 w-[100%] p-2 border-2 focus:bg-white focus:border-2 focus:border-black"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div>
                <span className="text-sm">Email</span>
                <input
                  className="bg-gray-100 border-gray-100 outline-none h-10 w-[100%] p-2 border-2 focus:bg-white focus:border-2 focus:border-black"
                  type="text"
                  placeholder="example@gmail.com"
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

              <div>
                <span className="text-sm">Confirm Password</span>
                <input
                  className="bg-gray-100 border-gray-100 outline-none h-10 w-[100%] p-2 border-2 focus:bg-white focus:border-2 focus:border-black"
                  type="password"
                  name=""
                  id=""
                  placeholder="Please enter your password again."
                />
              </div>

              <div className="flex justify-center mt-6">
                <Link to="/login" className="underline text-xs">
                  Already a member? Login here.
                </Link>
              </div>

              <div>
                <input
                  className="h-10 w-[100%] bg-black hover:bg-gray-900 text-white duration-300"
                  type="button"
                  value="Sign Up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
