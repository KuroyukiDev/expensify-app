import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <h4 className="title-text">
          No expenses created yet.
        </h4>
      ) : (
        props.expenses.map((
          expense) => (
          <ExpenseListItem
            key={expense.id}
            {...expense}
          />
        ))
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);