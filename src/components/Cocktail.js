import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
    // console.log(breedsToDrinkIngredientsArray)
    setBreedsToDrinkIngredientsArray([])
  }
  return (
    <div>
      <div className="custom-drink-container">
        <Button onClick={() => calculateCocktail()} variant="primary" size="lg">
          Create Your Custom Cocktail!
        </Button>
        <h2>Your Custom Drink:</h2>
        {(breedsToDrinkIngredientsArray.length > 0) ? 
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            {/* <Card.Title>Your Custom Drink:</Card.Title> */}
        {breedsToDrinkIngredientsArray.map((AITFNAR, i) => {
          return (
                <ListGroup className="current-cocktail-makeup" key={"list" + i} as="ul" >
                    <ListGroup.Item as="li">
                    <Card.Text key={"listItem" + 1}>{AITFNAR}
                    </Card.Text>
                    </ListGroup.Item>
                </ListGroup>
          );
        })}
        {(breedsToDrinkIngredientsArray.length > 0) ? <Button className="center-btn" onClick={() => clearCurrentCocktail()} variant="primary" size="md">Clear Cocktail</Button > : <button style={{display:"none"}}></button>}
            </Card.Body>
        </Card> : <p>Your Drink Will Appear Here</p>}
      </div>
    </div>
  );
}

export default Cocktail;
