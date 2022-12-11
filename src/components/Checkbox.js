import React, { useState }  from 'react'
import CheckedIcon from "../assets/img/checked.svg"
import UncheckedIcon from "../assets/img/unchecked.svg"
import Orange from "../assets/img/orange.png"
import Gray from "../assets/img/gray.png"

function Checkbox({value, onCheck = () => {}}) {
    const [checked, setChecked] = useState(false)

    const handleChecked = (e) => {
      console.log(e.target.checked)
        setChecked(e.target.checked)
         onCheck(e.target.checked)
    }

  return (
    <div>
        <label htmlFor={value} style={{cursor:"pointer", width:"40px", height:"auto"}}>{checked == true ? <img src={Orange} className="border border-orange-500 rounded-sm" /> : <img className="border border-orange-500 rounded-sm"  src={Gray} /> }</label>
        <input id={value} type='checkbox' hidden onChange={(e) => handleChecked(e)  } />
    </div>
  )
}

export default Checkbox