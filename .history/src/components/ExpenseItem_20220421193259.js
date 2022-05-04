import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="flex justify-between items-center p-8 mt-16 rounded-xl bg-gray-700 ">
        <div>Date</div>
        <div>
            <h2>Car Insurance</h2>
            <div>$294</div>
        </div>
    </div>
  )
}

export default ExpenseItem