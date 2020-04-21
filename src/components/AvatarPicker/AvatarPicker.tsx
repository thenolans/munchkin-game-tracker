import React from "react";

import AVATAR_LIST from "../../avatarList";
import Avatar from "../Avatar";
import "./avatarPicker.css";
import { AvatarId } from "types/avatars";

type Props = {
  value: AvatarId;
  onChange: (avatarId: AvatarId) => void;
};

const AvatarPicker: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="avatar-picker" data-testid="avatar-options">
      {AVATAR_LIST.map((avatar) => (
        <div key={avatar.id}>
          <input
            checked={props.value === avatar.id}
            type="radio"
            value={avatar.id}
            name="avatar"
            onChange={() => props.onChange(avatar.id)}
            data-testid={`avatar-option__${avatar.id}`}
            id={avatar.id}
            aria-label={`Change user's avatar to a ${avatar.id}`}
            className="avatar-picker__option"
          />
          <label htmlFor={avatar.id} className="avatar-picker__label">
            <Avatar id={avatar.id} />
          </label>
        </div>
      ))}
    </div>
  );
};
export default AvatarPicker;
