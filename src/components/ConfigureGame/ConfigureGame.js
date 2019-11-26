import React from "react";

import Header from "../Header";
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
    </div>
  );
};

export default ConfigureGame;
