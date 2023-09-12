import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import API from "../../utils/API";
import { Button, Card } from "react-bootstrap";
import Guesses from "../partials/Guesses";

function PublicDogs() {
  const [dogUploadList, setdogUploadList] = useState([]);
  const [dogGuessData, setDogGuessData] = useState([]);
  const [renderGuesses, setRenderGuesses] = useState(false);

  useEffect(() => {
    // console.log(props.userId.id);
    API.getPublicDogs().then((data) => {
      // console.log(data);
      setdogUploadList(data);
    });
  }, []);

  const handleViewPublicDogs = () => {
    setRenderGuesses(false);

  }

  const handleViewGuesses = (dogGuessData) => {
    //API call to get guesses by dog by user id?
    console.log(dogGuessData);
    setDogGuessData(dogGuessData);
    setRenderGuesses(true);
  };
  return (
    <div>
      {renderGuesses ? (
        <div className="d-flex flex-column align-items-center">
        <Button onClick={() => handleViewPublicDogs()}>
          Return to Public Dogs
        </Button>
        <Guesses dogGuessData={dogGuessData} />
        </div>
      ) : (
        <div className="public_dogs_container">
          {dogUploadList.map((dul, i) => {
            // console.log(dul)
            return (
              <div>
                <Card style={{ width: "18rem" }} className="ind_public_dog">
                  <Card.Img variant="top" src={dul.dog_image} />
                  <Card.Body>
                    <Card.Title>{dul.name}</Card.Title>
                    <Card.Title>{dul.User.name}</Card.Title>
                    {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                    <Button
                      className="public-dog-btn"
                      onClick={() => handleViewGuesses(dul)}
                    >
                      View Guesses
                    </Button>
                    <Button className="public-dog-btn">Make a guess</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PublicDogs;
