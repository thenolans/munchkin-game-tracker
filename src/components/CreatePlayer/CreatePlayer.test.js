import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CreatePlayer from "./";
import { GameContext } from "../../contexts/gameContext";
import { Player } from "../../utils/player";

const PLAYERS = [
  new Player({ name: "Dacey" }),
  new Player({ name: "Tom" }),
  new Player({ name: "Jimmy" })
];

const setup = (props = {}, players = PLAYERS, setPlayers = () => {}) => {
  return render(
    <MemoryRouter>
      <GameContext.Provider value={{ usePlayers: [players, setPlayers] }}>
        <CreatePlayer {...props} />
      </GameContext.Provider>
    </MemoryRouter>
  );
};

describe("<CreatePlayer/>", () => {
  test("handles creating new player", () => {
    const { getByTestId } = setup(<CreatePlayer />);
    const createPlayer = getByTestId("create-player");
    expect(createPlayer).toHaveTextContent("Player");
  });
});
