import React, { useContext } from "react";
import { Link } from "react-router-dom";
import nanoid from "nanoid";

import "./createPlayer.css";
import Button from "../Button";
import PlayerForm from "../PlayerForm";
import { GameContext } from "../../contexts/gameContext";

const CreatePlayer = props => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  const handlePlayerCreate = player => {
    const newData = [...players];

    newData.push({
      ...player,
      id: nanoid(),
      score: 1
    });

    setPlayers(newData);
    props.history.push("/configure");
  };

  return (
    <>
      <div className="create-player__heading">
        <h1>Create Player</h1>
        <Button as={Link} to="/configure" styleReset>
          X
        </Button>
      </div>
      <PlayerForm
        onSave={player => {
          handlePlayerCreate(player);
        }}
      />
    </>
  );
};

export default CreatePlayer;
