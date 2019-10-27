const initState = {
  editedIsSuccess: false,
  loading: false,
  sendingError: null,
  syntaxError: null,
  inputsWithError: null
};

const editReducer = (state = initState, action) => {
  if (action.type === "LOGOUT") {
    return {
      ...state,
      editedIsSuccess: false,
      loading: false,
      sendingError: null,
      syntaxError: null,
      inputsWithError: null
    };
  }
  if (action.type === "EDIT_START") {
    return {
      ...state,
      editedIsSuccess: false,
      loading: true,
      sendingError: null,
      syntaxError: null,
      inputsWithError: null
    };
  }
  if (action.type === "EDIT_AGAIN") {
    return {
      ...state,
      editedIsSuccess: false,
      loading: false,
      sendingError: null,
      syntaxError: null,
      inputsWithError: null
    };
  }
  if (action.type === "EDIT_SUCCESS") {
    return {
      ...state,
      editedIsSuccess: true,
      loading: false,
      sendingError: null,
      syntaxError: null,
      inputsWithError: null
    };
  }
  if (action.type === "EDIT_SYNTAX_FAIL") {
    let alerts = [];
    let inputs = [];
    for (let key in action.payload) {
      alerts.push(...action.payload[key]);
      inputs.push(key);
    }

    return {
      ...state,
      editedIsSuccess: false,
      loading: false,
      sendingError: null,
      syntaxError: alerts,
      inputsWithError: inputs
    };
  }
  if (action.type === "EDIT_SENDING_FAIL") {
    return {
      ...state,
      editedIsSuccess: false,
      loading: false,
      sendingError: action.payload,
      syntaxError: null,
      inputsWithError: null
    };
  }
  return state;
};

export default editReducer;
