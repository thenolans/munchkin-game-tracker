import React from "react";
import cx from "classnames";

import "./Button.css";

const Button = ({
  as: T = "button",
  className,
  fluid,
  styleReset,
  type = "button",
  ...props
}) => {
  return (
    <T
      className={cx(
        "button",
        { "button--fluid": fluid },
        { "button--styleReset": styleReset }
      )}
      type={type}
      {...props}
    />
  );
};

export default Button;
