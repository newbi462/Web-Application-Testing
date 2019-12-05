import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Display } from './components/Display'
import { Dashboard } from './components/Dashboard'

function App() {
  const [ballsState, setBallsState] = useState(0);
  const [strikesState, setStrikesState] = useState(0);
  const [hitState, setHitState] = useState(0);
  const [foulState, setFoulState] = useState(0);

  const countRules = (clicked) => {
    console.log(clicked);
    //balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls
    if (clicked == "Ball") {
      setBallsState(ballsState + 1);
    }
    setTimeout(() => {
      if (ballsState >= 4-1 && clicked == "Ball") {
        setBallsState(0);
        setStrikesState(0);
      }
    }, 250);

    if (clicked == "Strike") {
      setStrikesState(strikesState + 1);
    }
    setTimeout(() => {
      if (strikesState >= 3-1 && clicked === "Strike") {
        setBallsState(0);
        setStrikesState(0);
      }
    }, 250);

    //balls and strikes reset to 0 when a hit is recorded
    if (clicked == "hit") {
      setHitState(hitState + 1);
    }
    if (hitState >= 1-1 && clicked === "Hit") {
      setBallsState(0);
      setStrikesState(0);
      setHitState(0);// may need to change?
    }

    //foul balls
    if (clicked == "Foul") {
      setFoulState(foulState + 1);
    }
    if (foulState >= 1-1 && strikesState < 2 && clicked === "Foul") {
      setStrikesState(strikesState + 1);
      setFoulState(0);// may need to change?
    }
  };

  return (
    <div className="App">
      <header className="App-header">

        <Display ballsStateProps={ballsState} strikesStateProps={strikesState} />
        <Dashboard
          ballsState={ballsState}
          setBallsStateProps={setBallsState}
          strikesState={strikesState}
          setStrikesStateProps={setStrikesState}
          hitState={hitState}
          setHitStateProps={setHitState}
          foulState={foulState}
          setFoulStateProps={setFoulState}
          countRulesProps={countRules}
        />

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
