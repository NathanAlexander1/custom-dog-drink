import React from 'react'
import { useEffect, useInsertionEffect, useState } from "react";

function Cocktail(props) {
    let dogBreeds = props.dogBreeds;
    let breedMakeupArray = props.breedMakeupArray;
    // console.log(dogBreeds)
    const [breedsToDrinkIngredientsArray, setBreedsToDrinkIngredientsArray] = useState([]);
    let testDataArray = ["Vodka", "Orange Juice", "Vermouth", "Tomato juice", "Bananas", "Crappy Beer", "Lil gitta ganja"]
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
    //Rendder Array of custom cocktailt to the screen */}
    {dogBreeds.map((DB, i) => {
        // testDataArray.map((TDA) => {
        //     console.log(`i - TDA`)
        //     return (
        //         <div><h1>{TDA}</h1></div>
        //     )
        // })
        DB = testDataArray[Math.floor(Math.random()*testDataArray.length)]
        return (
            <div><h1>{DB}</h1></div>
        )
    })}

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

    <button >Create Your Custom Cocktail!</button>
    </div>
  )
}

export default Cocktail