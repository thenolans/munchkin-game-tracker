import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import "./Game.css";

const Game = () => {
  return (
    <div className="game">
      <div className="game__player-wrapper">
        Player Name
        <div className="game__score-wrapper">
          <button className="game__score-button game__score-button-decrement">
            -
          </button>
          <div className="game__score">1</div>
          <button className="game__score-button game__score-button-increment">
            +
          </button>
        </div>
      </div>
      <div className="game__button-wrapper">
        <Button as={Link} to="/results">
          End
        </Button>
      </div>
    </div>
  );
};

export default Game;
