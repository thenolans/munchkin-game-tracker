import { AvatarId } from "types/avatars";

export type Sex = "M" | "F";

export type Player = {
  id: string;
  name: string;
  sex: Sex;
  originalSex: Sex;
  level: number;
  bonus: number;
  avatar: AvatarId;
};
