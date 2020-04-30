import React from "react";

import { Game } from "types";

export const GameContext = React.createContext<Game>({
  usePlayers: [[], () => {}],
});
