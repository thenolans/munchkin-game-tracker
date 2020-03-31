import React from "react";

import "./modal.css";
import Card from "../Card";

const Modal = ({ ...props }) => {
  return (
    <div className="modal">
      <Card>{props.children}</Card>
    </div>
  );
};

export default Modal;
