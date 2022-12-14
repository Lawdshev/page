import React,{useContext,useState,createContext} from 'react';

const userContext = createContext()

export function LaundryContextProvider({children}) {

    const handleLogin =()=>{
        
    }
  
    return (
      <userContext.Provider value={{handleLogin}} >
          {children}
      </userContext.Provider>
    )
  }
  
  export const useUserContext =()=>{
      return useContext(userContext)
  }

