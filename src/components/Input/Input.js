import React from "react";
import cx from "classnames";

import "./Input.css";

const Input = ({ className, fluid, ...props }) => {
  return (
    <input
      className={cx("input", { "input--fluid": fluid }, className)}
      data-testid="input"
      {...props}
    />
  );
};

export default Input;
