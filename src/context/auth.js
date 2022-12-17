import Cookies from 'js-cookie';
import React, { createContext, useContext,useState,useMemo, useEffect } from 'react';


const authContext = createContext()

export  function AuthContextProvider({children}) {
    const [user,setUser] = useState(false)

    useEffect(() => {
       const auth = Cookies.get('auth');
        if(auth){
            setUser(true)
        }else{
            setUser(false)
        }
    }, [user])
    
  
    const value ={user,setUser}
  return (
    <authContext.Provider value={value} >
        {children}
    </authContext.Provider>
  )
}
export const useAuthContext =()=>{
    return useContext(authContext)
}