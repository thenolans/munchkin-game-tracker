import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import { MemoryRouter, withRouter } from "react-router-dom";

import Game from "./";
import { GameContext } from "../../contexts/gameContext";
import { Player } from "../../utils/player";
import getLowestUniqueLevel from "../../utils/getLowestUniqueLevel";
import getHighestLevel from "../../utils/getHighestLevel";

const PLAYERS = [
  new Player({
    name: "Dacey",
    sex: "F",
    bonus: 0,
    level: 5,
    avatar: "dragon",
  }),
  new Player({
    name: "Tom",
    sex: "M",
    bonus: 0,
    level: 2,
    avatar: "wizard",
  }),
  new Player({
    name: "Nala",
    sex: "F",
    bonus: 1,
    level: 5,
    avatar: "elf",
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
    ${"decrement by 1"} | ${"decrement"} | ${4}
    ${"increment by 1"} | ${"increment"} | ${6}
  `("handles level $operation ", ({ testid, expected }) => {
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

  test("handles score total", () => {
    const PLAYER_INDEX = 2;
    const { getByTestId } = setup();
    const player = getByTestId(`player-${PLAYERS[PLAYER_INDEX].id}`);
    expect(within(player).getByTestId("combat-score")).toHaveTextContent(
      PLAYERS[PLAYER_INDEX].level + PLAYERS[PLAYER_INDEX].bonus
    );
  });

  test("display discard badge on player with lowest level", () => {
    const { getByTestId } = setup();
    const lowestLevel = getLowestUniqueLevel(PLAYERS.map((p) => p.level));
    const lowestPlayerIndex = PLAYERS.findIndex((p) => p.level === lowestLevel);
    PLAYERS.map((player, index) => {
      const playerNode = getByTestId(`player-${player.id}`);
      if (index === lowestPlayerIndex) {
        expect(
          within(playerNode).queryByTestId("discard-status")
        ).toBeInTheDocument();
      } else {
        expect(
          within(playerNode).queryByTestId("discard-status")
        ).not.toBeInTheDocument();
      }
    });
  });

  test("doesn't display discard badge on tied lowest level", () => {
    const players = [
      new Player({ level: 2 }),
      new Player({ level: 2 }),
      new Player({ level: 5 }),
    ];
    const { getByTestId } = setup(undefined, undefined, players);
    players.map((player) => {
      const playerNode = getByTestId(`player-${player.id}`);
      expect(
        within(playerNode).queryByTestId("discard-status")
      ).not.toBeInTheDocument();
    });
  });

  test("display first place badge on players with highest level", () => {
    const { getByTestId } = setup();
    const hightestLevel = getHighestLevel(PLAYERS.map((p) => p.level));
    const highestPlayerIds = PLAYERS.filter(
      (p) => p.level === hightestLevel
    ).map((p) => p.id);

    PLAYERS.map((player) => {
      const playerNode = getByTestId(`player-${player.id}`);
      if (highestPlayerIds.includes(player.id)) {
        expect(
          within(playerNode).queryByTestId("first-place-status")
        ).toBeInTheDocument();
      } else {
        expect(
          within(playerNode).queryByTestId("first-place-status")
        ).not.toBeInTheDocument();
      }
    });
  });
});
