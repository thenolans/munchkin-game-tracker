import React from "react";

import "./modal.css";

const Modal = ({ ...props }) => {
  return (
    <div className="modal">
      <div className="modal__card" {...props} />
    </div>
  );
};

export default Modal;
