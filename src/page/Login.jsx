import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Login() {
  let image_link =
    "https://images.unsplash.com/photo-1710678236701-f815e4d3173e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="bg-orange-200 w-screen h-screen flex items-center justify-center">
        <div className="flex rounded-lg shadow-sm p-4 bg-white">
          <div className=" md:w-96 h-auto">
            <img src={image_link} alt="image" srcset="" />
          </div>
          <div className="flex bg-white w-[50%] h-auto justify-center flex-col  gap-3 items-center ">
            <div className="flex items-center mb-20 w-[90%]">
              <p className="text-5xl text-black ">Login Page</p>
            </div>
            <div className="w-[90%] justify-center flex flex-col gap-3">
              <div>
                <span>Email</span>
                <input
                  className="bg-gray-100 border-gray-600 outline-none h-10 w-[100%] p-2 focus:bg-white focus:border-2 focus:border-black"
                  type="text"
                />
              </div>

              <div>
                <span>Password</span>
                <input
                  className="bg-gray-100 border-gray-600 outline-none h-10 w-[100%] p-2 focus:bg-white focus:border-2 focus:border-black "
                  type="password"
                  name=""
                  id=""
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
