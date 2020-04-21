import React from "react";
import { render } from "@testing-library/react";

import PlayerCard from "./";

describe("<PlayerCard/>", () => {
  test("renders children", () => {
    const { getByTestId } = render(<PlayerCard>Player 1</PlayerCard>);
    const playerCard = getByTestId("player-card");
    expect(playerCard).toHaveTextContent("Player 1");
  });
});
