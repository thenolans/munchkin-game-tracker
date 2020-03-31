import React, { useState } from "react";

import "./playerForm.css";
import Button from "../Button";
import AvatarPicker from "../AvatarPicker";
import Input from "../Input";
import FormError from "../FormError";

const EditCreateForm = props => {
  const [playerData, setPlayerData] = useState(props.defaultFormData || {});
  const [errors, setErrors] = useState();

  const updatePlayerData = (field, value) => {
    setPlayerData({
      ...playerData,
      [field]: value
    });
  };

  const handleSubmit = () => {
    const errors = {};

    if (!playerData.name) {
      errors.name = "Please enter a name";
    } else if (playerData?.name?.length > 10) {
      errors.name = "Name should be 10 characters or less";
    }

    if (!playerData.avatar) {
      errors.avatar = "Please select an avatar";
    }

    if (errors.avatar || errors.name) {
      setErrors(errors);
    } else {
      props.onSave(playerData);
    }
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
          {errors && <FormError>{errors.name}</FormError>}
        </div>

        <div className="player-form__form-option">
          <label className="player-form__form-label">Avatar</label>
          <AvatarPicker
            onChange={newAvatar => updatePlayerData("avatar", newAvatar)}
          />
          {errors && <FormError>{errors.avatar}</FormError>}
        </div>
      </form>
      <Button
        fluid
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Create
      </Button>
    </>
  );
};

export default EditCreateForm;
