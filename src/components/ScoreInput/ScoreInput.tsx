import React from "react";

import "./scoreInput.css";
import Button from "../Button";

type Props = {
  currentScore: number;
  max?: number;
  min?: number;
  onChange(newLevel: number): void;
  onChange(newBonus: number): void;
  player: string;
};

const ScoreInput: React.FunctionComponent<Props> = ({
  currentScore,
  max,
  min,
  onChange,
  player,
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
          aria-label={`Decrement ${player}'s by one`}
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
          aria-label={`Increment ${player}by one`}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ScoreInput;
