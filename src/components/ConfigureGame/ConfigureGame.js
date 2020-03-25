import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import "./ConfigureGame.css";
import Input from "../Input";
import AvatarPicker from "../AvatarPicker";
import { GameContext } from "../../contexts/gameContext";
import { Player } from "../../utils/player";

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 6;

const ConfigureGame = () => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;
  const [playersAreValid, setPlayersAreValid] = useState(false);
  const numberOfPlayers = players.length;

  useEffect(() => {
    if (players.some(player => !player.name)) {
      setPlayersAreValid(false);
    } else {
      setPlayersAreValid(true);
    }
  }, [JSON.stringify(players)]); // eslint-disable-line react-hooks/exhaustive-deps

  const addInput = () => {
    if (numberOfPlayers < MAX_PLAYERS) {
      setPlayers([...players, new Player()]);
    }
  };

  const removeInput = index => {
    const newPlayers = [...players];
    if (newPlayers.length > MIN_PLAYERS) {
      newPlayers.splice(index, 1);
      setPlayers(newPlayers);
    }
  };

  const handleNameChange = (playerName, playerIndex) => {
    const newPlayers = [...players];
    newPlayers[playerIndex].name = playerName;
    setPlayers(newPlayers);
  };

  const updatePlayerAvatar = (newAvatar, playerIndex) => {
    const newData = [...players];
    newData[playerIndex].avatar = newAvatar;
    setPlayers(newData);
  };

  return (
    <div className="configure-screen">
      {players.map((player, index) => {
        return (
          <div className="configure-screen__name-input-wrapper" key={player.id}>
            <AvatarPicker
              avatar={player.avatar}
              onChange={newAvatar => updatePlayerAvatar(newAvatar, index)}
            />
            <Input
              onChange={event => handleNameChange(event.target.value, index)}
              placeholder="Enter player's name"
              value={player.name}
            />
            {numberOfPlayers > MIN_PLAYERS && (
              <Button
                styleReset
                onClick={() => removeInput(index)}
                aria-label="Remove player"
              >
                -
              </Button>
            )}
          </div>
        );
      })}

      {numberOfPlayers < MAX_PLAYERS && (
        <Button styleReset onClick={addInput} aria-label="Add a player">
          + Add Player
        </Button>
      )}
      {playersAreValid && (
        <div className="configure-screen__button-wrapper">
          <Button as={Link} to="/game">
            Start
          </Button>
        </div>
      )}
    </div>
  );
};

export default ConfigureGame;