import logo from './logo.svg';
import './App.css';
import ContadorPessoas from './Contador-pessoas.js';
import React from "react";
import Profile from "./Profile";
import Gallery, { ProfileSmall } from "./Gallery";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function App() {
  return (
    <div>
      <ContadorPessoas />
    </div>
  );
}

function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

function App() {
  return (
    <div>
      <Gallery/>
    </div>
  );
}

export default App;
