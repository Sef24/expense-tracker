import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
        <div>Date</div>
        <div className="expense-item_description">
            <h2>Car Insurance</h2>
            <div className="expense-item_price">$294</div>
        </div>
    </div>
  )
}

export default ExpenseItem