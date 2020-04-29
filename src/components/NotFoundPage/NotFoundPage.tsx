import React from "react";
import { Link } from "react-router-dom";

import "./notFoundPage.css";
import Button from "components/Button";
import Monster from "images/monster-404.png";

const NotFoundPage = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found__section">
        <h3 className="page-not-found__heading">Level 404</h3>
        <div className="page-not-found__title">Monster That Eats Your Page</div>
        <div className="page-not-found__error">
          He has the munchies and eats the page you are looking for. You must
          runaway and let him keep his treasure.
        </div>
      </div>
      <img className="page-not-found__img" src={Monster} alt="door"></img>
      <div className="page-not-found__content">
        <span className="page-not-found--bold">Bad Stuff: </span> You don't know
        where you are and you suffer from confusion. You are sent back home.
      </div>
      <Button as={Link} to="/">
        Run Away
      </Button>
      <div className="page-not-found__footer">10 Treasures</div>
    </div>
  );
};

export default NotFoundPage;
