import React from "react";
import cx from "classnames";

import "./Input.css";

const Input = ({ className, fluid, ...props }) => {
  return (
    <input
      className={cx("input", { "input--fluid": fluid }, className)}
      {...props}
    />
  );
};

export default Input;
