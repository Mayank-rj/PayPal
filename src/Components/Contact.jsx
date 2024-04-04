import {
  faAngleDown,
  faAngleUp,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { dropdown } from "../assets/data/dropdown";

export default function Contact() {
  const [countryDrop, setCountryDrop] = useState(false);
  const [saleDrop, setSaleDrop] = useState(false);
  const [yesDrop, setYesDrop] = useState(false);

  const [countryName, setCountryName] = useState("United States");
  const [saleName, setSaleName] = useState("Select Annual Sales");
  const [yesName, setYesName] = useState("No");

  const contactDetailStyle = {
    h4: "tracking-tight text-xl mb-4",
    a: "text-paypalBlue-400 text-xl font-semibold",
  };

  const inputStyle =
    "border rounded border-slate-400 focus:border-paypalBlue-400 outline-none text-base p-4 placeholder-slate-500";

  return (
    <div className="md:px-14 p-8 pt-28 gap-5 flex flex-wrap justify-between">
      <div className="flex flex-col gap-20 lg:w-1/2 w-full">
        <div>
          <h2 className="text-4xl">
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
      </div>
      <div className="lg:w-[45%] w-full lg:mt-[-300px] mt-0">
        <div className="bg-white text-black shadow-2xl rounded px-8 py-14 ">
          <h1 className="text-3xl">Get Started </h1>
          <h4 className="mt-4 mb-10 text-lg">
            Tell us a little about your business so we can connect you with the
            right people.
          </h4>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className={inputStyle}
              placeholder="First name*"
            />
            <input
              type="text"
              className={inputStyle}
              placeholder="Last name*"
            />
            <input
              type="text"
              className={inputStyle}
              placeholder="Work email*"
            />
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
              <div className="text-slate-500 absolute top-1 left-4">
                Country*
              </div>
              <button
                onClick={() => {
                  setCountryDrop((prev) => !prev);
                }}
                className="w-full flex justify-between"
              >
                {countryName}
                {!countryDrop ? (
                  <FontAwesomeIcon icon={faAngleDown} className="text-2xl" />
                ) : (
                  <FontAwesomeIcon icon={faAngleUp} className="text-2xl" />
                )}
              </button>
              {countryDrop && (
                <div>
                  {dropdown.country.map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer hover:bg-paypalBlue-200"
                      onClick={() => {
                        setCountryName(item);
                        setCountryDrop((prev) => !prev);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border rounded border-slate-400 focus:border-paypalBlue-400 outline-none pt-7 pb-1 px-4 relative">
              <div className="text-slate-500 absolute top-1 left-4 text-xs md:text-base">
                Estimated annual sales*
              </div>
              <button
                onClick={() => setSaleDrop((prev) => !prev)}
                className="w-full flex justify-between"
              >
                {saleName}
                {!saleDrop ? (
                  <FontAwesomeIcon icon={faAngleDown} className="text-2xl" />
                ) : (
                  <FontAwesomeIcon icon={faAngleUp} className="text-2xl" />
                )}
              </button>
              {saleDrop && (
                <div>
                  {dropdown.sale.map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer hover:bg-paypalBlue-200"
                      onClick={() => {
                        setSaleName(item);
                        setSaleDrop((prev) => !prev);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border rounded border-slate-400 focus:border-paypalBlue-400 outline-none pt-7 pb-1 px-4 relative">
              <div className="text-slate-500 absolute top-1 left-4 text-xs md:text-base">
                Do you already have a PayPal Business account?*
              </div>
              <button
                onClick={() => setYesDrop((prev) => !prev)}
                className="w-full flex justify-between"
              >
                {yesName}
                {!yesDrop ? (
                  <FontAwesomeIcon icon={faAngleDown} className="text-2xl" />
                ) : (
                  <FontAwesomeIcon icon={faAngleUp} className="text-2xl" />
                )}
              </button>
              {yesDrop && (
                <div>
                  {dropdown.yes.map((item, index) => (
                    <div key={index} className="cursor-pointer hover:bg-paypalBlue-200"
                    onClick={() => {
                      setYesName(item);
                      setYesDrop((prev) => !prev);
                    }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <input type="checkbox" id="check" className="mr-4" />
              <label htmlFor="check" className="text-sm">
                I have read and accepted the{" "}
                <a href="/" className="text-paypalBlue-400">
                  {" "}
                  PayPal Privacy Policy
                </a>
                .
              </label>
            </div>
            <p className="text-xs font-semibold text-slate-700 ml-7">
              I consent to PayPal contacting me by phone or by email, and to
              sending me product or industry information relevant to my query. I
              know I can unsubscribe at any time.
            </p>
            <input
              type="submit"
              className="bg-paypalBlue-400 md:w-80 p-3 px-12 rounded-3xl text-white m-auto cursor-pointer hover:bg-paypalBlue-800"
            />
            <p className="text-slate-700 m-auto">* Required fields.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
