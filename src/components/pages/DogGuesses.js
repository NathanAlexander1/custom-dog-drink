import React from 'react'
import { useEffect, useInsertionEffect, useState } from "react";
import API from '../../utils/API'

function DogGuesses(props) {
    const [dogGuessList, setdogGuessList] = useState([]);
    const [dogGuessName, setdogGuessName] = useState([]);
    useEffect(() => {
        // console.log(props.userId.id);
        API.getDogGuessesByUserID(props.token, props.userId.id).then((data) => {
          console.log(data);
          setdogGuessList(data);
        });
      }, [props.userId]);
  return (
    <div>
        {dogGuessList.map((dgl, i) => {
            return (
                <ul>
                    <li>{dgl.Dog.name}</li>
                    <li>guess id: {dgl.id}</li>
                    <li>Guess breed: {dgl.breed}</li>
                    <li>Guess percentage: {dgl.percentage}</li>
                    <li>Guesser id: {dgl.UserId}</li>
                    <li>Id of dog being guessed: {dgl.DogId}</li>
                </ul>
            )
        })}
    </div>
  )
}

export default DogGuesses