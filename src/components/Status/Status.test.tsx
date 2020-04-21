import React from "react";
import { render } from "@testing-library/react";

import Status from "./";

describe("<Status/>", () => {
  test("handles className prop", () => {
    const { getByTestId } = render(
      <Status className="custom-class another-custom" />
    );
    const status = getByTestId("status");
    expect(status).toHaveClass("status");
    expect(status).toHaveClass("custom-class");
    expect(status).toHaveClass("another-custom");
  });

  test("handles default theme", () => {
    const { getByTestId } = render(<Status />);
    const status = getByTestId("status");
    expect(status).toHaveClass("status--default");
    expect(status).not.toHaveClass("status--warning");
  });

  test("handles theme prop", () => {
    const { getByTestId } = render(<Status theme="warning" />);
    const status = getByTestId("status");
    expect(status).toHaveClass("status--warning");
    expect(status).not.toHaveClass("status--default");
  });

  test("passes through all other props", () => {
    const { getByTestId } = render(<Status id="status" />);
    const status = getByTestId("status");
    expect(status).toHaveAttribute("id", "status");
  });

  test("renders children", () => {
    const { getByTestId } = render(<Status>1st Place</Status>);
    const status = getByTestId("status");
    expect(status).toHaveTextContent("1st Place");
  });
});
