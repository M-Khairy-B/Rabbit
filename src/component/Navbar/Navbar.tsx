import { FC, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@public/images/logo.png";
import CloseIcon from "../ui/icons/CloseIcon";
import SunnyIcon from "../ui/icons/SunnyIcon";
import MoonIcon from "../ui/icons/MoonIcon";
import ToggleIcon from "../ui/icons/ToggleIcon";

export const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <nav className="bg-[#124830] border-gray-200 relative dark:bg-gray-800">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8 dark:filter dark:grayscale"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => darkModeHandler()}
              id="theme-toggle"
              data-tooltip-target="tooltip-toggle"
              type="button"
              className="text-gray-500 block md:hidden  items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              {dark && <SunnyIcon />}
              {!dark && <MoonIcon />}
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
            >
              <ToggleIcon className="text-[#DCFD51] dark:text-white" />
            </button>
          </div>
          <div
            className={`${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } fixed inset-0 bg-[#124830] bg-opacity-95 transform transition-all duration-300 z-10 md:relative md:translate-x-0 md:opacity-100 md:bg-transparent md:z-auto`}
          >
            <div className="flex justify-between p-4 md:hidden">
              <Link to="/" onClick={toggleMenu} className="">
                <img
                  src={logo}
                  className="h-8 dark:filter dark:grayscale"
                  alt="Logo"
                />
              </Link>
              <button
                type="button"
                onClick={toggleMenu}
                aria-label="Close menu"
                className="p-2 text-gray-500 rounded-lg focus:outline-none"
              >
                <CloseIcon className="text-[#DCFD51] dark:text-white" />
              </button>
            </div>
            <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:items-center">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-[#DCFD51] rounded md:bg-transparent md:p-0 dark:text-gray-400 hover:bg-gray-100 md:hover:bg-transparent "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-[#DCFD51] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2 px-3 text-[#DCFD51] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block py-2 px-3 text-[#DCFD51] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-[#DCFD51] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() => darkModeHandler()}
                  id="theme-toggle"
                  data-tooltip-target="tooltip-toggle"
                  type="button"
                  className="text-gray-500 hidden md:block  items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                >
                  {dark && <SunnyIcon />}
                  {!dark && <MoonIcon />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
