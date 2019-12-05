import React from 'react';

export const Display = (props) => {
  return (
    <>
    <div className="at-bat">
      <h2>At Bat</h2>
      <span>Balls: {props.ballsStateProps}</span>
      <span>Strikes: {props.strikesStateProps}</span>

    </div>
    </>
  );
};
