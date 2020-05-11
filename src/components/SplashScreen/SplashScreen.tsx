import React from "react";
import { Link } from "react-router-dom";

import "./splashScreen.css";
import Button from "components/Button";
import MainCharacter from "images/main-character.png";
import Urls from "constants/urls";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img
        className="splash-screen__character-image"
        src={MainCharacter}
        alt="Munchkin character holding chainsaw"
      />
      <Button as={Link} to={Urls.routes.configure}>
        New Game
      </Button>
    </div>
  );
};

export default SplashScreen;
