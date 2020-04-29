import React from "react";
import { render } from "@testing-library/react";
import App from "./";

import { createNewPlayer } from "utils/player";

const PLAYERS = [
  createNewPlayer({ name: "Dacey" }),
  createNewPlayer({ name: "Tom" }),
];

describe("<App/>", () => {
  test("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("saves game to local storage on change", () => {
    JSON.parse = jest.fn();
    const localStorageGetMock = jest.fn().mockResolvedValue(PLAYERS);
    const localStorageSetMock = jest.fn();
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: localStorageGetMock,
        setItem: localStorageSetMock,
      },
      writable: true,
    });
    expect(localStorageGetMock).toHaveBeenCalledTimes(1);
  });
});
