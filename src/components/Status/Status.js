import React from "react";
import cx from "classnames";

import "./status.css";

const Status = ({ className, theme = "default", ...props }) => {
  return (
    <div
      className={cx("status", `status--${theme}`, className)}
      data-testid="status"
      {...props}
    />
  );
};

export default Status;
