const initState = {
  token: null,
  loginData: null,
  loading: false,
  sendingError: null,
  syntaxError: null,
  inputsWithError: null
};

const loginReducer = (state = initState, action) => {
  if (action.type === "LOGOUT") {
    return {
      ...state,
      token: null,
      loginData: null,
      loading: false,
      sendingError: null,
      syntaxError: null,
      inputsWithError: null
    };
  }
  if (action.type === "LOGIN_START") {
    return {
      ...state,
      loginData: null,
      loading: true,
      sendingError: null,
      syntaxError: null,
      inputsWithError: null
    };
  }
  if (action.type === "LOGIN_SUCCESS") {
    return {
      ...state,
      token: action.payload.token,
      loginData: action.payload.user,
      loading: false,
      sendingError: null,
      syntaxError: null,
      inputsWithError: null
    };
  }
  if (action.type === "LOGIN_SYNTAX_FAIL") {
    let alerts = [];
    let inputs = [];
    for (let key in action.payload) {
      alerts.push(...action.payload[key]);
      inputs.push(key);
    }

    return {
      ...state,
      loginData: null,
      loading: false,
      sendingError: null,
      syntaxError: alerts,
      inputsWithError: inputs
    };
  }
  if (action.type === "LOGIN_SENDING_FAIL") {
    let explainError;
    if (action.payload.includes("401")) {
      explainError = "Не верный email или пароль";
    } else {
      explainError = action.payload;
    }
    return {
      ...state,
      loginData: null,
      loading: false,
      sendingError: explainError,
      syntaxError: null,
      inputsWithError: null
    };
  }
  if (action.type === "EDIT_SUCCESS") {
    return {
      ...state,
      loginData: action.payload.user
    };
  }
  return state;
};

export default loginReducer;
