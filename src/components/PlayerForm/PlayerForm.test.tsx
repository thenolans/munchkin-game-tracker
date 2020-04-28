import React from "react";
import { render, fireEvent } from "@testing-library/react";

import PlayerForm from "./";
import { Player } from "../../utils/player";

describe("<PlayerForm/>", () => {
  test("handles player name update", () => {
    const { getByTestId } = render(
      <PlayerForm defaultFormData={new Player({ name: "Dacey" })} />
    );
    const nameInput = getByTestId("form__name-input");
    expect(nameInput.value).toBe("Dacey");
    fireEvent.change(nameInput, { target: { value: "Nala" } });
    expect(nameInput.value).toBe("Nala");
  });

  test("handles player sex update", () => {
    const { getByTestId } = render(
      <PlayerForm defaultFormData={new Player({ name: "Dacey", sex: "F" })} />
    );
    const female = getByTestId("select-female");
    const male = getByTestId("select-male");
    expect(female.checked).toBe(true);
    expect(male.checked).not.toBe(true);
    fireEvent.click(male);
    expect(male.checked).toBe(true);
    expect(female.checked).not.toBe(true);
  });

  test("handle player avatar update", () => {
    const { getByTestId } = render(
      <PlayerForm
        defaultFormData={
          new Player({
            name: "Dacey",
            avatar: "wizard",
          })
        }
      />
    );
    const avatarOptionElf = getByTestId("avatar-option__elf");
    const avatarOptionPirate = getByTestId("avatar-option__pirate");
    fireEvent.click(avatarOptionElf);
    expect(avatarOptionElf.checked).toBe(true);
    expect(avatarOptionPirate.checked).not.toBe(true);
    fireEvent.click(avatarOptionPirate);
    expect(avatarOptionPirate.checked).toBe(true);
    expect(avatarOptionElf.checked).not.toBe(true);
  });

  test("handle player name min character error", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <PlayerForm
        defaultFormData={new Player({ sex: "F" })}
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
        defaultFormData={new Player({ name: "ThisIsASuperLongName" })}
        onSave={mockCallback}
      />
    );
    const submit = getByTestId("player-form__submit");
    fireEvent.click(submit);
    expect(mockCallback).toHaveBeenCalledTimes(0);
    expect(getByTestId("form__name-error")).toBeInTheDocument();
  });

  test("handle player sex errors", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<PlayerForm onSave={mockCallback} />);
    const submit = getByTestId("player-form__submit");
    fireEvent.click(submit);
    expect(mockCallback).toHaveBeenCalledTimes(0);
    expect(getByTestId("form__sex-error")).toBeInTheDocument();
  });

  test("handle player avatar errors", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<PlayerForm onSave={mockCallback} />);
    const submit = getByTestId("player-form__submit");
    fireEvent.click(submit);
    expect(mockCallback).toHaveBeenCalledTimes(0);
    expect(getByTestId("form__avatar-error")).toBeInTheDocument();
  });

  test("submits form", () => {
    const mockCallback = jest.fn();
    const testPlayer = new Player();
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
