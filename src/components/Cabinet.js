import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as editAction from "../actions/edit";
import MessageBox from "./MessageBox";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Cabinet = ({
  token,
  loginData,
  editedIsSuccess,
  onEdit,
  loading,
  sendingError,
  syntaxError,
  inputsWithError
}) => {
  const [userData, setUserData] = useState({
    name: loginData.name,
    surname: loginData.surname,
    name_customer: loginData.name_customer,
    role: loginData.role
  });
  const { name, surname, name_customer, role } = userData;

  useEffect(() => {
    const formElements = [...document.querySelectorAll(".edit input")];
    showInputsWithError(formElements, inputsWithError);
  }, [inputsWithError]);

  useEffect(() => {
    if (loginData.role === "customer") {
      setUserData({
        ...useState,
        role: 2,
        name_customer: loginData.name_customer
      });
    }
    if (loginData.role === "provider") {
      setUserData({
        ...useState,
        role: 1,
        name_customer: ""
      });
    }
  }, [loginData]);

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
    setUserData({
      ...userData,
      [e.target.id]: e.target.value
    });
  };

  const handelEdit = e => {
    e.preventDefault();
    if (role < 1 || role > 2) {
      alert("Роль пользователя должна быть 1 - Поставщик или 2 - Заказчик");
      return false;
    } else {
      onEdit(userData, token);
    }
  };

  return (
    <div className="mt-3">
      {editedIsSuccess === true ? (
        <Modal title="Your data have been successfully changed!" path="main" />
      ) : null}
      <MessageBox
        loading={loading}
        sendingError={sendingError}
        syntaxError={syntaxError}
      />
      <form
        onSubmit={handelEdit}
        className="edit container col-lg-4 col-10 bg-dark p-3 rounded"
      >
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
            value={role || ""}
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

        <button
          onClick={handelEdit}
          className="btn btn-warning border border-light mt-4 mx-auto p-2 font-weight-bold d-block"
        >
          Save
        </button>
      </form>
      <div className="container mt-3 text-center">
        <Link to="/main">Back to main page</Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.loginR.token,
    loginData: state.loginR.loginData,
    editedIsSuccess: state.editR.editedIsSuccess,
    loading: state.editR.loading,
    sendingError: state.editR.sendingError,
    syntaxError: state.editR.syntaxError,
    inputsWithError: state.editR.inputsWithError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEdit: (userNewData, token) =>
      dispatch(editAction.edit(userNewData, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cabinet);
