import React from "react";
import { render, fireEvent } from "@testing-library/react";

import AvatarPicker from "./";
import AVATAR_LIST from "../../avatarList";

describe("<AvatarPicker/>", () => {
  test("handles avatar option click", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<AvatarPicker onChange={mockCallback} />);
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId("avatar-option__wizard"));
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(AVATAR_LIST[3].id);
    fireEvent.click(getByTestId("avatar-option__dragon"));
    expect(mockCallback).toHaveBeenCalledTimes(2);
    expect(mockCallback).toHaveBeenCalledWith(AVATAR_LIST[0].id);
  });

  test("renders avatar options", () => {
    const { getByTestId } = render(<AvatarPicker />);
    const options = getByTestId("avatar-options");
    expect(options.children).toHaveLength(AVATAR_LIST.length);
  });
});
