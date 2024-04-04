import React from "react";
import logo from "../assets/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="h-20 flex px-4 items-center">
          <div className="mx-4">
            <img className="h-12" src={logo} alt="paypal-logo" />
          </div>
          <div className="mx-4 md:inline-block hidden ">
            <ul className="flex gap-x-4">
              <li>
                <a
                  className="text-paypalBlue-800 font-base hover:text-paypalBlue-400"
                  href="/"
                >
                  Personal
                </a>
              </li>
              <li>
                <a
                  className="text-paypalBlue-800 font-base hover:text-paypalBlue-400"
                  href="/"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  className="text-paypalBlue-800 font-base hover:text-paypalBlue-400"
                  href="/"
                >
                  Developer
                </a>
              </li>
              <li>
                <a
                  className="text-paypalBlue-800 font-base hover:text-paypalBlue-400"
                  href="/"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-auto md:inline-block hidden">
            <button className="border-2 border-paypalBlue-800 text-paypalBlue-800 p-2 px-8 mx-2 rounded-3xl hover:bg-paypalBlue-800 hover:text-white">
              Log In
            </button>
            <button
              className="text-white border-2 border-paypalBlue-800 p-2 px-7 mx-2 rounded-3xl bg-paypalBlue-800 hover:bg-transparent hover:text-paypalBlue-800 hover:border-paypalBlue-800"
            >
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
