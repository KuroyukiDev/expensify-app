
// SET_TEXT_FILTER
import {
  SET_END_DATE,
  SET_SORT_MODE,
  SET_START_DATE,
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE
} from "../shared/types";

export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: SET_END_DATE,
  endDate
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: SET_START_DATE,
  startDate
});

// SET_SORT_MODE
export const setSortMode = (sortMode = 'hi2lo') => ({
  type: SET_SORT_MODE,
  sortMode
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: SORT_BY_DATE
});
