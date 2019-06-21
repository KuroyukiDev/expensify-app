console.log('app.js is running!');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// App Routes
import AppRoutes from './routers/AppRouter';
// Store
import configureStore from './store/configureStore';
// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);