import moment from 'moment';
// Get visible expenses

export default (expenses, {
  text, sortBy, sortMode, startDate, endDate
}) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());
    
    // Returns a sorted version of the expenses array
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortMode === 'hi2lo') {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else {
        return a.amount < b.amount ? 1 : -1;
      }
    } else {
      if (sortBy === 'date') {
        return a.createdAt > b.createdAt ? 1 : -1;
      } else {
        return a.amount > b.amount ? 1 : -1;
      }
    }
  });
};
