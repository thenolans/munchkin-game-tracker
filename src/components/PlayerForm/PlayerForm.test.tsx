import React from "react";
import { render, fireEvent } from "@testing-library/react";

import PlayerForm from "./";
import { createNewPlayer } from "../../utils/player";

describe("<PlayerForm/>", () => {
  test("handles player name update", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <PlayerForm
        onSave={mockCallback}
        defaultFormData={createNewPlayer({ name: "Dacey" })}
      />
    );
    const nameInput = getByTestId("form__name-input");
    expect((nameInput as HTMLInputElement).value).toBe("Dacey");
    fireEvent.change(nameInput, { target: { value: "Nala" } });
    expect((nameInput as HTMLInputElement).value).toBe("Nala");
  });

  test("handles player sex update", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <PlayerForm
        onSave={mockCallback}
        defaultFormData={createNewPlayer({ name: "Dacey", sex: "F" })}
      />
    );
    const female = getByTestId("select-female");
    const male = getByTestId("select-male");
    expect((female as HTMLInputElement).checked).toBe(true);
    expect((male as HTMLInputElement).checked).not.toBe(true);
    fireEvent.click(male);
    expect((male as HTMLInputElement).checked).toBe(true);
    expect((female as HTMLInputElement).checked).not.toBe(true);
  });

  test("handle player avatar update", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <PlayerForm
        onSave={mockCallback}
        defaultFormData={createNewPlayer({
          name: "Dacey",
          avatar: "wizard",
        })}
      />
    );
    const avatarOptionElf = getByTestId("avatar-option__elf");
    const avatarOptionPirate = getByTestId("avatar-option__pirate");
    fireEvent.click(avatarOptionElf);
    expect((avatarOptionElf as HTMLInputElement).checked).toBe(true);
    expect((avatarOptionPirate as HTMLInputElement).checked).not.toBe(true);
    fireEvent.click(avatarOptionPirate);
    expect((avatarOptionPirate as HTMLInputElement).checked).toBe(true);
    expect((avatarOptionElf as HTMLInputElement).checked).not.toBe(true);
  });

  test("handle player name min character error", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <PlayerForm
        defaultFormData={createNewPlayer({ sex: "F" })}
        onSave={mockCallback}
      />
    );
    const submit = getByTestId("player-form__submit");
    fireEvent.click(submit);
    expect(mockCallback).toHaveBeenCalledTimes(0);
    expect(getByTestId("form__name-error")).toBeInTheDocument();
  });

  test("handle player name max character error", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <PlayerForm
        defaultFormData={createNewPlayer({ name: "ThisIsASuperLongName" })}
        onSave={mockCallback}
      />
    );
    const submit = getByTestId("player-form__submit");
    fireEvent.click(submit);
    expect(mockCallback).toHaveBeenCalledTimes(0);
    expect(getByTestId("form__name-error")).toBeInTheDocument();
  });

  test("submits form", () => {
    const mockCallback = jest.fn();
    const testPlayer = createNewPlayer();
    const { getByTestId } = render(
      <PlayerForm defaultFormData={testPlayer} onSave={mockCallback} />
    );
    const nameInput = getByTestId("form__name-input");
    fireEvent.change(nameInput, { target: { value: "Nala" } });
    const submit = getByTestId("player-form__submit");
    fireEvent.click(submit);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toBeCalledWith({ ...testPlayer, name: "Nala" });
  });
});
