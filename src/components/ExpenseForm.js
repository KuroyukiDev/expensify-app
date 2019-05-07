import React, {Component} from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
now.locale('ja');
console.log(now.format('YYYY年 MMM Do (ddd)'));

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      desc: props.expense ? props.expense.desc : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: undefined
    };
  }
  
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }));
    }
  };
  
  onDescChange = (e) => {
    const desc = e.target.value;
    this.setState(() => ({
      desc
    }));
  };
  
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };
  
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({
        createdAt
      }));
    }
  };
  
  onFocusChange = ({ focused: calendarFocused }) => {
    this.setState(() => ({
      calendarFocused
    }));
  };
  
  onEnterPress = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      let note = e.target.value;
      this.setState(() => ({
        note
      }));
    } else if(e.keyCode === 13 && e.shiftKey === true) {
      this.onSubmit(e);
    }
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.desc || !this.state.amount) {
      // Set error state equal to:
      // 'Please provide description and amount'
      this.setState(() => ({
        error: 'Please provide description and amount.'
      }));
      
    } else {
      // Clear the error
      this.setState(() => ({
        error: undefined
      }));
      console.log('Submitted!');
      this.props.onFormSubmit({
        desc: this.state.desc,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  
  render() {
    return (
      <div>
        {
          this.state.error && (
            <h4 style={{color: 'red'}}>
              <em>
                { this.state.error }
              </em>
            </h4>
          )
        }
        
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-xs-8 form-group">
              <input
                className="form-control input-lg"
                type="text"
                placeholder="Description"
                autoFocus
                value={this.state.desc}
                onChange={this.onDescChange}
              />
            </div>
            <div className="col-xs-4 form-group">
              <input
                className="form-control input-lg"
                type="text"
                placeholder="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1">
              
            </div>
            <div className="col-xs-6">
              <h4 className="text-left">
                Set Date:
              </h4>
              <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                // orientation="vertical"
              />
              <br/>
            </div>
            <div className="col-xs-5">
              
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <textarea
                className="form-control input-lg"
                cols={35}
                rows={5}
                placeholder="Add a note for your expense (optional)"
                value={this.state.note}
                onKeyDown={this.onEnterPress}
                onChange={this.onNoteChange}
              />
            </div>
          </div>
          <br/>
          <br/>
          <button>
            Add Expense
          </button>
        </form>
        
        ExpenseForm
        
      </div>
    );
  }
}

export default ExpenseForm;