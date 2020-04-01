import nanoid from "nanoid";
import defaultAvatar from "../images/dragon.png";

export function Player(name, score, avatar, status) {
  this.id = nanoid();
  this.name = name || "";
  this.score = score || 1;
  this.avatar = avatar || {
    alt: "dragon",
    src: defaultAvatar
  };
}
