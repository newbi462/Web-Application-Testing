import React from 'react';

export const Display = (props) => {
  return (
    <>
    <div className="at-bat">
      <h2>At Bat</h2>
      <span data-testid="balls-info">Balls: {props.ballsStateProps}</span>
      <span data-testid="strick-info">Strikes: {props.strikesStateProps}</span>
    </div>
    </>
  );
};
