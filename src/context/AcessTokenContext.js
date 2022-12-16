import React, { useState, useMemo } from 'react';
import Cookies from 'js-cookie';

export const AcessTokenContext = React.createContext()

export const AcessTokenProvider = ({ children }) => {
    let acessToken = Cookies.get('acess')

    const [loggedIn, setLoggedIn] = useState(false);
    const [modallogin, setModallogin] = useState(false)

    
    const value = useMemo(
      () => ({
        acessToken,
        loggedIn,
        modallogin,
        setLoggedIn,
        setModallogin
      }),
      []
    )
  
    return <AcessTokenContext.Provider value={value}>{children}</AcessTokenContext.Provider>
  }
  
