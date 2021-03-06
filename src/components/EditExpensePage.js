import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <h1 className="title-text">Add New Expense</h1>
      <ExpenseForm
        expense={props.expense}
        onFormSubmit={(expense) => {
          console.log(expense);
          props.dispatch(editExpense(props.expense.id,{...expense}));
          props.history.push('/');
        }}
      />
  
      <button
        type="button"
        onClick={() => {
          props.dispatch(removeExpense({id: props.expense.id}));
          props.history.push('/');
        }}
        className="btn btn-danger"
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);