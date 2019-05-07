import selectExpenses from '../../selectors/expenses';
import expenses from '../../shared/testExpensesArr';
import moment from 'moment';

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    sortMode: 'hi2lo'
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[2],
    expenses[1]
  ])
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined,
    sortMode: 'hi2lo'
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[2],
    expenses[0]
  ])
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days'),
    sortMode: 'hi2lo'
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[0],
    expenses[1]
  ])
});

test('should sort by date with sortMode of "hi2lo"', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    sortMode: 'hi2lo'
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[2],
    expenses[0],
    expenses[1]
  ])
});

test('should sort by date with sortMode of "lo2hi"', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    sortMode: 'lo2hi'
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[1],
    expenses[0],
    expenses[2]
  ])
});

test('should sort by amount with sortMode of "hi2lo"', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
    sortMode: 'hi2lo'
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[1],
    expenses[2],
    expenses[0]
  ])
});

test('should sort by amount with sortMode of "lo2hi"', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
    sortMode: 'lo2hi'
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[0],
    expenses[2],
    expenses[1]
  ])
});