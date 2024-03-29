import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import RandomImage from "./RandomImage";
import Cocktail from "./Cocktail";
import Breeds from "./Breeds";
import "../styles/toggle.css";


function InputtoOutputSwitch(props) {
  const [inputOrOutput, setInputOrOutput] = useState(false);
  const [convertedInputToOutputItems, setconvertedInputToOutputItems] = useState([]);
    // console.log(convertedInputToOutputItems)
  const bringStarterDogArrayToParent = (dataFromChild) => {
    // console.log(dataFromChild)
    setconvertedInputToOutputItems(dataFromChild);
    // console.log(convertedInputToOutputItems)
  };
  // console.log(props)
  const handleSwitchBetweenInputAndOutput = () => {
    // console.log(props.breeds.props.inputArrayData)
    console.log(convertedInputToOutputItems)
    if (inputOrOutput === true) {
      setInputOrOutput(false);
      // console.log(inputOrOutput)
    } else {
      setInputOrOutput(true);
      // console.log(inputOrOutput)
    }
  };

  const calculateCocktail = () => {
    setconvertedInputToOutputItems([...convertedInputToOutputItems])
    setInputOrOutput(true);
  };
  return (
    <div className="input-output-component-container">
      <div className="input-output-toggle">
        <input
          type="checkbox"
          id="input-output-switch"
          checked={inputOrOutput}
          className="input-output-component-checkbox"
          onChange={handleSwitchBetweenInputAndOutput}
        />
        <label htmlFor="input-output-switch" className="input-output-component-toggle">
        {(props.selectInputDataCategory==="Dogs") ?
          (<h4 style={{ margin: "0px", padding: "2px 8px 0 8px" }}>Dog Breeds</h4>) : (props.selectInputDataCategory==="Cats")
          ? (<h4 style={{ margin: "0px", padding: "2px 8px 0 8px" }}>Cat Breeds</h4>) : (<h4 style={{ margin: "0px", padding: "2px 8px 0 8px" }}>Input</h4>)}
          {(props.selectOutputDataCategory==="Cocktail") ?
          (<h4 style={{ margin: "0px", padding: "2px 8px 0 8px" }}>Cocktail</h4>)
          : (props.selectOutputDataCategory==="Smoothie") ? (<h4 style={{ margin: "0px", padding: "2px 8px 0 8px" }}>Smoothie</h4>) : (<h4 style={{ margin: "0px", padding: "2px 8px 0 8px" }}>Output</h4>)}
        </label>
      </div>
      <div>
        {inputOrOutput === false ? (
          <div className="breed-component-container">
            <Breeds
              inputArrayData={props.inputArrayData}
              bringStarterDogArrayToParent={bringStarterDogArrayToParent}
              selectInputDataCategory={props.selectInputDataCategory}
              convertedInputToOutputItems ={convertedInputToOutputItems}
            />
            <div className="calculate-btn">
            <Button
              onClick={() => calculateCocktail()}
              variant="primary"
              size="lg"
            >
              Create Your Custom {(props.selectOutputDataCategory==="Cocktail") ?
          ('Cocktail')
          : (props.selectOutputDataCategory==="Smoothie") ?('Smoothie') : ("Output")}!
            </Button>
            </div>
          </div>
        ) : (
          <Cocktail
          inputArrayData={props.inputArrayData}
          convertedInputToOutputItems={convertedInputToOutputItems}
          outputArrayData={props.outputArrayData}
          selectOutputDataCategory={props.selectOutputDataCategory}
          />
        )}
      </div>
    </div>
  );
}

export default InputtoOutputSwitch;
