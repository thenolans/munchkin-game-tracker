import React from "react";
import cx from "classnames";

import "./Input.css";

type Props = React.HTMLAttributes<HTMLInputElement> &
  React.HTMLProps<HTMLInputElement> & {
    fluid?: boolean;
  };

const Input: React.FunctionComponent<Props> = ({
  className,
  fluid,
  ...props
}) => {
  return (
    <input
      className={cx("input", { "input--fluid": fluid }, className)}
      data-testid="input"
      {...props}
    />
  );
};

export default Input;
