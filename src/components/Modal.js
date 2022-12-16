import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Backdrop } from '@windmill/react-ui'
import Sad from "../assets/img/sad.svg"
import Thumb from "../assets/img/thumb-up.svg"

function Modals({ handleClose, show, child, type="failed" }) {
  

    
  return (
    <>
     { show && 
     <Backdrop > 

     <div className='w-full h-full relative 'onClick={handleClose} />
     <div className='absolute h-auto w-2/4 py-12 px-8 rounded-lg bg-white'>

       {type === "failed" ?
       <>
        <div className='w-full mx-auto px-8'>
            <img src={Sad} alt="image" className='block mx-auto w-24 h-24 mb-6' />

            <p className='mb-3' style={{color:"#464646"}}>Sorry we are unable to confirm your eligibility at this moment, your employer or salary, or age does not meet our minimum requirements at the moment</p>
            <br/>

            <p  className='mb-8' style={{color:"#464646"}}>
                Send us an email at <a className='text-blue-500 font-semibold' href='mailto:customer@pagefinancials.com ' >customer@pagefinancials.com </a> or  Call <span className='font-semibold'>017007243</span>  for employer verification, advice on things to do to increase your eligibility next time.
            </p>
        </div>

        <button className='w-2/3 block mx-auto py-4 rounded-lg text-white text-lg font-semibold bg-orange-500' onClick={() => handleClose()}>close</button>
       
       </> : <>
       <div className='w-full mx-auto px-8'>
            <img src={Thumb} alt="image" className='block mx-auto w-24 h-24 mb-6' />

            <h3 className='text-2xl font-bold text-center mb-6'>Good To Go!</h3>

            <p className='mb-3' style={{color:"#464646"}}>You are eligible for a loan with us.</p>
            <br/>

            <p  className='mb-3' style={{color:"#464646"}}>
            Note that this is neither an offer nor a guarantee that you will get one. You will only get an offer after you complete the application and all your documents are reviewed and approved.
            </p>
            <br/>
            <p className='mb-8'>Click continue to proceed.</p>
        </div>

        <button className='w-2/3 block mx-auto py-4 rounded-lg text-white text-lg font-semibold bg-orange-500' onClick={() => handleClose()}>continue</button>
       </>}
       
     </div>
     </Backdrop>
     
     }
    </>
  

  )
}

export default Modals