import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between my-2 items-center">
        {/* Logo section  */}
        <div className=" bg-orange-500 rounded-full md:w-12 md:h-12 flex justify-center items-center">
          <span className=" font-semibold text-base">Img</span>

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
            </li>
          </ul>
        </nav>

        {/* Auth Links Section */}
        <nav className="bg-green-400 p-4 rounded-full">
          <ul className="flex justify-center">
            <li className="mx-4">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-white active:text-white "
                    : " text-gray-900 ease-in-out hover:underline transition-colors duration-300 hover:text-white"
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
                    ? "ease-in-out hover:underline transition-colors duration-300 hover:text-white active:text-white "
                    : " text-gray-900 ease-in-out hover:underline transition-colors duration-300 hover:text-white"
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
