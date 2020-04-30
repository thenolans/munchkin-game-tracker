import React from "react";

export type Game = {
  usePlayers: [Player[], React.Dispatch<React.SetStateAction<Player[]>>];
};

export type AvatarId = "dragon" | "elf" | "man" | "wizard" | "pirate" | "thief";

export type Avatar = {
  id: AvatarId;
  alt: string;
  src: string;
};

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
