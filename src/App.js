import { useEffect, useInsertionEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Breeds from "./components/Breeds";
import Cocktail from "./components/Cocktail";
import DataArrays from "./components/DataArrays";
import RandomImage from "./components/RandomImage";
import InputtoOutputSwitch from "./components/InputtoOutputSwitch";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { dogBreedsListOptions, catBreedsListOptions, cocktailDataArray, smoothieDataArray } from "./const";
// import "./styles/main.css";

function App() {
  //input data

  //output data
  const dataInputCategories = ["Dogs", "Cats"];
  const [selectInputDataCategory, setSelectInputDataCategory] = useState("");
  const dataOutputCategories = ["Cocktail", "Smoothie"];
  const [selectOutputDataCategory, setSelectOutputDataCategory] = useState("");
  const [inputArrayData, setInputArrayData] = useState(dogBreedsListOptions);
  // console.log(inputArrayData)
  const [outputDataType, setOutputDataType] = useState(cocktailDataArray);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSelectDataTypes = (e) => {
    e.preventDefault();
    setButtonClicked(true);
    if (selectInputDataCategory === "Dogs") {
      setInputArrayData(dogBreedsListOptions);
      // console.log(inputArrayData);
    } else {
      setInputArrayData(catBreedsListOptions);
      // console.log(inputArrayData);
    }

    if (selectOutputDataCategory === "Cocktail") {
      setOutputDataType(cocktailDataArray);
      // console.log(outputDataType);
    } else {
      setOutputDataType(smoothieDataArray);
      // console.log(outputDataType);
    }
  };
  return (
    <div className="broadest-container">
      <h2>Welcome to DogTail!</h2>
      {buttonClicked === false ? (
        <div className="broadest-container">
          <RandomImage inputArrayData={inputArrayData} />
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
      )}
      {/* <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
