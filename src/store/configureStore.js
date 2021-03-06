import {combineReducers, createStore} from "redux";
import expensesReducer from "../reducers/expenses";
import expensesDataReducer from "../reducers/expensesData";
import filtersReducer from "../reducers/filters";

export default () => {
  // Returns store const
  return createStore(
    combineReducers({
      expenses: expensesReducer,
      expensesData: expensesDataReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
