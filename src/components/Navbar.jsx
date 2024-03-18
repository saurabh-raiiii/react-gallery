import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-200 p-4 rounded-md ">
        <ul className="flex justify-center">
          <li className="mx-4">
            <NavLink
              to="/"
              className={({isActive}) =>
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
               className={({isActive}) =>
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
               className={({isActive}) =>
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
               className={({isActive}) =>
                isActive
                  ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                  : " text-gray-600 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="/login"
               className={({isActive}) =>
                isActive
                  ? "ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500 active "
                  : " text-gray-600 ease-in-out hover:underline transition-colors duration-300 hover:text-orange-500"
              }
            >
              Sign In
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
