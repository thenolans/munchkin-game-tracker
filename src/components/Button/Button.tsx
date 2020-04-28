import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import "./button.css";

type Props = React.HTMLAttributes<HTMLButtonElement> &
  React.HTMLProps<HTMLButtonElement> & {
    as?: "button" | "a" | Link;
    className?: string;
    fluid?: boolean;
    styleReset?: boolean;
    theme?: "default" | "info";
    type?: "button" | "submit";
  };

const Button: React.FunctionComponent<Props> = ({
  as: T = "button",
  className,
  fluid,
  styleReset,
  theme = "default",
  type = "button",
  ...props
}) => {
  return (
    // @ts-ignore
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
