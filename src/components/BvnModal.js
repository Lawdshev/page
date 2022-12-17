import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Backdrop } from '@windmill/react-ui'
import Sad from "../assets/img/sad.svg"
import Thumb from "../assets/img/thumb-up.svg"

function BvnModal({ handleClose, show, }) {
  

    
  return (
    <>
     { show && 
     <Backdrop > 

     <div className='w-full h-full relative 'onClick={handleClose} />
     <div className='absolute h-auto w-2/5 py-20 px-8 rounded-lg bg-white'>

        <div className='w-full mx-auto px-8'>

            <p  className='my-8 text-center font-bold' style={{color:"#464646"}}>
            Kindly visit the bank to update your<br/> phone number on your BVN
            </p>
        </div>

        <button className='w-2/3 block mx-auto py-4 rounded-lg text-white text-lg font-semibold bg-orange-500' onClick={() => handleClose()}>close</button>
        
       
     </div>
     
     </Backdrop>
     
     }
    </>
  

  )
}

export default BvnModal