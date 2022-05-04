import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="flex">
        <div>Date</div>
        <div>
            <h2>Car Insurance</h2>
            <div>$294</div>
        </div>
    </div>
  )
}

export default ExpenseItem