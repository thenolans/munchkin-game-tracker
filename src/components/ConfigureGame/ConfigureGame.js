import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import "./ConfigureGame.css";
import NameInput from "../NameInput";

const ConfigureGame = () => {
  const [numberOfInputs, setNumberOfInputs] = useState([null, null]);

  const addInput = () => {
    if (numberOfInputs.length < 6) {
      setNumberOfInputs([...numberOfInputs, null]);
    }
  };

  return (
    <div className="configure-screen">
      <div className="configure-screen__name-input-wrapper">
        {numberOfInputs.map(input => (
          <NameInput />
        ))}
        <button className="configure-screen__add-player" onClick={addInput}>
          + Add Player
        </button>
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
