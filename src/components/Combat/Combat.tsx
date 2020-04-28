import React, { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { parse } from "query-string";

import "./combat.css";
import CombatScoreInput from "../CombatScoreInput";
import Button from "../Button";
import Swords from "../../images/swords.svg";

const Combat: React.FunctionComponent<RouteComponentProps> = (props) => {
  const { score } = parse(props.location.search);

  const [munchkinScore, setMunchkinScore] = useState(Number(score || 0));
  const [monsterScore, setMonsterScore] = useState(0);

  return (
    <div className="combat">
      <div className="combat__header">
        <h1 className="combat__title">Combat</h1>
        <img className="combat__icon" src={Swords} alt="swords" />
      </div>
      <div className="combat__section" data-testid="munchkin-combat">
        <div className="combat__combatant">
          Munchkin(s): <span data-testid="munchkin-score">{munchkinScore}</span>
        </div>
        <CombatScoreInput
          combatant="munchkin"
          onAdjustmentClick={(adjustment) =>
            setMunchkinScore(munchkinScore + adjustment)
          }
        />
      </div>
      <div className="combat__section" data-testid="monster-combat">
        <div className="combat__combatant">
          Monster(s): <span data-testid="monster-score">{monsterScore}</span>
        </div>
        <CombatScoreInput
          combatant="monster"
          onAdjustmentClick={(adjustment) =>
            setMonsterScore(monsterScore + adjustment)
          }
        />
      </div>
      {/* 
// @ts-ignore */}
      <Button as={Link} fluid to="/game">
        End Combat
      </Button>
    </div>
  );
};

export default Combat;
