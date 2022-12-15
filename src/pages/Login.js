import React,{useState} from 'react'
import Cookies from 'js-cookie'
import FAQdropdown from '../components/FAQdropdown'
import FAQs from "../utils/FAQs";
import axios from 'axios';
import { loginValidation } from '../validation/loginValidation';

function Login() {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const handleContinue = async() => {
    //validation
    let form = {
        email:email,
        password:password
    }
    let valid = await loginValidation(form)
    if (valid === false) {
      return
    }
    try {
      axios.post('http://localhost:8080/https://pagefinancials.com/webapp/users/login.php',form).then(res=> {
        if (!res.data.access_token){
          console.log('no access')
          //invalid login parameters
          return
        }
        Cookies.set('access',res.data.access_token)
      })
    } catch (error) {
      console.log(error)
    }  
  }

  return (
    <>
    <div>
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
                <label>Password</label>
                <input
                  className="w-full md:h-16 h-10 mt-3 rounded px-4"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <button
                onClick={() => handleContinue()}
                className="mx-auto block w-full py-4 mt-12 text-lg font-bold md:py-8 text-white rounded-lg bg-orange-500"
              >
                {" "}
                continue{" "}
              </button>
          </div>
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
        {
          FAQs.map(faq=>{
            return <div className="mb-3 text-gray-500"> 
            <FAQdropdown question={faq.question} ans={faq.ans}/>
          </div>
          })
        }
      </div>
      {/* footer */}
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

export default Login;

