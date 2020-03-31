import React from "react";
import cx from "classnames";

import "./Button.css";

const Button = ({
  as: T = "button",
  className,
  fluid,
  styleReset,
  iconStyleReset,
  type = "button",
  ...props
}) => {
  return (
    <T
      className={cx(
        "button",
        { "button--fluid": fluid },
        { "button--style-reset": styleReset },
        { "button--icon-style-reset": iconStyleReset }
      )}
      type={type}
      {...props}
    />
  );
};

export default Button;
