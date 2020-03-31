import React, { useState } from "react";

import "./playerForm.css";
import Button from "../Button";
import AvatarPicker from "../AvatarPicker";
import Input from "../Input";

const EditCreateForm = props => {
  const [playerData, setPlayerData] = useState(props.defaultFormData || {});

  const updatePlayerData = (field, value) => {
    setPlayerData({
      ...playerData,
      [field]: value
    });
  };

  return (
    <>
      <form className="player-form__form">
        <div className="player-form__form-option">
          <label className="player-form__form-label">Player's Name</label>
          <Input
            onChange={event => updatePlayerData("name", event.target.value)}
            value={playerData.name || ""}
            fluid
          />
        </div>
        <div className="player-form__form-option">
          <label className="player-form__form-label">Avatar</label>
          <AvatarPicker
            onChange={newAvatar => updatePlayerData("avatar", newAvatar)}
          />
        </div>
      </form>
      <Button
        fluid
        type="submit"
        onClick={() => {
          props.onSave(playerData);
        }}
      >
        Create
      </Button>
    </>
  );
};

export default EditCreateForm;
