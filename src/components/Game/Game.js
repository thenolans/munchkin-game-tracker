import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import ScoreInput from "../ScoreInput";
import "./Game.css";

const Game = () => {
  return (
    <div className="game">
      <div className="game__player-wrapper">
        Player Name
        <ScoreInput />
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
