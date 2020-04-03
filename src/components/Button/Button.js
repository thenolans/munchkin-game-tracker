import React from "react";
import cx from "classnames";

import "./Button.css";

const Button = ({
  as: T = "button",
  className,
  fluid,
  styleReset,
  theme,
  type = "button",
  ...props
}) => {
  return (
    <T
      className={cx(
        "button",
        { "button--fluid": fluid },
        { "button--style-reset": styleReset },
        { "button--info": theme === "info" },
        className
      )}
      type={type}
      {...props}
    />
  );
};

export default Button;
