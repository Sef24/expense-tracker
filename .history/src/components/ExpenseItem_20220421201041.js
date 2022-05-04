import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
    const expenseData = new Date(2021,2,28);
    const expenseTitle = "Car Insurance";
    const expenseAmount = "$294";
  return (
    <div className="expense-item">
        <div>Date</div>
        <div className="expense-item_description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">$294</div>
        </div>
    </div>
  )
}

export default ExpenseItem