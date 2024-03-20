import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
        <nav className="flex justify-around top-0 static start-0 bg-gray-200 p-4 rounded-md ">
          <div className="flex items-center text-2xl text-center font-bold">
            <span>
              iMage
            </span>
          </div>
          <div className="flex items-center">
            <div className="mx-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                    : " text-gray-500 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
                }
              >
                Home
              </NavLink>
            </div>
            <div className="mx-4">
              <NavLink
                to="/gallary"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                    : " text-gray-500 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
                }
              >
                Gallery
              </NavLink>
            </div>
            <div className="mx-4">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                    : " text-gray-500 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
                }
              >
                About
              </NavLink>
            </div>
            <div className="mx-4">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                    : " text-gray-500 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-md ">
          <div className="flex justify-center">
            <div className="">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                    : " text-gray-500 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
                }
              >
                Sign in
              </NavLink>
            </div>
            <span className="text-gray-500">&#xa0;&#47;&#xa0;</span>
            <div className="">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                    : " text-gray-500 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
                }
              >
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
        </nav>
        
    </>
  );
}
