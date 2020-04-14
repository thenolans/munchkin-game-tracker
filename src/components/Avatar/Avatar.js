import React from "react";

import "./avatar.css";
import AVATAR_LIST from "../../avatarList";

const Avatar = (props) => {
  const avatar = AVATAR_LIST.find((avatar) => avatar.id === props.id);

  return (
    <img
      className="avatar-image"
      data-testid="avatar"
      src={avatar.src}
      alt={avatar.alt}
    />
  );
};

export default Avatar;
