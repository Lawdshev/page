import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { SectorContext } from "../context/SectorContext";
import Arrowdown from "../assets/img/arrowdown.svg";
import CheckedIcon from "../assets/img/checked.svg";
import UncheckedIcon from "../assets/img/unchecked.svg";
import FileUpload from "../components/FileUpload";
import Textinput from "../components/Textinput";
import PrivateStatement from "../sections/Private/PrivateStatement";
import PublicStatement from "../sections/Public/PublicStatement";


function Bvnverification() {
  const history = useHistory()
  const { selSector } = useContext(SectorContext)
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [next, setNext] = useState("");

  return (
      <>
      {selSector === "Public Sector"  ? <PublicStatement /> :  <PrivateStatement />}
       
      </>
  );
}

export default Bvnverification;
