import expensesReducer from '../../reducers/expenses';
import expenses from '../../shared/testExpensesArr';
import { 
  ADD_EXPENSE, 
  EDIT_EXPENSE, 
  REMOVE_EXPENSE 
} from "../../shared/types";
import moment from "moment";

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

test('should remove an expense by id', () => {
  const action = {
    type: REMOVE_EXPENSE,
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([
    expenses[0],
    expenses[2]
  ]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: REMOVE_EXPENSE,
    id: 'not an id'
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses);
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

test('should edit an expense by id', () => {
  const amount = 122000;
  const action = {
    type: EDIT_EXPENSE,
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
  const amount = 122000;
  const action = {
    type: EDIT_EXPENSE,
    id: 'not an id',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses);
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


test('should add a new expense', () => {
  const expense = {
    id: '4',
    desc: 'A new laptop',
    note: '',
    amount: 150000,
    createdAt: moment(0).add(2, 'days').valueOf()
  };
  const action = {
    type: ADD_EXPENSE,
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    expense
  ]);
});

