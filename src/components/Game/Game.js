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
  const [toggleSex, setToggleSex] = useState(false);

  useEffect(() => {
    const levels = players.map(player => player.level);
    const max = Math.max(...levels);
    const min = Math.min(...levels);
    const minLevelLength = levels.filter(level => min === level).length;
    setLowestPlayerLevel(minLevelLength === 1 ? min : null);
    setHightestPlayerLevel(max);
  }, [players]);

  const updatePlayerLevel = (newLevel, playerIndex) => {
    const newData = [...players];
    newData[playerIndex].level = newLevel;
    setPlayers(newData);
  };

  const updatePlayerBonus = (newBonus, playerIndex) => {
    const newData = [...players];
    newData[playerIndex].bonus = newBonus;
    setPlayers(newData);
  };

  const togglePlayerSex = playerIndex => {
    const newData = [...players];
    setToggleSex(!toggleSex);
    newData[playerIndex].sex = toggleSex ? "M" : "F";
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
                <Button styleReset onClick={() => togglePlayerSex(index)}>
                  {player.sex}
                </Button>
              </div>

              <div className="actions">
                <div className="actions__section">
                  <div className="actions__score">Level</div>
                  <ScoreInput
                    currentScore={player.level || 1}
                    onChange={newLevel => updatePlayerLevel(newLevel, index)}
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
                    onChange={newBonus => updatePlayerBonus(newBonus, index)}
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
