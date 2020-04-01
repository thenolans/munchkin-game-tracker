import React from "react";
import cx from "classnames";

import "./status.css";

const Status = ({ className, theme, ...props }) => {
  return (
    <div
      className={cx("status", className, {
        "status--warning": theme === "warning",
        "status--success": theme === "success"
      })}
      {...props}
    />
  );
};

export default Status;
