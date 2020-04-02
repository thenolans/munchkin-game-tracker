import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./createPlayer.css";
import Button from "../Button";
import { Player } from "../../utils/player";
import PlayerForm from "../PlayerForm";
import { GameContext } from "../../contexts/gameContext";

const CreatePlayer = props => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  const handlePlayerCreate = player => {
    const newData = [...players];

    newData.push(
      new Player(player.name, player.sex, null, null, player.avatar)
    );

    setPlayers(newData);
    props.history.push("/configure");
  };

  return (
    <div className="create-player">
      <div className="create-player__header">
        <h1 className="create-player__title">Create Player</h1>
        <Button as={Link} to="/configure" styleReset>
          X
        </Button>
      </div>
      <PlayerForm
        onSave={player => {
          handlePlayerCreate(player);
        }}
      />
    </div>
  );
};

export default CreatePlayer;
