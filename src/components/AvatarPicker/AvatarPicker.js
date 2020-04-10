import React from "react";

import AVATAR_LIST from "../../avatarList";
import Avatar from "../Avatar";
import "./AvatarPicker.css";

const AvatarPicker = (props) => {
  return (
    <div className="avatar-picker" data-testid="avatar-options">
      {AVATAR_LIST.map((avatar, index) => (
        <div key={avatar.alt}>
          <input
            checked={props.value === avatar}
            type="radio"
            value={avatar}
            name="avatar"
            onChange={() => props.onChange(avatar)}
            data-testid={`avatar-option__${index}`}
            id={avatar.alt}
            aria-label={`Click to change avatar to ${avatar.alt}`}
            className="avatar-picker__option"
          />
          <label htmlFor={avatar.alt} className="avatar-picker__label">
            <Avatar src={avatar.src} alt={avatar.alt} />
          </label>
        </div>
      ))}
    </div>
  );
};
export default AvatarPicker;
