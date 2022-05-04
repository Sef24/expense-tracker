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
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center pt-4 m-3">
        <div className="text-semibold">Title</div>
        <input
          className="border-2 mr-4 ml-2"
          type="text"
          onChange={handleTitleChange}
          value={titleHandler}
        />

        <div>Amount</div>
        <input
          className="border-2 mr-4 ml-2"
          type="number"
          min="0.01"
          step="0.01"
          onChange={handleAmountChange}
          value={amountHandler}
        />

        <div>Date:</div>
        <input
          className="border-2 mr-4 ml-2"
          type="date"
          onChange={handleDateChange}
          value={dateHandler}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="border-2 p-2 rounded-full bg-sky-500 text-white"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
