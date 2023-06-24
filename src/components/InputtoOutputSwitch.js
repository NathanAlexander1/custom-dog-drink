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
  let testDataArray = [
    "Vodka",
    "Gin",
    "Rum",
    "Cognac",
    "Bourbon",
    "Whiskey",
    "Tequila",
    "Scotch",
    "Pisco",
    "Sparkling Wine/Champagne",
    "White Wine",
    "Orange Juice",
    "Dry Vermouth",
    "Rosso/rouge (sweet) Vermouth",
    "Tomato juice",
    "Bananas",
    "Crappy Beer",
    "Lil bitta ganja",
    "Lemon Juice",
    "Aromatic Bitters",
    "Orange Bitters",
    "Creole Bitters",
    "Triple Sec Liqueur",
    "Apricot Liqueur",
    "Coffee Liqueur",
    "Amaretto Liqueur",
    "Pineapple Juice",
    "Egg White",
    "Soda Water (Club Soda)",
    "Grapefruit Juice",
    "Apple Juice",
    "Cranberry Juice",
    "Elderflower Liqueur",
    "Mint Leaves",
    "Agave Syrup",
    "Ginger Ale",
    "Maple Syrup",
    "Tonic Water",
    "Espresso",
    "Honey",
    "Ginger Beer",
    "Lemon-Lime Soda",
    "Coca-Cola",
  ];
  let breeds = props.breeds;
  let cocktail = props.cocktail;
  let dogBreeds = props.dogBreeds;

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
        {/* <label>{breedsToAppData}</label>
        <Cocktail dogBreeds = {props.dogBreeds} bringStarterDogArrayToParent={bringStarterDogArrayToParent}/>
        {breedsToAppData} */}
        {/* <Breeds dogbreeds={props.dogbreeds}/> */}
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
            // breedMakeupArray={breedsToAppData}
            breedsToDrinkIngredientsArray={breedsToDrinkIngredientsArray}
          />
        )}
      </div>
    </div>
  );
}

export default InputtoOutputSwitch;
