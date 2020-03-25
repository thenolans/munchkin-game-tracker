import React from "react";

import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

const CombatScoreKeeper = ({ onAdjustmentClick }) => {
  const handleAdjustmentClick = adjustment => {
    onAdjustmentClick(adjustment);
  };

  return (
    <div className="combat-score-input">
      <ButtonGroup>
        <Button fluid onClick={() => handleAdjustmentClick(-5)}>
          -5
        </Button>
        <Button fluid onClick={() => handleAdjustmentClick(-3)}>
          -3
        </Button>
        <Button fluid onClick={() => handleAdjustmentClick(-1)}>
          -1
        </Button>
        <Button fluid onClick={() => handleAdjustmentClick(1)}>
          +1
        </Button>
        <Button fluid onClick={() => handleAdjustmentClick(3)}>
          +3
        </Button>
        <Button fluid onClick={() => handleAdjustmentClick(5)}>
          +5
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CombatScoreKeeper;
