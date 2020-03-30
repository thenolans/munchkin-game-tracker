import React from "react";

import AVATAR_LIST from "../../avatarList";
import Avatar from "../Avatar";
import "./AvatarPicker.css";

const AvatarPicker = props => {
  return (
    <div className="avatar-picker__avatar-list">
      {AVATAR_LIST.map((avatar, key) => (
        <button
          aria-label={`Click to change avatar to ${avatar.alt}`}
          className="avatar-picker__avatar-select"
          key={key}
          onClick={() => props.onChange(avatar)}
        >
          <Avatar src={avatar.src} alt={avatar.alt} />
        </button>
      ))}
    </div>
  );
};
export default AvatarPicker;
