import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { i18nState } from "redux-i18n"
import reducers from "../reducers";

const initialState = {};
const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    combineReducers({
      i18nState,
      ...reducers
    }),
    initialState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}