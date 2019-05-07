import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id, desc, note, amount, createdAt}) => (
  
  <Link style={{textDecoration: 'none', color: 'black'}} to={`/edit/${id}`}>
    <div className="expense-list-item">
      <h4>Desc: {desc}</h4>
      <h5>Amount: {amount}</h5>
      <p>
        <strong>Note:</strong> <br/>
        {note}
      </p>
      <p> Created: {createdAt}</p>
      <br/>
      <hr/>
    </div>
  </Link>
);

export default ExpenseListItem;