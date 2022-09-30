import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import dataReducer from "./reducers/dataReducer";
// import courseReducer from './reducers/courseReducer'


const reducers = combineReducers({
  dataContainer: dataReducer,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

