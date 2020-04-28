import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter, withRouter } from "react-router-dom";

import CreatePlayer from "./";
import { GameContext } from "../../contexts/gameContext";
import { Player } from "../../utils/player";

const PLAYERS = [new Player({ name: "Tom" }), new Player({ name: "Jimmy" })];

const setup = (props = {}, players = PLAYERS, setPlayers = () => {}) => {
  const CreatePlayerWithRouter = withRouter(CreatePlayer);
  return render(
    <MemoryRouter>
      <GameContext.Provider value={{ usePlayers: [players, setPlayers] }}>
        <CreatePlayerWithRouter {...props} />
      </GameContext.Provider>
    </MemoryRouter>
  );
};

describe("<CreatePlayer/>", () => {
  test("handles creating new player", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = setup(undefined, undefined, mockCallback);
    // Simulate name change
    const nameInput = getByTestId("form__name-input");
    fireEvent.change(nameInput, { target: { value: "Dacey" } });
    expect(nameInput.value).toBe("Dacey");
    // Simulate sex select
    const female = getByTestId("select-female");
    fireEvent.click(female);
    expect(female.checked).toBe(true);
    // Simulate avatar select
    const avatarOptionElf = getByTestId("avatar-option__elf");
    fireEvent.click(avatarOptionElf);
    expect(avatarOptionElf.checked).toBe(true);
    // Submit form
    const submitButton = getByTestId("player-form__submit");
    fireEvent.click(submitButton);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
