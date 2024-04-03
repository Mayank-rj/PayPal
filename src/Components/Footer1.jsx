import React from "react";
import { footer1List } from "../assets/data/footer1";

export default function Footer1() {
  const footer1 ={
    heading : "font-bold text-md text-paypalBlue-800",
    hr : "mb-6 mt-2 h-px bg-gray-200 border-0 dark:bg-slate-400",
    textHover : "hover:text-paypalBlue-400"
  } 
  return (
    <>
      <div className="flex justify-between sm:w-full flex-wrap gap-10 md:gap-20 px-14 mb-10 py-20">

        {/* Small to medium Business */}

        <div className="p-2 w-full sm:w-2/6">
          <h1 className={footer1.heading}>
            Small-to-Medium Business
          </h1>
          <hr className={footer1.hr} />
          <div className="flex justify-between gap-8 flex-wrap">
            <div>
              <ul>
                <li className="mb-3">
                  <a className={`font-bold ${footer1.textHover}`} href="/">Introduction</a>
                </li>
                <li>
                  <a className={`font-bold ${footer1.textHover}`} href="/">Getting Started</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-3">All Solutions</p>
              <ul className="grid gap-3">
                {
                  footer1List.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className={footer1.textHover} href="/" >{item}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>

        {/* Enterprise */}

        <div className="p-2 w-full sm:w-2/6">
          <h1 className={footer1.heading}>Enterprise</h1>
          <hr className={footer1.hr} />
          <div className="flex justify-between gap-8 flex-wrap">
            <div>
              <p className="font-bold mb-3">Introduction</p>
              <a href="/" className={`font-bold ${footer1.textHover}`}>Marketplaces & Partners</a>
            </div>
            <div>
              <p className="font-bold mb-3">Platform & Solutions</p>
              <ul className="grid gap-3">
              {
                  footer1List.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className={footer1.textHover} href="/" >{item}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>


        {/* More */}
        <div className="p-2 w-full sm:w-1/6">
          <h1 className={footer1.heading}>More</h1>
          <hr className={footer1.hr} />
          <div>
            <ul className="grid gap-3">
              <li>
                <a href="/" className={`font-bold ${footer1.textHover}`}> Nonprofits</a>
              </li>
              <li>
                <a href="/" className={`font-bold ${footer1.textHover}`}> Pricing</a>
              </li>
              <li>
                <a href="/" className={`font-bold ${footer1.textHover}`}> Resource Center</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
