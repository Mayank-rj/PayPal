import {
  faAngleDown,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  const contactDetailStyle = {
    h4: "font-medium text-2xl mb-4",
    a: "text-paypalBlue-400 text-xl font-bold",
  };

  const rmArrow = {
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    appearance: "none",
  };

  const inputStyle =
    "border rounded border-slate-400 focus:border-paypalBlue-400 outline-none text-base placeholder:font-thin p-4 placeholder-slate-500";

  return (
    <div className="md:p-14 p-8 flex flex-col gap-20 pt-20 h-[130vh] relative">
      <div>
        <h2 className="font-semibold text-4xl">
          Some other ways to <br /> connect with us
        </h2>
      </div>

      <div>
        <h4 className={contactDetailStyle.h4}>
          Want to speak with Sales right away?
        </h4>
        <a href="/" className={contactDetailStyle.a}>
          Call 877-794-7639
        </a>
      </div>

      <div>
        <h4 className={contactDetailStyle.h4}>
          Need help with your existing account?
        </h4>
        <a href="/" className={contactDetailStyle.a}>
          Visit out Help Center
          <span className="bg-paypalBlue-200 rounded-full p-2 ml-2">
            <FontAwesomeIcon icon={faArrowRightLong} size="lg" />
          </span>
        </a>
      </div>

      <div>
        <h4 className={contactDetailStyle.h4}>
          Want to helpful business insights?
        </h4>
        <a href="/" className={contactDetailStyle.a}>
          Visit out Business Resource Center
          <span className="bg-paypalBlue-200 rounded-full p-2 ml-2">
            <FontAwesomeIcon icon={faArrowRightLong} size="lg" />
          </span>
        </a>
      </div>

      <div
        className="lg:absolute right-14 bg-white text-black lg:w-2/5 w-full shadow-2xl rounded px-8 py-14 mr-10"
        style={{ top: "-192px" }}
      >
        <h1 className="text-3xl font-bold">Get Started </h1>
        <h4 className="mt-4 mb-10 font-semibold">
          Tell us a little about your business so we can connect you with the
          right people.
        </h4>
        <form className="flex flex-col gap-4">
          <input type="text" className={inputStyle} placeholder="First name*" />
          <input type="text" className={inputStyle} placeholder="Last name*" />
          <input type="text" className={inputStyle} placeholder="Work email*" />
          <input
            type="text"
            className={inputStyle}
            placeholder="Phone number*"
          />
          <input
            type="text"
            className={inputStyle}
            placeholder="Company name*"
          />
          <input
            type="text"
            className={inputStyle}
            placeholder="Company website*"
          />
          <div className="border rounded border-slate-400 focus:border-paypalBlue-400 outline-none pt-7 pb-1 px-4 relative">
            <label
              htmlFor="country"
              className="text-slate-500 absolute top-1 left-4 font-thin"
            >
              Country*
            </label>
            <select
              id="country"
              className="w-full outline-none bg-transparent"
              style={rmArrow}
            >
              <option value="United States">United States</option>
              <option value="United States">India</option>
              <option value="United States">Pakistan</option>
            </select>
            <label
              htmlFor="country"
              className="absolute right-4 top-5 cursor-pointer"
            >
              <FontAwesomeIcon icon={faAngleDown} className="text-2xl" />
            </label>
          </div>

          <div className="border rounded border-slate-400 focus:border-paypalBlue-400 outline-none pt-7 pb-1 px-4 relative">
            <label
              htmlFor="sale"
              className="text-slate-500 absolute top-1 left-4 font-thin"
            >
              Estimated annual sales*
            </label>
            <select
              id="sale"
              className="w-full outline-none bg-transparent"
              style={rmArrow}
            >
              <option value="annual sale">Select Annual Sales</option>
              <option value="crore1">1 crore+</option>
              <option value="crore5">5 crore+</option>
            </select>
            <label
              htmlFor="sale"
              className="absolute right-4 top-5 cursor-pointer"
            >
              <FontAwesomeIcon icon={faAngleDown} className="text-2xl" />
            </label>
          </div>

          <div className="border rounded border-slate-400 focus:border-paypalBlue-400 outline-none pt-7 pb-1 px-4 relative">
            <label
              htmlFor="account"
              className="text-slate-500 absolute top-1 left-4 font-thin"
            >
              Do you already have a PayPal Business account?*
            </label>
            <select
              id="account"
              className="w-full outline-none bg-transparent"
              style={rmArrow}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <label
              htmlFor="account"
              className="absolute right-4 top-5 cursor-pointer"
            >
              <FontAwesomeIcon icon={faAngleDown} className="text-2xl" />
            </label>
          </div>
          <div>
            <input type="checkbox" id="check" className="mr-4" />
            <label htmlFor="check" className="font-semibold">
              I have read and accepted the PayPal Privacy Policy.
            </label>
          </div>
          <p className="text-xs font-semibold text-slate-700 ml-7">
            I consent to PayPal contacting me by phone or by email, and to
            sending me product or industry information relevant to my query. I
            know I can unsubscribe at any time.
          </p>
          <input type="submit" className="bg-paypalBlue-400 w-80 p-3 rounded-3xl text-white m-auto cursor-pointer hover:bg-paypalBlue-800" />
          <p className="font-bold m-auto">* Required fields.</p>
        </form>
      </div>
    </div>
  );
}
