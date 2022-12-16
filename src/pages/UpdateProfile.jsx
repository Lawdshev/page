import React, { useState } from "react";
import FAQDropDown from "../components/FAQDropDown";
import Cookies from 'js-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from "../assets/img/logo.svg";



function UpdateProfile() {
    const [email, setEmail] = useState('')
    const [old_password, setOld_password] = useState('')
    const [new_password, setNew_password] = useState('')
    const [confirm_password, setConfirm_password] = useState('');

    const handleContinue = () => {
      try {
        axios.post('https://pagefinancials.com/webapp/users/update.php', {
            email, 
            old_password,
            new_password,
            confirm_password
         }).then(res => {
            if(res.data.status === true || res.data.message === "Customer Account was updated." ){
              // set a message saying you can login now
              console.log('please login to continue')
            } {
              // send the message 
              console.log(res.data.message)
            }
         })
        
      } catch (error) {
           console.log(error)
      }

    }

    // function to navigate to login once account has been updated sucessfully
   const loginPage = () => {
      window.location.replace('/login')
   }



  return (
    <>
    <div className="md:px-12 mx-auto py-3 px-3 md:py-10">
        <img src={Logo} style={{ width: "160px", height: "auto" }} />
    </div>
    <div className="border-b w-4/5 mx-auto mb-10" />
    <div className="mx-auto md:w-2/5">
      <div>
        <label>Personal Email Address</label>
        <input
          className="w-full md:h-16 h-10 mt-3 rounded px-4"
          placeholder="Enter registered email address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
       
        />
      </div>
      <div className="md:mt-10 mt-6">
        <label>Old Password</label>
        <input
          className="w-full md:h-16 h-10 mt-3 rounded px-4"
          placeholder="Enter old password"
          value={old_password}
          onChange={(e)=>setOld_password(e.target.value)}
        />
      </div>
      <div className="md:mt-10 mt-6">
        <label>New Password</label>
        <input
          className="w-full md:h-16 h-10 mt-3 rounded px-4"
          placeholder="Enter new password"
          value={new_password}
          onChange={(e)=>setNew_password(e.target.value)}
        />
      </div>
      <div className="md:mt-10 mt-6">
        <label>Confirm Password</label>
        <input
          className="w-full md:h-16 h-10 mt-3 rounded px-4"
          placeholder="confirm password"
          value={confirm_password}
          onChange={(e)=>setConfirm_password(e.target.value)}
        />
      </div>
      <button
        onClick={handleContinue}
        className="mx-auto block w-4/5 lg:w-full py-4 mt-12 text-lg font-bold md:py-8 text-white rounded-lg bg-orange-500"
      >
        {" "}
        Update Password{" "}
      </button>
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
        {/* created a FAQDropDown Components inside Component Folder and a FAQs.js file containing all the FAQ and Answers inside Utils Folder */}
        <FAQDropDown />
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
  )
}

export default UpdateProfile