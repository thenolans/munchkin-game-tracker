import React from "react";
import { render } from "@testing-library/react";

import Avatar from "./";

describe("<Avatar/>", () => {
  test("handles src prop", () => {
    const { getByTestId } = render(
      <Avatar src="https://via.placeholder.com/150" />
    );
    const img = getByTestId("avatar");
    expect(img).toHaveAttribute("src", "https://via.placeholder.com/150");
  });

  test("handles alt prop", () => {
    const { getByTestId } = render(<Avatar alt="This is an alt attribute" />);
    const img = getByTestId("avatar");
    expect(img).toHaveAttribute("alt", "This is an alt attribute");
  });
});
