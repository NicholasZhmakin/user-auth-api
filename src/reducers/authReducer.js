const initState = {
  authData: null,
  registered: false,
  loading: false,
  sendingError: null,
  syntaxError: null,
  inputsWithError: null
};

const authReducer = (state = initState, action) => {
  if (action.type === "LOGOUT") {
    return {
      ...state,
      authData: null,
      registered: false,
      loading: false,
      sendingError: null,
      syntaxError: null,
      inputsWithError: null
    };
  }
  if (action.type === "AUTH_START") {
    return {
      ...state,
      authData: null,
      registered: false,
      loading: true,
      sendingError: null,
      syntaxError: null,
      inputsWithError: null
    };
  }
  if (action.type === "AUTH_SUCCESS") {
    return {
      ...state,
      authData: action.payload,
      registered: true,
      loading: false,
      sendingError: null,
      syntaxError: null,
      inputsWithError: null
    };
  }
  if (action.type === "AUTH_SYNTAX_FAIL") {
    let alerts = [];
    let inputs = [];
    for (let key in action.payload) {
      alerts.push(...action.payload[key]);
      inputs.push(key);
    }

    return {
      ...state,
      authData: null,
      registered: false,
      loading: false,
      sendingError: null,
      syntaxError: alerts,
      inputsWithError: inputs
    };
  }
  if (action.type === "AUTH_SENDING_FAIL") {
    return {
      ...state,
      authData: null,
      registered: false,
      loading: false,
      sendingError: action.payload,
      syntaxError: null,
      inputsWithError: null
    };
  }

  if (action.type === "LOGIN_SUCCESS") {
    return {
      ...state,
      authData: action.payload.user,
      registered: true,
      loading: false,
      sendingError: null,
      syntaxError: null,
      inputsWithError: null
    };
  }
  if (action.type === "EDIT_SUCCESS") {
    return {
      ...state,
      authData: action.payload.user
    };
  }
  return state;
};

export default authReducer;
