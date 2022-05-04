import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const addSaveExpense = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.OnAddExpense(expenseData);
  };

  return (
    <div>
      <ExpenseForm onSaveExpenses={addSaveExpense} />
    </div>
  );
}

export default NewExpense;
