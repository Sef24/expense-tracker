import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [titleHandler, setTitleHandler] = useState("");
  const [amountHandler, setAmountHandler] = useState("");
  const [dateHandler, setDateHandler] = useState("");

  const handleTitleChange = (event) => {
    setTitleHandler(event.target.value);
  };

  const handleAmountChange = (event) => {};

  const handleDateChange = (event) => {};

  return (
    <form>
      <div className="flex justify-center pt-4 m-3">
        <div>Title</div>
        <input
          className="border-2 mr-4 ml-2"
          type="text"
          onChange={handleTitleChange}
        />

        <div>Amount</div>
        <input
          className="border-2 mr-4 ml-2"
          type="number"
          min="0.01"
          step="0.01"
          onChange={handleAmountChange}
        />

        <div>Date:</div>
        <input
          className="border-2 mr-4 ml-2"
          type="date"
          onChange={handleDateChange}
        />
      </div>
      <div className="flex justify-center">
        <button className="border-2 p-2 rounded-full bg-sky-500 text-white">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
