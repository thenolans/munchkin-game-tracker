import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CombatScoreInput from "./";

describe("<CombatScoreInput/>", () => {
  test.each`
    operation           | testid           | expected
    ${"increment by 1"} | ${"increment-1"} | ${1}
    ${"increment by 3"} | ${"increment-3"} | ${3}
    ${"increment by 5"} | ${"increment-5"} | ${5}
    ${"decrement by 5"} | ${"decrement-5"} | ${-5}
    ${"decrement by 3"} | ${"decrement-3"} | ${-3}
    ${"decrement by 1"} | ${"decrement-1"} | ${-1}
  `("handles callback for $operation", ({ testid, expected }) => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <CombatScoreInput onAdjustmentClick={mockCallback} />
    );
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId(testid));
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(expected);
  });
});
