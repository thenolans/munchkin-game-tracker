import React from "react";

import "./ScoreInput.css";
import Button from "../Button";

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
      <div className="score-input__actions">
        <Button
          onClick={decrementScore}
          className="score-input__button"
          styleReset
          aria-label="Decrement score by one"
        >
          -
        </Button>
        <div className="score-input__score">{currentScore}</div>
        <Button
          onClick={incrementScore}
          className="score-input__button"
          styleReset
          aria-label="Increment score by one"
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ScoreInput;
