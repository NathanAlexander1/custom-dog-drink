import React from "react";
import axios from "axios";

const API = {
  //   getCocktailIngredientsList: async () => {
  //     // const url = "https://the-cocktail-db.p.rapidapi.com/list.php?i=list";
  //     const url = "www.thecocktaildb.com/api/json/v1/5e79716550msheb1f632ec0e45f1p1acb5cjsnb191649047f5/list.php?i=list"
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key": "5e79716550msheb1f632ec0e45f1p1acb5cjsnb191649047f5",
  //         "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },

  //   getCocktailIngredientsList: () => {
  //     return fetch (`www.thecocktaildb.com/api/json/v1/1/list.php?i=list`, {
  //         method: "GET",
  //         headers: {
  //           "X-RapidAPI-Key": "5e79716550msheb1f632ec0e45f1p1acb5cjsnb191649047f5",
  //           "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //         }
  //     }).then((res) => res.json())
  //   }

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
