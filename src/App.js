import { useEffect, useInsertionEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/pages/Login";
import Landing from "./components/pages/Landing";
import DogGuesses from "./components/pages/DogGuesses";
import PublicDogs from "./components/pages/PublicDogs";
import Breeds from "./components/Breeds";
import Cocktail from "./components/Cocktail";
// import RandomImage from "./components/RandomImage";
// import InputtoOutputSwitch from "./components/InputtoOutputSwitch";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import {
//   catBreedsListOptions,
//   cocktailDataArray,
//   smoothieDataArray,
//   testCocktailIngredientsArray,
// } from "./const";
import API from "../src/utils/API";
// import "./styles/main.css";

function App() {
  const [userId, setUserId] = useState(0);
  const [userObj, setUserObj] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // console.log(storedToken);
      API.getUserFromToken(storedToken).then((data) => {
        if (data.user) {
          // console.log(data)
          setToken(storedToken);
          setIsLoggedIn(true);
          //   setUserId(data.user);
          setUserId(data.user);
        }
      });
    } else {
      console.log("no stored token");
    }
  }, []);

  // //output data
  // const dataInputCategories = ["Dogs", "Cats"];
  // const [selectInputDataCategory, setSelectInputDataCategory] = useState("");
  // const dataOutputCategories = ["Cocktail", "Smoothie"];
  // const [selectOutputDataCategory, setSelectOutputDataCategory] = useState("");
  // const [inputArrayData, setInputArrayData] = useState([]);
  // // console.log(inputArrayData)
  // const [outputDataType, setOutputDataType] = useState(cocktailDataArray);
  // const [buttonClicked, setButtonClicked] = useState(false);

  // //input data
  // useEffect(() => {
  //   // console.log(props.userId.id);
  //   API.getDogBreedsList().then((data) => {
  //     // console.log(data);
  //     setInputArrayData(data);
  //   });
  // }, []);

  const handleLoginSubmit = (userObj) => {
    API.login({
      email: userObj.email,
      password: userObj.password,
    }).then((data) => {
      console.log(data);
      if (data.token) {
        setUserId(data.user);
        setToken(data.token);
        setIsLoggedIn(true);
        localStorage.setItem("token", data.token);
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserId(0);
    setToken("");
  };

  const handleSignupSubmit = (userObj) => {
    API.signup({
      name: userObj.name,
      email: userObj.email,
      password: userObj.password,
    }).then((data) => {
      console.log(data);
      if (data.token) {
        setUserId(data.user);
        setToken(data.token);
        setIsLoggedIn(true);
        localStorage.setItem("token", data.token);
      }
    });
  };
  // console.log(typeof cocktailDataArray[0].description === 'string')
  // API.containsAlcohol(cocktailDataArray[2].ingredientName).then((data) => {
  //   console.log(data.ingredients[0].strAlcohol)

  // })
  // const newCocktailIng = cocktailDataArray.map((CIA) => {
  //   console.log(CIA.ingredientName)
  //   API.containsAlcohol(CIA.ingredientName).then((data) => {
  //     console.log(data.ingredients[0].strAlcohol);
  //     CIA.ID = data.ingredients[0].idIngredient
  //     CIA.containsAlcohol = data.ingredients[0].strAlcohol;
  //     CIA.description = data.ingredients[0].strDescription
  //   });
  //   return CIA;
  // });
  // console.log(newCocktailIng);

  // console.log(testCocktailIngredientsArray)

  // const handleSelectDataTypes = (e) => {
  //   e.preventDefault();
  //   setButtonClicked(true);
  //   if (selectInputDataCategory === "Dogs") {
  //     setInputArrayData(inputArrayData);
  //     // console.log(inputArrayData);
  //   } else {
  //     setInputArrayData(catBreedsListOptions);
  //     // console.log(inputArrayData);
  //   }

  //   if (selectOutputDataCategory === "Cocktail") {
  //     setOutputDataType(cocktailDataArray);
  //     // console.log(outputDataType);
  //   } else {
  //     setOutputDataType(smoothieDataArray);
  //     // console.log(outputDataType);
  //   }
  // };
  return (
    <div>
      {/* {buttonClicked === false ? (
        <div className="broadest-container">
          <RandomImage />
          <Form
            onSubmit={handleSelectDataTypes}
            className="setInputOutputFormContainer"
          >
            <Form.Select
              className="inputOutputDataTypes"
              placeholder="Select your input data"
              onChange={(e) => setSelectInputDataCategory(e.target.value)}
              aria-label="Default select example"
            >
              <option>Select your input data type</option>
              {dataInputCategories.map((DIC, i) => {
                return <option key={"data " + i}>{DIC}</option>;
              })}
            </Form.Select>
            <Form.Select
              className="inputOutputDataTypes"
              placeholder="Select your input data"
              onChange={(e) => setSelectOutputDataCategory(e.target.value)}
              aria-label="Default select example"
            >
              <option>Select your output data type</option>
              {dataOutputCategories.map((DOC, i) => {
                return <option key={"data " + i}>{DOC}</option>;
              })}
            </Form.Select>
            <Button className="center-btn" type="submit" variant="primary">
              Select
            </Button>{" "}
          </Form>
        </div>
      ) : (
        <InputtoOutputSwitch
          inputArrayData={inputArrayData}
          outputArrayData={outputDataType}
          selectInputDataCategory={selectInputDataCategory}
          selectOutputDataCategory={selectOutputDataCategory}
        />
      )} */}
      <Router>
        <div>
          <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          <h1 className="d-flex justify-content-center">
            Welcome to Tail of the Dog!
          </h1>
        </div>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                isLoggedIn={isLoggedIn}
                handleLoginSubmit={handleLoginSubmit}
                handleSignupSubmit={handleSignupSubmit}
                userId={userId}
                token={token}
              />
            }
          />
          <Route path="/" element={<Landing userId={userId} token={token} />} />
          <Route
            path="/dogguesses"
            element={<DogGuesses userId={userId} token={token} />}
          />
          <Route path="/public"
            element={<PublicDogs userId={userId} token={token} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
