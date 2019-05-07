import {createStore} from "redux";

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const SET = 'SET';

// Action generators - Functions that return action objects

const incCount = ({ incBy = 1 } = {}) => ({
  type: INCREMENT,
  incBy
});

const decCount = ({ decBy = 1} = {}) => ({
  type: DECREMENT,
  decBy
});

const setCount = ({ count }) => ({
  type: SET,
  count
});

const resetCount = () => ({
  type: RESET
});

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.incBy
      };
    case DECREMENT:
      return {
        count: state.count - action.decBy
      };
    case RESET:
      return {
        count: 0
      };
    case SET:
      return {
        count: action.count
      };
    default:
      return state;
  }
  
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(incCount({ incBy: 5 }));

store.dispatch(incCount());

store.dispatch(resetCount());

store.dispatch(decCount());

store.dispatch(decCount({ decBy: 10 }));

store.dispatch(decCount());

store.dispatch(setCount({ count: 27 }));

// console.log(store.getState());