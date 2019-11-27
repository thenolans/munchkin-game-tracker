import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import PlayerName from "../NameInput";
import "./ConfigureGame.css";

const ConfigureGame = () => {
  return (
    <div className="configure-screen">
      <div className="configure-screen__name-input-wrapper">
        <PlayerName />
        <button className="configure-screen__add-player">+ Add Player</button>
      </div>
      <div className="configure-screen__button-wrapper">
        <Button as={Link} to="/game">
          Start
        </Button>
      </div>
    </div>
  );
};

export default ConfigureGame;
