import React from "react";
import { Link } from "react-router-dom";

const Default = props => {
  return (
    <div className="container mt-3 p-4 bg-danger text-light text-uppercase text-center">
      <div className="row">
        <div className="col-10 mx-auto pt-5">
          <h1>404</h1>
          <h2>error</h2>
          <h3>page not found</h3>
          <h4>
            the requester URL
            <span className="text-dark">{props.location.pathname} </span>
            was not found
          </h4>
          <button className="btn btn-success border border-light mt-4 mx-auto p-2 font-weight-bold d-block">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              Back to Login
            </Link>
          </button>

          <button className="btn btn-info border border-light mt-4 mx-auto p-2 font-weight-bold d-block">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Back to Registration
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Default;
