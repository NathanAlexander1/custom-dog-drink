import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";

import RandomImage from "../../components/RandomImage";
import InputtoOutputSwitch from "../../components/InputtoOutputSwitch";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  catBreedsListOptions,
  cocktailDataArray,
  smoothieDataArray,
  testCocktailIngredientsArray,
} from "../../const";
import API from "../../utils/API";

function Landing(props) {
  const dataInputCategories = ["Dogs", "Cats"];
  const [selectInputDataCategory, setSelectInputDataCategory] = useState("");
  const dataOutputCategories = ["Cocktail", "Smoothie"];
  const [selectOutputDataCategory, setSelectOutputDataCategory] = useState("");
  const [inputArrayData, setInputArrayData] = useState([]);
  // console.log(inputArrayData)
  const [outputDataType, setOutputDataType] = useState(cocktailDataArray);
  const [buttonClicked, setButtonClicked] = useState(false);

  //input data
  useEffect(() => {
    // console.log(props.userId.id);
    API.getDogBreedsList().then((data) => {
      // console.log(data);
      setInputArrayData(data);
    });
  }, [props.userId]);

  const handleSelectDataTypes = (e) => {
    e.preventDefault();
    setButtonClicked(true);
    if (selectInputDataCategory === "Dogs") {
      setInputArrayData(inputArrayData);
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
      {props.userId === 0 ? (
        <h2>Please login to continue</h2>
      ) : (
        <h2>{props.userId.name}'s Profile</h2>
      )}
      {buttonClicked === false ? (
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
      )}
    </div>
  );
}

export default Landing;
