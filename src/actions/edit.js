import axios from "axios";

export const editStart = () => {
  return {
    type: "EDIT_START"
  };
};

export const editAgain = () => {
  return {
    type: "EDIT_AGAIN"
  };
};

export const editSuccess = loginData => {
  return {
    type: "EDIT_SUCCESS",
    payload: loginData
  };
};

export const editSyntaxFail = error => {
  return {
    type: "EDIT_SYNTAX_FAIL",
    payload: error
  };
};

export const editSendingFail = error => {
  return {
    type: "EDIT_SENDING_FAIL",
    payload: error
  };
};

export const edit = (newUserData, token) => {
  return dispatch => {
    dispatch(editStart());
    axios
      .post("http://68.183.119.148/api/test/edit-user", newUserData, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (response.data.status === true) {
          dispatch(editSuccess(response.data));
        } else {
          dispatch(editSyntaxFail(response.data.message));
        }
      })
      .catch(error => {
        dispatch(editSendingFail(error.message));
      });
  };
};
