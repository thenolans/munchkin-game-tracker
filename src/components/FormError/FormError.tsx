import cx from "classnames";
import React from "react";

import "./formError.css";

type Props = {
  className?: string;
};

const FormError: React.FunctionComponent<Props> = ({ className, ...props }) => {
  return (
    <div
      className={cx("form-error", className)}
      data-testid="form-error"
      {...props}
    />
  );
};

export default FormError;
