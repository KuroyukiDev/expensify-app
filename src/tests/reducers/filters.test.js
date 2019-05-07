import filtersReducer from '../../reducers/filters';
import {
  SET_END_DATE, SET_SORT_MODE,
  SET_START_DATE, SORT_BY_DATE,
  SORT_BY_AMOUNT, SET_TEXT_FILTER
} from '../../shared/types';
import moment from "moment";

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    sortMode: 'hi2lo'
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: SORT_BY_AMOUNT });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
    sortMode: 'hi2lo'
  };
  const action = { type: SORT_BY_DATE };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'this is my filter';
  const action = {
    type: SET_TEXT_FILTER,
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  const startDate = moment(0);
  const action = {
    type: SET_START_DATE,
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment(0);
  const action = {
    type: SET_END_DATE,
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});

test('should set sortMode filter to "lo2hi"', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    sortMode: 'hi2lo'
  };
  const action = { type: SET_SORT_MODE, sortMode: 'lo2hi' };
  const state = filtersReducer(currentState, action);
  expect(state.sortMode).toBe('lo2hi');
});

test('should set sortMode to "hi2lo"', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    sortMode: 'lo2hi'
  };
  const action = { type: SET_SORT_MODE, sortMode: 'hi2lo' };
  const state = filtersReducer(currentState, action);
  expect(state.sortMode).toBe('hi2lo');
});