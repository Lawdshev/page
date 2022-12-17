import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useAuthContext } from "../../context/auth";
import { useModalContext } from "../../context/modalContext";

const ProtectedRoute = ({children}) => {
   const {user} = useAuthContext();
   const {handleShow} = useModalContext()
   
   useEffect(() => {
      if (user === false){
         handleShow('Please Login/Register to continue', false, 'Eligibility', '/app/eligibility')
         return
      }
   }, [user]);

   return children
}
export default ProtectedRoute;