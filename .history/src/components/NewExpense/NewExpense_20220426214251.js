import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  const saveExpense = (expenseDataEntered) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
  };
  return (
    <div>
      <ExpenseForm onSaveExpense={saveExpense} />
    </div>
  );
}

export default NewExpense;
