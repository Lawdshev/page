import React, { useState, useEffect } from "react";
import Arrowdown from "../assets/img/arrowdown.svg";

function Typeahed({ onInputChange = () => {}, options = [], placeholder }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [canShow, setCanshow] = useState(false)

  const handleChange = (e) => {
    setSearch(e.target.value);
    setCanshow(true)
  };
  useEffect(() => {
    let value = false;
    onInputChange(selected);
    return () => {
      value = true;
    };
  }, [selected]);

  return (
    <div className="relative w-full">
      <div className="relative mb-3">
        <img
          className="absolute"
          style={{ top: "33px", right: "15px" }}
          src={Arrowdown}
          alt="N"
        />
        <input
          className="w-full h-16  mt-3 rounded pr-16 px-4"
          placeholder={placeholder}
          onChange={handleChange}
          value={search}
        />
      </div>
      {options.t}
      {search && canShow && (
      <div className="w-full absolute overflow-y-auto bg-white mt-1 z-50 max-h-40">
        {options
          .filter((eache) => 
          typeof eache === "string" ? eache.toLowerCase().includes(search.toLowerCase()):
            eache.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((each, i) => {
            const eachh = typeof each === "string" ? each : each.name
            return (
              <span
              key={i}
                onClick={() => {
                  setSearch(eachh);
                  setSelected(eachh);
                  setCanshow(false)
                }}
                className="block hover:bg-pc-secondaryshade1 hover:bg-opacity-10 border-b px-3 py-2 cursor-pointer text-sm text-pc-grey6 border-gray-300"
              >
                {eachh}
              </span>
            );
          })}
      </div>
      )} 
    </div>
  );
}

export default Typeahed;
