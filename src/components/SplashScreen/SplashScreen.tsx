import React from "react";
import { Link } from "react-router-dom";

import "./splashScreen.css";
import Button from "components/Button";
import MainCharacter from "images/main-character.png";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img
        className="splash-screen__character-image"
        src={MainCharacter}
        alt="Munchkin character holding chainsaw"
      />
      {/* 
// @ts-ignore */}
      <Button as={Link} to="/configure">
        New Game
      </Button>
    </div>
  );
};

export default SplashScreen;
