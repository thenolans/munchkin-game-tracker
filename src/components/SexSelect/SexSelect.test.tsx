import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SexSelect from "./";

describe("<SexSelect/>", () => {
  test("handles onChange callback", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<SexSelect onChange={mockCallback} />);
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId("select-female"));
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith("F");
    fireEvent.click(getByTestId("select-male"));
    expect(mockCallback).toHaveBeenCalledTimes(2);
    expect(mockCallback).toHaveBeenCalledWith("M");
  });
});
