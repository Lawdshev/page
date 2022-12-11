import React, { useState, useMemo } from 'react'

// create context
export const SectorContext = React.createContext()

export const SectorProvider = ({ children }) => {
  const [selSector, setSector] = useState("")
  const [government,setGovernment] = useState("")

  function toggleSector(val) {
    setSector(val)
  }

  function toggleGovernment(val) {
    setGovernment(val)
  }


  const value = useMemo(
    () => ({
      selSector,
      toggleSector,
      government,
      toggleGovernment
    }),
    [selSector, government]
  )

  return <SectorContext.Provider value={value}>{children}</SectorContext.Provider>
}
