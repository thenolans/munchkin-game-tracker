import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nanoid from "nanoid";

import Avatar from "../Avatar";
import Button from "../Button";
import "./ConfigureGame.css";
import { GameContext } from "../../contexts/gameContext";
import CreateEdit from "../CreateEdit";

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 6;

const ConfigureGame = () => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;
  const [playersAreValid, setPlayersAreValid] = useState(false);
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [playerToEditId, setPlayerToEditId] = useState(null);
  const numberOfPlayers = players.length;

  useEffect(() => {
    if (players.some(player => !player.name)) {
      setPlayersAreValid(false);
    } else {
      setPlayersAreValid(true);
    }
  }, [JSON.stringify(players)]); // eslint-disable-line react-hooks/exhaustive-deps

  const removeInput = index => {
    const newPlayers = [...players];
    if (newPlayers.length > MIN_PLAYERS) {
      newPlayers.splice(index, 1);
      setPlayers(newPlayers);
    }
  };

  const handlePlayerCreateOrUpdate = player => {
    const newData = [...players];

    if (player.id) {
      const playerIndex = players.findIndex(p => {
        return p.id === player.id;
      });
      newData[playerIndex] = player;
    } else {
      newData.push({ ...player, id: nanoid(), score: 1 });
    }
    setPlayers(newData);
  };

  const showModal = () => {
    setIsShowingModal(true);
  };

  const hideModal = () => {
    setIsShowingModal(false);
    setPlayerToEditId(null);
  };

  return (
    <div className="configure-screen">
      {isShowingModal && (
        <CreateEdit
          player={players.find(p => p.id === playerToEditId)}
          onClose={hideModal}
          onPlayerSave={player => {
            handlePlayerCreateOrUpdate(player);
          }}
        />
      )}
      {players.map((player, index) => {
        return (
          <div className="configure-screen__name-input-wrapper" key={player.id}>
            <Avatar src={player.avatar.src} alt={player.avatar.alt} />
            <div className="configure-screen__player-name">
              {player.name || "Player's Name"}
            </div>
            <div className="configure-screen__button-wrapper">
              <Button
                onClick={() => {
                  showModal();
                  setPlayerToEditId(player.id);
                }}
                styleReset
              >
                Edit
              </Button>
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
          </div>
        );
      })}

      {numberOfPlayers < MAX_PLAYERS && (
        <Button
          styleReset
          onClick={() => {
            showModal();
          }}
          aria-label="Add a player"
        >
          + Add Player
        </Button>
      )}
      {playersAreValid && (
        <div className="configure-screen__start-button-wrapper">
          <Button as={Link} to="/game">
            Start
          </Button>
        </div>
      )}
    </div>
  );
};

export default ConfigureGame;
