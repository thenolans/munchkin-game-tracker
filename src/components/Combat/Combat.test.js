import React from "react";
import { render, within, fireEvent } from "@testing-library/react";
import { withRouter, MemoryRouter } from "react-router-dom";

import Combat from "./";

const setup = (routerProps) => {
  const CombatWithRouter = withRouter(Combat);
  return render(
    <MemoryRouter {...routerProps}>
      <CombatWithRouter />
    </MemoryRouter>
  );
};

describe("<Combat/>", () => {
  test("defaults munchkin score to 0 with no location search", () => {
    const { getByTestId } = setup();
    expect(getByTestId("munchkin-score")).toHaveTextContent("0");
  });

  test("defaults munchkin score based on location search", () => {
    const { getByTestId } = setup({ initialEntries: ["?score=9"] });
    expect(getByTestId("munchkin-score")).toHaveTextContent("9");
  });

  test.each`
    operation                            | testid           | expected
    ${"decrement munchkin's score by 5"} | ${"decrement-5"} | ${4}
    ${"decrement munchkin's score by 3"} | ${"decrement-3"} | ${6}
    ${"decrement munchkin's score by 1"} | ${"decrement-1"} | ${8}
    ${"increment munchkin's score by 1"} | ${"increment-1"} | ${10}
    ${"increment munchkin's score by 3"} | ${"increment-3"} | ${12}
    ${"increment munchkin's score by 5"} | ${"increment-5"} | ${14}
  `("handles $operation", ({ testid, expected }) => {
    const { getByTestId } = setup({ initialEntries: ["?score=9"] });
    const munchkinCombat = getByTestId("munchkin-combat");

    expect(getByTestId("munchkin-score")).toHaveTextContent("9");
    fireEvent.click(within(munchkinCombat).getByTestId(testid));
    expect(getByTestId("munchkin-score")).toHaveTextContent(expected);
  });

  test.each`
    operation                           | testid           | expected
    ${"decrement monster's score by 5"} | ${"decrement-5"} | ${-5}
    ${"decrement monster's score by 3"} | ${"decrement-3"} | ${-3}
    ${"decrement monster's score by 1"} | ${"decrement-1"} | ${-1}
    ${"increment monster's score by 1"} | ${"increment-1"} | ${1}
    ${"increment monster's score by 3"} | ${"increment-3"} | ${3}
    ${"increment monster's score by 5"} | ${"increment-5"} | ${5}
  `("handles $operation", ({ testid, expected }) => {
    const { getByTestId } = setup();
    const monsterCombat = getByTestId("monster-combat");

    expect(getByTestId("monster-score")).toHaveTextContent("0");
    fireEvent.click(within(monsterCombat).getByTestId(testid));
    expect(getByTestId("monster-score")).toHaveTextContent(expected);
  });
});
