import cx from "classnames";
import React from "react";

import "./formError.css";

const FormError = ({ className, ...props }) => {
  return (
    <div
      className={cx("form-error", className)}
      data-testid="error"
      {...props}
    />
  );
};

export default FormError;
