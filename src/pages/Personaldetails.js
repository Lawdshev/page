import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import Arrowdown from "../assets/img/arrowdown.svg";
// import CheckedIcon from "../assets/img/checked.svg";
// import UncheckedIcon from "../assets/img/unchecked.svg";
import Naira from "../assets/img/naira.svg";
import Typeahed from "../components/Typeahed";
import Textinput from "../components/Textinput";
import FileUpload from "../components/FileUpload";
import { states } from "../utils/selectData";


function Loandetails() {
  const [next, setNext] = useState("");
  const [meanOfID, setMeansOfID] = useState("");
  const [surname, setsurname] = useState('');
  const [firstname, setFirstname] = useState('')
  const [middlename, setMiddlename] = useState('')
  const [mobile, setMobile] = useState('')
  const [dependents, setDependents] = useState('')
  const [maritalstatus, setMaritalstatus] = useState('')
  const [residencestate, setResidencestate] = useState('')
  const [education, setEducation] = useState('')
  const [referral, setReferral] = useState('')
  const [lga, setLga] = useState('')
  const [residentialaddress, setResidentialaddress] = useState('')
  const [idtype, setIdtype] = useState('');
  const [idnumber, setIdnumber] = useState('')

  return (
    <div className="w-full py-10 px-4">
      <div className="border-b w-full md:w-4/5 mx-auto mt-16" />
      <div className="h-10 px-3 py-2 ml-4 bg-orange-500 md:w-1/6 text-white font-bold">
        Personal Details
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

        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Title</label>
          <Typeahed
            onInputChange={(val) => console.log(val)}
            placeholder="Select Title"
            options={[{ name: "Mr" }, { name: "Mrs" }, { name: "Miss" }]}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Surname</label>
          <Textinput placeholder="Enter Surname" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">First Name</label>
          <Textinput placeholder="Enter first name" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Middle Name</label>
          <Textinput placeholder="Enter middle name" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Phone Number</label>
          <Textinput placeholder="Enter phone number" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">No. of Dependents</label>
          <Textinput placeholder="No. of dependents" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Marital Status</label>
          <Typeahed
            onInputChange={(val) => console.log(val)}
            placeholder="Select marital status"
            options={[{ name: "married" }, { name: "single" }]}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">State of Residence</label>
          <Typeahed
            onInputChange={(val) => console.log(val)}
            placeholder="Select state of residence"
            options={states}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          
          <label className="block font-medium">Education</label>
          <Typeahed
            onInputChange={(val) => console.log(val)}
            placeholder="Highest level of education"
            options={[{ name: "Primary" }, { name: "Secondary" },{name: "Tertiary"}]}
          />
          
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">
            How did you hear about Page?
          </label>
          <Typeahed
            onInputChange={(val) => console.log(val)}
            placeholder="How did you hear about us?"
            options={[
              { name: "facebok" },
              { name: "google" },
              { name: "a friend" },
              { name: "advertisement" },
            ]}
          />
        </div>
        <div className="block md:w-7/12 w-full">
          <label className="block font-medium">Residential Address</label>
          <textarea
            placeholder="Enter residential address"
            className="w-full px-3 py-3 mt-3 rounded"
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Means of Identification </label>
          <Typeahed
            onInputChange={(val) => setMeansOfID(val)}
            placeholder="Select means of identification"
            options={[
              { name: "international passport" },
              { name: "drivers license" },
              { name: "nation ID" },
            ]}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">ID Number</label>
          <Textinput placeholder="Enter ID number" />
        </div>
        {meanOfID === "international passport" ||
          (meanOfID === "drivers license" && (
            <>
              <div className="block md:w-5/12 w-full">
                <label className="block font-medium">Issuance Date</label>
                <Textinput placeholder="Enter issuance date" type="date" />
              </div>
              <div className="block md:w-5/12 w-full">
                <label className="block font-medium">Issuance Date</label>
                <Textinput placeholder="Expiry Date" type="date" />
              </div>
            </>
          ))}
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Upload Government ID</label>
        </div>
        <div className=" md:w-5/12 w-full flex items-center gap-4">
          <div className="h-2 w-4/5 mt-3  rounded bg-gray-400  ">
            <FileUpload placeholder="Upload government ID" />
            <div className="" />
          </div>
          <span className="mt-3">0%</span>
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Next of Kin Full Name</label>
          <Textinput placeholder="Enter your next of Kin Full Name" type="text" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Relationship</label>
          <Typeahed
            onInputChange={(val) => setMeansOfID(val)}
            placeholder="Select relationship"
            options={[
              { name: "international passport" },
              { name: "drivers license" },
              { name: "nation ID" },
            ]}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Phone Number</label>
          <Textinput placeholder="Enter next of kin phone number" type="text" />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Purpose For The Loan</label>
          <Typeahed
            onInputChange={(val) => setMeansOfID(val)}
            placeholder="Select purpose for the loan"
            options={[
              { name: "international passport" },
              { name: "drivers license" },
              { name: "nation ID" },
            ]}
          />
        </div>
      </div>
      <div className="px-12 mt-16 mx-auto flex items-center justify-between">
        <button disabled className="md:h-20 md:w-64 text-white font-semibold bg-gray-400 rounded">
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
