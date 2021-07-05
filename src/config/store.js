import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { i18nState } from "redux-i18n"
import {carts} from "../reducers/carts";

const initialState = {};
const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    combineReducers({
      i18nState,
      carts
    }),
    initialState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}