import loginReducer from "./Login/loginReducer";
import todoReducer from "./Todo/todoReducer";

import { combineReducers, legacy_createStore as createstore } from "redux";
const cbReducer = combineReducers({
  login: loginReducer,
  todo: todoReducer,
});
const store = createstore(cbReducer);

export default store;
