import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  const saveExpense = (expenseDataEntered) => {
    const expenseData = {
      ...expenseDataEntered,
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
