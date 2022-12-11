import React, { useState } from "react";
import {Location} from "react-router-dom"
import Logo from "../assets/img/logo.svg";
import CheckedIcon from "../assets/img/checked.svg"
import UncheckedIcon from "../assets/img/unchecked.svg"

function Saveprofile() {
  const [checked, setChecked] = useState("");
  const [nextPage, setNext] = useState(0)

  const handleNext = () => {
    if(nextPage === 0) {
      setNext((prev) => prev + 1)
    }
    
  }

  const handleContinue = () => {
    window.location.replace("/app")
  }
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

            <div className="border-b w-4/5 mx-auto mb-10" />

             <h3 className="text-center mb-3 text-5xl font-semibold" style={{color:"#59595D"}}>Save your profile</h3>
             <h5 className="text-center  mb-8 text-2xl" style={{color:"#59595D"}}>Enter your email and password to save your profile. </h5>
              <div className="mx-auto md:w-2/5">
                <div>
                <label>Personal Email Address</label>
                <input className="w-full md:h-16 h-10 mt-3 rounded px-4" placeholder="Enter registered email address" />
                </div>
                <div className="md:mt-10 mt-6">
                <label>Password</label>
                <input className="w-full md:h-16 h-10 mt-3 rounded px-4" placeholder="Enter password" />
                </div>
                <button
                onClick={() => handleContinue()}
              className="mx-auto block w-full py-4 mt-12 text-lg font-bold md:py-8 text-white rounded-lg bg-orange-500"
            >
              {" "}
              continue{" "}
            </button>
                
              </div>
          
        </div>
      </div>
    
    </>
  );
}

export default Saveprofile;
