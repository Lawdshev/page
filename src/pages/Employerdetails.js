import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Arrowdown from "../assets/img/arrowdown.svg";
// import CheckedIcon from "../assets/img/checked.svg";
// import UncheckedIcon from "../assets/img/unchecked.svg";
import Naira from "../assets/img/naira.svg";
import Typeahed from "../components/Typeahed";
import Textinput from "../components/Textinput";
import FileUpload from "../components/FileUpload";
import { states } from "../utils/selectData";
import EmailModal from "../components/EmailModal";

function Loandetails() {
  const [next, setNext] = useState("");
  const [meanOfID, setMeansOfID] = useState("");
  const [show, setShow] = useState(false);

  const [timer, setTimer] = useState(null);

  const handleClose = () => setShow(false);

  const inputChanged = (val) => {
    // setInputValue(e.target.value)
    console.log(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(val));
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(val) === false) {
      return;
    }else{
      clearTimeout(timer)

      const newTimer = setTimeout(() => {
        setShow(true)
      }, 500)
  
      setTimer(newTimer)
    }

   

  
  };

  return (
    <div className="w-full py-10 px-4">
      <EmailModal show={show} handleClose={handleClose} />
      <div className="border-b w-full md:w-4/5 mx-auto mt-16" />
      <div className="h-10 px-3 py-2 ml-4 bg-orange-500 md:w-2/5 text-white font-bold">
        EMPLOYER/LOAN DETAILS
      </div>
      <div className="md:w-4/5  w-full md:flex gap-8 items-center flex-shrink-0 flex-wrap pt-10 mx-auto">
        {/* <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Loan Amount</label>
          <div className="relative">
            <img  className="absolute" style={{top:"33px", left:"15px"}} src={Naira} alt="N" />
            <input
            className="w-full md:h-16 h-10 mt-3 rounded pl-16 px-4"
            placeholder="Amount"
          />
          </div>
          
        </div> */}

        <div className="block md:w-10/12 md:ml-4 w-full">
          <label className="block font-medium">Employer Name</label>
          <Textinput placeholder="Enter employer name" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Employment Start Date</label>
          <Textinput placeholder="Enter Surname" type="date" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Net Monthly Income</label>
          <Textinput placeholder="Enter net monthly income" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Loan Amount</label>
          <Textinput placeholder="Enter loan amount" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Loan Tenor</label>
          <Typeahed
            onInputChange={(val) => console.log(val)}
            placeholder="Select loan tenor"
            options={[
              { name: "1 month" },
              { name: "6 month" },
              { name: "1 year" },
            ]}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">
            Other Monthly Loan Repayments
          </label>
          <Textinput placeholder="Other monthly loan repayment" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Official Email Address</label>
          <Textinput
            placeholder="Enter official email address"
            type="email"
            onInputChange={(val) => inputChanged(val)}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">
            Official Email Verification Code
          </label>
          <Textinput placeholder="Enter verification code" type="text" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Upload Staff ID</label>
          <FileUpload placeholder="Upload staff ID" />
        </div>

        <div className="block md:w-7/12 w-full">
          <label className="block font-medium">Employer Address</label>
          <textarea
            placeholder="Enter residential address"
            className="w-full px-3 py-3 mt-3 rounded"
          />
        </div>
      </div>
      <div className="px-12 mt-16 mx-auto flex items-center justify-between">
        <button className="md:h-20 md:w-64 text-white font-semibold bg-orange-500 rounded">
          Previous
        </button>
        <button className="md:h-20 md:w-64 text-white font-semibold bg-orange-500 rounded">
          Save & Continue
        </button>
      </div>
    </div>
  );
}

export default Loandetails;
