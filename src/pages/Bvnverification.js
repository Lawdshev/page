import React, { useState, useContext } from "react";
import { SectorContext } from "../context/SectorContext";
import BvnModal from "../components/BvnModal"
import axios from "axios";
import Cookies from "js-cookie";
import { useModalContext } from '../context/modalContext';

let accessToken = Cookies.get('access')

function Bvnverification() {
  const {handleShow} = useModalContext()

  const { selSector, toggleSector, government } = useContext(SectorContext)
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [next, setNext] = useState(false);
  const [show, setShow] = useState(false)
  const [bvn, setBvn] = useState('')
  const [otp, setOtp] = useState('')
  const [empty, setEmpty] = useState('')

  // added error for unchecked terms and condition as well as privacy policy on line 124
  const [noCheck, setNoCheck] = useState('')


  const handleClose = () => setShow(false)


  const handleSubmit = async (e) =>{
    // e.preventDefault();
    if(bvn === ''){
    return setEmpty('Bvn can not be empty')
    }
    
    if (!checkbox1 || !checkbox2) {
      //accept terms and condition
      setNoCheck('Privacy,Terms and Conditions must be accepted')
      return
    }

    axios.post('https://pagefinancials.com/webapp/verification/bvn_verify.php',{number:bvn},{ headers: {"Authorization" :`Bearer ${accessToken}`}}).then(res=>{
      if (!accessToken || accessToken === 'undefined')
            return handleShow('Login session expired please login to continue', false, '/login')
      if (res.status === 200) {
          setNext(true)
      }{
        handleShow(`${res.data.message}`, false, '/bvnverificaion' )
      }
    })
 }
 
   const handleOkSubmit= async (e)=>{
    // setShow(true)
    if(otp === ''){
    return setEmpty('Field can not be empty')
    }
    await axios.post("https://pagefinancials.com/webapp/verification/verify_otp.php",{otp},{ headers: {"Authorization" :`Bearer ${accessToken}`}}).then(res => {
        if (!accessToken || accessToken === 'undefined')
               return handleShow('Login session expired please login to continue', false, '/login')
        if(res.data.status === true ){
              //navigate to personal details page 
              handleShow(`${res.data.message}`, true, '/app/personaldetails')
        } {
          handleShow(`${res.data.message}`, false, '/bvnverification#otp')
        }
    })     
    }

  return (
    <div className="w-full py-10 px-4">
      <BvnModal show={show} handleClose={handleClose} />
      <div className="border-b w-4/5 mx-auto mt-16" />
      <div className="h-10 px-3 py-2 ml-4 bg-orange-500 md:w-1/6 text-white font-bold">
        BVN Verification
      </div>
      {next !== 'next' &&(
        <div className="md:ml-12 py-6 md:w-3/5">
        {selSector === "Public Sector" && government !== "State Government" &&(
            <div>
            <label className="block">IPPIS Number</label>
            <input
            required
              className="w-4/5 md:h-16 h-10 mt-3 rounded px-4"
              placeholder="#      Enter your IPPIS number"
            />
          </div>
        )}
         {selSector === "Public Sector" && government === "State Government" &&(
            <div>
            <label className="block">Oracle Number</label>
            <input
              className="w-4/5 md:h-16 h-10 mt-3 rounded px-4"
              placeholder="#     Enter bank verification number "
            />
          </div>
        )}
        
        <div className="md:mt-10 mt-6">
          <form onSubmit={handleSubmit}>
          <label>Bank Verification Number</label>
          <input
          required
            type="number"
            className="w-4/5 md:h-16 h-10 mt-3 rounded px-4"
            placeholder="#Enter bank verification number"
            onChange={(e) => setBvn(e.target.value)}
          />
          </form>
           <span  className="text-orange-500">{empty}</span>
        </div>
        <label className="flex items-center gap-4 my-6">
          <input
            type="checkbox"
            className="focus:bg-orange-500 bg-orange-500"
            onChange={() => setCheckbox1(true)}
          />{" "}
          <h4>
            {" "}
            I accept all{" "}
            <span className="text-orange-500">Terms & Conditions</span>
          </h4>
        </label>
        <label className="flex items-center gap-4 my-6">
          <input
            required
            type="checkbox"
            className="focus:bg-orange-500 bg-orange-500"
            onChange={() => setCheckbox2(true)}
          />{" "}
          <h4>
            {" "}
            I accept all <span className="text-orange-500">Privacy Policy</span>
          </h4>
        </label>
          <span  className="text-orange-500 mb-2">{noCheck}</span> 
        <p className="text-sm">
          I have read, understood and accept all the terms and conditions &
          privacy policy for Page International Financial Services Limited.
        </p>

        <a onClick={() => handleSubmit()} href="#otp" className="mx-auto text-center block w-full py-4 mt-12 text-lg font-bold md:py-8 text-white rounded-lg bg-orange-500 cursor-pointer">
          {" "}
          Next{" "}
        </a>
      </div>
      )}

      {next &&(
        <div className="md:ml-12 py-6 md:w-2/5" id="otp">
        <div>
          <form>
          <label>OTP</label>
          <input
           
            className="w-full md:h-16 h-10 mt-3 rounded px-4"
            placeholder="Enter OTP"
             onChange={(e) => setOtp(e.target.value)}
          />
          </form>
        </div>
       
        <p className="text-sm mt-8 ml-1">
        An OTP has been sent to the phone number linked to your BVN. Please enter the pin to continue.
        </p>

        <h3>Didn’t get an OTP? <button className="text-blue-600 mt-8">Click here</button>  </h3>

        <button onClick={handleOkSubmit} className="mx-auto block w-full py-4 mt-12 text-lg font-bold md:py-8 text-white rounded-lg bg-orange-500">
          {" "}
          Continue{""}
        </button>
      </div>
      )}
      
    </div>
  );
}

export default Bvnverification;
