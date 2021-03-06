import uuid from 'uuid';
import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  REMOVE_EXPENSE
} from '../shared/types';

// ADD_EXPENSE
export const addExpense = (
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
export const removeExpense = ({ id } = {}) => ({
  type: REMOVE_EXPENSE,
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});
