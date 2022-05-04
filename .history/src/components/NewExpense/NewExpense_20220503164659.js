import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div
      className="flex w-full p-4 mt-10 items-center justify-center border-2 
      bg-gradient-to-r from-slate-800 to-slate-900 ... px-10"
    >
      {!isEditing && (
        <button
          onClick={startEditingHandler}
          className="flex items-center justify-center border-2 p-4 rounded-lg text-slate-50
          cursor-pointer transition duration-100 transform hover:scale-75 hover:text-white"
        >
          Add Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
