import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Header from "./";

describe("<Header/>", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
