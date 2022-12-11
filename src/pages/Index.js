import React, { useState } from "react";
import { Location } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import CheckedIcon from "../assets/img/checked.svg";
import UncheckedIcon from "../assets/img/unchecked.svg";

function Index() {
  const [checked, setChecked] = useState("");
  const [nextPage, setNext] = useState(0);

  const handleNext = () => {
    if (nextPage === 0) {
      setNext((prev) => prev + 1);
    }
  };

  const handleContinue = () => {
    window.location.replace("/app/Eligibility");
  };
  return (
    <>
      <div
        className="w-full px-5 md:px-12 mx-auto py-3 md:py-10"
        style={{ backgroundColor: "#E5E5E5" }}
      >
        <div>
          <img src={Logo} style={{ width: "160px", height: "auto" }} />
        </div>
        <div className="w-full mx-auto py-8 md:py-16 block items-center justify-center">
          {nextPage === 0 && (
            <>
              <h3
                className="text-center text-2xl md:text-5xl"
                style={{ fontWeight: "bold", color: "#59595D" }}
              >
                Welcome to the Page <br /> loan application portal
              </h3>

              <p
                className="text-center mt-8 mx-auto font-medium md:text-xl text-lg "
                style={{
                  color: "#59595D",
                  maxWidth: "672px",
                  lineHeight: "30.89px",
                }}
              >
                This process shouldn't take more than 3 minutes if you have all
                documents handy. Choose the option that applies to you to
                proceed.
              </p>
              <div className="border-b mx-auto mt-12 w-4/5" />
              <div className="mx-auto my-12 md:w-2/5">
                <div className="flex gap-4 items-center my-6 text-sm md:text-lg">
                  <label
                    htmlFor="check-1"
                    style={{ cursor: "pointer", width: "40px", height: "auto" }}
                  >
                    {checked === "new" ? (
                      <img src={CheckedIcon} />
                    ) : (
                      <img src={UncheckedIcon} />
                    )}
                  </label>
                  <input
                    id="check-1"
                    value="new"
                    type="radio"
                    hidden
                    onClick={(e) => setChecked(e.target.value)}
                  />{" "}
                  Start a new loan application
                </div>
                <div className="flex gap-4 items-center my-6 text-sm md:text-lg">
                  <label
                    htmlFor="check-2"
                    style={{ cursor: "pointer", width: "40px", height: "auto" }}
                  >
                    {checked === "continue" ? (
                      <img src={CheckedIcon} />
                    ) : (
                      <img src={UncheckedIcon} />
                    )}
                  </label>
                  <input
                    id="check-2"
                    value="continue"
                    type="radio"
                    hidden
                    onClick={(e) => setChecked(e.target.value)}
                  />{" "}
                  Continue an existing loan application
                </div>
                <div className="flex gap-4 items-center my-6 text-sm md:text-lg">
                  <label
                    htmlFor="check-3"
                    style={{ cursor: "pointer", width: "40px", height: "auto" }}
                  >
                    {checked === "returning" ? (
                      <img src={CheckedIcon} />
                    ) : (
                      <img src={UncheckedIcon} />
                    )}
                  </label>
                  <input
                    id="check-3"
                    value="returning"
                    type="radio"
                    hidden
                    onClick={(e) => {
                      setChecked(e.target.value);
                      console.log(e.target.value);
                    }}
                  />{" "}
                  Returning customers
                </div>
              </div>
              <div className="mx-auto block">
                <button
                  style={{}}
                  onClick={() => handleContinue()}
                  className="mx-auto block w-4/5 text-lg font-bold py-4 md:w-2/5 md:py-8 text-white rounded-lg bg-orange-500"
                >
                  {" "}
                  continue{" "}
                </button>
              </div>
            </>
          )}

          {nextPage === 1 && (
            <>
              <div className="border-b w-4/5 mx-auto mb-10" />
              <div className="mx-auto md:w-2/5">
                <div>
                  <label>Personal Email Address</label>
                  <input
                    className="w-full md:h-16 h-10 mt-3 rounded px-4"
                    placeholder="Enter registered email address"
                  />
                </div>
                <div className="md:mt-10 mt-6">
                  <label>Password</label>
                  <input
                    className="w-full md:h-16 h-10 mt-3 rounded px-4"
                    placeholder="Enter password"
                  />
                </div>
                <button
                  onClick={() => handleContinue()}
                  className="mx-auto block w-full py-4 mt-12 text-lg font-bold md:py-8 text-white rounded-lg bg-orange-500"
                >
                  {" "}
                  continue{" "}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className="w-full px-5 md:px-12 mx-auto py-3 md:py-10 bg-white"
        style={{ backgroundColor: "white" }}
      >
        <h3
          className="text-center text-2xl font-bold"
          style={{ color: "#59595D" }}
        >
          Frequently Asked Questions
        </h3>

        <div
          id="accordion-collapse"
          className="md:w-3/5 mx-auto mt-8"
          data-accordion="collapse"
        >
          <div className="mb-3">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-1 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  bg-white  text-gray-900 "
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
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
            <div
              id="accordion-collapse-body-1"
              className=""
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 font-light border border-b-1 border-gray-200  ">
                <p className="mb-2 text-gray-500 ">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 ">
                  Check out this guide to learn how to{" "}
                  <a
                    href="/docs/getting-started/introduction/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    get started
                  </a>{" "}
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-1 border-gray-200 focus:ring-4 focus:ring-gray-200  hover:bg-gray-100"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span>How much can I borrow?</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 shrink-0"
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
            <div
              id="accordion-collapse-body-2"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div className="p-5 font-light border border-b-1 border-gray-200">
                <p className="mb-2 text-gray-500 ">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p className="text-gray-500 ">
                  Check out the{" "}
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Figma design system
                  </a>{" "}
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200    hover:bg-gray-100"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span>How long does it take?</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 shrink-0"
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
            <div
              id="accordion-collapse-body-3"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div className="p-5 font-light border border-t-0 border-gray-200 ">
                <p className="mb-2 text-gray-500 ">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 ">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 ">
                  Learn more about these technologies:
                </p>
                <ul className="pl-5 text-gray-500 list-disc ">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      className="text-blue-600 hover:underline"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-blue-600 hover:underline"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 border-b mx-auto my-12" />
        <div className="md:w-3/5 mx-auto" style={{color:"#59595D"}}>
          <h3 className="font-semibold">Representative example: </h3>
          <p className="text-sm">
            Representative example: Loan amount of ₦3,500,000 borrowed for 12
            months. Monthly Interest Rate: - 2.99%. No other fees. <br/><br/>Minimum and
            maximum loan term: 3 – 12 months.<br/><br/> 
          </p>
          <h3 className="font-semibold">Contact Details: </h3>
          <p  className="text-sm"> Phone: 017007243. Email: customer@pagefinancials.com</p>
          
        </div>
      </div>
    </>
  );
}

export default Index;
