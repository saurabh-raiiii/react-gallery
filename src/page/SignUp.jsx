import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import signup_img from  "../assets/signup.svg";

function SignUp() {
    let image_link =
    "https://img.freepik.com/vecteurs-libre/illustration-concept-mot-passe-oublie_114360-1095.jpg?w=2000";
    return (
      <>
        <div className="h-[6vh]">
          <Navbar />
        </div>
        <div className="bg-gray-200 h-[94vh] flex items-center justify-center flex-col">
        
          <div className="flex rounded-lg shadow-sm bg-white h-[70%] w-[50%]">
            <div className="flex items-center md:w-[50%] h-auto">
              <img src={signup_img} alt="image" srcset="" className="rounded-l-lg" />
            </div>
            <div className="flex bg-white md:w-[50%] h-auto justify-center flex-col  gap-3 items-center rounded-r-lg">
              <div className="flex items-center mb-6 w-[90%]">
                <p className="text-4xl text-black ">SignUp </p>
              </div>
              <div className="w-[90%] justify-center flex flex-col gap-3">
              <div>
                  <span>User Name</span>
                  <input
                    className="bg-gray-100 border-gray-100 outline-none h-10 w-[100%] p-2 border-2 focus:bg-white focus:border-2 focus:border-black"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div>
                  <span>Email</span>
                  <input
                    className="bg-gray-100 border-gray-100 outline-none h-10 w-[100%] p-2 border-2 focus:bg-white focus:border-2 focus:border-black"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </div>
  
                <div>
                  <span>Password</span>
                  <input
                    className="bg-gray-100 border-gray-100 outline-none h-10 w-[100%] p-2 border-2 focus:bg-white focus:border-2 focus:border-black"
                    type="password"
                    name=""
                    id=""
                    placeholder="Enter your password"
                  />
                </div>

                <div>
                  <span>Confirm Password</span>
                  <input
                    className="bg-gray-100 border-gray-100 outline-none h-10 w-[100%] p-2 border-2 focus:bg-white focus:border-2 focus:border-black"
                    type="password"
                    name=""
                    id=""
                    placeholder="Please enter your password again."
                  />
                </div>
  
                <div>
                  <Link  to="/forgot_pass" className="underline text-xs">Already  a member? Login here.</Link>
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
