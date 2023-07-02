import React from 'react'
import { useEffect, useInsertionEffect, useState } from "react";
import myDogs from "../assets/mydogs.jpg";

function RandomImage(props) {
    let inputArrayData = props.inputArrayData;
    const [randomDogImage, setRandomDogImage] = useState({
        name: "My dogs",
        image: myDogs,
      });

      const changeRandomDogImage = () => {
        setRandomDogImage(inputArrayData[Math.floor(Math.random() * inputArrayData.length)]);
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