import React from "react";

import "./avatar.css";

const Avatar = props => {
  return (
    <img
      className="avatar-image"
      data-testid="avatar"
      src={props.src}
      alt={props.alt}
    />
  );
};

export default Avatar;
