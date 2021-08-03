import React from "react";

import "./ScoreInput.css";
import Button from "components/Button";

type Props = {
  currentScore: number;
  max?: number;
  min?: number;
  onChange(newLevel: number): void;
  onChange(newBonus: number): void;
};

const ScoreInput: React.FunctionComponent<Props> = ({
  currentScore,
  max,
  min,
  onChange,
}) => {
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
          aria-label={`Decrement by one`}
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
          aria-label={`Increment by one`}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ScoreInput;
