import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NotFoundPage from "./";

describe("<NotFoundPage/>", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
