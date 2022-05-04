import React from "react";

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;
  if (props.expenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
};

export default ExpensesList;
