import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const makeApiRequest = () => {
    console.log("makeApiRequest");
    axios("/api/testwithcurrentuser").then((response) => {
      console.log("response", response);
    });
  };
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!!!11
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeApiRequest}>Make api request</button>
    </div>
  );
}

export default App;
