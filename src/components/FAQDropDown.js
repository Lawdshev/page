import React, {useState, useEffect} from "react";
import Arrowdown from "../assets/img/arrowdown.svg";

function FAQDropDown({ answer , question}) {
    const [show , setShow] = useState(false)


  return (
      <>
        <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-1 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  bg-white  text-gray-900 "
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={() => setShow(!show)}
              >
                <span>{question}</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>

            {show && (
             <div
              id="accordion-collapse-body-1"
              className=""
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 font-light border border-b-1 border-gray-200  ">
                <p className="mb-2 text-gray-500 ">
                  {answer}
                </p>
              </div>
            </div>
      )}
  </>

  );
}

export default FAQDropDown;
