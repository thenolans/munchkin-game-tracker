import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ConfigureGame from "./";
import { GameContext } from "../../contexts/gameContext";
import { Player } from "../../utils/player";

const PLAYERS = [
  new Player({ name: "Dacey" }),
  new Player({ name: "Tom" }),
  new Player({ name: "Jimmy" }),
];

const setup = (props = {}, players = PLAYERS, setPlayers = () => {}) => {
  return render(
    <MemoryRouter>
      <GameContext.Provider value={{ usePlayers: [players, setPlayers] }}>
        <ConfigureGame {...props} />
      </GameContext.Provider>
    </MemoryRouter>
  );
};

describe("<ConfigureGame/>", () => {
  test("render players", () => {
    const { getByTestId } = setup();
    expect(getByTestId("players").children).toHaveLength(PLAYERS.length);
  });

  test("handles remove player", () => {
    const mockCallback = jest.fn();
    const { getByTestId, queryAllByAltText } = setup(
      undefined,
      undefined,
      mockCallback
    );
    const removeButtons = queryAllByAltText("Remove player");
    const removePlayerButton = getByTestId("player-0-remove");
    expect(PLAYERS.length).toBeGreaterThan(2);
    expect(removeButtons.length).toBe(PLAYERS.length);
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(removePlayerButton);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(
      PLAYERS.filter((p, i) => i !== 0)
    );
    expect(removeButtons.length).toBe(PLAYERS.length);
  });

  test("handles remove players for min players", () => {
    const { queryAllByAltText } = setup(undefined, [
      new Player({ name: "Dacey" }),
      new Player({ name: "Tom" }),
    ]);
    const removeButtons = queryAllByAltText("Remove player");
    expect(removeButtons.length).toBe(0);
  });

  test("handles valid players", () => {
    const { queryByText } = setup(undefined, undefined);
    const startGame = queryByText("Start");
    expect(startGame).toBeInTheDocument();
  });

  test("handles invalid players", () => {
    const { queryByText } = setup(undefined, [
      new Player({ name: "Dacey" }),
      new Player({ name: "Tom" }),
      new Player({ name: "" }),
    ]);
    const startGame = queryByText("Start");
    expect(startGame).not.toBeInTheDocument();
  });
});
