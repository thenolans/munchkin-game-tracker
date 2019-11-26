import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header";
import Button from "../Button";
import "./ConfigureGame.css";

const ConfigureGame = () => {
  return (
    <div className="configure-screen">
      <Header />
      <div className="configure-screen__name-input-wrapper">
        <input className="configure-screen__name-input" placeholder="Name" />
        <input className="configure-screen__name-input" placeholder="Name" />
        <input className="configure-screen__name-input" placeholder="Name" />
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
