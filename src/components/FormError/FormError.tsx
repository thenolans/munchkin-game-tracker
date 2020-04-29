import cx from "classnames";
import React from "react";

import "./formError.css";

const FormError: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cx("form-error", className)}
      data-testid="form-error"
      {...props}
    />
  );
};

export default FormError;
