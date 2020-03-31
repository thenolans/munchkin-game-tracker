import React from "react";

import "./avatar.css";

const Avatar = props => {
  return <img className="avatar-image" src={props.src} alt={props.alt} />;
};

export default Avatar;
