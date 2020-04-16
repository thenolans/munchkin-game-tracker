import React from "react";

import logo from "../../images/logo-transparent.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Munchkin game logo" />
    </div>
  );
};

export default Header;
