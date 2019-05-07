console.log('app.js is running!');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// App Routes
import AppRoutes from './routers/AppRouter';
// Store
import configureStore from './store/configureStore';
// Action Generators
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
// Selectors
import getVisibleExpenses from './selectors/expenses';
// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
  desc: 'Water bill',
  note: 'My water bill for this month',
  amount: 7800,
  createdAt: 100
}));

store.dispatch(addExpense({
  desc: 'Gas bill',
  note: 'My gas bill for this month',
  amount: 4500,
  createdAt: 100
}));

store.dispatch(addExpense({
  desc: 'Rent',
  note: 'My portion of the rent for this month',
  amount: 85000,
  createdAt: 145
}));

store.dispatch(addExpense({
  desc: 'Venti Ultra Carmel Frappuccino',
  note: 'Bought this at school before class',
  amount: 575,
  createdAt: 225
}));

store.dispatch(addExpense({
  desc: 'Venti Green Tea Frappuccino',
  note: 'Bought this at school during my Friday class',
  amount: 525,
  createdAt: 239
}));

// store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);