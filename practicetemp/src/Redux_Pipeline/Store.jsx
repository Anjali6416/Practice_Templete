import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import todoReducer from "./Todo/todoReducer";
import loginReducer from "./Login/loginReducer";
import { logger } from "redux-logger";


const combReducer = combineReducers({
  loginInfo: loginReducer,
  todos: todoReducer,
});

const reduxStore = createStore(combReducer, applyMiddleware(logger));

export default reduxStore;

