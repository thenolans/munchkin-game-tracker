import React, { useState } from "react";

import "./playerForm.css";
import AvatarPicker from "../AvatarPicker";
import Button from "../Button";
import FormError from "../FormError";
import GenderSelect from "../GenderSelect";
import Input from "../Input";
import Label from "../Label";

const PlayerForm = (props) => {
  const [playerData, setPlayerData] = useState(props.defaultFormData || {});
  const [errors, setErrors] = useState({});

  const updatePlayerData = (field, value) => {
    setPlayerData({
      ...playerData,
      [field]: value,
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
            data-testid="form__name-input"
            onChange={(event) => updatePlayerData("name", event.target.value)}
            value={playerData.name || ""}
            fluid
          />
          {errors.name && (
            <FormError data-testid="form__name-error">{errors.name}</FormError>
          )}
        </div>
        <div className="player-form__section">
          <Label>Player's Sex</Label>
          <GenderSelect
            value={playerData.sex}
            onChange={(newSex) => updatePlayerData("sex", newSex)}
          />
          {errors.sex && (
            <FormError data-testid="form__sex-error">{errors.sex}</FormError>
          )}
        </div>

        <div className="player-form__section">
          <Label>Avatar</Label>
          <AvatarPicker
            value={playerData.avatar}
            onChange={(newAvatar) => updatePlayerData("avatar", newAvatar)}
          />
          {errors.avatar && (
            <FormError data-testid="form__avatar-error">
              {errors.avatar}
            </FormError>
          )}
        </div>
      </form>
      <Button
        data-testid="player-form__submit"
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
