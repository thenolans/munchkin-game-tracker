import React from "react";

import "./buttonGroup.css";

const ButtonGroup = props => {
  return <div className="button-group" data-testid="button-group" {...props} />;
};

export default ButtonGroup;
