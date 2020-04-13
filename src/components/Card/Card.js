import React from "react";

import "./card.css";

const Card = props => {
  return (
    <div className="card">
      <div className="card__inner" data-testid="card-inner">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
