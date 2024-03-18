import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-200 p-4 rounded-md ">
        <ul className="flex justify-center">
          <li className="mx-4">
            <NavLink
              to="/"
              className="text-gray-600 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
            >
              Home
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="gallary"
              className={(isActive) => [
                isActive ? "text-orange-500" : "text-gary-600",
              ].join(" ease-in-out hover:underline  transition-colors duration-300 hover:text-orange-500 ")}
              
            >
              Gallery
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="about"
              className="text-gray-600 ease-in-out hover:underline  transition-colors duration-300 hover:text-orange-500"
            >
              About
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="contact"
              className="text-gray-600 ease-in-out hover:underline  transition-colors duration-300 hover:text-orange-500"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
