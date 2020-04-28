import React from "react";

import { Player } from "types/player";

export type Game = {
  usePlayers: [Player[], React.Dispatch<React.SetStateAction<Player[]>>];
};
