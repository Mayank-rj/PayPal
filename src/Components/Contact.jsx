import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <div className="p-14 flex flex-col gap-10 pt-20">
      <div>
        <h2 className="font-semibold text-2xl">
          Some other ways to <br /> connect with us
        </h2>
      </div>

      <div>
        <h4 className="font-medium mb-2">Want to speak with Sales right away?</h4>
        <a href="/" className="text-paypalBlue-400 font-bold">Call 877-794-7639</a>
      </div>

      <div>
        <h4 className="font-medium mb-2">Need help with your existing account?</h4>
        <a href="/" className="text-paypalBlue-400 font-bold">
          Visit out Help Center
          <span className="bg-paypalBlue-200 rounded-full p-2 ml-2">
            <FontAwesomeIcon icon={faArrowRightLong} size="lg" />
          </span>
        </a>
      </div>

      <div>
        <h4 className="font-medium mb-2">Want to helpful business insights?</h4>
        <a href="/" className="text-paypalBlue-400 font-bold">
          Visit out Business Resource Center
          <span className="bg-paypalBlue-200 rounded-full p-2 ml-2">
            <FontAwesomeIcon icon={faArrowRightLong} size="lg" />
          </span>
        </a>
      </div>
    </div>
  );
}
