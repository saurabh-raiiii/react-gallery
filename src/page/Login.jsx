import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Login() {
  let image_link =
    "https://images.unsplash.com/photo-1710631221945-202865ddd3a1?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="h-[6vh]">
        <Navbar />
      </div>
      <div className="bg-gray-200 h-[94vh] flex items-center justify-center flex-col">
      
        <div className="flex rounded-s-lg shadow-sm bg-white w-[50%]">
          <div className=" md:w-[50%] h-auto">
            <img src={image_link} alt="image" srcset="" className="rounded-lg" />
          </div>
          <div className="flex bg-white md:w-[50%] h-auto justify-center flex-col  gap-3 items-center ">
            <div className="flex items-center mb-14 w-[90%]">
              <p className="text-4xl text-black ">Login Page</p>
            </div>
            <div className="w-[90%] justify-center flex flex-col gap-3">
              <div>
                <span>Email</span>
                <input
                  className="bg-gray-100 border-gray-100 outline-none h-10 w-[100%] p-2 border-2 focus:bg-white focus:border-2 focus:border-black"
                  type="text"
                />
              </div>

              <div>
                <span>Password</span>
                <input
                  className="bg-gray-100 border-gray-100 outline-none h-10 w-[100%] p-2 border-2 focus:bg-white focus:border-2 focus:border-black"
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
