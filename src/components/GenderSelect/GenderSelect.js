import React from "react";

import "./genderSelect.css";

const GenderSelect = (props) => {
  return (
    <div className="gender-select">
      <input
        checked={props.value === "M"}
        type="radio"
        value="M"
        name="gender"
        onChange={() => props.onChange("M")}
        data-testid="select-male"
        id="select-male"
      />
      <label htmlFor="select-male">Male</label>
      <input
        checked={props.value === "F"}
        type="radio"
        value="F"
        name="gender"
        onChange={() => props.onChange("F")}
        data-testid="select-female"
        id="select-female"
      />
      <label htmlFor="select-female">Female</label>
    </div>
  );
};

export default GenderSelect;
