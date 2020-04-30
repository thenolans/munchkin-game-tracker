import React from "react";
import { render } from "@testing-library/react";

import ButtonGroup from ".";

describe("<ButtonGroup/>", () => {
  test("passes through all props", () => {
    const { getByTestId } = render(<ButtonGroup id="button-group" />);
    const buttonGroup = getByTestId("button-group");
    expect(buttonGroup).toHaveAttribute("id", "button-group");
  });

  test("renders children", () => {
    const { getByTestId } = render(<ButtonGroup>My button group</ButtonGroup>);
    const buttonGroup = getByTestId("button-group");
    expect(buttonGroup).toHaveTextContent("My button group");
  });
});
