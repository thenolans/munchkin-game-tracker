import React from "react";
import cx from "classnames";

import "./Input.css";

const Input = ({ className, fluid, ...props }) => {
  return (
    <input className={cx("input", { "input--fluid": fluid })} {...props} />
  );
};

export default Input;
