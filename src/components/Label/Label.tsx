import cx from "classnames";
import React from "react";

import "./label.css";

type Props = React.HTMLAttributes<HTMLLabelElement> & {
  className?: string;
};

const Label: React.FunctionComponent<Props> = ({ className, ...props }) => {
  return (
    <label className={cx("label", className)} {...props} data-testid="label" />
  );
};

export default Label;
