import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Arrowdown from "../../assets/img/arrowdown.svg";
import CheckedIcon from "../../assets/img/checked.svg";
import UncheckedIcon from "../../assets/img/unchecked.svg";
import FileUpload from "../../components/FileUpload";
import Textinput from "../../components/Textinput";


function PublicStatement() {
  const history = useHistory()
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [next, setNext] = useState("");

  return (
    <div className="w-full py-10 px-4">
      <div className="border-b w-4/5 mx-auto mt-16" />
      <div className="h-10 px-3 py-2 ml-4 bg-orange-500 md:w-1/5 text-white font-bold">
        Documents 
      </div> 
        <div className="py-6 mx-auto mt-8 md:w-2/5">
          <div>
            <label>Upload 3 Months Pay Slip</label>
            <FileUpload placeholder="Upload pay slip" />
          </div>

          <div className="my-10">
            <label>Upload Letter of Authorization</label>
            <FileUpload placeholder="Upload letter of authorization" />
          </div>

          <button onClick={() =>  history.push("/application-success")} className="mx-auto block w-full py-4 mt-12 text-lg font-bold md:py-8 text-white rounded-lg bg-orange-500">
            {" "}
            Submit{" "}
          </button>
        </div>
    </div>
  );
}

export default PublicStatement;
