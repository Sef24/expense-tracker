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
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-700 ... p-6 m-4 rounded-xl"
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
          className="p-2 ml-4 border-transparent rounded-full border-0 
          bg-gradient-to-r from-green-400 to-blue-500 
          hover:from-pink-500 hover:to-yellow-500 ...
          active:opacity-75"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
