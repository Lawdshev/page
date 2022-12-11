import React, { useState }  from 'react'
import CheckedIcon from "../assets/img/checked.svg"
import UncheckedIcon from "../assets/img/unchecked.svg"

function Checkbox({value, onCheck = () => {}}) {
    const [checked, setChecked] = useState(false)

    const handleChecked = (e) => {
        setChecked(e.target.checked)
         onCheck(checked)
    }

  return (
    <div>
        <label htmlFor={value} style={{cursor:"pointer", width:"40px", height:"auto"}}>{checked ? <img src={CheckedIcon} /> : <img src={UncheckedIcon} /> }</label>
        <input id={value} type='radio' hidden onChange={(e) => handleChecked(e)  } />
    </div>
  )
}

export default Checkbox