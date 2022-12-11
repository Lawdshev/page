import React, {useState, useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import Checkbox from "../../components/Radiobox";
import CheckedIcon from "../../assets/img/checked.svg";
import UncheckedIcon from "../../assets/img/unchecked.svg";
import {SectorContext} from "../../context/SectorContext"

function Publicsection() {
  const { toggleGovernment,government } =useContext(SectorContext)
    const history = useHistory()
    const [checked, setChecked] = useState("");

    const HandleSeclect = () => {
        if(checked === "") return
        toggleGovernment(checked)
        history.replace("./bvnverification")

    }

    useEffect(() => {
     let value = false

     HandleSeclect()
    
      return () => {
        value = true
      }
    }, [checked])
    
  return (
    <div className="w-full md:px-10 px-6 mx-auto mt-6">
      <div className="flex gap-4 items-center my-6 text-sm md:text-lg">
        <label
          htmlFor="check-1"
          style={{ cursor: "pointer", width: "40px", height: "auto" }}
        >
          {checked === "Federal Government" ? (
            <img src={CheckedIcon} />
          ) : (
            <img src={UncheckedIcon} />
          )}
        </label>
        <input
          id="check-1"
          value="Federal Government"
          type="radio"
          hidden
          onClick={(e) => setChecked(e.target.value)}
        />{" "}
        Federal Government
      </div>
      <div className="flex gap-4 items-center my-6 text-sm md:text-lg">
        <label
          htmlFor="check-2"
          style={{ cursor: "pointer", width: "40px", height: "auto" }}
        >
          {checked === "State Government" ? (
            <img src={CheckedIcon} />
          ) : (
            <img src={UncheckedIcon} />
          )}
        </label>
        <input
          id="check-2"
          value="State Government"
          type="radio"
          hidden
          onClick={(e) => setChecked(e.target.value)}
        />{" "}
        State Government
      </div>
      <div className="flex gap-4 items-center my-6 text-sm md:text-lg">
        <label
          htmlFor="check-4"
          style={{ cursor: "pointer", width: "40px", height: "auto" }}
        >
          {checked === "Nigerian Customs" ? (
            <img src={CheckedIcon} />
          ) : (
            <img src={UncheckedIcon} />
          )}
        </label>
        <input
          id="check-4"
          value="Nigerian Customs"
          type="radio"
          hidden
          onClick={(e) => setChecked(e.target.value)}
        />{" "}
        Nigerian Customs
      </div>
      <div className="flex gap-4 items-center my-6 text-sm md:text-lg">
        <label
          htmlFor="check-3"
          style={{ cursor: "pointer", width: "40px", height: "auto" }}
        >
          {checked === "Federal Capital Territory Authority" ? (
            <img src={CheckedIcon} />
          ) : (
            <img src={UncheckedIcon} />
          )}
        </label>
        <input
          id="check-3"
          value="Federal Capital Territory Authority"
          type="radio"
          hidden
          onClick={(e) => setChecked(e.target.value)}
        />{" "}
        Federal Capital Territory Authority
      </div>
    </div>
  );
}

export default Publicsection;
