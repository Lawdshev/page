import React, { useState } from "react";
import Arrowdown from "../assets/img/arrowdown.svg";
// import CheckedIcon from "../assets/img/checked.svg";
// import UncheckedIcon from "../assets/img/unchecked.svg";
import Naira from "../assets/img/naira.svg";
import Checkbox from "../components/Checkbox";
import Selsect from "../components/Selsect";

function Accountdetails() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [next, setNext] = useState("");
  const [accoutType, setAccountType] = useState("");
  const [buyBack, setBuyBack] = useState(false);
  const [buyBackSec, setBuyBackSec] = useState([
    { amount: "", bank: "", accountNumber: "" },
  ]);

  const SelectAccoutType = (val) => {
    // console.log(val)
    setAccountType(val);
  };

  const handleBuyBack = (val) => {
    setBuyBack(true);
    console.log(val);
  };

  const addNewBuyBack = () => {
    const newSec = { amount: "", bank: "", accountNumber: "" };
    setBuyBackSec((prev) => [...prev, newSec]);
  };

  const removeNewBuyBack = (id) => {
    const newArr = buyBackSec.filter((item, index) => index !== id)
    // console.log(newArr)
    setBuyBackSec(newArr)

  }

  const updateBank = (value, index) => {
    let newArr = [...buyBackSec];
    newArr[index].bank = value

    console.log(newArr)

    // setBuyBackSec((prev) => newArr)

    //console.log(buyBackSec)
  }

  console.log(buyBackSec);
  return (
    <div className="w-full py-10 px-4">
      <div className="border-b w-4/5 mx-auto mt-16" />
      <div className="h-10 px-3 py-2 ml-4 bg-orange-500 md:w-1/4 text-white font-bold">
        Salary Account Details
      </div>
      <h3 className="md:ml-10 my-10">
        Please note you can only reduce tenor and amount.
      </h3>
      <div className="md:w-3/5 w-full mx-auto">
        <div>
          <label className="block font-medium">Bank</label>
          <Selsect
            placeholder="Select Bank"
            options={["FCMB", "firstBank", "Access Bank"]}
          />
        </div>

        <div className="my-10">
          <label className="block font-medium">Account Type</label>
          <Selsect
            placeholder="Select Account Type"
            options={["Savings Account", "Current Account"]}
          />
        </div>

        <div>
          <label className="block font-medium">Account Number</label>
          <div className="relative">
            <input
              className="w-full md:h-16 h-10 mt-3 rounded px-4"
              placeholder="Enter account number"
            />
          </div>
        </div>
        <div className="my-10">
          <label className="block font-medium">
            Preferred Disbursement Account
          </label>
          <Selsect
            placeholder="Select Salary Account"
            options={["Page Account", "Salary Account"]}
            onSelect={SelectAccoutType}
          />
        </div>
        {accoutType === "Page Account" && (
          <>
            <h3 className="font-bold text-lg text-orange-500">Note</h3>
            <p className="my-3 font-medium">
              A Page account will be created for you and your account details
              will be sent to you shortly. You can transfer disbursed funds
              using our{" "}
              <span className="text-blue-500">
                {" "}
                Internet Banking, Mobile App
              </span>{" "}
              and or USSD code (*258*3#) to your preferred account.
            </p>
          </>
        )}

        <div className="flex items-center gap-4">
          <Checkbox value="Buy back/consolidation" onCheck={(val) => handleBuyBack(val)} />
          <h5>Buy back/consolidation</h5>
        </div>

        {buyBack && (
          <div className="mt-5">
            {buyBackSec.map((item, index) => (
              <div key={index}>
                {index > 0 && (
                  <button
              onClick={() => removeNewBuyBack(index)}
              className="text-blue-600 font-medium focus:outline-none"
            >
              - Remove{" "}
            </button>
                )}
                
                <div >
                  <label className="block font-medium">Buy Back Amount</label>
                  <div className="relative">
                    <input
                      className="w-full md:h-16 h-10 mt-3 rounded px-4"
                      placeholder="Enter buy back amount"
                    />
                  </div>
                </div>
                <div className="my-10">
                  <label className="block font-medium">Bank</label>
                  <Selsect
                    placeholder="Select Bank"
                    options={["FCMB", "firstBank", "Access Bank"]}
                    onSelect={(val)=> updateBank(val, index)}
                  />
                </div>
                <div className="relative mb-10">
                  <label className="block font-medium">
                    Enitity Account Number
                  </label>
                  <input
                    className="w-full md:h-16 h-10 mt-3 rounded px-4"
                    placeholder="Enter entity account number"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => addNewBuyBack()}
              className="text-blue-600 font-medium focus:outline-none"
            >
              + Add another{" "}
            </button>
          </div>
        )}
      </div>
      <div className="px-12 mt-16 mx-auto flex items-center justify-between">
        <button className="md:h-20 md:w-64 text-white font-semibold bg-orange-500 rounded">
          Previous
        </button>
        <button className="md:h-20 md:w-64 text-white font-semibold bg-orange-500 rounded">
          Save & Continue
        </button>
      </div>
    </div>
  );
}

export default Accountdetails;
