import React, { useState } from 'react'

function Textinput({placeholder="", onInputChange = () => {},type="text"}) {
    const [value, setValue] = useState("")

    const handleChange = (e) =>{
        onInputChange(e.target.value)
        setValue(e.target.value)
    }
  return (
    <div className="relative mb-3">
        <input
        type={type}
        onChange={handleChange}
        value={value}
        className="w-full h-16  mt-3 rounded px-4"
        placeholder={placeholder}
        />
    </div>
  )
}

export default Textinput