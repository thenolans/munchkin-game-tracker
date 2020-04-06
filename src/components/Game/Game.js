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
  const [lowestPlayerLevel, setLowestPlayerLevel] = useState();
  const [highestPlayerLevel, setHightestPlayerLevel] = useState();

  useEffect(() => {
    const levels = players.map(player => player.level);
    const max = Math.max(...levels);
    const min = Math.min(...levels);
    const minLevelLength = levels.filter(level => min === level).length;
    setLowestPlayerLevel(minLevelLength === 1 ? min : null);
    setHightestPlayerLevel(max);
  }, [players]);

  const updatePlayer = (playerId, field, value) => {
    const newData = [...players];

    const playerIndex = players.findIndex(p => {
      return p.id === playerId;
    });

    newData[playerIndex][field] = value;

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
      <div>
        {players.map(player => (
          <PlayerCard key={player.id}>
            <div className="game-player">
              <div className="game-player__section">
                <div className="game-player__info">
                  <Avatar src={player.avatar.src} alt={player.avatar.alt} />
                  <div className="game-player__name">{player.name}</div>
                </div>
                <div className="game-player__badges">
                  {lowestPlayerLevel === player.level && (
                    <Status theme="warning">Discards</Status>
                  )}
                  {highestPlayerLevel === player.level && (
                    <Status theme="success">First</Status>
                  )}
                  <Button
                    className="game-player__sex"
                    onClick={() =>
                      updatePlayer(
                        player.id,
                        "sex",
                        player.sex === "M" ? "F" : "M"
                      )
                    }
                    theme="info"
                  >
                    {player.sex}
                  </Button>
                </div>
              </div>

              <div className="actions">
                <div className="actions__section">
                  <div className="actions__score">Level</div>
                  <ScoreInput
                    min={1}
                    max={99}
                    currentScore={player.level || 1}
                    onChange={newLevel =>
                      updatePlayer(player.id, "level", newLevel)
                    }
                  />
                </div>
                <Link to={`/combat?score=${player.level + player.bonus}`}>
                  <img
                    className="actions__combat-img"
                    src={Swords}
                    alt={`Enter combat with ${player.name}`}
                  />
                </Link>
                <div className="actions__section">
                  <div className="actions__score">Bonus</div>
                  <ScoreInput
                    currentScore={player.bonus || 0}
                    onChange={newBonus =>
                      updatePlayer(player.id, "bonus", newBonus)
                    }
                  />
                </div>
              </div>
            </div>
          </PlayerCard>
        ))}
      </div>
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
