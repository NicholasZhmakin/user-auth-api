import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MessageBox from "./MessageBox";
import Modal from "./Modal";
import * as authAction from "../actions/auth";

const Registration = ({
  registered,
  onAuth,
  loading,
  sendingError,
  syntaxError,
  inputsWithError
}) => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    name_customer: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    password_confirmation: ""
  });

  const {
    name,
    surname,
    name_customer,
    email,
    phone,
    role,
    password,
    password_confirmation
  } = userData;

  useEffect(() => {
    const formElements = [...document.querySelectorAll(".registration input")];
    showInputsWithError(formElements, inputsWithError);
  }, [inputsWithError]);

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
          if (errors[i] === "password") {
            neededInputs.push(
              inputs.find(field => field.id === "password_confirmation")
            );
          }
        }
      });
    }
    neededInputs.forEach(input => {
      input.classList.add("bg-warning");
    });
  };

  const handelChange = e => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value
    });
  };

  const handleSignUp = e => {
    e.preventDefault();
    const phonePattern = /^\d+$/;
    const phoneRegex = new RegExp(phonePattern, "g");
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailRegex = new RegExp(emailPattern, "g");
    if (role < 1 || role > 2) {
      alert("Роль пользователя должна быть 1 - Поставщик или 2 - Заказчик");
      return false;
    }
    if (role === "2" && name_customer === "") {
      alert("Укажите название заказчика");
      return false;
    }
    if (!email.match(emailRegex)) {
      alert("Введите реальный email");
      return false;
    }
    if (!phone.match(phoneRegex)) {
      alert(
        "Телефон должен состоять только из цифр и не иметь пробелов. Например: 380991234567"
      );
      return false;
    } else {
      onAuth(userData);
    }
  };

  return (
    <div className="mt-3">
      {registered === true ? (
        <Modal title="You have been successfully registered!" path="login" />
      ) : null}
      <MessageBox
        registered={registered}
        loading={loading}
        sendingError={sendingError}
        syntaxError={syntaxError}
      />

      <form
        onSubmit={handleSignUp}
        className="registration container col-lg-6 col-10 bg-info p-3 rounded"
      >
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="form-group">
              <label className="col-form-label text-light font-weight-bold">
                Имя:
              </label>
              <input
                onChange={handelChange}
                id="name"
                className="form-control"
                value={name}
                type="text"
                required
              />
            </div>
            <div className="form-group">
              <label className="col-form-label text-light font-weight-bold">
                Фамилия:
              </label>
              <input
                onChange={handelChange}
                id="surname"
                className="form-control"
                value={surname}
                type="text"
                required
              />
            </div>
            <div className="form-group">
              <label className="col-form-label text-light font-weight-bold">
                Роль пользователя <small>(1-поставщик, 2-заказчик)</small>:
              </label>
              <input
                onChange={handelChange}
                id="role"
                className="form-control"
                value={role}
                type="number"
                min="1"
                max="2"
                required
              />
            </div>
            <div className="form-group">
              <label className="col-form-label text-light font-weight-bold">
                Название заказчика:
              </label>
              <input
                onChange={handelChange}
                id="name_customer"
                className="form-control"
                value={role === "1" ? "" : name_customer}
                type="text"
                disabled={role === "1" ? true : false}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-12">
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
                Телефон:
              </label>
              <input
                onChange={handelChange}
                id="phone"
                className="form-control"
                value={phone}
                type="tel"
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
            <div className="form-group">
              <label className="col-form-label text-light font-weight-bold">
                Подтверждение пароля:
              </label>
              <input
                onChange={handelChange}
                id="password_confirmation"
                className="form-control"
                value={password_confirmation}
                type="password"
                required
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleSignUp}
          className="btn btn-success border border-light mt-4 mx-auto p-2 font-weight-bold d-block"
        >
          Sign up
        </button>
      </form>
      <div className="container mt-3 text-center">
        Already have an account?<Link to="/login"> Sign in</Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    registered: state.authR.registered,
    loading: state.authR.loading,
    sendingError: state.authR.sendingError,
    syntaxError: state.authR.syntaxError,
    inputsWithError: state.authR.inputsWithError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: userData => dispatch(authAction.auth(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
