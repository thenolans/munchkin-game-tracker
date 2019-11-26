import React from "react";

import Header from "../components/Header";
import Button from "./Button";
import MainCharacter from "../images/main-character.png";
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <Header className="splash-screen__header" />
      <img
        className="splash-screen__character-image"
        src={MainCharacter}
        alt="Munchkin character holding chainsaw"
      />
      <Button>New Game</Button>
    </div>
  );
};

export default SplashScreen;
