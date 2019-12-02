import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import ScoreInput from "../ScoreInput";
import "./Game.css";
import { GameContext } from "../../contexts/gameContext";

const Game = () => {
  const game = useContext(GameContext);
  const [players] = game.usePlayers;
  return (
    <div className="game">
      {players.map(player => (
        <div className="game__player-wrapper">
          <div className="game__player-name"> {player.name}</div>
          <ScoreInput />
        </div>
      ))}

      <div className="game__button-wrapper">
        <Button as={Link} to="/results">
          End
        </Button>
      </div>
    </div>
  );
};

export default Game;
