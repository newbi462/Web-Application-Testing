import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Display } from './components/Display'
import { Dashboard } from './components/Dashboard'
import { Inning } from './components/Inning'

function App() {
  const [ballsState, setBallsState] = useState(0);
  const [strikesState, setStrikesState] = useState(0);
  const [hitState, setHitState] = useState(0);
  const [foulState, setFoulState] = useState(0);

  //inning?
  const [inningState, setInningState] = useState(1);
  //outs
  const [outsState, setOutsState] = useState(0);
  //home team
  const [homeTeamState, setHomeTeamState] = useState("At Bat");
  //Visitors
  const [visitTeamState, setVisitTeamState] = useState("Defence");

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
        setOutsState(outsState + 1);
      }
    }, 250);

    if (clicked == "Strike") {
      setStrikesState(strikesState + 1);
    }
    setTimeout(() => {
      if (strikesState >= 3-1 && clicked === "Strike") {
        setBallsState(0);
        setStrikesState(0);
        setOutsState(outsState + 1);
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

    //toggle at bat??
    if (outsState >= 3-1 && clicked === "Strike") {
      if (homeTeamState === "At Bat" && strikesState >= 2) {
        setHomeTeamState("Defence");
        setVisitTeamState("At Bat");
        setTimeout(() => {
          setOutsState(0);
        }, 260);
      }
      if (visitTeamState === "At Bat" && strikesState >= 2) {
        setHomeTeamState("At Bat");
        setVisitTeamState("Defence");
        setTimeout(() => {
          setOutsState(0);
          setInningState(inningState + 1)
        }, 260);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">

        <Display
          ballsStateProps={ballsState}
          strikesStateProps={strikesState}
        />
        <Inning
          outsStateProps={outsState}
          inningStateProps={inningState}
          homeTeamStateProps={homeTeamState}
          visitTeamStateProps={visitTeamState}
        />
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
