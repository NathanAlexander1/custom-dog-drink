import React from "react";
import axios from "axios";

const URL_PREFIX = 'http://localhost:3001'

// LIVE SERVER
// const URL_PREFIX = "https://wastenot-kitchen-app.herokuapp.com";

const API = {
    //login user
    login: (userObj) => {
      return fetch(`${URL_PREFIX}/api/users/login`, {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    },
  
    //Get user
    getUserById: (userId) => {
      return fetch(`${URL_PREFIX}/api/users/${userId}`).then((res) => res.json());
    },
  
    //get user from localstorage
    getUserFromToken: (token) => {
      return fetch(`${URL_PREFIX}/api/users/getuserfromtoken`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json());
    },
    //Signup new user
    signup: (userObj) => {
      return fetch(`${URL_PREFIX}/api/users`, {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    },
  //get dog breed list
  getDogBreedsList: () => {
    return fetch(`${URL_PREFIX}/api/dogbreeds/`).then((res) => res.json());
  },

  //get all dogs
  getAllDogs: () => {
    return fetch(`${URL_PREFIX}/api/dogs/`).then((res) => res.json());
  },

  getPublicDogs: () => {
    return fetch(`${URL_PREFIX}/api/dogs/public`).then((res) => res.json());
  },

  //get random dog
  getRandomDog: () => {
    return fetch(`${URL_PREFIX}/api/dogbreeds/randomdogbreed`).then((res) => res.json());
  },
  //get Dog Uploads by User Id
  getUserDogUploads: (token, userId) => {
    return fetch(`${URL_PREFIX}/api/dogs/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
  //dog guesses by user id
  getDogGuessesByUserID: (token, userId) => {
    return fetch(`${URL_PREFIX}/api/dogguesses/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },

  //get dog guesses by dog id
  getAllGuessesOnADog: (DogId) => {
    return fetch(`${URL_PREFIX}/api/dogguesses/dogs/${DogId}`).then((res) => res.json());
  },
  //might not need
  containsAlcohol: (name) => {
    return fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${name}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5e79716550msheb1f632ec0e45f1p1acb5cjsnb191649047f5",
        "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  },
};

export default API;

// {dogUploadList.map((dul, i) => {
//   {
//     const guesses = dul.DogGuesses.map((guess, i) => {
//       return (
//         <div>
//           <p>Guesser: {guess.UserId}</p>
//           <ul>
//             <li>{guess.breed}</li>
//             <li>{guess.percentage}</li>
//             <li>{guess.UserId}</li>
//             <hr />
//           </ul>
//         </div>
//       );
//     });
//     return (
//       <div>
//         <ul>
//           <img src={dul.dog_image} width="50px" />
//           <li>Name: {dul.name}</li>
//           <li>Dog Owner: {dul.User.name}</li>
//         </ul>
//         <p>{guesses}</p>
//       </div>
//     );
//   }
// })}
