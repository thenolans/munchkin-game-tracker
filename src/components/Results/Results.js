import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import "./Results.css";

const Results = () => {
  return (
    <div className="results">
      <div className="result__winner">Congratulations, Player</div>
      <div className="results__button-wrapper">
        <Button as={Link} to="/configure">
          Play Again
        </Button>
      </div>
    </div>
  );
};

export default Results;
