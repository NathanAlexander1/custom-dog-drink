import React from 'react'
import { useEffect, useInsertionEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

import API from '../../utils/API'

function DogGuesses(props) {
    const [dogGuessList, setdogGuessList] = useState([]);
    const [dogGuessName, setdogGuessName] = useState([]);
    useEffect(() => {
        // console.log(props.userId.id);
        API.getFullDogByUserID(props.token, props.userId.id).then((data) => {
          console.log(data);
          setdogGuessList(data);
        });
      }, [props.userId]);
      console.log(dogGuessList)
  return (
    <div>
        {dogGuessList.map((dgl, i) => {
          // console.log(dgl)
            return (
              
              <Card style={{ width: "18rem" }} className="ind_public_dog">
              <Card.Body>
                <Card.Title>{dgl.dogName}</Card.Title>
                <Card.Title>Guess:</Card.Title>
                {dgl.DogGuesses.map((dg, i) => {
                  return(
                    <Card.Text>{dg.breed} - {dg.percentage}%</Card.Text>
                    )
                })}
              </Card.Body>
            </Card>
            )
        })}
    </div>
  )
}

export default DogGuesses