import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../../shared/testExpensesArr';

test('should render ExpenseListItem correctly', () => {
  const key = expenses[0].id;
  const wrapper = shallow(<ExpenseListItem key={key} {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});