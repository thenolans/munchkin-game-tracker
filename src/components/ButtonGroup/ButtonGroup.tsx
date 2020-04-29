import React from "react";

import "./buttonGroup.css";

const ButtonGroup: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = (
  props
) => {
  return <div className="button-group" data-testid="button-group" {...props} />;
};

export default ButtonGroup;
