import logo from './logo.svg';
import React, { Component,useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {

  // Fix the api 


    const api = 'https://7hfkckt5q6.execute-api.us-east-1.amazonaws.com/directMap';
    const data = { "cacheSize" : "2048" , "blockSize":"32"};
    axios
      .post(api, data,{headers: {"Access-Control-Allow-Origin": "https://7hfkckt5q6.execute-api.us-east-1.amazonaws.com/"}})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });


  const [cacheSize, setCacheSize] = useState("");
  const [blockSize, setBlockSize] = useState("");
  

  return (
    <div className="App">
      <h1>Cahce Calculator</h1>

      <h3>Dicreted Map</h3>

      <form>
      <label>
        Cahce Size 
      <input
        value={cacheSize}
        onChange={e => setCacheSize(e.target.value)}
        placeholder="Enter Cache Size"
        type="text"
        name="firstName"
        required
      />
      </label>
      <br/>
      <label>
        Block Size
      <input
        value={blockSize}
        onChange={e => setBlockSize(e.target.value)}
        placeholder="Enter Block Size"
        type="text"
        name="lastName"
        required
      />
      </label>
      <br/>
      <button type="submit">Calculate</button>
    </form>
      <p>Tag</p>
      <p>Sets</p>
      <p>Offsets</p>
    </div>
  );
}

export default App;
