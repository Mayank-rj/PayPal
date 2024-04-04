import React from "react";
import logo from "../assets/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="h-20 flex px-4 items-center">
          {/* Logo */}
          <div className="mx-4">
            <Link to="/">
              <img className="h-12" src={logo} alt="paypal-logo" />
            </Link>
          </div>

          {/* Menu */}
          <div className="mx-4 md:inline-block hidden ">
            <ul className="flex gap-x-4">
              <li>
                <Link
                  className="text-paypalBlue-800 font-base hover:text-paypalBlue-400"
                  to="/"
                >
                  Personal
                </Link>
              </li>
              <li>
                <Link
                  className="text-paypalBlue-800 font-base hover:text-paypalBlue-400"
                  to="/"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  className="text-paypalBlue-800 font-base hover:text-paypalBlue-400"
                  to="/"
                >
                  Developer
                </Link>
              </li>
              <li>
                <Link
                  className="text-paypalBlue-800 font-base hover:text-paypalBlue-400"
                  to="/"
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-auto md:inline-block hidden">
            <button className="border-2 border-paypalBlue-800 text-paypalBlue-800 p-2 px-8 mx-2 rounded-3xl hover:bg-paypalBlue-800 hover:text-white">
              Log In
            </button>
            <button className="text-white border-2 border-paypalBlue-800 p-2 px-7 mx-2 rounded-3xl bg-paypalBlue-800 hover:bg-transparent hover:text-paypalBlue-800 hover:border-paypalBlue-800">
              Sign Up
            </button>
          </div>

          <div className="ml-auto block md:hidden">
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
        </nav>
      </header>
    </>
  );
}
