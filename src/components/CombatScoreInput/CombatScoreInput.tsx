import React from "react";

import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

type Props = {
  combatant: string;
  onAdjustmentClick: (adjustment: number) => void;
};

const CombatScoreInput: React.FunctionComponent<Props> = ({
  onAdjustmentClick,
  combatant,
}) => {
  const handleAdjustmentClick = (adjustment: number) => {
    onAdjustmentClick(adjustment);
  };

  return (
    <ButtonGroup>
      <Button
        data-testid="decrement-5"
        aria-label={`decrement ${combatant}'s total by 5`}
        fluid
        onClick={() => handleAdjustmentClick(-5)}
      >
        -5
      </Button>
      <Button
        data-testid="decrement-3"
        aria-label={`decrement ${combatant}'s total by 3`}
        fluid
        onClick={() => handleAdjustmentClick(-3)}
      >
        -3
      </Button>
      <Button
        data-testid="decrement-1"
        aria-label={`decrement ${combatant}'s total by 1`}
        fluid
        onClick={() => handleAdjustmentClick(-1)}
      >
        -1
      </Button>
      <Button
        data-testid="increment-1"
        aria-label={`increment ${combatant}'s total by 1`}
        fluid
        onClick={() => handleAdjustmentClick(1)}
      >
        +1
      </Button>
      <Button
        data-testid="increment-3"
        aria-label={`increment ${combatant}'s total by 3`}
        fluid
        onClick={() => handleAdjustmentClick(3)}
      >
        +3
      </Button>
      <Button
        data-testid="increment-5"
        aria-label={`increment ${combatant}'s total by 5`}
        fluid
        onClick={() => handleAdjustmentClick(5)}
      >
        +5
      </Button>
    </ButtonGroup>
  );
};

export default CombatScoreInput;
