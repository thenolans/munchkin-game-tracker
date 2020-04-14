import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./editPlayer.css";
import Button from "../Button";
import PlayerForm from "../PlayerForm/PlayerForm";
import { GameContext } from "../../contexts/gameContext";

const EditPlayer = (props) => {
  const { id } = props.match.params;
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  const handlePlayerUpdate = (player) => {
    const newData = [...players];

    const playerIndex = players.findIndex((p) => {
      return p.id === player.id;
    });
    newData[playerIndex] = player;

    setPlayers(newData);
    props.history.push("/configure");
  };

  return (
    <div className="edit-player">
      <div className="edit-player__heading">
        <h1 className="edit-player__title">Edit Player</h1>
        <Button as={Link} to="/configure" styleReset>
          X
        </Button>
      </div>

      <PlayerForm
        defaultFormData={players.find((p) => p.id === id)}
        onSave={(player) => {
          handlePlayerUpdate(player);
        }}
      />
    </div>
  );
};

export default EditPlayer;
