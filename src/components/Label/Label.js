import cx from "classnames";
import React from "react";

import "./label.css";

const Label = ({ className, ...props }) => {
  return <label className={cx("label", className)} {...props} />;
};

export default Label;
