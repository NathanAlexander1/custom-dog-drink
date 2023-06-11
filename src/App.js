import Main from "./components/Main";
import Breeds from "./components/Breeds";
import { useEffect, useInsertionEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [breedList, setInputList] = useState([<Breeds />]);
  // const handleAddAdditionalBreed = () => {
  //   setInputList(breedList.concat(<Breeds/>));
  // };

  // const handleRemoveBreed = () => {
  //   setInputList(breedList.slice(0,-1))
  // };

  return (
    <div>
      <Breeds/>

      {/* {breedList.map((BL, i) => {
        return <div>{BL}</div>;
      })}

      <button type="button" onClick={() => handleAddAdditionalBreed()}>
        Add another breed?
      </button>

      <button type="button" onClick={() => handleRemoveBreed()}>
        Remove last breed?
      </button> */}

        
        {/* {currentDog.map((CD, i) => {
          return (
            <div>
            <p>
              {CD.breedName} - {CD.percentage}
            </p>
          </div>
          )}
        )} */}


      {/* <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
