import React from "react";
import { render } from "@testing-library/react";

import Label from "./";

describe("<Label/>", () => {
  test("renders as label by default", () => {
    const { container } = render(<Label />);
    const label = container.querySelector("label");
    expect(label).not.toBeNull();
  });

  test("handles className prop", () => {
    const { getByTestId } = render(
      <Label className="custom-class another-custom" />
    );
    const label = getByTestId("label");
    expect(label).toHaveClass("label");
    expect(label).toHaveClass("custom-class");
    expect(label).toHaveClass("another-custom");
  });

  test("passes through all other props", () => {
    const { getByTestId } = render(<Label id="label" />);
    const label = getByTestId("label");
    expect(label).toHaveAttribute("id", "label");
  });

  test("renders children", () => {
    const { getByTestId } = render(<Label>Name</Label>);
    const label = getByTestId("label");
    expect(label).toHaveTextContent("Name");
  });
});
