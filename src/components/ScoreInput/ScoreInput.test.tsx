import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ScoreInput from "./";

describe("<ScoreInput/>", () => {
  test("handles onChange callback", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <ScoreInput currentScore={3} onChange={mockCallback} />
    );
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId("increment"));
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(4);
    fireEvent.click(getByTestId("decrement"));
    expect(mockCallback).toHaveBeenCalledTimes(2);
    expect(mockCallback).toHaveBeenCalledWith(2);
  });

  test("handles max prop", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <ScoreInput currentScore={99} max={99} onChange={mockCallback} />
    );
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId("increment"));
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId("decrement"));
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(98);
  });

  test("handles min prop", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <ScoreInput currentScore={1} min={1} onChange={mockCallback} />
    );
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId("decrement"));
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId("increment"));
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(2);
  });

  test("displays current score", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <ScoreInput onChange={mockCallback} currentScore={5} />
    );
    expect(getByTestId("current-score")).toHaveTextContent("5");
  });
});
