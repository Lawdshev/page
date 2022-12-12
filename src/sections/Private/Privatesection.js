import React, {useState, useContext} from 'react'
import Textinput from '../../components/Textinput'
import { Location } from "react-router-dom";
import Modals from '../../components/Modal'
import Typeahed from '../../components/Typeahed'
import {Request, requestAuth} from '../../components/axios'
import { useSignIn } from 'react-auth-kit'
//import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from 'axios'
import Selsect from '../../components/Selsect';

function Privatesection() {
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)
   // const [show, setType] = useState('')
 const [email, setEmail] = useState('')
 const [dob, setDob] = useState('')
 const [tenure, setTenure] = useState('')
 const [gender, setGender] = useState('')
 const [dependents, setDependents] = useState('')
 const [education, setEducation] = useState('')
 const [income, setIncome] = useState('')
 const [employername, setEmployername] = useState('')
 const [error, setError] = useState('')
 const signIn = useSignIn()
 //const nav = useNavigate();

//  const [inputs, setInputs] = useState({
//      email: "",
//      dob: "",
//      tenure:"",
//      gender:"",
//      dependents: "",
//      education: "",
//      income: "",
//      employername: "",
//  })
 //console.log(inputs)
    const handleContinue = (e) => {
    //setSuccess(false)
     window.location.replace("/app/bvnverification");
    }
     const handleFail = () => {
    setFail(false)
    }
    // const handuleChange = (e)=>{
    //    setInputs((prev) => ({...prev, [e.target.name]:e.target.value}))
    // }
    const handleSubmit = async (e) =>{
     console.log(gender)
     console.log(education)   
    e.preventDefault()
    const response = await Request.post('eligibility/customer_rating.php',{
    "email": "degozi@gmail.com",
    "dob": "1995-05-01",
    "tenure": "12",
    "gender": "male",
    "dependents": "0",
    "education": "Tertiary",
    "income": "500000",
    "employername": "99"
}).catch((error)=>{
    //console.log(error)
    if(error && error instanceof AxiosError)
    setError(error.response?.data.message);
    if(error && error instanceof Error)
    setError(error.message);
  })  
   console.log(response)
  if(response.data.status &&  response.data.message === "Eligibile"){
   setSuccess(true)
   setFail(false) 
    const response = await axios.post("https://pagefinancials.com/webapp/users/create.php",
    {
         "email": "degozi@gmail.com"
    }).catch((error)=>{
    //console.log(error)
    if(error && error instanceof AxiosError)
    setError(error.response?.data.message);
    if(error && error instanceof Error)
    setError(error.message);
  })  
//     signIn({
//     access_token:response.data.access_token,
//     expiresIn:3600,
//     tokenType:"Bearer",
//     authState:email
//   })
  console.log(response)
  
    //localStorage.setItem("access_token", JSON.stringify(response.data)); 
 // }
//    setSuccess(false)
//    setFail(true) 
    }
     if(!response.data.status &&  response.data.message !== "Eligibile"){
        setSuccess(false)
        setFail(true) 
     }
    }

  return (
    <div className='w-full md:px-10 px-6 mx-auto mt-6'>
        <Modals show={success} handleClose={handleContinue} type="success" />
        <Modals show={fail} handleClose={handleFail} type="failed" />
        <h3 className='font-bold md:text-lg'>Requirements</h3>
        <h5 className='text-base'>Below are the documents required for your application</h5>

        <ul className='my-6 list-disc list-inside'>
            <li>BVN</li>
            <li>6 months’ statement of account </li>
            <li>Government issued ID Card</li>
            <li>Official Email address</li>
            <li>Work ID card or employment/promotion letter</li>
        </ul>
        <p>If you have all these, please proceed to check your eligibility below</p>

        <div className='w-full mt-12'>
            {/* i changed the form tag to the div tag since the form is automatically submitting by itself and gave the continue button the handleSubmit function */}
            <div>
            <div>
                <label className='font-bold mb-3'>Employer’s Name</label>
                <input 
                className="w-full h-16  mt-3 rounded px-4"
                placeholder='Enter name of employer' name='employername'
                //required
                onChange={(e) => setEmployername(e.target.value)}
                />
            </div>
            <div  className='mt-12'>
                <h3  className='font-bold mb-3'>Salary</h3>
                <h5  className='mb-3'>Net-income should be exact salary amount as shown in the Bank Statement</h5>
                <div className='md:w-2/5'>
                    <input 
                     className="w-full h-16  mt-3 rounded px-4"
                     placeholder='Enter monthly income'
                    // required
                     name='income'
                     onChange={(e) =>  setIncome(e.target.value)}
                      />
                </div>
            </div>
            <div  className='mt-10'>
                {/* <h3  className='font-bold mb-2'>Do you have an existing loan?</h3>
                <h5  className='mb-3'>Enter the amount below otherwise leave it empty</h5> */}
                <div className='flex items-center flex-wrap justify-between mt-4'>
                <div className='md:w-2/5'>
                    <label className='font-bold mb-3'>Number of dependant</label>
                    <input 
                    className="w-full h-16  mt-3 rounded px-4"
                    placeholder='Enter of dependant' 
                    name='dependant'
                    onChange={(e) =>  setDependents(e.target.value)} />                    
                </div>
                <div className='md:w-2/5'>
                    <label className='font-bold mb-3'>Level of education</label>
                    <Selsect options={['Primary', 'Secondary', 'Tetiary']} placeholder='Level of Education'
                      onSelect={(val) => setEducation(val)} />
                </div>
                </div>
               

            </div>
                <div  className='mt-10'>
                {/* <h3  className='font-bold mb-2'>Do you have an existing loan?</h3>
                <h5  className='mb-3'>Enter the amount below otherwise leave it empty</h5> */}
                <div className='flex items-center flex-wrap justify-between mt-4'>
                <div className='md:w-2/5'>
                    <label className='font-bold mb-3'>Date of Birth</label>
                    <input 
                     className="w-full h-16  mt-3 rounded px-4"
                    placeholder='Enter your date of birth' name='loanAmount'
                    type='date'
                    onChange={(e) =>   setDob(e.target.value)} />
                    
                </div>
                <div className='md:w-2/5'>
                    <label className='font-bold mb-3'>Gender</label>
                    <Selsect options={['Male', 'Female']} placeholder='Gender'
                      onSelect={(val) => setGender(val)} />
                </div>
                </div>
            </div>
                <div  className='mt-10'>
                {/* <h3  className='font-bold mb-2'>Do you have an existing loan?</h3>
                <h5  className='mb-3'>Enter the amount below otherwise leave it empty</h5> */}
                <div className='flex items-center flex-wrap justify-between mt-4'>
                <div className='md:w-2/5'>
                    <label className='font-bold mb-3'>Loan amount</label>
                    <input 
                     className="w-full h-16  mt-3 rounded px-4"
                    placeholder='Enter your date of birth' name='loanAmount'
                     />
                    
                </div>
                <div className='md:w-2/5'>
                    <label className='font-bold mb-3'>Loan tenor</label>
                    <input  className="w-full h-16  mt-3 rounded px-4" 
                    placeholder='Select your loan tenor'
                      onChange={(e) =>  setTenure(e.target.value)}/>
                </div>
                </div>
               
            </div>
            <div  className='mt-10'>
                <label className='font-bold mb-3'>Personal email address</label>
                <div className='md:w-3/5'>
                   <input  className="w-full h-16  mt-3 rounded px-4" 
                    placeholder='Enter your email address'
                     onChange={(e) =>  setEmail(e.target.value)} />
                </div>

            </div>
            <button type='submit' className="mx-auto block w-full py-4 mt-12 text-lg font-bold md:py-8 text-white rounded-lg bg-orange-500" onClick={handleSubmit}>
          {" "}
          Continue{" "}
        </button>
    </div>
        </div>
    </div>
  )
}

export default Privatesection