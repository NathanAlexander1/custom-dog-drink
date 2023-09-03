import React from 'react'
import API from "../utils/API";
import { useEffect, useInsertionEffect, useState } from "react";
import myDogs from "../assets/mydogs.jpg";

function RandomImage(props) {
    let inputArrayData = props.inputArrayData;
    const [randomDogImage, setRandomDogImage] = useState({
        name: "My dogs",
        image: myDogs,
      });

      // useEffect(() => {
      //   // console.log(props.userId.id);
      //   API.getRandomDog().then((data) => {
      //     console.log(data);
      //     setRandomDogImage(data);
      //   });
      // }, []);

      const changeRandomDogImage = () => {
        // setRandomDogImage(inputArrayData[Math.floor(Math.random() * inputArrayData.length)]);
        API.getRandomDog().then((data) => {
          console.log(data);
          setRandomDogImage(data);
        });
      };
  return (
    <div className="randomImgContainer">
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