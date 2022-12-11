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
        className="w-full min-h-screen px-5 md:px-12 mx-auto py-3 md:py-10"
        style={{ backgroundColor: "#E5E5E5" }}
      >
        <div>
          <img src={Logo} style={{ width: "160px", height: "auto" }} />
        </div>
        <div className="w-full mx-auto py-8 md:py-16 block items-center justify-center">

             <h3 className="text-center mb-3 text-5xl font-semibold" style={{color:"#59595D"}}>Application Successful</h3>
             <h5 className="text-center  mb-8 text-xl" style={{color:"#59595D"}}>Your application has been submitted successfully.  </h5>
              <div className="mx-auto md:w-2/5">
                
                <button
                    onClick={() => handleContinue()}
                className="mx-auto block w-full py-4 mt-12 text-lg font-bold md:py-8 text-white rounded-lg bg-orange-500"
                >
                {" "}
                close{" "}
                </button>
                
              </div>
          
        </div>
      </div>
    
    </>
  );
}

export default Saveprofile;
