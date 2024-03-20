import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between my-2 items-center">
        {/* Logo section  */}
        <div className=" bg-blue-gray-500 rounded-full md:w-12 md:h-12">
          <img src="" />
        </div>

        {/* ues ection  */}
        <nav className="bg-gray-200 p-4 rounded-full ">
          <ul className="flex justify-center">
            <li className="mx-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                    : " text-gray-600 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                to="/gallary"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                    : " text-gray-600 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                    : " text-gray-600 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
                }
              >
                About
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                    : " text-gray-600 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Auth Links Section */}
        <nav className="bg-gray-200 p-4 rounded-full">
          <ul className="flex justify-center">
            <li className="mx-4">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                    : " text-gray-600 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
                }
              >
                Sign In
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                    : " text-gray-600 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
