const response = await Request.post('https://pagefinancials.com/webapp/eligibility/customer_rating.php',{
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