import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import "./Game.css";

const Game = () => {
  return (
    <div className="game">
      <div className="game-player">Player 1</div>
      <div className="game-player">Player 2</div>
      <div className="game-player">Player 3</div>
      <div className="game-player">Player 4</div>
      <Button as={Link} to="/results">
        End
      </Button>
    </div>
  );
};

export default Game;
