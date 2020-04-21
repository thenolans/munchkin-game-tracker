import React from "react";

import "./buttonGroup.css";

type Props = {
  className?: string;
};

const ButtonGroup: React.FunctionComponent<Props> = (props) => {
  return <div className="button-group" data-testid="button-group" {...props} />;
};

export default ButtonGroup;
