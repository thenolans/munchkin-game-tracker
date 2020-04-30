import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import GithubLink from "./";

describe("<GithubLink/>", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <MemoryRouter>
        <GithubLink />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
