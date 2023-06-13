import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";

function Cocktail(props) {
  let dogBreeds = props.dogBreeds;
  let breedMakeupArray = props.breedMakeupArray;
  // let breedPercentage =
  //   console.log(props.breedMakeupArray);
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

  const convertBreedToIngredient = dogBreeds.map((DB) => {
    DB = testDataArray[Math.floor(Math.random() * testDataArray.length)];
    return DB;
  });

  // console.log(convertBreedToIngredient)
  const calculateCocktail = () => {
    setBreedsToDrinkIngredientsArray(
      breedMakeupArray.map((BMA) => {
        BMA.breedName =
          convertBreedToIngredient[
            Math.floor(Math.random() * convertBreedToIngredient.length)
          ];
        return `${BMA.breedName} - ${BMA.percentage}%`;
      })
    );
    // console.log(breedsToDrinkIngredientsArray);
  };

  const clearCurrentCocktail = () => {
    console.log(breedsToDrinkIngredientsArray)
    setBreedsToDrinkIngredientsArray([])
  }
  return (
    <div>
      <div className="custom-drink-container">
        <button onClick={() => calculateCocktail()}>
          Create Your Custom Cocktail!
        </button>
        <h1>Your Custom Drink:</h1>
        {breedsToDrinkIngredientsArray.map((AITFNAR) => {
          return (
            <ul>
              <li>{AITFNAR}</li>
            </ul>
          );
        })}
        {(breedsToDrinkIngredientsArray.length > 0) ? <button onClick={() => clearCurrentCocktail()}>Clear Cocktail</button> : <button style={{display:"none"}}></button>}
        {/* <button style={{display:"none"}} onClick={() => clearCurrentCocktail()}>Clear Cocktail</button> */}
      </div>
    </div>
  );
}

export default Cocktail;
