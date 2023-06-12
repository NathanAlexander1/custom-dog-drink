import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";

function Cocktail(props) {
  let dogBreeds = props.dogBreeds;
  let breedMakeupArray = props.breedMakeupArray;
  // let breedPercentage =
  console.log(props.breedMakeupArray);
  const [breedsToDrinkIngredientsArray, setBreedsToDrinkIngredientsArray] =
    useState([]);
  let testDataArray = [
    "Vodka",
    "Orange Juice",
    "Vermouth",
    "Tomato juice",
    "Bananas",
    "Crappy Beer",
    "Lil bitta ganja",
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

    console.log(breedsToDrinkIngredientsArray);
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

      {/* {breedMakeupArray.map((BMA, i) => {
    console.log(BMA)
    return
    (<div></div>)
})}

    {dogBreeds.map((DB, i) => {
        DB = testDataArray[Math.floor(Math.random()*testDataArray.length)]
        return (
            // <div><h1 key={"a" + i}>{DB}</h1></div>
        )
    })} */}

      {/* {testDataArray.map((TDA, i) => {

            dogBreeds.map((DB) => {
                console.log(`i - DB`)
                return (
                    <div><h1>{DB}</h1></div>
                )
            })
            return (
                <div><h1>{TDA}</h1></div>
            )
    })} */}
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
