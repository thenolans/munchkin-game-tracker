import React from "react";
import cx from "classnames";

import "./Button.css";

const Button = ({
  as: T = "button",
  className,
  fluid,
  styleReset,
  border,
  type = "button",
  ...props
}) => {
  return (
    <T
      className={cx(
        "button",
        { "button--border": border },
        { "button--fluid": fluid },
        { "button--style-reset": styleReset }
      )}
      type={type}
      {...props}
    />
  );
};

export default Button;
