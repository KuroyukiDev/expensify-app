import moment from 'moment';
export default [
  { // Ground Zero (AKA "Present") / Cheapskate! (笑) (AKA "lowest")
    id: '1',
    desc: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment(0)
  },
  { // Past (AKA "Oldest") / Highest Cost
    id: '2',
    desc: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  { // Future (AKA "Newest") / Middle Cost
    id: '3',
    desc: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];