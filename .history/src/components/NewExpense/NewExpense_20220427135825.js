import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  const addSaveExpense = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
  };
  return (
    <div>
      <ExpenseForm onSaveExpenses={addSaveExpense} />
    </div>
  );
}

export default NewExpense;
