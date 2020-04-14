import React from "react";
import { render } from "@testing-library/react";

import Avatar from "./";
import AVATAR_LIST from "../../avatarList";

describe("<Avatar/>", () => {
  test("handles src prop", () => {
    const { getByTestId } = render(<Avatar id="wizard" />);
    const avatar = AVATAR_LIST.find((avatar) => avatar.id === "wizard");
    const img = getByTestId("avatar");
    expect(img).toHaveAttribute("src", avatar.src);
  });

  test("handles alt prop", () => {
    const { getByTestId } = render(<Avatar id="wizard" />);
    const avatar = AVATAR_LIST.find((avatar) => avatar.id === "wizard");
    const img = getByTestId("avatar");
    expect(img).toHaveAttribute("alt", avatar.alt);
  });
});
