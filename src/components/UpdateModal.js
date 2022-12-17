import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Backdrop } from '@windmill/react-ui'
import Sad from "../assets/img/sad.svg"
import Thumb from "../assets/img/thumb-up.svg";

function UpdateModal({show, handleClose, type}) {
   
  return (
    <> 
     { show &&

     <Backdrop > 

     <div className='w-full h-full relative f' onClick={handleClose} />
     <div className='absolute h-auto w-2/4 py-12 px-8 rounded-lg bg-white'>
      {  
        type === 'update'?
       <>
        <div className='w-full  flex flex-col mx-auto px-8'>
            <img src={Sad} alt="image" className='block mx-auto w-24 h-24 mb-6' />

            <p className='mb-3 self-center font-bold' style={{color:"#464646"}}>Please Update Password to continue</p>
            <br/>
        </div>

        <button className='w-2/3 block mx-auto py-4 rounded-lg text-white text-lg font-semibold bg-orange-500' onClick={() => handleClose()}>Update Password</button>
       
       </> : 
          <>
          <div className='w-full mx-auto  flex flex-col px-8'>
              <img src={Sad} alt="image" className='block mx-auto w-24 h-24 mb-6' />
  
              <p className='mb-3 self-center'  style={{color:"#464646"}}>User not found please check your email and password and try again</p>
              <br/>
          </div>
  
          <button className='w-2/3 block mx-auto py-4 rounded-lg text-white text-lg font-semibold bg-orange-500' onClick={() => handleClose()}>retry</button>
          </>
       }
       
     </div>
     </Backdrop>}
     
    </>
  

  )
}

export default UpdateModal