import React from 'react'

const API = {

//     getDogBreeds: () => {
//     return fetch(`https://dog.ceo/api/breeds/list/all`, {
//       method: "GET",
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json",
//       },
//     }).then((res) => res.json());
//   }
getDogBreeds: async () => {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const myJson = await response.json();
    return myJson
}
}


export default API