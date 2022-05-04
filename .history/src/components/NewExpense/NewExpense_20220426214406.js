import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  const saveExpense = (expenseDataEntered) => {
    const expenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div>
      <ExpenseForm onSaveExpense={saveExpense} />
    </div>
  );
}

export default NewExpense;
