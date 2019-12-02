import React, { useContext } from "react";
import { Link } from "react-router-dom";
import nanoid from "nanoid";

import Button from "../Button";
import "./ConfigureGame.css";
import Input from "../Input";
import { GameContext } from "../../contexts/gameContext";

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 6;

const ConfigureGame = () => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;
  const numberOfPlayers = players.length;

  const addInput = () => {
    if (numberOfPlayers < MAX_PLAYERS) {
      setPlayers([...players, { id: nanoid(), name: "" }]);
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
    const newPlayerData = {
      ...players[playerIndex],
      name: playerName
    };
    newPlayers[playerIndex] = newPlayerData;
    setPlayers(newPlayers);
  };

  return (
    <div className="configure-screen">
      {players.map((player, index) => (
        <div className="configure-screen__name-input-wrapper" key={player.id}>
          <Input
            onChange={event => handleNameChange(event.target.value, index)}
            placeholder="Name"
            value={player.name}
          />
          {numberOfPlayers > MIN_PLAYERS && (
            <button
              className="configure-screen__remove-player-input"
              onClick={() => removeInput(index)}
            >
              -
            </button>
          )}
        </div>
      ))}
      {numberOfPlayers < MAX_PLAYERS && (
        <button className="configure-screen__add-player" onClick={addInput}>
          + Add Player
        </button>
      )}
      <div className="configure-screen__button-wrapper">
        <Button as={Link} to="/game">
          Start
        </Button>
      </div>
    </div>
  );
};

export default ConfigureGame;
