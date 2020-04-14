import React from "react";

import "./playerCard.css";

const PlayerCard = props => {
  return (
    <div className="player-card" data-testid="player-card">
      {props.children}
    </div>
  );
};

export default PlayerCard;
