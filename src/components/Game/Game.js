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

  const updatePlayer = ({ index, newLevel, newBonus, sex }) => {
    const newData = [...players];
    if (newLevel) {
      newData[index].level = newLevel;
      setPlayers(newData);
    }
    if (newBonus) {
      newData[index].bonus = newBonus;
      setPlayers(newData);
    }
  };

  const updatePlayerSex = (sex, index) => {
    const newData = [...players];
    if (sex === "M") {
      newData[index].sex = "F";
      setPlayers(newData);
    }
    if (sex === "F") {
      newData[index].sex = "M";
      setPlayers(newData);
    }
  };

  const resetGame = () => {
    setPlayers(
      Array(2)
        .fill(null)
        .map(() => new Player({ ...players }))
    );
    props.history.push("/");
  };

  return (
    <div className="game">
      <div>
        {players.map((player, index) => (
          <PlayerCard key={index}>
            <div className="game-player">
              <div className="game-player__section">
                <div className="game-player__info">
                  <Avatar src={player.avatar.src} alt={player.avatar.alt} />
                  <div className="game-player__name">{player.name}</div>
                </div>

                {lowestPlayerLevel === player.level && (
                  <Status theme="warning">Discards</Status>
                )}
                {highestPlayerLevel === player.level && (
                  <Status theme="success">First</Status>
                )}
                <Button
                  onClick={sex => updatePlayerSex(player.sex, index)}
                  theme="info"
                >
                  {player.sex}
                </Button>
              </div>

              <div className="actions">
                <div className="actions__section">
                  <div className="actions__score">Level</div>
                  <ScoreInput
                    currentScore={player.level || 1}
                    onChange={newLevel => updatePlayer({ newLevel, index })}
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
                    onChange={newBonus => updatePlayer({ newBonus, index })}
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
