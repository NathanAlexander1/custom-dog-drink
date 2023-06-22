import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import Cocktail from "./Cocktail";
import Breeds from "./Breeds.js";

function InputtoOutputSwitch(props) {
    const [inputOrOutput, setInputOrOutput] = useState(false);
    let breeds = props.breeds;
    let cocktail = props.cocktail
  const handleSwitchBetweenInputAndOutput = () => {
    console.log(props)
    if (inputOrOutput === true) {
        setInputOrOutput(false)
        console.log(inputOrOutput)
      } else {
        setInputOrOutput(true)
        console.log(inputOrOutput)
      }
  };
  return (
    <>
    <div className="list-cards-toggle">
      <input
        type="checkbox"
        id="switch"
        className="checkbox"
        onChange={handleSwitchBetweenInputAndOutput}
      />
      <label htmlFor="switch" className="toggle">
        <h4 style={{ margin: "0px", padding: "2px 5px 0 5px" }}>Input</h4>
        <h4 style={{ margin: "0px", padding: "2px 8px 0 8px" }}>Output</h4>
      </label>
    </div>

    {/* {(inputOrOutput === false) ? (<Breeds />) : (<Cocktail />)} */}
    </>
  );
}

export default InputtoOutputSwitch;
