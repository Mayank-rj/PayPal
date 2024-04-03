import React from "react";

export default function Footer1() {
  return (
    <>
      <div className="flex justify-between sm:w-full flex-wrap gap-20 px-14 mb-10">
        {/* Small to medium Business */}

        <div className="p-2 w-full sm:w-2/6">
          <h1 className="font-bold text-md text-paypalBlue-800">
            Small-to-Medium Business
          </h1>
          <hr className="mb-6 mt-2 h-px bg-gray-200 border-0 dark:bg-slate-400" />
          <div className="flex justify-between gap-8 flex-wrap">
            <div>
              <ul>
                <li className="mb-3">
                  <a className="font-bold hover:text-paypalBlue-400" href="/">Introduction</a>
                </li>
                <li>
                  <a className="font-bold hover:text-paypalBlue-400" href="/">Getting Started</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-3">All Solutions</p>
              <ul className="grid gap-3">
                <li>
                  <a href="/" className="hover:text-paypalBlue-400"> Accept Payments</a>
                </li>
                <li>
                  <a href="/" className="hover:text-paypalBlue-400"> Make Payments</a>
                </li>
                <li>
                  <a href="/" className="hover:text-paypalBlue-400"> Manage Risk</a>
                </li>
                <li>
                  <a href="/" className="hover:text-paypalBlue-400"> Accelerate Growth</a>
                </li>
                <li>
                  <a href="/" className="hover:text-paypalBlue-400"> Streamline Operations</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enterprise */}

        <div className="py-2 w-full sm:w-2/6">
          <h1 className="font-bold text-md text-paypalBlue-800">Enterprise</h1>
          <hr className="mb-6 mt-2 h-px bg-gray-200 border-0 dark:bg-slate-400" />
          <div className="flex justify-between  gap-8 flex-wrap">
            <div>
              <p className="font-bold mb-3">Introduction</p>
              <a href="/" className="font-bold hover:text-paypalBlue-400">Marketplaces & Partners</a>
            </div>
            <div>
              <p className="font-bold mb-3">Platform & Solutions</p>
              <ul className="grid gap-3">
                <li>
                  <a href="/" className="hover:text-paypalBlue-400"> Platform & Solutions</a>
                </li>
                <li>
                  <a href="/" className="hover:text-paypalBlue-400"> Accept Payments</a>
                </li>
                <li>
                  <a href="/" className="hover:text-paypalBlue-400"> Make Payments</a>
                </li>
                <li>
                  <a href="/" className="hover:text-paypalBlue-400"> Manage Risk</a>
                </li>
                <li>
                  <a href="/" className="hover:text-paypalBlue-400"> Accelerate Growth</a>
                </li>
                <li>
                  <a href="/" className="hover:text-paypalBlue-400"> Streamline Operations</a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        {/* More */}
        <div className="py-2 w-full sm:w-1/6">
          <h1 className="font-bold text-md text-paypalBlue-800">More</h1>
          <hr className="mb-6 mt-2 h-px bg-gray-200 border-0 dark:bg-slate-400" />
          <div>
            <ul className="grid gap-3">
              <li>
                <a href="/" className="font-bold hover:text-paypalBlue-400"> Nonprofits</a>
              </li>
              <li>
                <a href="/" className="font-bold hover:text-paypalBlue-400"> Pricing</a>
              </li>
              <li>
                <a href="/" className="font-bold hover:text-paypalBlue-400"> Resource Center</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
