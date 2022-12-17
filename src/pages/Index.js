import React, { useState } from "react";
import { Location } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import CheckedIcon from "../assets/img/checked.svg";
import UncheckedIcon from "../assets/img/unchecked.svg";
import FAQDropDown from "../components/FAQDropDown";
import FAQs from "../utils/FAQs";

function Index() {
  const [checked, setChecked] = useState("");
  const [nextPage, setNext] = useState(0);

  const handleNext = () => {
    if (nextPage === 0) {
      setNext((prev) => prev + 1);
    }
  };

  const handleContinue = () => {
    // Added route to the continue existing loan and continue as an existing customer check-box
    if(checked === "new"){
      window.location.replace("/app/Eligibility");
      return
    }
    {
      window.location.replace("/login");
    }
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
        {/* created a FAQDropDown Components inside Component Folder */}
        <FAQDropDown/> 
        </div>
        {/* footer */}
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
