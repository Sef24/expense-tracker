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
      className="bg-gradient-to-r from-slate-800 to-slate-900 ... p-6 m-4 rounded-xl"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-center pt-4 m-3">
        <div className="font-bold text-slate-100 text-xl mr-1 mt-1">Title</div>
        <input
          className="border-2 mr-4 ml-2 rounded-md p-1 hover:bg-slate-50 active:bg-slate-50 "
          type="text"
          onChange={handleTitleChange}
          value={titleHandler}
        />

        <div className="font-bold text-slate-100 text-xl mr-1 mt-1">Amount</div>
        <input
          className="border-2 mr-4 ml-2 rounded-md p-1 hover:bg-slate-50 active:bg-slate-50"
          type="number"
          min="0.01"
          step="0.01"
          onChange={handleAmountChange}
          value={amountHandler}
        />

        <div className="font-bold text-slate-100 text-xl mr-1 mt-1">Date:</div>
        <input
          className="border-2 mr-4 ml-2 rounded-md p-1 hover:bg-slate-50 active:bg-slate-50"
          type="date"
          onChange={handleDateChange}
          value={dateHandler}
        />
      </div>
      <div className="block space-x-10 items-center justify-center ">
        <button
          type="submit"
          className="p-2 mt-4 px-10 border-3 border-solid rounded-lg shadow-md 
          bg-gradient-to-r from-green-400 to-blue-500 
          hover:from-pink-500 hover:to-yellow-500 ...
          active:opacity-75"
        >
          Add Item
        </button>
        <button
          type="button"
          onClick={props.onCancel}
          className="p-2 mt-4 px-10 border-3 border-solid rounded-lg shadow-md 
          bg-gradient-to-r from-green-400 to-blue-500 
          hover:from-pink-500 hover:to-yellow-500 ...
          active:opacity-75"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
