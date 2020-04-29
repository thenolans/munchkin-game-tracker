import React, { useState } from "react";

import "./playerForm.css";
import AvatarPicker from "components/AvatarPicker";
import Button from "components/Button";
import FormError from "components/FormError";
import Input from "components/Input";
import Label from "components/Label";
import SexSelect from "components/SexSelect";
import { Player } from "types/types";

type FormErrors = {
  name?: string;
  sex?: string;
  avatar?: string;
};

type Props = {
  defaultFormData?: Partial<Player>;
  onSave: (player: Partial<Player>) => void;
};

const PlayerForm: React.FunctionComponent<Props> = ({
  defaultFormData = {},
  onSave,
}) => {
  const [playerData, setPlayerData] = useState<Partial<Player>>({
    name: "",
    avatar: "dragon",
    sex: "M",
    ...defaultFormData,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const updatePlayerData = (field: string, value: string) => {
    setPlayerData({
      ...playerData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    const errors: FormErrors = {};

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
      onSave(playerData);
    }
  };

  return (
    <>
      <form className="player-form">
        <div className="player-form__section">
          <Label>Player's Name</Label>
          <Input
            data-testid="form__name-input"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              updatePlayerData("name", event.target.value)
            }
            value={playerData.name || ""}
            fluid
          />
          {errors.name && (
            <FormError data-testid="form__name-error">{errors.name}</FormError>
          )}
        </div>
        <div className="player-form__section">
          <Label>Player's Sex</Label>
          <SexSelect
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
            value={playerData.avatar || "dragon"}
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
