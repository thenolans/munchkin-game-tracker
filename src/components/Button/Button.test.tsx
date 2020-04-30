import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "./";

describe("<Button/>", () => {
  test("renders as button by default", () => {
    const { container } = render(<Button />);
    const button = container.querySelector("button");
    expect(button).not.toBeNull();
  });

  test("handles className prop", () => {
    const { getByTestId } = render(
      <Button className="custom-class another-custom" />
    );
    const button = getByTestId("button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("custom-class");
    expect(button).toHaveClass("another-custom");
  });

  test("handles fluid prop", () => {
    const { getByTestId } = render(<Button fluid />);
    const button = getByTestId("button");
    expect(button).toHaveClass("button--fluid");
  });

  test("handles styleReset prop", () => {
    const { getByTestId } = render(<Button styleReset />);
    const button = getByTestId("button");
    expect(button).toHaveClass("button--style-reset");
  });

  test("handles default theme", () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId("button");
    expect(button).toHaveClass("button--default");
    expect(button).not.toHaveClass("button--info");
  });

  test("handles theme prop", () => {
    const { getByTestId } = render(<Button theme="info" />);
    const button = getByTestId("button");
    expect(button).toHaveClass("button--info");
    expect(button).not.toHaveClass("button--default");
  });

  test("handles type prop", () => {
    const { getByTestId } = render(<Button type="submit" />);
    const button = getByTestId("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  test("passes through all other props", () => {
    const { getByTestId } = render(<Button id="my-button" />);
    const button = getByTestId("button");
    expect(button).toHaveAttribute("id", "my-button");
  });

  test("renders children", () => {
    const { container } = render(<Button>My button</Button>);
    expect(container).toHaveTextContent("My button");
  });

  test("handles click", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<Button onClick={mockCallback} />);
    const button = getByTestId("button");
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
