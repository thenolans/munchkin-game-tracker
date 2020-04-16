import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import SplashScreen from "./";

describe("<SplashScreen/>", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <MemoryRouter>
        <SplashScreen />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
