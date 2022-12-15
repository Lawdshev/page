import React, {useState, useEffect} from "react";
import Arrowdown from "../assets/img/arrowdown.svg";

function FAQDropDown() {
    const [show1 , setShow1] = useState(false)
    const [show2 , setShow2] = useState(false)
    const [show3 , setShow3] = useState(false)
    const [show4 , setShow4] = useState(false)
    const [show5 , setShow5] = useState(false)


  return (
      <>
      <div className="mb-3">
        <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-1 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  bg-white  text-gray-900 "
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={() => setShow1(!show1)}
              >
                <span>Who is eligible for a Page loan?</span>
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

            {show1 && (
             <div
              id="accordion-collapse-body-1"
              className=""
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 font-light border border-b-1 border-gray-200  ">
                <p className="mb-2 text-gray-500 ">
                ANS: Salary Earners working with their current employer for more than six months with consistent net income are eligible for Page Loan.
                </p>
              </div>
            </div>
      )}
    </div>
    <div className="mb-3">
      <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-1 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  bg-white  text-gray-900 "
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={() => setShow2(!show2)}
              >
                <span>How much can I borrow?</span>
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

            {show2 && (
             <div
              id="accordion-collapse-body-1"
              className=""
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 font-light border border-b-1 border-gray-200  ">
                <p className="mb-2 text-gray-500 ">
                ANS: Minimum Loan amount is N200,000, <br/> Maximum loan amount is N5,000,000
                </p>
              </div>
            </div>
      )}
    </div>
    <div className="mb-3">
      <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-1 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  bg-white  text-gray-900 "
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={() => setShow3(!show3)}
              >
                <span>How long does it take?</span>
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

            {show3 && (
             <div
              id="accordion-collapse-body-1"
              className=""
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 font-light border border-b-1 border-gray-200  ">
                <p className="mb-2 text-gray-500 ">
                ANS: Disbursement within 3 hours
                </p>
              </div>
            </div>
      )}
    </div>
    <div className="mb-3">
      <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-1 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  bg-white  text-gray-900 "
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={() => setShow4(!show4)}
              >
                <span>What are other costs associated with this loan?</span>
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

            {show4 && (
             <div
              id="accordion-collapse-body-1"
              className=""
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 font-light border border-b-1 border-gray-200  ">
                <p className="mb-2 text-gray-500 ">
                ANS: No hidden charges
                </p>
              </div>
            </div>
      )}
    </div>
   < div className="mb-3">
      <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-1 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  bg-white  text-gray-900 "
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={() => setShow5(!show5)}
              >
                <span>What documents are required?</span>
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

            {show5 && (
             <div
              id="accordion-collapse-body-1"
              className=""
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 font-light border border-b-1 border-gray-200  ">
                <p className="mb-2 text-gray-500 ">
                ANS: BVN <br/> 6 month's statement of account <br/> Government issued ID Card <br/> Official Email address <br/> Work ID card.< br/> Employment/promotion letter`
                </p>
              </div>
            </div>
      )}
   </div>
  </>

  );
}

export default FAQDropDown;
