import {
  SET_END_DATE,
  SET_SORT_MODE,
  SET_START_DATE,
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE
} from "../shared/types";
import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  sortMode: 'hi2lo',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
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
        sortMode: action.sortMode
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
