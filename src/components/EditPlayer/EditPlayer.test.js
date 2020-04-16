import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter, withRouter } from "react-router-dom";

import EditPlayer from "./";
import { GameContext } from "../../contexts/gameContext";
import { Player } from "../../utils/player";

const PLAYERS = [
  new Player({ name: "Dacey", sex: "F", avatar: "elf" }),
  new Player({ name: "Tom", sex: "M", avatar: "wizard" }),
];

const setup = (props = {}, players = PLAYERS, setPlayers = () => {}) => {
  const EditPlayerWithRouter = withRouter(EditPlayer);
  return render(
    <MemoryRouter>
      <GameContext.Provider value={{ usePlayers: [players, setPlayers] }}>
        <EditPlayerWithRouter {...props} />
      </GameContext.Provider>
    </MemoryRouter>
  );
};

describe("<EditPlayer/>", () => {
  test("handles editing new player", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = setup(undefined, undefined, mockCallback);
    const nameInput = getByTestId("form__name-input");
    // Simulate name change
    fireEvent.change(nameInput, {
      target: { value: "Nala" },
    });
    const submit = getByTestId("player-form__submit");
    fireEvent.click(submit);
    // Simulate gender select
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
