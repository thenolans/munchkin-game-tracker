import nanoid from "nanoid";
import defaultAvatar from "../images/dragon.png";

export function Player(name, sex, level, bonus, avatar) {
  this.id = nanoid();
  this.name = name || "";
  this.sex = sex || "";
  this.level = level || 1;
  this.bonus = bonus || 0;
  this.avatar = avatar || {
    alt: "dragon",
    src: defaultAvatar
  };
}
