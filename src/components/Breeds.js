import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import API from "../utils/API";
import DogBreeds from "../data/DogBreeds";
import Cocktail from "./Cocktail";
import "../styles/main.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import myDogs from "../assets/mydogs.jpg";

function Breeds(props) {
  const [starterDogArray, setStarterDogArray] = useState([]);
  const [currentDogBreed, setCurrentDogBreed] = useState("");
  const [currentDogBreedPercentage, setCurrentDogBreedPercentage] =
    useState("");
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [breedListDisplayType, setBreedListDisplayType] = useState(false);
  const [randomDogImage, setRandomDogImage] = useState({
    name: "My dogs",
    image: myDogs,
  });
  let dogImg;

  let dogBreeds = props.dogBreeds;

  const handleAddBreedPartForm = (e) => {
    e.preventDefault();
    dogBreeds.map((DB, i) => {
      if (DB.name === currentDogBreed) {
        dogImg = DB.image;
      }
    });
    const additionalDogBreed = {
      breedName: currentDogBreed,
      percentage: currentDogBreedPercentage,
      image: dogImg,
    };
    starterDogArray.push(additionalDogBreed);
    setStarterDogArray([...starterDogArray]);
    setTotalPercentage(
      Number(totalPercentage) + Number(additionalDogBreed.percentage)
    );
    setCurrentDogBreed("Affenpinscher");
    setCurrentDogBreedPercentage("");
    console.log(starterDogArray);
  };
  const clearItem = (STA) => {
    // console.log("test" + starterDogArray.indexOf(STA))
    starterDogArray.splice(starterDogArray.indexOf(STA), 1);
    setStarterDogArray([...starterDogArray]);
    setTotalPercentage(Number(totalPercentage) - Number(STA.percentage));
  };
  const clearList = () => {
    //   console.log("test")
    setStarterDogArray([]);
    setTotalPercentage(0);
  };
  const changeRandomDogImage = () => {
    setRandomDogImage(dogBreeds[Math.floor(Math.random() * dogBreeds.length)]);
  };

  const handleListOrCardChange = () => { 
    if (breedListDisplayType === true) {
      setBreedListDisplayType(false)
    } else {
      setBreedListDisplayType(true)
    }
    
  }; 

  return (
    <>
      <div className="randomImgContainer">
        <h4>{randomDogImage.name}</h4>
        <button
          onClick={() => changeRandomDogImage()}
          className="center-btn"
          type="submit"
        >
          <img width="200px" src={randomDogImage.image} />
        </button>
        <h5>Click image for random dog picture</h5>
      </div>

      <div className="form-container">
        <p>Choose your breeds:</p>
        <Form onSubmit={handleAddBreedPartForm}>
          <Form.Select
            placeholder="Select your breed"
            value={currentDogBreed}
            onChange={(e) => setCurrentDogBreed(e.target.value)}
            aria-label="Default select example"
          >
            {dogBreeds.map((DB, i) => {
              return <option key={"breed " + i}>{DB.name}</option>;
            })}
          </Form.Select>
          <Form.Control
            placeholder="Percentage of breed"
            value={currentDogBreedPercentage}
            onChange={(e) => setCurrentDogBreedPercentage(e.target.value)}
          />
          <Button className="center-btn" type="submit" variant="primary">
            Add
          </Button>{" "}
        </Form>
      </div>
      <div>
        <div className="current-dog-container">
          <h2>Your Current Dog:</h2>
          {(starterDogArray.length > 0) ?
          (<div className="list-cards-toggle">
          <h6 style={{ margin: "0px 5px" }}>List</h6>
          <input type="checkbox" id="switch" className="checkbox" onChange={handleListOrCardChange} />
          <label htmlFor="switch" className="toggle">
          </label>
          <h6 style={{ margin: "0px 5px" }}>Cards</h6>
          </div>)
          :(<button style={{ display: "none" }}></button>)}

          {starterDogArray.length > 0 ? (
            <div className="mb-2">
              <Button onClick={() => clearList()} variant="primary" size="md">
                Clear List
              </Button>{" "}
            </div>
          ) : (
            <button style={{ display: "none" }}></button>
          )}
          <ListGroup className={(breedListDisplayType === true) ? "current-dog-makeup-cards" : "current-dog-makeup-list"} as="ul">
            {starterDogArray.map((STA, i) => {
              return breedListDisplayType === true ? (
                <Card style={{ width: "16%", margin: "2% 1%" }}>
                  <Card.Body>
                    <Card.Img variant="top" src={STA.image} />
                    <Card.Text>
                      {STA.breedName} - {STA.percentage}%{" "}
                    </Card.Text>
                    <Button
                      className="delete-item-btn"
                      onClick={() => clearItem(STA)}
                    >
                      Clear Item
                    </Button>
                  </Card.Body>
                </Card>
              ) : (
                <ListGroup.Item key={"b" + i} as="li">
                  <div style={{ display: "inline-block" }}>
                    <img width="75px" src={STA.image} />
                  </div>
                  <p style={{ display: "inline-block" }}>
                    {STA.breedName} - {STA.percentage}%{" "}
                  </p>
                  <div style={{ display: "inline-block" }}>
                    <button
                      className="delete-item-btn"
                      onClick={() => clearItem(STA)}
                    >
                      &times;
                    </button>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <p>
            <strong>Total Dog Breed Makeup: {totalPercentage}%</strong>
          </p>
        </div>
        <Cocktail breedMakeupArray={starterDogArray} dogBreeds={dogBreeds} />
      </div>
    </>
  );
}

export default Breeds;
