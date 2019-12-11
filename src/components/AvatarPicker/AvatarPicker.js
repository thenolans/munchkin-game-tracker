import React from "react";
import { Tooltip } from "react-tippy";

import AVATAR_LIST from "../../avatarList";
import "./AvatarPicker.css";

const AvatarPicker = () => {
  return (
    <div className="avatar-picker__wrapper">
      <Tooltip
        html={
          <div className="avatar-picker__avatar-list">
            {AVATAR_LIST.map((avatar, index) => (
              <img
                src={avatar.photo}
                alt={avatar.alt}
                key={index}
                className="avatar-picker__avatar-image"
              />
            ))}
          </div>
        }
        trigger="click"
      >
        <div className="avatar-picker__placeholder"></div>
      </Tooltip>
    </div>
  );
};
export default AvatarPicker;
