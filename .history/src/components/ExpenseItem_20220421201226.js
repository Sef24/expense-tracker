import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
    const expenseData = new Date(2021,2,28);
    const expenseTitle = "Car Insurance";
    const expenseAmount = "$294.00";
  return (
    <div className="expense-item">
        <div>Date</div>
        <div className="expense-item_description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">$294</div>
        </div>
    </div>
  )
}

export default ExpenseItem