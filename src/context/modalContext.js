import React, { createContext, useContext,useState,useMemo, useEffect } from 'react';


const modalContext = createContext()

export  function ModalContextProvider({children}) {
  const [show, setShow] = useState(false);
  const [message,setMessage] = useState('');
  const [emoji,setEmoji] = useState(true);
  const [action,setAction] = useState('');
  const [func,setFunc] = useState(null);
  
  const handleShow = (message,ok,nextAction,myFunc) =>{ 
      setMessage(message); 
      setAction(nextAction);
      setEmoji(ok)
      setShow(true);
      setFunc(myFunc)
  }
  const handleClose = async(e) => {
    e.preventDefault()
    if(func !== null){
      window.location.replace(func);
      setTimeout(() => {
        setShow(false)
      }, 3000);
    }else{
      setShow(false);
    }
  };
  
  const value ={handleShow,handleClose,show,message,emoji,action}

  return (
    <modalContext.Provider value={value} >
        {children}
    </modalContext.Provider>
  )
}
export const useModalContext =()=>{
    return useContext(modalContext)
}