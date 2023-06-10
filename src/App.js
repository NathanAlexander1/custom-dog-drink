import "./App.css";
import Main from "./components/Main";
import Breeds from "./components/Breeds";
import { useEffect, useInsertionEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [inputList, setInputList] = useState([<Breeds />]);

  const handleAddAdditionalBreed = () => {
    setInputList(inputList.concat(<Breeds/>))
  };

  const handleRemoveBreed = () => {
    setInputList(inputList.slice(0,-1))
  };

  return (
    <div>
      {inputList.map((IL, i) => {
        return <div>{IL}</div>;
      })}

      <button type="button" onClick={() => handleAddAdditionalBreed()}>
        Add another breed?
      </button>

      <button type="button" onClick={() => handleRemoveBreed()}>
        Remove last breed?
      </button>

      {/* <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
