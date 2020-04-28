import nanoid from "nanoid";

import { Player as PlayerType } from "types/player";

export const Player = (function Player(this: PlayerType, player?: PlayerType) {
  const { name = "", sex = "M", level = 1, bonus = 0, avatar = "dragon" } =
    player || {};
  this.id = nanoid();
  this.name = name;
  this.sex = sex;
  this.originalSex = sex;
  this.level = level;
  this.bonus = bonus;
  this.avatar = avatar;
} as any) as { new (player?: PlayerType): PlayerType };
