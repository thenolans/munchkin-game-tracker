import cx from "classnames";
import React from "react";

import "./label.css";

const Label: React.FunctionComponent<React.HTMLProps<HTMLLabelElement>> = ({
  className,
  ...props
}) => {
  return (
    <label className={cx("label", className)} {...props} data-testid="label" />
  );
};

export default Label;
