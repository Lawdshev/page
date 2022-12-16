import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Backdrop } from '@windmill/react-ui'
import Sad from "../assets/img/sad.svg"
import Thumb from "../assets/img/thumb-up.svg";

function LoginModals({show, handleClose, type}) {
   
  return (
    <> 
     
   {  show &&   
   
     <Backdrop > 

     <div className='w-full h-full relative'  onClick={handleClose}/>
     <div className='absolute h-auto w-2/4 py-12 px-8 rounded-lg bg-white'>
       { type === 'successful' ?
        <>
        <div className='w-full mx-auto px-8'>
            <img src={Thumb} alt="image" className='block mx-auto w-24 h-24 mb-6' />

            <p className='mb-3' style={{color:"#464646"}}>Update Sucessful Please login to continue</p>
            <br/>
        </div>

        <button 
        onClick={() => handleClose()}
        className='w-2/3 block mx-auto py-4 rounded-lg text-white text-lg font-semibold bg-orange-500' 
        >Login</button>
       </> : 
          <>
          <div className='w-full mx-auto flex flex-col px-8'>
              <img src={Sad} alt="image" className='block mx-auto w-24 h-24 mb-6' />
  
              <p className='mb-3 self-center' style={{color:"#464646"}}>Update Failed please try again</p>
              <br/>
          </div>
  
          <button 
          onClick={() => handleClose()}
          className='w-2/3 block mx-auto py-4 rounded-lg text-white text-lg font-semibold bg-orange-500' >Retry</button>
         </>

       }
     </div>
     </Backdrop>
     }
    </>
  

  )
}

export default LoginModals