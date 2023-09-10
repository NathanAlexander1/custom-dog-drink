import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import API from "../../utils/API";

function PublicDogs() {
  const [dogUploadList, setdogUploadList] = useState([]);
  useEffect(() => {
    // console.log(props.userId.id);
    API.getPublicDogs().then((data) => {
      // console.log(data);
      setdogUploadList(data);
    });
  }, []);
  return (
    <div className="d-flex flex-row">
      {dogUploadList.map((dul, i) => {
        console.log(dul)
        return (
          <div>
            <ul>
              <img src={dul.dog_image} width="50px" />
              <li>Name: {dul.name}</li>
              <li>Dog Owner: {dul.User.name}</li>
              <p>Make a guess</p>
              <div>
                {dul.DogGuesses.map((guess, i) => {
                  // API.getUserById(guess.UserId).then((data) => {
                  //     console.log(data)
                  // })
                  return (
                    <div>
                      <p>Guesser: {guess.User.name}</p>
                      <ul>
                        <li>{guess.breed}</li>
                        <li>{guess.percentage}</li>
                        <li>{guess.UserId}</li>
                        <hr />
                      </ul>
                    </div>
                  );
                })}
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default PublicDogs;
