console.log('redux-expensify.js is running!');

import {combineReducers, createStore} from "redux";
import uuid from 'uuid';
import {
  ADD_EXPENSE, EDIT_EXPENSE,
  REMOVE_EXPENSE, SET_END_DATE,
  SET_SORT_MODE, SET_START_DATE,
  SET_TEXT_FILTER, SORT_BY_AMOUNT,
  SORT_BY_DATE
} from "./types";

let demoState = {
  expenses: [
    {
      id: 'fjalkjkoohwkc',
      desc: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
    },
    {
      id: 'jjeiigtoapjje',
      desc: 'Venti Carmel Frappuccino',
      note: 'Bought this at school before class',
      amount: 525,
      createdAt: 1
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    sortMode: 'hi2lo', // hi2lo or lo2hi
    startDate: undefined,
    endDate: undefined
  }
};

// Actions Generators

// ADD_EXPENSE
const addExpense = (
  {
    desc = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuid(),
    desc,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: REMOVE_EXPENSE,
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: SET_END_DATE,
  endDate
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: SET_START_DATE,
  startDate
});

// SET_SORT_MODE
const setSortMode = () => ({
  type: SET_SORT_MODE
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: SORT_BY_AMOUNT
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: SORT_BY_DATE
});



// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        action.expense
      ];
    case REMOVE_EXPENSE:
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense
        }
      });
    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  sortMode: 'hi2lo',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount'
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date'
      };
    case SET_SORT_MODE:
      return {
        ...state,
        sortMode: state.sortMode === 'hi2lo' ? 'lo2hi' : 'hi2lo'  // Toggles between
                                                                  // sort modes on action call
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      };
    case SET_END_DATE:
      return {
        ...state,
        startDate: action.startDate
      };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, {
  text, sortBy, sortMode, startDate, endDate
}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());
    
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortMode === 'hi2lo') {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else {
        return a.amount < b.amount ? 1 : -1;
      }
    } else {
      if (sortBy === 'date') {
        return a.createdAt > b.createdAt ? 1 : -1;
      } else {
        return a.amount > b.amount ? 1 : -1;
      }
    }
  });
};


const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


//
// const expenseToRemove = (text) => {
//   const expensesArr = store.getState().expenses;
//   return expensesArr.filter((item) => {
//     return text === item.expense.desc;
//   });
// };
//
store.dispatch(addExpense({
  desc: 'January Rent',
  note: 'This was the final payment for that address',
  amount: 54500,
  createdAt: 1850
}));

store.dispatch(addExpense({
  desc: 'Venti Carmel Frappuccino',
  note: 'Bought this at school before class',
  amount: 525,
  createdAt: 600
}));

store.dispatch(addExpense({
  desc: 'Venti Green Tea Creme Frappuccino',
  note: 'Bought this at school before class',
  amount: 525,
  createdAt: 2000
}));

store.dispatch(addExpense({
  desc: 'New Elecom trackball gaming mouse',
  note: 'Bought this for my programming work and for PC Gaming',
  amount: 7699,
  createdAt: 725
}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//
// store.dispatch(editExpense(expenseTwo.expense.id, {
//   desc: 'Venti Green Tea Creme Frappuccino',
//   note: 'Bought this during the 1st break during my Friday class'
// }));
//
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('FrAp'));
// store.dispatch(setTextFilter('e'));

store.dispatch(sortByDate());
store.dispatch(setSortMode());
store.dispatch(setSortMode());

store.dispatch(sortByAmount());
store.dispatch(setSortMode());
store.dispatch(setSortMode());

// store.dispatch(setStartDate(100));
// store.dispatch(setEndDate(1250));

// const testState = store.getState();
// console.log(testState.expenses[0].desc);
//
// console.log(`days between start: [ ${startsAt.startDate} ] and end: [ ${endsAt.endDate} ] dates is: \n\n\t > ${endsAt.endDate - startsAt.startDate}`);


// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

// const user = {
//   username: 'Kurochan',
//   age: 24
// };
//
// console.log({
//   ...user,
//   location: 'Tokyo',
//   age: 27
// });