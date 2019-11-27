import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import "./Results.css";

const Results = () => {
  return (
    <div className="results">
      Congrats Player
      <Button as={Link} to="/configure">
        Play Again
      </Button>
    </div>
  );
};

export default Results;
