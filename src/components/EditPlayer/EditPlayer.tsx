import React, { useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import "./editPlayer.css";
import Button from "components/Button";
import PlayerForm from "components/PlayerForm/PlayerForm";
import { GameContext } from "contexts/gameContext";
import { Player } from "types";
import Urls from "constants/urls";

type Match = {
  id: string;
};

const EditPlayer: React.FunctionComponent<RouteComponentProps<Match>> = ({
  history,
  match,
}) => {
  const { id } = match.params;
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  const handlePlayerUpdate = (player: Player) => {
    const newData = [...players];

    const playerIndex = players.findIndex((p) => {
      return p.id === player.id;
    });
    newData[playerIndex] = player;

    setPlayers(newData);
    history.push(Urls.routes.configure);
  };

  return (
    <div className="edit-player">
      <div className="edit-player__heading">
        <h1 className="edit-player__title">Edit Player</h1>
        <Button as={Link} to={Urls.routes.configure} styleReset>
          X
        </Button>
      </div>

      <PlayerForm
        defaultFormData={players.find((p) => p.id === id)}
        onSave={(player) => {
          handlePlayerUpdate(player as Player);
        }}
      />
    </div>
  );
};

export default EditPlayer;
