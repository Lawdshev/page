import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Backdrop } from '@windmill/react-ui'
import Sad from "../assets/img/sad.svg"
import Thumb from "../assets/img/thumb-up.svg";

function LoginModals() {
   
  return (
    <> 
     
     <Backdrop > 

     <div className='w-full h-full relative' />
     <div className='absolute h-auto w-2/4 py-12 px-8 rounded-lg bg-white'>
       <>
        <div className='w-full mx-auto px-8'>
            <img src={Sad} alt="image" className='block mx-auto w-24 h-24 mb-6' />

            <p className='mb-3' style={{color:"#464646"}}>Session expired Please Login to continue</p>
            <br/>
        </div>

        <button className='w-2/3 block mx-auto py-4 rounded-lg text-white text-lg font-semibold bg-orange-500' >Login</button>
       
       </>
       
     </div>
     </Backdrop>
     
    </>
  

  )
}

export default LoginModals