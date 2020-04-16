import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Avatar from "../Avatar";
import Button from "../Button";
import "./configureGame.css";
import { GameContext } from "../../contexts/gameContext";
import Trash from "../../images/trash.svg";
import Pencil from "../../images/pencil.svg";

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 6;

const ConfigureGame = () => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;
  const [playersAreValid, setPlayersAreValid] = useState(false);
  const numberOfPlayers = players.length;

  useEffect(() => {
    if (players.some((player) => !player.name)) {
      setPlayersAreValid(false);
    } else {
      setPlayersAreValid(true);
    }
  }, [JSON.stringify(players)]); // eslint-disable-line react-hooks/exhaustive-deps

  const removePlayer = (index) => {
    const currentPlayers = [...players];
    currentPlayers.splice(index, 1);
    setPlayers(currentPlayers);
  };

  return (
    <div className="configure-game">
      <div className="configure-game__players" data-testid="players">
        {players.map((player, index) => {
          return (
            <div
              className="player"
              key={player.id}
              data-testid={`player-${index}`}
            >
              <div className="player__info">
                <Avatar id={player.avatar} />
                <div className="player__name">
                  {player.name || "Player's Name"}
                </div>
              </div>
              <div className="player__actions">
                <Link to={`/player/edit/${player.id}`}>
                  <img
                    className="player__icon"
                    src={Pencil}
                    alt="Edit player"
                  />
                </Link>
                {numberOfPlayers > MIN_PLAYERS && (
                  <Button
                    data-testid={`player-${index}-remove`}
                    styleReset
                    onClick={() => removePlayer(index)}
                  >
                    <img
                      className="player__icon"
                      src={Trash}
                      alt="Remove player"
                    />
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="configure-game__add-player">
        {numberOfPlayers < MAX_PLAYERS && (
          <Button as={Link} to="/player/create" styleReset>
            + Add Player
          </Button>
        )}
      </div>
      {playersAreValid && (
        <Button as={Link} fluid to="/game">
          Start
        </Button>
      )}
    </div>
  );
};

export default ConfigureGame;
