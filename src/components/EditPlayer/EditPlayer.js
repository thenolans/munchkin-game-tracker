import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "./editPlayer.css";
import Button from "../Button";
import PlayerForm from "../PlayerForm/PlayerForm";
import { GameContext } from "../../contexts/gameContext";

const EditPlayer = props => {
  const { id } = props.match.params;
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;
  const [playerToEditId] = useState(id);

  const handlePlayerUpdate = player => {
    const newData = [...players];

    if (player.id) {
      const playerIndex = players.findIndex(p => {
        return p.id === player.id;
      });
      newData[playerIndex] = player;

      setPlayers(newData);
      props.history.push("/configure");
    }
  };

  return (
    <>
      <div className="edit-player__heading">
        <h1>Edit Player</h1>
        <Button as={Link} to="/configure" styleReset>
          X
        </Button>
      </div>

      <PlayerForm
        defaultFormData={players.find(p => p.id === playerToEditId)}
        onSave={player => {
          handlePlayerUpdate(player);
        }}
      />
    </>
  );
};

export default EditPlayer;
