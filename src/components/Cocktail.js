import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Cocktail(props) {
  let outputArrayData = props.outputArrayData
  console.log(outputArrayData)
  let inputArrayData = props.inputArrayData;

  let convertedInputToOutputItems = props.convertedInputToOutputItems;
  
  const [breedsToDrinkIngredientsArray, setBreedsToDrinkIngredientsArray] =
  useState(convertedInputToOutputItems);
  console.log(convertedInputToOutputItems)
  console.log(breedsToDrinkIngredientsArray)


    const convertBreedToIngredient = inputArrayData.map((DB) => {
      DB = outputArrayData[Math.floor(Math.random() * outputArrayData.length)];
      return DB;
    });
    
  useEffect(() => {

    setBreedsToDrinkIngredientsArray(
      convertedInputToOutputItems.map((BMA) => {
        BMA.breedName =
          convertBreedToIngredient[
            Math.floor(Math.random() * convertBreedToIngredient.length)
          ];
        return BMA;
      })
    );
  }, []);



  // console.log(convertBreedToIngredient)
  const clearCurrentCocktail = () => {
    console.log(breedsToDrinkIngredientsArray)
    // console.log(breedsToDrinkIngredientsArray)
    setBreedsToDrinkIngredientsArray([]);
  };

  const replaceCocktailItem = (AITFNAR, i) => {
    // console.log(AITFNAR)
    // console.log(convertedInputToOutputItems)
    convertedInputToOutputItems[i].breedName =
      convertBreedToIngredient[
        Math.floor(Math.random() * convertBreedToIngredient.length)
      ];
    // console.log(convertedInputToOutputItems);
    setBreedsToDrinkIngredientsArray([...convertedInputToOutputItems]);
  };
  
  return (
    <div>
      <div className="custom-drink-container">
        <h2>Your Custom Drink:</h2>
        {breedsToDrinkIngredientsArray.length > 0 ? (
          <Card className="cocktail-card" style={{ width: "65%" }}>
            <Card.Body>
              {breedsToDrinkIngredientsArray.map((AITFNAR, i) => {
                console.log(breedsToDrinkIngredientsArray)
                return (
                  <ListGroup
                    className="current-cocktail-makeup"
                    key={"list" + i}
                    as="ul"
                  >
                    <ListGroup.Item as="li">
                      <Card.Text key={"listItem" + 1}>
                        {AITFNAR.breedName} - {AITFNAR.percentage}%
                      </Card.Text>
                      <Button onClick={() => replaceCocktailItem(AITFNAR, i)}>
                        Replace
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}
              {breedsToDrinkIngredientsArray.length > 0 ? (
                <Button
                  className="center-btn"
                  onClick={() => clearCurrentCocktail()}
                  variant="primary"
                  size="md"
                >
                  Clear Cocktail
                </Button>
              ) : (
                <button style={{ display: "none" }}></button>
              )}
            </Card.Body>
          </Card>
        ) : (
          <p>Your Drink Will Appear Here</p>
        )}
      </div>
    </div>
  );
}

export default Cocktail;
