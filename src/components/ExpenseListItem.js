import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, desc, note, amount, createdAt}) => (
  
  <Link style={{textDecoration: 'none'}} to={`/edit/${id}`}>
    <div className="expense-list-item--text-content">
      <h4>Desc: {desc}</h4>
      <h5>
        Amount: {numeral(amount / 100).format('$0,0.00')}
      </h5>
      <p>
        <strong>Note:</strong> <br/>
        {note}
      </p>
      <p>
        Created: {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
      <br/>
      <hr/>
    </div>
  </Link>
);

export default ExpenseListItem;