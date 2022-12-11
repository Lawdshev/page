import React, { useState } from "react";
import Arrowdown from "../assets/img/arrowdown.svg";
// import CheckedIcon from "../assets/img/checked.svg";
// import UncheckedIcon from "../assets/img/unchecked.svg";
import Naira from "../assets/img/naira.svg"

function Loandetails() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [next, setNext] = useState("");

  return (
    <div className="w-full py-10 px-4">
      <div className="border-b w-4/5 mx-auto mt-16" />
      <div className="h-10 px-3 py-2 ml-4 bg-orange-500 md:w-1/6 text-white font-bold">
      Loan Details
      </div>
      <h3 className="md:ml-10 my-10">Please note you can only reduce tenor and amount.</h3>
        <div className="md:w-3/5 w-full mx-auto">
        <div>
          <label className="block font-medium">Loan Amount</label>
          <div className="relative">
            <img  className="absolute" style={{top:"33px", left:"15px"}} src={Naira} alt="N" />
            <input
            className="w-full md:h-16 h-10 mt-3 rounded pl-16 px-4"
            placeholder="Amount"
          />
          </div>
          
        </div>

        <div className="my-10"> 
          <label className="block font-medium">Loan Tenor</label>
          <div className="relative">
            <img  className="absolute" style={{top:"33px", right:"15px"}} src={Arrowdown} alt="N" />
            <input
            className="w-full md:h-16 h-10 mt-3 rounded pr-16 px-4"
            placeholder="How many months e.g 6"
          />
          </div>
          
        </div>
        <div>
          <label className="block font-medium">Your Monthly Repayment</label>
          <div className="relative">
            <img  className="absolute" style={{top:"33px", left:"15px"}} src={Naira} alt="N" />
            <input
            className="w-full md:h-16 h-10 mt-3 rounded pl-16 px-4"
            placeholder="Amount"
          />
          </div>
          
        </div>
        

        </div>
        <div className="px-12 mt-16 mx-auto flex items-center justify-between">
            <button className="md:h-20 md:w-64 text-white font-semibold bg-orange-500 rounded">Previous</button>
            <button className="md:h-20 md:w-64 text-white font-semibold bg-orange-500 rounded">Save & Continue</button>
        </div>
    </div>
  );
}

export default Loandetails;
