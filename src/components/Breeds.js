import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import API from "../utils/API";
import Cocktail from "./Cocktail";
import "../styles/main.css";
import "../styles/toggle.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function Breeds(props) {
  // console.log(props.bringStarterDogArrayToParent
  // )
  const [starterDogArray, setStarterDogArray] = useState([]);
  const [currentDogBreed, setCurrentDogBreed] = useState("");
  const [currentDogBreedPercentage, setCurrentDogBreedPercentage] =
    useState("");
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [breedListDisplayType, setBreedListDisplayType] = useState(false);
  let dogImg;

  let dogBreeds = props.dogBreeds;

  const handleStateToSendChildDataToParent = (data) => {
    props.bringStarterDogArrayToParent(data);
  };

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
    // console.log(starterDogArray);
    handleStateToSendChildDataToParent(starterDogArray);
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

  const handleListOrCardChange = () => {
    if (breedListDisplayType === true) {
      setBreedListDisplayType(false);
    } else {
      setBreedListDisplayType(true);
    }
  };
  return (
    <>
      <div className="form-container">
        <p style={{ margin: "0 0 5px 0" }}>Choose your breeds:</p>
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
            placeholder="Percentage of breed (0-100)"
            value={currentDogBreedPercentage}
            pattern="^100(\.[0]{1,2})?|([0-9]|[1-9][0-9])(\.[0-9]{1,2})?$"
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
          {starterDogArray.length > 0 ? (
            <div className="list-cards-toggle">
              <input
                type="checkbox"
                id="breed-component-switch"
                className="breed-component-checkbox"
                onChange={handleListOrCardChange}
              />
              <label
                htmlFor="breed-component-switch"
                className="breed-component-toggle"
              >
                <h4 style={{ margin: "0px", padding: "2px 5px 0 5px" }}>
                  List
                </h4>
                <h4 style={{ margin: "0px", padding: "2px 8px 0 8px" }}>
                  Cards
                </h4>
              </label>
            </div>
          ) : (
            <img
              width="100px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Question_Mark_1.svg/2026px-Question_Mark_1.svg.png"
            />
          )}

          {starterDogArray.length > 0 ? (
            <div className="mb-2">
              <Button onClick={() => clearList()} variant="primary" size="md">
                Clear List
              </Button>{" "}
            </div>
          ) : (
            <button style={{ display: "none" }}></button>
          )}
          <ListGroup
            className={
              breedListDisplayType === true
                ? "current-dog-makeup-cards"
                : "current-dog-makeup-list"
            }
            as="ul"
          >
            {starterDogArray.map((STA, i) => {
              return breedListDisplayType === true ? (
                <Card
                  className="breed-card"
                  style={{ width: "30%", margin: "1% 1.66%" }}
                >
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
                <ListGroup.Item
                  className="breed-list-item"
                  key={"b" + i}
                  as="li"
                >
                  <img width="100px" src={STA.image} />
                  <p>
                    {STA.breedName} - {STA.percentage}%{" "}
                  </p>
                  <button
                    className="delete-item-btn"
                    onClick={() => clearItem(STA)}
                  >
                    &times;
                  </button>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <p className="center-paragraph-text">
            <strong>Total Dog Breed Makeup: {totalPercentage}%</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default Breeds;
