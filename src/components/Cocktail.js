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
    "Coca-Cola"
  ];

  const convertBreedToIngredient = dogBreeds.map((DB) => {
    DB = testDataArray[Math.floor(Math.random() * testDataArray.length)];
    return DB;
  });

  // console.log(convertBreedToIngredient)
  const calculateCocktail = () => {
    setBreedsToDrinkIngredientsArray (breedMakeupArray.map((BMA) => {
      BMA.breedName =
        convertBreedToIngredient[
          Math.floor(Math.random() * convertBreedToIngredient.length)
        ];
      return `${BMA.breedName} - ${BMA.percentage}%`;
    }));

    // console.log(breedsToDrinkIngredientsArray);
  };
  return (
    <div>
      {/* //take the array of all breeds
    //Create new array (useState)
    //Iterate over dog breed array while simultaneously randomly iterating over testDataArray
    //For each value of dog breed array, move a random cocktail array into the new array
    //End double for loop

    //Then, take the breedMakeupArray
    //Create new array
    //Iterate over breedMakeupArray and move 
    //For each value, take a value from cocktail array and move to newly created array
        //Can code so there are never repeats
    // //Rendder Array of custom cocktailt to the screen */}
    <h1>Your Custom Drink:</h1>
      {breedsToDrinkIngredientsArray.map((AITFNAR) => {
        return (
          <ul>
            <li>{AITFNAR}</li>
          </ul>
        );
      })}
      <button onClick={() => calculateCocktail()}>
        Create Your Custom Cocktail!
      </button>
    </div>
  );
}

export default Cocktail;
