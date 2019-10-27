import axios from "axios";

export const authStart = () => {
  return {
    type: "AUTH_START"
  };
};

export const authSuccess = authData => {
  return {
    type: "AUTH_SUCCESS",
    payload: authData
  };
};

export const authSyntaxFail = error => {
  return {
    type: "AUTH_SYNTAX_FAIL",
    payload: error
  };
};

export const authSendingFail = error => {
  return {
    type: "AUTH_SENDING_FAIL",
    payload: error
  };
};

export const auth = token => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post("http://68.183.119.148/api/test/register", token)
      .then(response => {
        if (response.data.status === true) {
          dispatch(authSuccess(response.data.user));
        } else {
          dispatch(authSyntaxFail(response.data.message));
        }
      })
      .catch(error => {
        dispatch(authSendingFail(error.message));
      });
  };
};
