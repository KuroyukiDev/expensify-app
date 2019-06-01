import {
  SET_EXPENSE_COUNT,
  SET_EXPENSE_TOTAL_VALUE
} from "../shared/types";

// ExpensesData Reducer

const expensesDataReducerDefaultState = {
  expenseCount: 0,
  expensesTotalValue: 0
};

export default (state = expensesDataReducerDefaultState, action) => {
  switch (action.type) {
    case SET_EXPENSE_COUNT:
      return {
        ...state,
        expenseCount: action.expenseCount
      };
    case SET_EXPENSE_TOTAL_VALUE:
      return {
        ...state,
        expensesTotalValue: action.expensesTotalValue
      };
    default:
      return state;
  }
};
