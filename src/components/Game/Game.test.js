import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import { MemoryRouter, withRouter } from "react-router-dom";

import Game from "./";
import { GameContext } from "../../contexts/gameContext";
import { Player } from "../../utils/player";

const PLAYERS = [
  new Player({
    name: "Dacey",
    sex: "F",
    bonus: 0,
    level: 1,
    avatar: { alt: "dragon", src: "https://via.placeholder.com/150" },
  }),
  new Player({
    name: "Tom",
    sex: "M",
    bonus: 0,
    level: 1,
    avatar: { alt: "dragon", src: "https://via.placeholder.com/150" },
  }),
  new Player({
    name: "Nala",
    sex: "F",
    bonus: 1,
    level: 2,
    avatar: { alt: "dragon", src: "https://via.placeholder.com/150" },
  }),
];

const setup = (
  routerProps,
  props = {},
  players = PLAYERS,
  setPlayers = () => {}
) => {
  const GameWithRouter = withRouter(Game);
  return render(
    <MemoryRouter {...routerProps}>
      <GameContext.Provider value={{ usePlayers: [players, setPlayers] }}>
        <GameWithRouter {...props} />
      </GameContext.Provider>
    </MemoryRouter>
  );
};

describe("<Game/>", () => {
  test("renders all players", () => {
    const { getByTestId } = setup();
    const players = getByTestId("game-player__options");
    expect(players.children).toHaveLength(PLAYERS.length);
  });

  test("handles female sex toggle", () => {
    const mockCallback = jest.fn();
    const PLAYER_INDEX = 0;
    const { getByTestId } = setup(
      undefined,
      undefined,
      [...PLAYERS],
      mockCallback
    );

    const player = getByTestId(`player-${PLAYERS[PLAYER_INDEX].id}`);
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(within(player).getByTestId("toggle-sex"));
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(
      PLAYERS.map((player, index) => {
        return {
          ...player,
          sex:
            index === PLAYER_INDEX
              ? player.sex === "M"
                ? "F"
                : "M"
              : player.sex,
        };
      })
    );
  });

  test("handles male sex toggle", () => {
    const mockCallback = jest.fn();
    const PLAYER_INDEX = 1;
    const { getByTestId } = setup(
      undefined,
      undefined,
      [...PLAYERS],
      mockCallback
    );

    const player = getByTestId(`player-${PLAYERS[PLAYER_INDEX].id}`);
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(within(player).getByTestId("toggle-sex"));
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(
      PLAYERS.map((player, index) => {
        return {
          ...player,
          sex:
            index === PLAYER_INDEX
              ? player.sex === "M"
                ? "F"
                : "M"
              : player.sex,
        };
      })
    );
  });

  test("handles game reset", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = setup(
      undefined,
      undefined,
      undefined,
      mockCallback
    );

    const resetGame = getByTestId("game__actions-reset");
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(resetGame);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test("handles game rematch", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = setup(
      undefined,
      undefined,
      undefined,
      mockCallback
    );
    const rematchGame = getByTestId("game__actions-rematch");
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(rematchGame);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toBeCalledWith(
      PLAYERS.map((player) => {
        return { ...player, level: 1, bonus: 0, sex: player.originalSex };
      })
    );
  });

  test.each`
    operation           | testid         | expected
    ${"decrement by 1"} | ${"decrement"} | ${-1}
    ${"increment by 1"} | ${"increment"} | ${1}
  `("handles bonus $operation ", ({ testid, expected }) => {
    const mockCallback = jest.fn();
    const PLAYER_INDEX = 1;
    const { getByTestId } = setup(
      undefined,
      undefined,
      [...PLAYERS],
      mockCallback
    );

    const player = getByTestId(
      `player-${PLAYERS[PLAYER_INDEX].id}__bonus-update`
    );
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(within(player).getByTestId(testid));
    expect(mockCallback).toHaveBeenCalledWith(
      PLAYERS.map((player, index) => {
        return {
          ...player,
          bonus: index === PLAYER_INDEX ? expected : player.bonus,
        };
      })
    );
  });

  test.each`
    operation           | testid         | expected
    ${"decrement by 1"} | ${"decrement"} | ${1}
    ${"increment by 1"} | ${"increment"} | ${3}
  `("handles bonus $operation ", ({ testid, expected }) => {
    const mockCallback = jest.fn();
    const PLAYER_INDEX = 2;
    const { getByTestId } = setup(
      undefined,
      undefined,
      [...PLAYERS],
      mockCallback
    );

    const player = getByTestId(
      `player-${PLAYERS[PLAYER_INDEX].id}__level-update`
    );
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(within(player).getByTestId(testid));
    expect(mockCallback).toHaveBeenCalledWith(
      PLAYERS.map((player, index) => {
        return {
          ...player,
          level: index === PLAYER_INDEX ? expected : player.level,
        };
      })
    );
  });

  test("Handles score total", () => {
    const PLAYER_INDEX = 2;
    const { getByTestId } = setup();
    const player = getByTestId(`player-${PLAYERS[PLAYER_INDEX].id}`);
    expect(within(player).getByTestId("combat-score")).toHaveTextContent(3);
  });

  // test.todo("display discard badge on player in last");
  // test.todo("display first badge on players in first");
});
