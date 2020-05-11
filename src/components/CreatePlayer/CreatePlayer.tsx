import React, { useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import "./createPlayer.css";
import Button from "components/Button";
import PlayerForm from "components/PlayerForm";
import { GameContext } from "contexts/gameContext";
import { Player as PlayerType } from "types";
import { createNewPlayer } from "utils/player";
import Urls from "constants/urls";

const CreatePlayer: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  const handlePlayerCreate = (player: PlayerType) => {
    const newData = [...players];

    newData.push(createNewPlayer({ ...player }));

    setPlayers(newData);
    history.push(Urls.routes.configure);
  };

  return (
    <div className="create-player">
      <div className="create-player__header">
        <h1 className="create-player__title" data-testid="create-player">
          Create Player
        </h1>
        <Button as={Link} to={Urls.routes.configure} styleReset>
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
