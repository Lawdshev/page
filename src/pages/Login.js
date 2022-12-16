import React, {useState} from 'react';
import FAQDropDown from "../components/FAQDropDown";
import FAQs from "../utils/FAQs";
import Cookies from 'js-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from "../assets/img/logo.svg";
import {loginValidation} from '../validation/loginValidation';
import UpdateModal from '../components/UpdateModal';

function Login() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [update, setUpdate] = useState(false);
  const [invalid, setInvalid] = useState(false);

  // error if not valid email 
  const [error, setError] = useState('')

  const handleInvalid = () => {
    setInvalid(false)
  }

  const handleClose = () => {
    window.location.replace('/updateprofile')
  }

  const handleContinue = async() => {
    //validation
    let form = {
        email:email,
        password:password
    }
    let valid = await loginValidation(form)
    if (valid === false) {
      setError('invalid login')
      return
    }
    try {
      axios.post('http://localhost:8080/https://pagefinancials.com/webapp/users/login.php',form).then(res=> {
        if (res.data.message === "Update your Password") {
          // this will open the modal with the message "upadate your profile"
           setUpdate(true)
      
          //invalid login parameters
          return
        }
        if (res.data.message === "No Record Found"||"Password mismatch" ) {
           // show invalid user message   
           setInvalid(true)
            
        } 
        Cookies.set('access', res.data.access_token)
      })
    } catch (error) {
      console.log(error)
    }  
  }

  return (
    <>
    {/* //modal to show if account has not been update */}
    <UpdateModal show={update} handleClose={handleClose} type='update'/>

    {/* modal to show if login details is incorrect */}
    <UpdateModal show={invalid} handleClose={handleInvalid} type='invalid'/> 
    <div className='md:px-12 mx-auto py-3 px-3 md:py-10'>
        <img src={Logo} style={{ width: "160px", height: "auto" }} />
    </div>
    <div className="border-b w-4/5 mx-auto mb-10" />
    <div className="mx-auto md:w-2/5">
      <div>
        <label>Personal Email Address</label>
        <input
          className="w-full md:h-16 h-10 mt-3 rounded px-4"
          placeholder="Enter registered email address"
          type='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="md:mt-10 mt-6">
        <label>Password</label>
        <input
          className="w-full md:h-16 h-10 mt-3 rounded px-4"
          placeholder="Enter password"
          type='text'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      { error !== '' &&
        <span className='text-red-500 text-sm'>{error}</span> 
      }
      <button
        className="mx-auto block w-full py-4 mt-12 text-lg font-bold md:py-8 text-white rounded-lg bg-orange-500" onClick={handleContinue}
      >
        {" "}
        continue{" "}
      </button>
    </div>
    <div className='text-center mt-2 underline text-orange-500'>
    <Link to='/updateprofile'>Click here to update password</Link>
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
        <FAQDropDown/>       
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

export default Login
