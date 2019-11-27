import React, { useState } from "react";

import "./ScoreInput.css";

const ScoreInput = () => {
  const [playerScore, setPlayerScore] = useState(1);

  const decrementScore = () => {
    if (playerScore > 1) {
      setPlayerScore(playerScore - 1);
    }
  };
  const incrementScore = () => {
    if (playerScore < 99) {
      setPlayerScore(playerScore + 1);
    }
  };

  return (
    <div className="score-input">
      <div className="score-input__wrapper">
        <button
          className="score-input__button score-input__button-decrement"
          onClick={decrementScore}
        >
          -
        </button>
        <div className="score-input__score">{playerScore}</div>
        <button
          className="score-input__button score-input__button-increment"
          onClick={incrementScore}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ScoreInput;
