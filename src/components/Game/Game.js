import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import ScoreInput from "../ScoreInput";
import "./Game.css";

const Game = () => {
  return (
    <div className="game">
      <div className="game__player-wrapper">
        <div className="game__player-name"> Dacey</div>
        <ScoreInput />
      </div>
      <div className="game__player-wrapper">
        <div className="game__player-name"> Jim</div>
        <ScoreInput />
      </div>
      <div className="game__player-wrapper">
        <div className="game__player-name"> Tom</div>
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
