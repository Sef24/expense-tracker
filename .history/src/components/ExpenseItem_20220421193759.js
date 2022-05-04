import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="flex justify-between items-center p-8 mt-16 rounded-xl bg-gray-700 ">
        <div>Date</div>
        <div className="flex col-auto gap-4 justify-end flex-col-reverse">
            <h2>Car Insurance</h2>
            <div className="text-base">$294</div>
        </div>
    </div>
  )
}

export default ExpenseItem