import React, { useState } from "react";
import User from "../User/User";
import { useParams } from "react-router-dom";

function CustomCompany() {
  
  const [inputValue, setInputValue] = useState("");
  setInputValue = document.getElementById('input1')

  // const input = document.getElementById("input1");
  // console.log(input.value);

  return (
    <div>
      <User inputValue={inputValue}></User>
    </div>
  );
}

export default CustomCompany;
