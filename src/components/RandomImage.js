import React from 'react'
import { useEffect, useInsertionEffect, useState } from "react";
import myDogs from "../assets/mydogs.jpg";

function RandomImage(props) {
    let dogBreeds = props.dogBreeds;
    const [randomDogImage, setRandomDogImage] = useState({
        name: "My dogs",
        image: myDogs,
      });

      const changeRandomDogImage = () => {
        setRandomDogImage(dogBreeds[Math.floor(Math.random() * dogBreeds.length)]);
      };
  return (
    <div className="randomImgContainer">
    <h2 >Welcome to DogckTail!</h2>
    <h5>Click image for random dog picture</h5>
    <h4>{randomDogImage.name}</h4>
    <button
      onClick={() => changeRandomDogImage()}
      className="center-btn"
      type="submit"
    >
      <img width="200px" src={randomDogImage.image} />
    </button>
  </div>
  )
}

export default RandomImage