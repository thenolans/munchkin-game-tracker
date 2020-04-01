import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Game.css";
import Avatar from "../Avatar";
import Button from "../Button";
import PlayerCard from "../PlayerCard/PlayerCard";
import ScoreInput from "../ScoreInput/ScoreInput";
import Status from "../Status";
import Swords from "../../images/swords.svg";
import { GameContext } from "../../contexts/gameContext";
import { Player } from "../../utils/player";

const Game = props => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;
  const [lowestPlayerScore, setLowestPlayerScore] = useState();
  const [highestPlayerScore, setHightestPlayerScore] = useState();

  useEffect(() => {
    const scores = players.map(player => player.score);
    const max = Math.max(...scores);
    const min = Math.min(...scores);
    const minScoresLength = scores.filter(score => min === score).length;
    setLowestPlayerScore(minScoresLength === 1 ? min : null);
    setHightestPlayerScore(max);
  }, [players]);

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
        <PlayerCard key={index}>
          <div className="game-player">
            <div className="game-player__section">
              <div className="game-player__info">
                <Avatar src={player.avatar.src} alt={player.avatar.alt} />
                <div className="game-player__name">{player.name}</div>
              </div>

              {lowestPlayerScore === player.score && (
                <Status theme="warning">Discards</Status>
              )}
              {highestPlayerScore === player.score && (
                <Status theme="success">First</Status>
              )}
            </div>

            <div className="game-player__actions">
              <ScoreInput
                currentScore={player.score}
                onChange={newScore => updatePlayerScore(newScore, index)}
              />
              <Link
                to={`/combat?score=${player.score}`}
                className="game-player__link"
              >
                <img
                  className="game-player__combat"
                  src={Swords}
                  alt={`Enter combat with ${player.name}`}
                />
              </Link>
            </div>
          </div>
        </PlayerCard>
      ))}
      <div className="game__actions">
        <Button as={Link} to="/configure">
          Back
        </Button>
        <Button onClick={resetGame}>End Game</Button>
      </div>
    </div>
  );
};

export default Game;
