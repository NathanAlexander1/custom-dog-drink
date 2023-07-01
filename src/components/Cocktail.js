import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Cocktail(props) {
  // console.log(props)
  let dogBreeds = props.dogBreeds;
  let cocktailDataArray = [
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
  let smoothieDataArray = [
    "Chia Seeds",
    "Flax Seeds",
    "Oat Milk",
    "Mango",
    "Pineapple",
    "Blueberries",
    "Strawberries",
    "Raspberries",
    "Dates",
    "Acai Powder",
    "Agave",
    "Spinach",
    "Kale",
    "Bananas"
  ]
  let breedMakeupArray = props.breedsToDrinkIngredientsArray;

  const [breedsToDrinkIngredientsArray, setBreedsToDrinkIngredientsArray] =
    useState(breedMakeupArray);

    const [outputDataType, setOutputDataType] = useState(cocktailDataArray);

    const convertBreedToIngredient = dogBreeds.map((DB) => {
      DB = outputDataType[Math.floor(Math.random() * outputDataType.length)];
      return DB;
    });
    
  useEffect(() => {
    if (props.inputOutputDataType.outputData === "Cocktail") {
      setOutputDataType(cocktailDataArray)
    } else {
      setOutputDataType(smoothieDataArray)
    }
    setBreedsToDrinkIngredientsArray(
      [...breedMakeupArray].map((BMA) => {
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
    // console.log(breedMakeupArray)
    breedMakeupArray[i].breedName =
      convertBreedToIngredient[
        Math.floor(Math.random() * convertBreedToIngredient.length)
      ];
    // console.log(breedMakeupArray);
    setBreedsToDrinkIngredientsArray([...breedMakeupArray]);
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
