import logo from "./logo.svg";
import React from "react";
import "./App.css";
import axios from "axios";
import DirectMap from "./Components/DirectMap";
import FullyAssociativeCache from "./Components/FullyAssociativeCache";
import AverageEffectiveAccessTime from "./Components/AverageEffectiveAccessTime";
function App() {
  // Fix the api

  const api = 'https://a8ohxzqxqb.execute-api.us-east-1.amazonaws.com/directMap';
  const data = { "cacheSize" : "2048" , "blockSize":"32"};
  axios
    .post(api, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="App">
      <h1>Cahce Calculator</h1>

      <DirectMap />
      <FullyAssociativeCache/>
      <AverageEffectiveAccessTime/>
    </div>
  );
}

export default App;
