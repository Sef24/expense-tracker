import React from "react";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="text-white font-light text-xl flex items-center justify-center">
        Tap "Add Expense" to get started
      </h2>
    );
  }

  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
