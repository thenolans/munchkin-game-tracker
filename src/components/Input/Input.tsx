import React from "react";
import cx from "classnames";

import "./input.css";

type Props = React.HTMLAttributes<HTMLInputElement> & {
  className?: string;
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
