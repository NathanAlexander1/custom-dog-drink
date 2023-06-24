import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Cocktail from "./Cocktail";
import Breeds from "./Breeds";

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
  const calculateCocktail = () => {
    setBreedsToDrinkIngredientsArray(breedsToAppData);
    console.log(breedsToDrinkIngredientsArray);
    setInputOrOutput(true)
  };

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
  return (
    <div>
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
      <div>
        {inputOrOutput === false ? (
          <div>
            <Breeds
              dogBreeds={props.dogBreeds}
              bringStarterDogArrayToParent={bringStarterDogArrayToParent}
            />
            <Button
              onClick={() => calculateCocktail()}
              variant="primary"
              size="lg"
            >
              Create Your Custom Cocktail!
            </Button>
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
