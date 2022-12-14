import React, {useState} from 'react'
import Textinput from '../../components/Textinput'
import { Location } from "react-router-dom";
import Modals from '../../components/Modal'
import Typeahed from '../../components/Typeahed'
import {Request, requestAuth} from '../../components/axios'
// import { useSignIn } from 'react-auth-kit'
import axios, { AxiosError } from 'axios'
import Selsect from '../../components/Selsect';
import {privateSecValidation} from '../../validation/privateSectionValidation'
import { useModalContext } from '../../context/modalContext';
import Cookies from 'js-cookie'

function Privatesection() {
    const {handleShow} = useModalContext()
    const [error, setError] = useState('');

    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [tenure, setTenure] = useState('')
    const [gender, setGender] = useState('')
    const [dependents, setDependents] = useState('')
    const [education, setEducation] = useState('')
    const [income, setIncome] = useState('')
    const [employername, setEmployername] = useState('')
    const [password, setPassword] = useState('')
    // const signIn = useSignIn()

    const handleContinue = (e) => {
    //setSuccess(false)
     window.location.replace("/app/bvnverification");
    }
     const handleFail = () => {
        setFail(false);
        window.location.replace("/app/eligibility");
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        let form = {
            email: email,
            dob: dob,
            gender: gender,
            dependents: dependents,
            education: education,
            tenure: tenure,
            income:income,
            employername:employername
            }
        let valid = await privateSecValidation(form)
        if (valid === false) { 
           setError('All field must be filled correctly')
            return
        } 
        try 
        {
            setError('')

        //   check eligibility with form data  
          axios.post('https://pagefinancials.com/webapp/eligibility/customer_rating.php', form).then(res => {
            
                    //  checking if eligibility is true
                    if (res.data.message === "Eligible") {
                        setSuccess(true);
                        setFail(false);

                    // then creation of user with the eligible email    
                    axios.post("https://pagefinancials.com/webapp/users/create.php",{email}).then(res => {
                        if (res.data.status === true ){
                            // send the default password to the user to enable the user to update profile 
                            Cookies.set('access', res.data.access_token)
                            handleShow(`DEFAULT PASSWORD: ${res.data.default_password}`,true,'continue','/app/bvnverification')
                            console.log(res.data.default_password)
                        }
                        {
                        //  this would send the message if the user isn't created   
                          handleShow(`${res.data.message}`, false,'Retry','/app/eligibility')
                          console.log(res.data.message)
                        }
                        }).catch(error=> console.log(error))
                    } 

                }).catch(error=>{
                            if(error && error instanceof AxiosError && error.response.data.message ===  "Not Eligibile" )
                            if(error && error instanceof Error)
                            handleShow(`${error.response.data.message}`, false,'Close','/')
                           
                })
            }
            catch (error) {console.log(error)}   
    }
    
    
    
  return (
    <div className='w-full md:px-10 px-6 mx-auto mt-6'>
        <Modals show={success} handleClose={handleContinue} type="success" />
        <Modals show={fail} handleClose={handleFail} type="failed" />
        <h3 className='font-bold md:text-lg'>Requirements</h3>
        <h5 className='text-base'>Below are the documents required for your application</h5>

        <ul className='my-6 list-disc list-inside'>
            <li>BVN</li>
            <li>6 months??? statement of account </li>
            <li>Government issued ID Card</li>
            <li>Official Email address</li>
            <li>Work ID card or employment/promotion letter</li>
        </ul>
        <p>If you have all these, please proceed to check your eligibility below</p>

        <div className='w-full mt-12'>
            <div >
            <div>
                <label className='font-bold mb-3'>Employer???s Name</label>
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
                <label className='font-bold mb-3'>Level of Education</label>
                <Selsect
                        placeholder="Level of Education"
                        options={["Primary", "Secondary","Tertiary"]}
                        onSelect={(val)=> setEducation(val)}
                    />
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
                    <Selsect
                        placeholder="Gender"
                        options={["Male", "Female"]}
                        onSelect={(val)=> setGender(val)}
                    />
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
                    placeholder='Loan amount' name='loanAmount'
                     />
                    
                </div>
                <div className='md:w-2/5'>
                    <label className='font-bold mb-3'>Loan tenor</label>
                    <Selsect
                        placeholder="Tenure"
                        options={["1", "2", "3", "4", "5",]}
                        onSelect={(val)=> setTenure(val)}
                    />
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
            { error !== '' &&
              <span className='text-red-500 text-lg'>{error}</span> 
           }
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
