import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const [ballsState, setBallsState] = useState(0);
  const [strikesState, setStrikesState] = useState(0);
  const [hitState, setHitState] = useState(0);

  const countRules = () => {
    //balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls
    if (ballsState >= 4 || strikesState >= 3) {
      setBallsState(0);
      setStrikesState(0);
    }

    //balls and strikes reset to 0 when a hit is recorded
    if (hitState >= 1) {
      setBallsState(0);
      setStrikesState(0);
      setHitState(0);// may need to change?
    }
  };

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

export default App;
