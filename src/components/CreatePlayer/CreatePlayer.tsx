import React, { useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import "./createPlayer.css";
import Button from "components/Button";
import PlayerForm from "components/PlayerForm";
import { GameContext } from "contexts/gameContext";
import { Player as PlayerType } from "types/types";
import { createNewPlayer } from "utils/player";

const CreatePlayer: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  const handlePlayerCreate = (player: PlayerType) => {
    const newData = [...players];

    newData.push(createNewPlayer({ ...player }));

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
