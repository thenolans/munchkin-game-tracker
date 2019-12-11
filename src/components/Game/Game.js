import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import "./Game.css";
import { GameContext } from "../../contexts/gameContext";
import ScoreInput from "../ScoreInput/ScoreInput";

const Game = () => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  const updatePlayerScore = (newScore, playerIndex) => {
    const newData = [...players];
    newData[playerIndex].score = newScore;
    setPlayers(newData);
  };

  return (
    <div className="game">
      {players.map((player, index) => (
        <div className="game__player-wrapper" key={index}>
          <div className="game__player-name">{player.name}</div>
          <ScoreInput
            currentScore={player.score}
            onChange={newScore => updatePlayerScore(newScore, index)}
          />
        </div>
      ))}
      <div className="game__button-wrapper">
        <Button as={Link} to="/configure">
          Back
        </Button>
        <Button as={Link} to="/" aria-label="End game">
          End Game
        </Button>
      </div>
    </div>
  );
};

export default Game;
