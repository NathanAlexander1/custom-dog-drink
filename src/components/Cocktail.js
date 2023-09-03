import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Cocktail(props) {
  let outputArrayData = props.outputArrayData;
  // console.log(outputArrayData)
  let inputArrayData = props.inputArrayData;
  let convertedInputToOutputItems = props.convertedInputToOutputItems;
  // console.log(convertedInputToOutputItems)

  const [breedsToDrinkIngredientsArray, setBreedsToDrinkIngredientsArray] =
    useState(convertedInputToOutputItems);
  // console.log(convertedInputToOutputItems)
  // console.log(breedsToDrinkIngredientsArray)
  // console.log(outputArrayData)
  if (breedsToDrinkIngredientsArray.length === 1 && outputArrayData[0].ingredientName.includes("Light rum")) {
    outputArrayData = outputArrayData.filter(
      (OAD) => OAD.containsAlcohol === "Yes"
    );
    // console.log(outputArrayData.length);
  } else if (breedsToDrinkIngredientsArray.length === 2 && outputArrayData[0].ingredientName.includes("Light rum")) {
    console.log(outputArrayData.length);
  }

  const convertBreedToIngredient = inputArrayData.map((DB) => {
    DB =
      outputArrayData[Math.floor(Math.random() * outputArrayData.length)]
        .ingredientName;
    return DB;
  });

  useEffect(() => {
    // if (breedsToDrinkIngredientsArray.length === 1) {
    //   setBreedsToDrinkIngredientsArray(
    //     outputArrayData.map((OAD) => {
    //       return OAD.containsAlcohol === "Yes";
    //     })
    //   );
    // }
    setBreedsToDrinkIngredientsArray(
      convertedInputToOutputItems.map((BMA) => {
        BMA.liquor =
          convertBreedToIngredient[
            Math.floor(Math.random() * convertBreedToIngredient.length)
          ];
        return BMA;
      })
    );
  }, []);

  // console.log(convertBreedToIngredient)
  const clearCurrentCocktail = () => {
    // console.log(breedsToDrinkIngredientsArray)
    // console.log(breedsToDrinkIngredientsArray)
    setBreedsToDrinkIngredientsArray([]);
  };

  const replaceCocktailItem = (AITFNAR, i) => {
    // console.log(AITFNAR)
    // console.log(convertedInputToOutputItems)
    convertedInputToOutputItems[i].liquor =
      convertBreedToIngredient[
        Math.floor(Math.random() * convertBreedToIngredient.length)
      ];
    // console.log(convertedInputToOutputItems);
    setBreedsToDrinkIngredientsArray([...convertedInputToOutputItems]);
  };

  return (
    <div>
      <div className="custom-drink-container">
        <h2>
          Your Custom{" "}
          {props.selectOutputDataCategory === "Cocktail"
            ? "Cocktail"
            : "Smoothie"}
          :
        </h2>
        {breedsToDrinkIngredientsArray.length > 0 ? (
          <Card className="cocktail-card">
            <Card.Body>
              {breedsToDrinkIngredientsArray.map((AITFNAR, i) => {
                // console.log(breedsToDrinkIngredientsArray)
                return (
                  <ListGroup
                    className="current-cocktail-makeup"
                    key={"list" + i}
                    as="ul"
                  >
                    <ListGroup.Item as="li">
                      <Card.Text key={"listItem" + 1}>
                        {AITFNAR.liquor} - {AITFNAR.percentage}%
                      </Card.Text>
                      <Button
                        className="simple-icon-button"
                        onClick={() => replaceCocktailItem(AITFNAR, i)}
                      >
                        &#8635;
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
