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
        <div className="game__player-wrapper" key={index}>
          <img
            className="game__player-avatar"
            src={player.avatar.src}
            alt={player.avatar.alt}
          />

          <div className="game__player-name">{player.name}</div>
          <div className="game__player-score-wrapper">
            <Link to={`/combat?score=${player.score}`}>
              <img className="game__player-combat" src={Swords} alt="swords" />
            </Link>
            <ScoreInput
              currentScore={player.score}
              onChange={newScore => updatePlayerScore(newScore, index)}
            />
          </div>
        </div>
      ))}
      <div className="game__button-wrapper">
        <Button as={Link} to="/configure">
          Back
        </Button>
        <Button aria-label="End game" onClick={resetGame}>
          End Game
        </Button>
      </div>
    </div>
  );
};

export default Game;
