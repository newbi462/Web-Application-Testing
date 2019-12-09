import React from 'react';

export const Dashboard = (props) => {
  return (
    <>
    <div className="dashboard">
      <button onClick={() => {props.countRulesProps("Strike");}}>
        Strike
      </button>
      <button onClick={() => {props.countRulesProps("Ball");}}>
        Ball
      </button>
      <button onClick={() => {props.countRulesProps("Foul");}}>
        Foul
      </button>
      <button onClick={() => {props.countRulesProps("Hit");}}>
        Hit</button>
    </div>
    </>
  );
};
