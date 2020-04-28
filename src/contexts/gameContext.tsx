import React from "react";

import { Game } from "types/game";

export const GameContext = React.createContext<Game>({
  usePlayers: [[], () => {}],
});
