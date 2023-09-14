import React from "react";
import { Button, Card } from "react-bootstrap";

function Guesses(props) {
  console.log(props);
  return (
    <div className="dog_guesses">
      {props.dogGuessData.FullGuesses.map((fg, i) => {
        return (
          <div>
            <Card style={{ width: "18rem" }} className="ind_public_dog">
              <Card.Body>
                <Card.Title>Guesser: {fg.guesserName}</Card.Title>
                <Card.Title>Guess:</Card.Title>
                {fg.DogGuesses.map((dg, i) => {
                  return(
                    <Card.Text>{dg.breed} - {dg.percentage}%</Card.Text>
                    )
                })}
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
