import React from "react";

import { Game } from "types/types";

export const GameContext = React.createContext<Game>({
  usePlayers: [[], () => {}],
});
