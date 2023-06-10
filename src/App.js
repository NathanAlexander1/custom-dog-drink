import "./App.css";
import Main from "./components/Main";
import Breeds from "./components/Breeds";
import { useEffect, useInsertionEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Breeds/>

      {/* <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
