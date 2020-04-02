import React, { useState } from "react";

import "./playerForm.css";
import AvatarPicker from "../AvatarPicker";
import Button from "../Button";
import FormError from "../FormError";
import GenderSelect from "../GenderSelect";
import Input from "../Input";
import Label from "../Label";

const PlayerForm = props => {
  const [playerData, setPlayerData] = useState(props.defaultFormData || {});
  const [errors, setErrors] = useState();

  console.log(playerData);

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

    if (!playerData.sex) {
      errors.sex = "Please select player's sex";
    }

    if (!playerData.avatar) {
      errors.avatar = "Please select an avatar";
    }

    if (errors.avatar || errors.name || errors.sex) {
      setErrors(errors);
    } else {
      props.onSave(playerData);
    }
  };

  return (
    <>
      <form className="player-form">
        <div className="player-form__section">
          <Label>Player's Name</Label>
          <Input
            onChange={event => updatePlayerData("name", event.target.value)}
            value={playerData.name || ""}
            fluid
          />
          {errors && <FormError>{errors.name}</FormError>}
        </div>
        <div className="player-form__section">
          <Label>Player's Sex</Label>
          <GenderSelect onChange={newSex => updatePlayerData("sex", newSex)} />
          {errors && <FormError>{errors.sex}</FormError>}
        </div>

        <div className="player-form__section">
          <Label>Avatar</Label>
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
        Save
      </Button>
    </>
  );
};

export default PlayerForm;
