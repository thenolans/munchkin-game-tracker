import React, { useState } from "react";
import { Link } from "react-router-dom";
import { parse } from "query-string";

import "./combat.css";
import CombatScoreInput from "../CombatScoreInput";
import Button from "../Button";
import Swords from "../../images/swords.svg";

const Combat = props => {
  const { score } = parse(props.location.search);

  const [munchkinScore, setMunchkinScore] = useState(Number(score || 0));
  const [monsterScore, setMonsterScore] = useState(0);

  return (
    <div className="combat">
      <div className="combat__heading">
        <h1>Combat</h1>
        <img className="combat__heading-icon" src={Swords} alt="swords" />
      </div>
      <div className="combat__section">
        <div className="combat__section-title">
          Munchkin(s): {munchkinScore}
        </div>
        <CombatScoreInput
          onAdjustmentClick={adjustment =>
            setMunchkinScore(munchkinScore + adjustment)
          }
        />
      </div>
      <div className="combat__section">
        <div className="combat__section-title">Monster(s): {monsterScore} </div>
        <CombatScoreInput
          onAdjustmentClick={adjustment =>
            setMonsterScore(monsterScore + adjustment)
          }
        />
      </div>
      <Button as={Link} fluid to="/game">
        End Combat
      </Button>
    </div>
  );
};

export default Combat;
