import React from "react";

import "./genderSelect.css";

const GenderSelect = props => {
  return (
    <div className="gender-select">
      <input
        type="radio"
        value="M"
        name="gender"
        onClick={event => props.onChange(event.target.value)}
      />
      Male
      <input
        type="radio"
        value="F"
        name="gender"
        onClick={event => props.onChange(event.target.value)}
      />
      Female
    </div>
  );
};

export default GenderSelect;
