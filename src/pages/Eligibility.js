import React, { useState , useContext} from "react";
import { SectorContext } from "../context/SectorContext";
import Arrowdown from "../assets/img/arrowdown.svg";
import Selsect from "../components/Selsect";
import Typeahead from "../components/Typeahed";
import Privatesection from "../sections/Private/Privatesection";
import Publicsection from "../sections/Public/Publicsection";



function Eligibility() {
  const { selSector, toggleSector } = useContext(SectorContext)
  const [show, setShow] = useState(false);
  const [sector, setSector] = useState("");

  console.log(selSector)
  return (
    <div className="w-full py-10 px-4">
      {sector === "" && (
        <div className="">
          <h3
            className="text-center md:mt-10 text-2xl md:text-5xl font-bold"
            style={{ color: "#59595D" }}
          >
            Get up to <br />{" "}
            <span style={{ color: "#FF6600" }}>N5 Million </span> Loan Today
          </h3>
          <h4
            className="text-center font-medium   text-base md:text-lg"
            style={{ color: "#59595D" }}
          >
            Begin by completing the eligibility check
          </h4>
        </div>
      )}
      <div className="border-b w-4/5 mx-auto mt-10" />
      <div className="h-10 px-3 py-2 ml-4 bg-orange-500 md:w-1/6 text-white font-bold">
        Eligibility Check
      </div>
      <div className="md:ml-12 py-6">
        <label>Employment Sector</label>
        <div className="md:w-3/5 rounded block mt-3">
          {/* <Typeahead
            placeholder="Select your sector of employment"
            options={["Private Sector", "Public Sector"]}
            onInputChange={(val) => setSector(val) }
          /> */}
          <Selsect options={["Private Sector", "Public Sector"]} placeholder="Select your sector of employment" onSelect={(val) =>  {setSector(val); toggleSector(val)} } />
        </div>
      </div>

      {sector === "Private Sector" && (
        <div className="md:w-4/5 w-full">
            <Privatesection />
        </div>
      )}
      {sector === "Public Sector" && (
        <div className="md:w-4/5 w-full">
            <Publicsection />
        </div>
      )}
    </div>
  );
}

export default Eligibility;
