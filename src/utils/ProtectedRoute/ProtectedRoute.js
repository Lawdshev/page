import React, { useEffect } from "react";
import { AcessTokenContext } from "../../context/AcessTokenContext";
import Cookies from 'js-cookie';

const ProtectedRoute = ({children}) => {
   const {acessToken, loggedIn, setLoggedIn} = AcessTokenContext();

     const checkUserToken = () => {
        if(!acessToken || acessToken === 'undefined') {
           setLoggedIn(false)
           window.location.replace('/login')
        } {
           setLoggedIn(true)
           return children
        }

     }

     useEffect(() => {
        checkUserToken()
     }, [loggedIn])
}

export default ProtectedRoute;