import React from "react";
import cx from "classnames";

import "./Button.css";

const Button = ({
  as: T = "button",
  className,
  fluid,
  type = "button",
  ...props
}) => {
  return (
    <T
      className={cx("button", { "button--fluid": fluid })}
      type={type}
      {...props}
    />
  );
};

export default Button;
