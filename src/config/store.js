import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
// import reducers from "../reducers";

const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    combineReducers({
      // ...reducers
    }),
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}
