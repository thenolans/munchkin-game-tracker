import React from "react";

import "./avatar.css";
import AVATAR_LIST from "../../avatarList";
import { AvatarId } from "types/avatars";

type Props = {
  id: AvatarId;
};

const Avatar: React.FunctionComponent<Props> = ({ id }) => {
  const avatar = AVATAR_LIST.find((avatar) => avatar.id === id);

  return (
    <img
      className="avatar-image"
      data-testid="avatar"
      src={avatar?.src}
      alt={avatar?.alt}
    />
  );
};

export default Avatar;
