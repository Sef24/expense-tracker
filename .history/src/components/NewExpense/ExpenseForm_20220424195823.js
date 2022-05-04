import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseFormData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseFormData);
    setEnteredAmount(" ");
    setEnteredTitle(" ");
    setEnteredDate(" ");
  };

  return (
    <form className="flex items-center justify-evenly" onSubmit={submitHandler}>
      <div className="w-full flex-wrap justify-between border-4 bg-slate-200 gap-1">
        <label>Title</label>
        <input
          type="text"
          className="border-2 rounded-md ml-2"
          onChange={titleChangeHandler}
          value={enteredTitle}
        />

        <label className="pl-2">Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="border-2 rounded-md ml-2"
          onChange={amountChangeHandler}
          value={enteredAmount}
        />

        <label className="pl-2">Date:</label>
        <input
          type="date"
          className="border-2 rounded-md ml-2"
          onChange={dateChangeHandler}
          value={enteredDate}
        />

        <div className="flex items-center justify-center">
          <button className="border-2 p-2 mt-2 rounded-full bg-sky-500 border-sky-500 hover:bg-sky-600">
            Enter Expenses
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
