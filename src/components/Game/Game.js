import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";

const Game = () => {
  return (
    <div className="game">
      game score
      <Button as={Link} to="/results">
        End
      </Button>
    </div>
  );
};

export default Game;
