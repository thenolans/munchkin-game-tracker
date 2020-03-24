import React from "react";

import Button from "../Button";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";

const CombatScoreKeeper = ({ onAdjustmentClick }) => {
  const handleAdjustmentClick = adjustment => {
    onAdjustmentClick(adjustment);
  };

  return (
    <div className="combat-score-input">
      <ButtonGroup>
        <Button onClick={() => handleAdjustmentClick(-5)}>-5</Button>
        <Button onClick={() => handleAdjustmentClick(-3)}>-3</Button>
        <Button onClick={() => handleAdjustmentClick(-1)}>-1</Button>
        <Button onClick={() => handleAdjustmentClick(1)}>+1</Button>
        <Button onClick={() => handleAdjustmentClick(3)}>+3</Button>
        <Button onClick={() => handleAdjustmentClick(5)}>+5</Button>
      </ButtonGroup>
    </div>
  );
};

export default CombatScoreKeeper;
