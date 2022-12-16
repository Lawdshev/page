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
import Selsect from '../components/Selsect'
import axios from "axios";
import Cookies from "js-cookie";


let accessToken = Cookies.get('access')

function Personaldetails () {
  const [next, setNext] = useState("");
  const [file, setFile] = useState('')
  const [title, setTitle] = useState('')
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
  const [issuedate, setIssuedate] = useState(null)
  const [expdate, setExpdate] = useState(null)
  const [nextofkin, setNextofkin] = useState('')
  const [nextofkinphone, setNextofkinphone] = useState('')
  const [nextofkinrelationship, setNextofkinrelationship] = useState('')
  const [loanpurpose, setloanpurpose] = useState('')

  //function to save personal details to the back end
  const handleSave = async (e) => {
         e.preventDefault()

         await axios.post('https://pagefinancials.com/webapp/customers/personal_detail.php', {
          title,
          surname,
          firstname,
          middlename,
          dependents,
          mobile,
          maritalstatus,
          residencestate,
          education,
          referral,
          lga,
          residentialaddress,
          idtype,
          idnumber,
          issuedate,
          expdate,
          nextofkin,
          nextofkinphone,
          nextofkinrelationship,
          loanpurpose
         }, {headers : { "Authorization" :`Bearer ${accessToken}`}}).then(res => {
          if(res.status === 200) {
            console.log('sucessfully updated personal details')
          }
         })
  }
  
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
          <Selsect
            onSelect={(val) => setTitle(val)}
            placeholder="Select Title"
            options={['Mr', 'Mrs', 'Miss']}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Surname</label>
          <Textinput placeholder="Enter Surname" 
           value={surname}
           onInputChange={(val) => setsurname(val)}/>
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">First Name</label>
          <Textinput placeholder="Enter first name" 
           value={firstname}
           onInputChange={(val) => setFirstname(val)} />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Middle Name</label>
          <Textinput placeholder="Enter middle name" 
          value={middlename}
          onInputChange={(val) => setMiddlename(val)}/>
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Phone Number</label>
          <Textinput placeholder="Enter phone number" 
          value={mobile}
          onInputChange={(val) => setMobile(val)}/>
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">No. of Dependents</label>
          <Textinput placeholder="No. of dependents" 
          value={dependents}
          onInputChange={(val) => setDependents(val)}/>
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Marital Status</label>
          <Selsect
            onSelect={(val) => setMaritalstatus(val)}
            placeholder="Select marital status"
            options={['Single', 'Married', 'Divorced']}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">State of Residence</label>
          <Typeahed
            onInputChange={(val) => setResidencestate(val)}
            placeholder="Select state of residence"
            options={states}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Local Government of Residence</label>
          <Textinput placeholder="Enter Surname" 
           value={lga}
           onInputChange={(val) => setLga(val)}/>
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Education</label>
          <Selsect
            onSelect={(val) => setEducation(val)}
            placeholder="Select level of education"
            options={['Primary', 'Secondary', 'Tetiary']}
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
            value={residentialaddress}
            onChange={(e) => setResidentialaddress(e.target.value)}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Refferal</label>
          <Textinput placeholder="Enter Surname" 
           value={referral}
           onInputChange={(val) => setReferral(val)}/>
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Means of Identification </label>
          <Selsect
            onSelect={(val) => setIdtype(val)}
            placeholder="Select marital status"
            options={['International passport', "Driver's lincense", "National ID card"]}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">ID Number</label>
          <Textinput placeholder="Enter ID number"
          value={idnumber}
          onInputChange={(val) => setIdnumber(val)} />
        </div>
    
        {idtype === "international passport" ||
          (idtype === "drivers license" && (
            <>
              <div className="block md:w-5/12 w-full">
                <label className="block font-medium">Issuance Date</label>
                <Textinput placeholder="Enter issuance date" type="date" 
                value={issuedate}
                onInputChange={(val) => setIssuedate(val)}/>
              </div>
              <div className="block md:w-5/12 w-full">
                <label className="block font-medium">Issuance Date</label>
                <Textinput placeholder="Expiry Date" type="date" 
                value={expdate}
                onInputChange={(val) => setExpdate(val)}/>
              </div>
            </>
          ))}
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Upload Government ID</label>
          <FileUpload placeholder="Upload government ID" 
          value={file}
          onInputChange={(val) => setFile(val)}/>
        </div>
        <div className=" md:w-5/12 w-full flex items-center gap-4">
          <div className="h-2 w-4/5 mt-3  rounded bg-gray-400  ">
            <div className="" />
          </div>
          <span className="mt-3">0%</span>
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Next of Kin Full Name</label>
          <Textinput placeholder="Enter your next of Kin Full Name" type="text" 
           value={nextofkin}
           onInputChange={(val) => setNextofkin(val)}/>
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Relationship</label>
          <Typeahed
            onInputChange={(val) => setNextofkinrelationship(val)}
            placeholder="Select relationship"
            options={[
              { name: "Mother" },
              { name: "Father" },
              { name: "Spouse" },
              { name: "Sibling" },
            ]}
          />
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Phone Number</label>
          <Textinput placeholder="Enter next of kin phone number" type="text" 
           value={nextofkinphone}
           onInputChange={(val) => setNextofkinphone(val)}/>
        </div>
        <div className="block md:w-5/12 w-full">
          <label className="block font-medium">Purpose For The Loan</label>
          <Typeahed
            onInputChange={(val) => setloanpurpose(val)}
            placeholder="Select purpose for the loan"
            options={[
              { name: "Rent" },
              { name: "Business" },
              { name: "Others" },
            ]}
          />
        </div>
      </div>
      <div className="px-12 mt-16 mx-auto flex items-center justify-between">
        <button disabled className="md:h-20 md:w-64 text-white font-semibold bg-gray-400 rounded">
          Previous
        </button>
        <button className="md:h-20 md:w-64 text-white font-semibold bg-orange-500 rounded" onClick={handleSave}>
          Save & Continue
        </button>
      </div>
    </div>
  );
}

export default  Personaldetails;
