import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as loginAction from "../actions/login";
import MessageBox from "./MessageBox";

const Login = ({
  ownProps,
  token,
  onLogin,
  loading,
  sendingError,
  syntaxError,
  inputsWithError
}) => {
  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    const formElements = [...document.querySelectorAll(".login input")];
    showInputsWithError(formElements, inputsWithError);
  }, [inputsWithError]);

  useEffect(() => {
    if (token !== null) {
      ownProps.history.push("/main");
    }
  }, [token]);

  const showInputsWithError = (inputs, errors) => {
    let neededInputs = [];
    if (errors === null) {
      inputs.forEach(el => {
        el.classList.remove("bg-warning");
      });
    } else {
      inputs.forEach(el => {
        el.classList.remove("bg-warning");
        for (let i = 0; i < errors.length; i++) {
          if (el.id === errors[i]) {
            neededInputs.push(el);
          }
        }
      });
    }
    neededInputs.forEach(input => {
      input.classList.add("bg-warning");
    });
  };

  const handelChange = e => {
    setloginData({
      ...loginData,
      [e.target.id]: e.target.value
    });
  };

  const handleSignIn = e => {
    e.preventDefault();
    onLogin(loginData);
  };

  const { email, password } = loginData;
  return (
    <div className="mt-3">
      <MessageBox
        loading={loading}
        sendingError={sendingError}
        syntaxError={syntaxError}
      />
      <form
        onSubmit={handleSignIn}
        className="login container col-lg-4 col-10 bg-dark p-3 rounded"
      >
        <div className="form-group">
          <label className="col-form-label text-light font-weight-bold">
            Email:
          </label>
          <input
            onChange={handelChange}
            id="email"
            className="form-control"
            value={email}
            type="email"
            required
          />
        </div>

        <div className="form-group">
          <label className="col-form-label text-light font-weight-bold">
            Пароль:
          </label>
          <input
            onChange={handelChange}
            id="password"
            className="form-control"
            value={password}
            type="password"
            required
          />
        </div>

        <button
          onClick={handleSignIn}
          className="btn btn-success border border-light mt-4 mx-auto p-2 font-weight-bold d-block"
        >
          Log in
        </button>
      </form>
      <div className="container mt-3 text-center">
        Don't have an account?<Link to="/"> Sign up</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps,
    token: state.loginR.token,
    loading: state.loginR.loading,
    sendingError: state.loginR.sendingError,
    syntaxError: state.loginR.syntaxError,
    inputsWithError: state.loginR.inputsWithError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: loginData => dispatch(loginAction.login(loginData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
