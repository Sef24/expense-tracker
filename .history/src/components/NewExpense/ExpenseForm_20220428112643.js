import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [titleHandler, setTitleHandler] = useState("");
  const [amountHandler, setAmountHandler] = useState("");
  const [dateHandler, setDateHandler] = useState("");

  const handleTitleChange = (event) => {
    setTitleHandler(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmountHandler(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateHandler(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleHandler,
      amount: amountHandler,
      date: new Date(dateHandler),
    };
    props.onSaveExpenseData(expenseData);
    setTitleHandler("");
    setAmountHandler("");
    setDateHandler("");
  };

  return (
    <form
      className="bg-gradient-to-r from-slate-600 ... p-20"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-center pt-4 m-3">
        <div className="font-bold">Title</div>
        <input
          className="border-2 mr-4 ml-2 rounded-md p-1"
          type="text"
          onChange={handleTitleChange}
          value={titleHandler}
        />

        <div className="font-bold">Amount</div>
        <input
          className="border-2 mr-4 ml-2 rounded-md p-1"
          type="number"
          min="0.01"
          step="0.01"
          onChange={handleAmountChange}
          value={amountHandler}
        />

        <div className="font-bold">Date:</div>
        <input
          className="border-2 mr-4 ml-2 rounded-md p-1"
          type="date"
          onChange={handleDateChange}
          value={dateHandler}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="border-2 p-2 rounded-full bg-sky-500 text-white
          hover:bg-sky-600 transition delay-150 duration-300 ease-in-out ...
           focus:outline-none drop-shadow-lg"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
