import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Backdrop } from '@windmill/react-ui'
import Email from "../assets/img/email.svg"

function EmailModal({ handleClose, show, }) {
  

    
  return (
    <>
     { show && 
     <Backdrop > 

     <div className='w-full h-full relative 'onClick={handleClose} />
     <div className='absolute h-auto w-2/5 py-20 px-8 rounded-lg bg-white'>

        <div className='w-full mx-auto px-8'>
        <img src={Email} alt="email" className='block mx-auto w-24 h-24 mb-6' />

            <p  className='my-8 text-center' style={{color:"#464646"}}>
            Your official email verification code has been sent to your <br/> official email address. Thank you.
            </p>
        </div>

        <button className='w-2/3 block mx-auto py-4 rounded-lg text-white text-lg font-semibold bg-orange-500' onClick={() => handleClose()}>close</button>
        
       
     </div>
     
     </Backdrop>
     
     }
    </>
  

  )
}

export default EmailModal