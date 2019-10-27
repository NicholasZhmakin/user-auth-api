import axios from "axios";

export const loginStart = () => {
  return {
    type: "LOGIN_START"
  };
};

export const loginSuccess = loginData => {
  return {
    type: "LOGIN_SUCCESS",
    payload: loginData
  };
};

export const loginSyntaxFail = error => {
  return {
    type: "LOGIN_SYNTAX_FAIL",
    payload: error
  };
};

export const loginSendingFail = error => {
  return {
    type: "LOGIN_SENDING_FAIL",
    payload: error
  };
};

export const login = loginData => {
  return dispatch => {
    dispatch(loginStart());
    axios
      .post("http://68.183.119.148/api/test/login", loginData)
      .then(response => {
        if (response.data.status === true) {
          dispatch(loginSuccess(response.data));
        } else {
          dispatch(loginSyntaxFail(response.data.message));
        }
      })
      .catch(error => {
        dispatch(loginSendingFail(error.message));
      });
  };
};
