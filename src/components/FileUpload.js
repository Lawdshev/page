import React, { useState, useRef } from "react";
import Upload from "../assets/img/upload.svg";

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

function FileUpload({placeholder=""}) {
  const inputRef = useRef();
  const [file, setFile] = useState(null);
  

  return (
      <div className="relative mb-3">
        <img
          className="absolute"
          style={{ top: "26px", right: "15px" }}
          src={Upload}
          alt="U"
        />

        <button
          onClick={(e) => {
            
            inputRef.current.click();
          }}
          className="w-full h-16 mt-3 rounded bg-white pr-16 px-4 text-gray-300"
        >
          {placeholder}
        </button>
        <input
          ref={inputRef}
          type="file"
          className="w-full hidden h-16  mt-3 rounded pr-16 px-4"
        />
      </div>
  );
}

export default FileUpload;
