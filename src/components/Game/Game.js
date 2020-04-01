import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import "./Game.css";
import { GameContext } from "../../contexts/gameContext";
import ScoreInput from "../ScoreInput/ScoreInput";
import Swords from "../../images/swords.svg";
import { Player } from "../../utils/player";

const Game = props => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  const updatePlayerScore = (newScore, playerIndex) => {
    const newData = [...players];
    newData[playerIndex].score = newScore;
    setPlayers(newData);
  };

  const resetGame = () => {
    setPlayers(
      Array(2)
        .fill(null)
        .map(() => new Player())
    );
    props.history.push("/");
  };

  return (
    <div className="game">
      {players.map((player, index) => (
        <div className="game-player" key={index}>
          <img
            className="game-player__avatar"
            src={player.avatar.src}
            alt={player.avatar.alt}
          />

          <div className="game-player__name">{player.name}</div>
          <div className="game-player__actions">
            <Link to={`/combat?score=${player.score}`} className="test">
              <img
                className="game-player__combat"
                src={Swords}
                alt={`Enter combat with ${player.name}`}
              />
            </Link>
            <ScoreInput
              currentScore={player.score}
              onChange={newScore => updatePlayerScore(newScore, index)}
            />
          </div>
        </div>
      ))}
      <div className="game__actions">
        <Button border as={Link} to="/configure">
          Back
        </Button>
        <Button border onClick={resetGame}>
          End Game
        </Button>
      </div>
    </div>
  );
};

export default Game;
