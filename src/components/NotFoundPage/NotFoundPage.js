import React from "react";
import { Link } from "react-router-dom";

import "./notFoundPage.css";
import Button from "../Button";
import Monster from "../../images/monster-404.png";

const NotFoundPage = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found__section">
        <h1 className="page-not-found__heading">Level 404</h1>
        <div className="page-not-found__title">Error Monster</div>
        <div className="page-not-found__error">
          When the error monster appears, it eats the page you are looking for.
        </div>
      </div>
      <img className="page-not-found__img" src={Monster} alt="door"></img>
      <div className="page-not-found__content">
        Bad Stuff: You must run away.
      </div>
      <Button as={Link} to="/">
        Run Away
      </Button>
    </div>
  );
};

export default NotFoundPage;
