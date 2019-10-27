import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import editReducer from "./editReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authR: authReducer,
  loginR: loginReducer,
  editR: editReducer
});

export default rootReducer;
