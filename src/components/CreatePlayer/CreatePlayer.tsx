import React, { useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import "./createPlayer.css";
import Button from "../Button";
import { Player } from "../../utils/player";
import PlayerForm from "../PlayerForm";
import { GameContext } from "../../contexts/gameContext";
import { Player as PlayerType } from "../../types/player";

const CreatePlayer: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  const handlePlayerCreate = (player: PlayerType) => {
    const newData = [...players];

    newData.push(new Player({ ...player }));

    setPlayers(newData);
    history.push("/configure");
  };

  return (
    <div className="create-player">
      <div className="create-player__header">
        <h1 className="create-player__title" data-testid="create-player">
          Create Player
        </h1>
        {/* 
// @ts-ignore */}
        <Button as={Link} to="/configure" styleReset>
          X
        </Button>
      </div>
      <PlayerForm
        onSave={(player) => {
          handlePlayerCreate(player as PlayerType);
        }}
      />
    </div>
  );
};

export default CreatePlayer;
