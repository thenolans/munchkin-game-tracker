import React, { useState } from "react";

// import { Player } from "../../utils/player";
import AvatarPicker from "../AvatarPicker";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";

const CreateEdit = props => {
  const [playerData, setPlayerData] = useState(props.player || {});

  const updatePlayerData = (field, value) => {
    setPlayerData({
      ...playerData,
      [field]: value
    });
  };

  return (
    <Modal>
      <div className="create-edit__header">
        <h1>Create/Edit Player</h1>
        <Button onClick={props.onClose} styleReset>
          X
        </Button>
      </div>
      <form className="create-edit__form">
        <div className="create-edit__form-option">
          <label className="create-edit__form-label">Player's Name</label>
          <Input
            onChange={event => updatePlayerData("name", event.target.value)}
            value={playerData.name || ""}
            fluid
          />
        </div>
        <div className="create-edit__form-option">
          <label className="create-edit__form-label">Avatar</label>
          <AvatarPicker
            onChange={newAvatar => updatePlayerData("avatar", newAvatar)}
          />
        </div>
      </form>
      <Button
        fluid
        type="submit"
        onClick={() => {
          props.onPlayerSave(playerData);
          props.onClose();
        }}
      >
        Create
      </Button>
    </Modal>
  );
};

export default CreateEdit;
