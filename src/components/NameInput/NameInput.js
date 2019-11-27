import React, { useState } from "react";

import "./NameInput.css";

const NameInput = () => {
  const [playerName, setPlayerName] = useState("");

  const changePlayerName = event => {
    setPlayerName(event.target.value);
  };

  return (
    <div className="name-input">
      <input
        className="name-input__input"
        placeholder="Name"
        value={playerName}
        onChange={changePlayerName}
      />
    </div>
  );
};

export default NameInput;
