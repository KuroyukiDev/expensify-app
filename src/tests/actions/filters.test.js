import moment from 'moment';
import {
  SET_END_DATE, SET_SORT_MODE, 
  SET_START_DATE, SORT_BY_DATE, 
  SORT_BY_AMOUNT, SET_TEXT_FILTER
} from '../../shared/types';
import {
  setEndDate, setStartDate, 
  setSortMode, sortByAmount, 
  sortByDate, setTextFilter
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: SET_START_DATE,
    startDate: moment(0)
  });
});

test('should generate set start date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: SET_END_DATE,
    endDate: moment(0)
  });
});

test('should generate set text filter object with text value', () => {
  const action = setTextFilter('Rent');
  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    text: 'Rent'
  });
});

test('should generate set text filter object without a provided text value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    text: ''
  });
});

test('should generate set sort mode filter object with text value', () => {
  const action = setSortMode('lo2hi');
  expect(action).toEqual({
    type: SET_SORT_MODE,
    sortMode: 'lo2hi'
  });
});

test('should generate set sort mode filter object with default value', () => {
  const action = setSortMode();
  expect(action).toEqual({
    type: SET_SORT_MODE,
    sortMode: 'hi2lo'
  });
});

test('should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({
    type: SORT_BY_DATE
  });
});

test('should generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({
    type: SORT_BY_AMOUNT
  });
});