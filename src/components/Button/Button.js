import React from "react";
import cx from "classnames";

import "./Button.css";

const Button = ({
  as: T = "button",
  className,
  fluid,
  styleReset,
  theme = "default",
  type = "button",
  ...props
}) => {
  return (
    <T
      className={cx(
        "button",
        `button--${theme}`,
        { "button--fluid": fluid },
        { "button--style-reset": styleReset },
        className
      )}
      data-testid="button"
      type={type}
      {...props}
    />
  );
};

export default Button;
