import React from "react";
import { render } from "@testing-library/react";

import Input from "./";

describe("<Input/>", () => {
  test("renders an input by default", () => {
    const { container } = render(<Input />);
    const input = container.querySelector("input");
    expect(input).not.toBeNull();
  });

  test("handles className prop", () => {
    const { getByTestId } = render(
      <Input className="custom-class another-custom" />
    );
    const input = getByTestId("input");
    expect(input).toHaveClass("input");
    expect(input).toHaveClass("custom-class");
    expect(input).toHaveClass("another-custom");
  });

  test("handles fluid prop", () => {
    const { getByTestId } = render(<Input fluid />);
    const input = getByTestId("input");
    expect(input).toHaveClass("input--fluid");
  });

  test("passes through all other props", () => {
    const { getByTestId } = render(<Input id="input" />);
    const input = getByTestId("input");
    expect(input).toHaveAttribute("id", "input");
  });
});
