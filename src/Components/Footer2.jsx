import { Link } from "react-router-dom";
import { footer2List } from "../assets/data/footer2";

export default function Footer2() {
  const textStyle = "text-paypalBlue-800 font-bold hover:text-paypalBlue-400";
  return (
    <>
      <div className="px-6">

        {/* PayPal image */}
        <div>
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXQ-EAw8y32fqBTYiLJn1ic7J10tipwuspYGeUo0q&s"
            alt="paypal-logo"
          />
        </div>

        <div className="flex justify-between my-4 gap-4 flex-wrap">
          <div>
            <ul className="flex gap-8 flex-wrap">
              {footer2List.list1.map((item, index) => (
                <li key={index}>
                  <Link className={textStyle} to="/">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Flag Image */}
          <div>
            <img
              className="h-6"
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BkbWlzYzJiYXRjaDItbG9jOTc1MTU1NDktaW1hZ2VfNS5qcGc.jpg"
              alt="language-flag"
            />
          </div>
        </div>
        <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-slate-400" />
        <div className="flex flex-wrap justify-between my-4">
          <div>
            <ul className="flex gap-8 flex-wrap">
            {footer2List.list2.map((item, index) => (
                <li key={index}>
                  <Link className={textStyle} to="/">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="md:hidden h-px my-6 bg-gray-200 border-0 dark:bg-slate-400" />
          </div>
          <div>
            <ul className="flex gap-8 flex-wrap">
              <li className="text-slate-600">&copy; 1999-2022 </li>
              {footer2List.list3.map((item, index) => (
                <li key={index}>
                  <Link className={textStyle} to="/">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
