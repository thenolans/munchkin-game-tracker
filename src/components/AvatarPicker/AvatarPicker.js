import React from "react";
import { Tooltip } from "react-tippy";

import AVATAR_LIST from "../../avatarList";
import "./AvatarPicker.css";

const AvatarPicker = props => {
  return (
    <div className="avatar-picker__wrapper">
      <Tooltip
        html={
          <div className="avatar-picker__avatar-list">
            <div className="avatar-picker__text">Please select an avatar</div>
            {AVATAR_LIST.map((avatar, index) => (
              <img
                src={avatar.src}
                alt={avatar.alt}
                key={index}
                className="avatar-picker__avatar-image"
                onClick={() => props.onChange(avatar)}
              />
            ))}
          </div>
        }
        trigger="click"
      >
        <img
          className="avatar-picker__placeholder"
          src={props.avatar.src}
          alt={props.avatar.alt}
        />
      </Tooltip>
    </div>
  );
};
export default AvatarPicker;
