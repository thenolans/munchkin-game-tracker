import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./combat.css";
import CombatScoreInput from "../CombatScoreInput";
import Button from "../Button";
import Swords from "../../images/swords.svg";

//need to pass in players current score with props or useContext
//need to pass in players name

const Combat = ({ score }) => {
  const [munchkinScore, setMunchkinScore] = useState(0);
  const [monsterScore, setMonsterScore] = useState(0);

  return (
    <div className="combat">
      <div className="combat__heading">
        <h1 className="combat__heading-content">Combat</h1>
        <img className="combat__heading-icon" src={Swords} alt="swords" />
      </div>
      <div className="combat__player-monster">Munchkin(s): {munchkinScore}</div>
      <CombatScoreInput
        onAdjustmentClick={adjustment =>
          setMunchkinScore(munchkinScore + adjustment)
        }
      />
      <div className="combat__player-monster">Monster(s): {monsterScore} </div>
      <CombatScoreInput
        onAdjustmentClick={adjustment =>
          setMonsterScore(monsterScore + adjustment)
        }
      />
      <div className="combat__button">
        <Button fluid as={Link} to="/game">
          End Combat
        </Button>
      </div>
    </div>
  );
};

export default Combat;
