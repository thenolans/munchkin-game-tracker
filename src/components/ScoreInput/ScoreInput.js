import React from "react";

import "./scoreInput.css";
import Button from "../Button";

const ScoreInput = ({ onChange, currentScore, min, max, score, player }) => {
  const incrementScore = () => {
    if (max && currentScore >= max) return;
    onChange(currentScore + 1);
  };

  const decrementScore = () => {
    if (min && currentScore <= min) return;
    onChange(currentScore - 1);
  };

  return (
    <div className="score-input" data-testid="score-input">
      <div className="score-input__actions">
        <Button
          data-testid="decrement"
          onClick={decrementScore}
          className="score-input__button"
          styleReset
          aria-label={`Decrement ${player}'s ${score} by one`}
        >
          -
        </Button>
        <div data-testid="current-score" className="score-input__score">
          {currentScore}
        </div>
        <Button
          data-testid="increment"
          onClick={incrementScore}
          className="score-input__button"
          styleReset
          aria-label={`Increment ${player}'s ${score} by one`}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ScoreInput;
