import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import login_img from  "../assets/login.svg"

function Login() {

  return (
    <>
      <div className="h-[6vh]">
        <Navbar />
      </div>
      <div className="bg-gray-200 h-[94vh] flex items-center justify-center flex-col">
      
        <div className="flex rounded-lg shadow-sm bg-white w-[50%]">
          <div className=" md:w-[50%] h-auto">
            <img src={login_img} alt="image" srcset="" className="rounded-l-lg " />
          </div>
          <div className="flex bg-white md:w-[50%] h-auto justify-center flex-col  gap-3 items-center rounded-r-lg">
            <div className="flex items-center mb-6 w-[90%]">
              <p className="text-4xl text-black ">Login Page</p>
            </div>
            <div className="w-[90%] justify-center flex flex-col gap-3">
              <div>
                <span>Email</span>
                <input
                  className="bg-gray-100 border-gray-100 outline-none h-10 w-[100%] p-2 border-2 focus:bg-white focus:border-2 focus:border-black"
                  type="text"
                  placeholder="Enter your email address"
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
                <Link  to="/forgot_pass" className="underline text-xs">Forget password ?</Link>
              </div>

              <div>
                <input
                  className="h-10 w-[100%] bg-black hover:bg-gray-900 text-white duration-300"
                  type="button"
                  value="Sign In"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Login;
