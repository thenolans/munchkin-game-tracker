import React from "react";

import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

const CombatScoreInput = ({ onAdjustmentClick }) => {
  const handleAdjustmentClick = adjustment => {
    onAdjustmentClick(adjustment);
  };

  return (
    <ButtonGroup>
      <Button border fluid onClick={() => handleAdjustmentClick(-5)}>
        -5
      </Button>
      <Button border fluid onClick={() => handleAdjustmentClick(-3)}>
        -3
      </Button>
      <Button border fluid onClick={() => handleAdjustmentClick(-1)}>
        -1
      </Button>
      <Button border fluid onClick={() => handleAdjustmentClick(1)}>
        +1
      </Button>
      <Button border fluid onClick={() => handleAdjustmentClick(3)}>
        +3
      </Button>
      <Button border fluid onClick={() => handleAdjustmentClick(5)}>
        +5
      </Button>
    </ButtonGroup>
  );
};

export default CombatScoreInput;
