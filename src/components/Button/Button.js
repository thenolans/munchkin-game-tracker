import React from "react";

import "./Button.css";

const Button = ({ as: T, ...props }) => {
  return <T className="button" {...props} />;
};

Button.defaultProps = { as: "button" };

export default Button;
