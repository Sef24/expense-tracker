import React from "react";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;
  if(props.items.length === 0) {
      return <h2>Found no expenses...</h2>
  }
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
  ));</ul>;
};)

export default ExpensesList;
