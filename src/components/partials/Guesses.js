import React from "react";
import { Button, Card } from "react-bootstrap";

function Guesses(props) {
  console.log(props);
  return (
    <div className="dog_guesses">
      {props.dogGuessData.DogGuesses.map((dg, i) => {
        return (
          <div>
            <Card style={{ width: "18rem" }} className="ind_public_dog">
              <Card.Body>
                <Card.Title>Guesser: {dg.User.name}</Card.Title>
                <Card.Title>Breed: {dg.breed}</Card.Title>
                <Card.Title>Percentage: {dg.percentage}</Card.Title>
                {/* <Card.Text>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </Card.Text> */}
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Guesses;
