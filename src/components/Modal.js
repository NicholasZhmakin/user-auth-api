import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ title, path }) => {
  return (
    <div className="modal">
      <div className="modal__content bg-success border border-light">
        <h5 className="text-light">{title}</h5>
        <Link to={"/" + path}>
          <button className="btn btn-primary mt-4 mx-auto  font-weight-bold d-block">
            OK
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
