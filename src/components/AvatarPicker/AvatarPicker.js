import React from "react";

import AVATAR_LIST from "../../avatarList";
import Avatar from "../Avatar";
import "./AvatarPicker.css";

const AvatarPicker = (props) => {
  return (
    <div className="avatar-picker" data-testid="avatar-options">
      {AVATAR_LIST.map((avatar) => (
        <div key={avatar.id}>
          <input
            checked={props.value === avatar}
            type="radio"
            value={avatar.id}
            name="avatar"
            onChange={() => props.onChange(avatar)}
            data-testid={`avatar-option__${avatar.id}`}
            id={avatar.id}
            aria-label={`Change user's avatar to a ${avatar.id}`}
            className="avatar-picker__option"
          />
          <label htmlFor={avatar.id} className="avatar-picker__label">
            <Avatar src={avatar.src} alt={avatar.alt} />
          </label>
        </div>
      ))}
    </div>
  );
};
export default AvatarPicker;
