import React from "react";
import { render } from "@testing-library/react";

import Card from "./";

describe("<Card/>", () => {
  test("render children", () => {
    const { getByTestId } = render(<Card>Inside of the card</Card>);
    const card = getByTestId("card-inner");
    expect(card).toHaveTextContent("Inside of the card");
  });
});
