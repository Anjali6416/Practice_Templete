import {createStore,applyMiddleware} from "redux"
import myReducer from "../Reducers/myReducers";
import logger from "redux-logger";

const myStore=createStore(myReducer,applyMiddleware(logger))

export default myStore;