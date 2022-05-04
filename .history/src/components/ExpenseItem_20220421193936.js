import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
        <div>Date</div>
        <div className="flex col-auto gap-4 justify-end flex-col-reverse flex-1">
            <h2>Car Insurance</h2>
            <div className="text-base flex-1 m-">$294</div>
        </div>
    </div>
  )
}

export default ExpenseItem