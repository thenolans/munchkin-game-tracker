import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import MainCharacter from "../../images/main-character.png";
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img
        className="splash-screen__character-image"
        src={MainCharacter}
        alt="Munchkin character holding chainsaw"
      />
      <Button as={Link} to="/configure">
        New Game
      </Button>
    </div>
  );
};

export default SplashScreen;