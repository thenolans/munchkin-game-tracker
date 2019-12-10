import React from "react";

import "./ScoreInput.css";

const ScoreInput = ({ currentScore, onChange }) => {
  const incrementScore = () => {
    if (currentScore < 99) {
      onChange(currentScore + 1);
    }
  };

  const decrementScore = () => {
    if (currentScore > 1) {
      onChange(currentScore - 1);
    }
  };

  return (
    <div className="score-input">
      <div className="score-input__wrapper">
        <button
          onClick={decrementScore}
          className="score-input__button score-input__button-decrement"
          aria-label="Decrement score by one"
        >
          -
        </button>
        <div className="score-input__score">{currentScore}</div>
        <button
          onClick={incrementScore}
          className="score-input__button score-input__button-increment"
          aria-label="Increment score by one"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ScoreInput;
