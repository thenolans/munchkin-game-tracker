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
              <button
                aria-label={`Click to change avatar to ${avatar.alt}`}
                className="avatar-picker__button"
                key={index}
                onClick={() => props.onChange(avatar)}
              >
                <img
                  src={avatar.src}
                  alt={avatar.alt}
                  className="avatar-picker__avatar-image"
                />
              </button>
            ))}
          </div>
        }
        trigger="click"
      >
        <button
          aria-label="Change default avatar"
          className="avatar-picker__placeholder"
        >
          <img
            className="avatar-picker__placeholder-img"
            src={props.avatar.src}
            alt={props.avatar.alt}
          />
        </button>
      </Tooltip>
    </div>
  );
};
export default AvatarPicker;
