import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseData = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = "294.00";
  return (
    <div className="expense-item">
      <div>{expenseData.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
