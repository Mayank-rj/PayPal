import React from "react";

export default function Header() {
  return (
    <div className="bg-paypalBlue-800 justify-center items-center px-2 md:items-start text-center md:text-left flex md:pl-14 flex-col gap-4" style={{height: "60vh"}}>
      <h1 className="text-5xl font-light text-white">
        Connect with our <br /> sales team
      </h1>
      <p className="text-white tracking-wide">
        Let's talk about how our payment solutions can help <br /> grow your
        business.
      </p>
    </div>
  );
}
