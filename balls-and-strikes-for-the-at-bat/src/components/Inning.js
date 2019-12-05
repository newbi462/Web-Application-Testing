import React from 'react';

export const Inning = (props) => {
  return (
    <>
    <div className="inning">
      <h2> Inning: {props.inningStateProps}</h2>
      <span>Outs: {props.outsStateProps}</span>
      <span>Home: {props.homeTeamStateProps}</span>
      <span>Visitors: {props.visitTeamStateProps}</span>
    </div>
    </>
  );
};
