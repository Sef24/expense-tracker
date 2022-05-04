import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  return (
    <div>
      <ExpenseForm onSaveExpenseData />
    </div>
  );
}

export default NewExpense;
