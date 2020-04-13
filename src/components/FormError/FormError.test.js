import React from "react";
import { render } from "@testing-library/react";

import FormError from "./FormError";

describe("<FormError/>", () => {
  test("handles className prop", () => {
    const { getByTestId } = render(
      <FormError className="custom-class another-custom" />
    );
    const formError = getByTestId("error");
    expect(formError).toHaveClass("form-error");
    expect(formError).toHaveClass("custom-class");
    expect(formError).toHaveClass("another-custom");
  });

  test("passes through all other props", () => {
    const { getByTestId } = render(<FormError id="form-error" />);
    const formError = getByTestId("error");
    expect(formError).toHaveAttribute("id", "form-error");
  });

  test("renders children", () => {
    const { getByTestId } = render(<FormError>Error</FormError>);
    const formError = getByTestId("error");
    expect(formError).toHaveTextContent("Error");
  });
});
