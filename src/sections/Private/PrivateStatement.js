import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Arrowdown from "../../assets/img/arrowdown.svg";
import CheckedIcon from "../../assets/img/checked.svg";
import UncheckedIcon from "../../assets/img/unchecked.svg";
import FileUpload from "../../components/FileUpload";
import Textinput from "../../components/Textinput";


function PrivateStatement() {
  const history = useHistory()
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [next, setNext] = useState("");

  return (
    <div className="w-full py-10 px-4">
      <div className="border-b w-4/5 mx-auto mt-16" />
      <div className="h-10 px-3 py-2 ml-4 bg-orange-500 md:w-2/5 text-white font-bold">
        Generate Statement of Account
      </div>
      {next !== "next" && (
        <div className="mx-auto mt-4  py-6 md:w-3/5">
          <div>
            <label className="block font-semibold">Ticket ID</label>
            <Textinput placeholder="Enter ticket ID" />
          </div>
          <div className="md:mt-10 mt-6">
            <label className="font-semibold">Password</label>
            <Textinput placeholder="Enter password" />
          </div>
          

          <p className="text-sm">
          *** Please note a <span className="text-orange-500">ticket ID and password</span> has been <br/>
            sent to your phone or email
          </p>

          <button
            onClick={() => setNext("next")}
            className="mx-auto block w-full py-4 mt-12 text-lg font-bold md:py-8 text-white rounded-lg bg-orange-500"
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      )}

      {next === "next" && (
        <div className="md:ml-12 py-6 mt-8 md:w-2/5">
          <div>
            <label>Upload Statement Support</label>
            <FileUpload placeholder="Upload statement" />
          </div>

          <button onClick={() =>  history.push("/application-success")} className="mx-auto block w-full py-4 mt-12 text-lg font-bold md:py-8 text-white rounded-lg bg-orange-500">
            {" "}
            Submit{" "}
          </button>
        </div>
      )}
    </div>

  );
}

export default PrivateStatement;
