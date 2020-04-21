import React from "react";
import cx from "classnames";

import "./status.css";

type Props = {
  className?: string;
  theme?: "default" | "warning" | "success";
};

const Status: React.FunctionComponent<Props> = ({
  className,
  theme = "default",
  ...props
}) => {
  return (
    <div
      className={cx("status", `status--${theme}`, className)}
      data-testid="status"
      {...props}
    />
  );
};

export default Status;
