import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = 
  const year = props.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="expense-item">
      <div>{}</div>
      <div>Year</div>
      <div>Day</div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
