import nanoid from "nanoid";

import { Player } from "types";

type CreatedPlayer = Omit<Player, "id" | "originalSex">;

export const createNewPlayer = (player?: Partial<CreatedPlayer>): Player => {
  const { name = "", sex = "M", level = 1, bonus = 0, avatar = "dragon" } =
    player || {};
  return {
    id: nanoid(),
    name,
    sex,
    originalSex: sex,
    level,
    bonus,
    avatar,
  };
};
