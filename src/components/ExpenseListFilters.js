import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setEndDate, setSortMode, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../actions/filters';

// import selectExpenses from '../selectors/expenses';

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };
  
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  
  render() {
    return (
      <div>
        {/* Text Filter Input*/}
        <input type="text" value={this.props.filters.text} onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value));
        }}/>
        {/* Sort Type Toggle Button*/}
        <select
          value={this.props.filters.sortBy}
          onChange={
            (e) => {
              this.props.dispatch(setSortMode('hi2lo'));
              if (e.target.value === 'date') {
                this.props.dispatch(sortByDate());
              } else {
                this.props.dispatch(sortByAmount());
              }
            }
          }
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        
        {/* Sort Mode Toggle Button*/}
        
        <select
          value={this.props.filters.sortMode}
          onChange={(e) => this.props.dispatch(setSortMode(e.target.value))}
        >
          <option value="hi2lo">{this.props.filters.sortBy === 'date' ? 'Newest' : 'High to Low'}</option>
          <option value="lo2hi">{this.props.filters.sortBy === 'date' ? 'Oldest' : 'Low to High'}</option>
        </select>
        <br/>
        
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="start_date_input"
          endDate={this.props.filters.endDate}
          startDateId="end_date_input"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          showClearDates={true}
          onFocusChange={
            focused => this.setState(() => ({
              calendarFocused: focused
            }))
          }
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);