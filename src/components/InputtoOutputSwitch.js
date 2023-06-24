import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Cocktail from "./Cocktail";
import Breeds from "./Breeds";
import "../styles/toggle.css";


function InputtoOutputSwitch(props) {
  const [inputOrOutput, setInputOrOutput] = useState(false);
  const [breedsToAppData, setBreedsToAppData] = useState([]);
  const [breedsToDrinkIngredientsArray, setBreedsToDrinkIngredientsArray] =
    useState([]);

  const bringStarterDogArrayToParent = (dataFromChild) => {
    setBreedsToAppData(dataFromChild);
    console.log(breedsToAppData);
  };
  // console.log(props)

  const handleSwitchBetweenInputAndOutput = () => {
    // console.log(props.breeds.props.dogBreeds)
    if (inputOrOutput === true) {
      setInputOrOutput(false);
      // console.log(inputOrOutput)
    } else {
      setInputOrOutput(true);
      // console.log(inputOrOutput)
    }
  };

  const calculateCocktail = () => {
    setBreedsToDrinkIngredientsArray(breedsToAppData);
    console.log(breedsToDrinkIngredientsArray);
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
          <h4 style={{ margin: "0px", padding: "2px 5px 0 5px" }}>Input</h4>
          <h4 style={{ margin: "0px", padding: "2px 8px 0 8px" }}>Output</h4>
        </label>
      </div>
      <div>
        {inputOrOutput === false ? (
          <div className="breed-component-container">
            <Breeds
              dogBreeds={props.dogBreeds}
              bringStarterDogArrayToParent={bringStarterDogArrayToParent}
            />
            <div className="calculate-btn">
            <Button
              onClick={() => calculateCocktail()}
              variant="primary"
              size="lg"
            >
              Create Your Custom Cocktail!
            </Button>
            </div>
          </div>
        ) : (
          <Cocktail
            dogBreeds={props.dogBreeds}
            breedsToDrinkIngredientsArray={breedsToDrinkIngredientsArray}
          />
        )}
      </div>
    </div>
  );
}

export default InputtoOutputSwitch;
