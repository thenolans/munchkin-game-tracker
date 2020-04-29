import React from "react";

import "./sexSelect.css";
import { Sex } from "types/types";

type Props = {
  value?: Sex;
  onChange: (sex: Sex) => void;
};

const SexSelect: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="sex-select">
      <input
        checked={props.value === "M"}
        type="radio"
        value="M"
        name="sex"
        onChange={() => props.onChange("M")}
        data-testid="select-male"
        id="select-male"
      />
      <label htmlFor="select-male">Male</label>
      <input
        checked={props.value === "F"}
        type="radio"
        value="F"
        name="sex"
        onChange={() => props.onChange("F")}
        data-testid="select-female"
        id="select-female"
      />
      <label htmlFor="select-female">Female</label>
    </div>
  );
};

export default SexSelect;
